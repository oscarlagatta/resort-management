import {createClient} from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6d3Rrenlxc2dhcHdhd2F3YWJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyMDkxOTgsImV4cCI6MjAyODc4NTE5OH0.41Pf53B87fqD9U35S_saM_In8fv9JU0zAJHgXRguZwc';
export const supabaseUrl = 'https://uzwtkzyqsgapwawawabh.supabase.co';

const supabase =
    createClient(supabaseUrl, supabaseKey);
export default supabase;