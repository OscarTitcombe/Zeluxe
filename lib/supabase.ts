import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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