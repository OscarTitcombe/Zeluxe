import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a fallback client for when environment variables are not available
let supabase: any = null

try {
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  } else {
    // Create a mock client for build time
    supabase = {
      from: () => ({
        select: () => Promise.resolve({ data: [], error: null }),
        insert: () => Promise.resolve({ data: null, error: null }),
        update: () => Promise.resolve({ data: null, error: null }),
        delete: () => Promise.resolve({ data: null, error: null })
      })
    }
  }
} catch (error) {
  console.warn('Supabase client initialization failed:', error)
  // Create a mock client as fallback
  supabase = {
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      insert: () => Promise.resolve({ data: null, error: null }),
      update: () => Promise.resolve({ data: null, error: null }),
      delete: () => Promise.resolve({ data: null, error: null })
    })
  }
}

export { supabase }

// Types for quiz data - updated to match actual quiz structure
export interface QuizResponse {
  id: number
  timestamp: string
  gender: string
  age_group: string
  occasion: string
  scent_preference: string
  intensity: string
  weather: string
  avoid_scents: string[]
  longevity: string
  budget: string
  brand_preference: string
}

export interface FragranceInsights {
  total_responses: number
  gender_distribution: { gender: string; count: number }[]
  occasion_distribution: { occasion: string; count: number }[]
  scent_preference_distribution: { preference: string; count: number }[]
  intensity_distribution: { intensity: string; count: number }[]
  weather_distribution: { weather: string; count: number }[]
  avoid_scents_distribution: { scent: string; count: number }[]
  longevity_distribution: { longevity: string; count: number }[]
  budget_distribution: { budget: string; count: number }[]
  brand_preference_distribution: { brand: string; count: number }[]
  age_distribution: { age: string; count: number }[]
  country_distribution: { country: string; count: number }[]
} 