import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ftxhnhagxpmvafivabkc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0eGhuaGFneHBtdmFmaXZhYmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMzM3NzcsImV4cCI6MjAzOTkwOTc3N30.qzFW9hnRWbtITKuWTrBHarnsiUDIN3Ihsg2SSuXYdr4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
