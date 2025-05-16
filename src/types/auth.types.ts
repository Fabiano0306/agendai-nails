
import { Session, User } from "@supabase/supabase-js";

export interface ProfileData {
  id: string;
  full_name: string;
  user_type: "professional" | "client";
  phone_number?: string;
  bio?: string;
  profile_image_url?: string;
}

export interface AuthContextType {
  session: Session | null;
  user: User | null;
  profile: ProfileData | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, userData: {
    full_name: string;
    user_type: "professional" | "client";
    phone_number?: string;
  }) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  userLoading: boolean;
}
