// /supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zoskndtixzgijhmrxwua.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvc2tuZHRpeHpnaWpobXJ4d3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3NTk1MjcsImV4cCI6MjA0NDMzNTUyN30.e-eIAuyHi8HFMQJIt74O5ZWWRCl85qBpOEFXv03HZC0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
