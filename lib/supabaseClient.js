import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "";
const supabaseKey =
  "";

export const supabase = createClient(supabaseUrl, supabaseKey);

//(!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
