
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { AuthContextType, ProfileData } from "@/types/auth.types";
import { useProfileFetch } from "@/hooks/useProfileFetch";
import { signInWithEmail, signUpWithEmail, signOutUser } from "@/services/authService";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { fetchUserProfile } = useProfileFetch();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        if (currentSession?.user) {
          // Use setTimeout to prevent deadlocks
          setTimeout(() => {
            fetchAndSetUserProfile(currentSession.user.id);
          }, 0);
        } else {
          setProfile(null);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        fetchAndSetUserProfile(currentSession.user.id);
      }
      setUserLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);
  
  const fetchAndSetUserProfile = async (userId: string) => {
    const profileData = await fetchUserProfile(userId);
    if (profileData) {
      setProfile(profileData);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { data, error } = await signInWithEmail(email, password);

      if (error) {
        toast({
          variant: "destructive",
          title: "Erro ao entrar",
          description: error.message,
        });
        return;
      }

      if (data?.user) {
        const { data: profileData } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", data.user.id)
          .single();
          
        if (profileData) {
          const userType = profileData.user_type;
          
          if (userType === "professional") {
            navigate("/dashboard");
          } else {
            navigate("/agendamento");
          }
          
          toast({
            title: "Login realizado com sucesso!",
            description: "Bem-vindo de volta ao AgendAI Nails.",
          });
        }
      }
    } catch (error) {
      console.error("Error signing in:", error);
      toast({
        variant: "destructive",
        title: "Erro ao entrar",
        description: "Ocorreu um erro durante o login. Por favor, tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (
    email: string,
    password: string,
    userData: {
      full_name: string;
      user_type: "professional" | "client";
      phone_number?: string;
    }
  ) => {
    setLoading(true);
    try {
      const { data, error } = await signUpWithEmail(email, password, userData);

      if (error) {
        toast({
          variant: "destructive",
          title: "Erro ao criar conta",
          description: error.message,
        });
        return;
      }

      if (data?.user) {
        toast({
          title: "Conta criada com sucesso!",
          description: "Bem-vindo(a) ao AgendAI Nails.",
        });
        
        if (userData.user_type === "professional") {
          navigate("/dashboard");
        } else {
          navigate("/agendamento");
        }
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast({
        variant: "destructive",
        title: "Erro ao criar conta",
        description: "Ocorreu um erro durante o cadastro. Por favor, tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await signOutUser();
      
      // Force page reload for a clean state
      window.location.href = "/";
      
      toast({
        title: "Logout realizado com sucesso",
        description: "Esperamos te ver em breve!",
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        variant: "destructive",
        title: "Erro ao sair",
        description: "Ocorreu um erro ao fazer logout. Por favor, tente novamente.",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        profile,
        signIn,
        signUp,
        signOut,
        loading,
        userLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
