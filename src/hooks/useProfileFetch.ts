
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { ProfileData } from "@/types/auth.types";

export const useProfileFetch = () => {
  const [profileLoading, setProfileLoading] = useState<boolean>(false);
  
  const fetchUserProfile = async (userId: string): Promise<ProfileData | null> => {
    setProfileLoading(true);
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();
        
      if (error) {
        console.error("Error fetching profile:", error);
        return null;
      }
      
      return data as ProfileData;
    } catch (error) {
      console.error("Error in fetchUserProfile:", error);
      return null;
    } finally {
      setProfileLoading(false);
    }
  };

  return { fetchUserProfile, profileLoading };
};
