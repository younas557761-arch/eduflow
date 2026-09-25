import { createClient } from "./supabase";

export async function signOut() {
  const supabase = createClient();
  return supabase.auth.signOut();
}
