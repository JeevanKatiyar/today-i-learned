import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ourdmwjlsinoyisztvmu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91cmRtd2psc2lub3lpc3p0dm11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3ODQ1NzcsImV4cCI6MjAyNzM2MDU3N30.QwpBG4QVhbUN9JoHBsdF4ynhu7cAKpL7I2kL3XmPkag";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
