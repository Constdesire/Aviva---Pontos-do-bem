import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iuygfkrltdurncqxrufm.supabase.co';
const supabaseAnonKey = 'sb_publishable_5_ZF9dD6DGKS6ebFF3L5zg_d_0xUACF';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false, // Necessário para o React Native
  },
});