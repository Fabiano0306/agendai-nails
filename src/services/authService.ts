
import { supabase } from "@/integrations/supabase/client";
import { cleanupAuthState } from "@/utils/authUtils";

export const signInWithEmail = async (email: string, password: string) => {
  // Clean up existing state
  cleanupAuthState();
  
  // Attempt global sign out first
  try {
    await supabase.auth.signOut({ scope: 'global' });
  } catch (err) {
    // Continue even if this fails
  }
  
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const signUpWithEmail = async (
  email: string,
  password: string,
  userData: {
    full_name: string;
    user_type: "professional" | "client";
    phone_number?: string;
  }
) => {
  // Clean up existing state
  cleanupAuthState();
  
  // Attempt global sign out first
  try {
    await supabase.auth.signOut({ scope: 'global' });
  } catch (err) {
    // Continue even if this fails
  }
  
  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData,
    },
  });
};

export const signOutUser = async () => {
  // Clean up auth state
  cleanupAuthState();
  
  // Attempt global sign out
  return supabase.auth.signOut({ scope: 'global' });
};

export const getCurrentSession = async () => {
  return supabase.auth.getSession();
};
