import { supabase, QuizResponse, FragranceInsights } from './supabase'

export async function fetchQuizData(): Promise<QuizResponse[]> {
  try {
    console.log('🔍 Fetching quiz data from Supabase...')
    
    let allData: any[] = []
    let page = 0
    const pageSize = 1000
    let hasMore = true
    
    // Fetch data in chunks to get ALL records
    while (hasMore) {
      console.log(`📄 Fetching page ${page + 1} (${page * pageSize} to ${(page + 1) * pageSize})...`)
      
      const { data, error } = await supabase
        .from('quiz_responses')
        .select('*')
        .order('timestamp', { ascending: false })
        .range(page * pageSize, (page + 1) * pageSize - 1)
      
      if (error) {
        console.error(`❌ Error fetching page ${page + 1}:`, error.message)
        break
      }
      
      if (data && data.length > 0) {
        allData = [...allData, ...data]
        console.log(`✅ Page ${page + 1}: Got ${data.length} records`)
        
        // If we got less than pageSize, we've reached the end
        if (data.length < pageSize) {
          hasMore = false
        } else {
          page++
        }
      } else {
        console.log(`✅ Page ${page + 1}: No more data`)
        hasMore = false
      }
    }

    console.log('✅ Total fetched quiz data:', allData.length, 'responses')
    console.log('📊 Sample data:', allData[0] || 'No data found')
    
    if (allData.length > 0) {
      console.log('🔍 Data structure check:')
      console.log('- First record keys:', Object.keys(allData[0]))
      console.log('- Sample record:', allData[0])
    }
    
    return allData
  } catch (error) {
    console.error('❌ Error in fetchQuizData:', error)
    return []
  }
}

// Flexible data processor that can handle different field names
export function processQuizData(data: any[]): FragranceInsights {
  console.log('🔄 Processing quiz data...')
  console.log('📊 Raw data length:', data.length)
  
  if (data.length === 0) {
    console.log('⚠️ No data to process')
    return {
      total_responses: 0,
      gender_distribution: [],
      occasion_distribution: [],
      scent_preference_distribution: [],
      intensity_distribution: [],
      weather_distribution: [],
      avoid_scents_distribution: [],
      longevity_distribution: [],
      budget_distribution: [],
      brand_preference_distribution: [],
      age_distribution: [],
      country_distribution: []
    }
  }

  const total_responses = data.length
  console.log('📈 Total responses:', total_responses)

  // Helper function to safely get field value
  const getFieldValue = (item: any, possibleFields: string[]) => {
    for (const field of possibleFields) {
      if (item[field] !== undefined) {
        return item[field]
      }
    }
    return null
  }

  // Helper function to process array fields
  function processArrayField(data: any[], fieldNames: string[]): string[] {
    const allValues: string[] = []
    
    for (const record of data) {
      const fieldValue = getFieldValue(record, fieldNames)
      
      if (fieldValue) {
        // Handle different data formats
        if (Array.isArray(fieldValue)) {
          // Handle nested arrays (array of arrays)
          for (const item of fieldValue) {
            if (Array.isArray(item)) {
              // Nested array - flatten it
              allValues.push(...item.map(v => String(v)))
            } else {
              // Regular array
              allValues.push(String(item))
            }
          }
        } else if (typeof fieldValue === 'string') {
          // Check if it's a JSON string
          try {
            const parsed = JSON.parse(fieldValue)
            if (Array.isArray(parsed)) {
              // Handle nested arrays in JSON
              for (const item of parsed) {
                if (Array.isArray(item)) {
                  allValues.push(...item.map(v => String(v)))
                } else {
                  allValues.push(String(item))
                }
              }
            } else {
              // Regular string - check if it contains commas
              if (fieldValue.includes(',')) {
                // Split by comma and clean up
                const splitValues = fieldValue.split(',').map(v => v.trim())
                allValues.push(...splitValues)
              } else {
                // Single value
                allValues.push(fieldValue)
              }
            }
          } catch {
            // Not JSON - treat as regular string
            if (fieldValue.includes(',')) {
              // Split by comma and clean up
              const splitValues = fieldValue.split(',').map(v => v.trim())
              allValues.push(...splitValues)
            } else {
              // Single value
              allValues.push(fieldValue)
            }
          }
        } else {
          // Other types - convert to string
          allValues.push(String(fieldValue))
        }
      }
    }
    
    return allValues
  }

  // Gender distribution - try multiple possible field names
  const gender_distribution = Object.entries(
    data.reduce((acc, item) => {
      const gender = getFieldValue(item, ['gender', 'Gender', 'GENDER', 'sex', 'Sex', 'SEX'])
      if (gender) {
        acc[gender] = (acc[gender] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)
  ).map(([gender, count]) => ({ gender, count: count as number }))

  // Occasion distribution - handle as array
  const allOccasions = processArrayField(data, ['occasion', 'Occasion', 'OCCASION', 'when', 'When', 'WHEN', 'usage', 'Usage', 'USAGE'])
  const occasion_distribution = Object.entries(
    allOccasions.reduce((acc, occasion) => {
      acc[occasion] = (acc[occasion] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  ).map(([occasion, count]) => ({ occasion, count: count as number }))

  // Scent preference distribution - handle as array
  const allScentPreferences = processArrayField(data, ['scent_profile', 'ScentProfile', 'SCENT_PROFILE', 'scent_preference', 'ScentPreference', 'SCENT_PREFERENCE', 'scent', 'Scent', 'SCENT', 'preference', 'Preference', 'PREFERENCE'])
  const scent_preference_distribution = Object.entries(
    allScentPreferences.reduce((acc, preference) => {
      acc[preference] = (acc[preference] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  ).map(([preference, count]) => ({ preference, count: count as number }))

  // Intensity distribution - handle as array
  const allIntensities = processArrayField(data, ['intensity', 'Intensity', 'INTENSITY', 'strength', 'Strength', 'STRENGTH'])
  const intensity_distribution = Object.entries(
    allIntensities.reduce((acc, intensity) => {
      acc[intensity] = (acc[intensity] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  ).map(([intensity, count]) => ({ intensity, count: count as number }))

  // Weather distribution - handle as array
  const allWeathers = processArrayField(data, ['weather', 'Weather', 'WEATHER', 'season', 'Season', 'SEASON'])
  const weather_distribution = Object.entries(
    allWeathers.reduce((acc, weather) => {
      acc[weather] = (acc[weather] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  ).map(([weather, count]) => ({ weather, count: count as number }))

  // Avoid scents distribution - handle as array
  const allAvoidScents = processArrayField(data, ['avoidance', 'Avoidance', 'AVOIDANCE', 'avoid_scents', 'AvoidScents', 'AVOID_SCENTS', 'avoid', 'Avoid', 'AVOID'])
  const avoid_scents_distribution = Object.entries(
    allAvoidScents.reduce((acc, scent) => {
      acc[scent] = (acc[scent] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  ).map(([scent, count]) => ({ scent, count: count as number })).sort((a, b) => (b.count as number) - (a.count as number))

  // Longevity distribution - handle as array
  const allLongevities = processArrayField(data, ['longevity', 'Longevity', 'LONGEVITY', 'duration', 'Duration', 'DURATION'])
  const longevity_distribution = Object.entries(
    allLongevities.reduce((acc, longevity) => {
      acc[longevity] = (acc[longevity] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  ).map(([longevity, count]) => ({ longevity, count: count as number }))

  // Budget distribution - handle as array
  const allBudgets = processArrayField(data, ['budget', 'Budget', 'BUDGET', 'price', 'Price', 'PRICE', 'cost', 'Cost', 'COST'])
  const budget_distribution = Object.entries(
    allBudgets.reduce((acc, budget) => {
      acc[budget] = (acc[budget] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  ).map(([budget, count]) => ({ budget, count: count as number }))

  // Brand preference distribution - handle as array
  const allBrands = processArrayField(data, ['brand_preference', 'BrandPreference', 'BRAND_PREFERENCE', 'brand', 'Brand', 'BRAND'])
  const brand_preference_distribution = Object.entries(
    allBrands.reduce((acc, brand) => {
      acc[brand] = (acc[brand] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  ).map(([brand, count]) => ({ brand, count: count as number }))

  // Age distribution - handle as array
  const allAges = processArrayField(data, ['age_group', 'AgeGroup', 'AGE_GROUP', 'age', 'Age', 'AGE'])
  const age_distribution = Object.entries(
    allAges.reduce((acc, age) => {
      acc[age] = (acc[age] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  ).map(([age, count]) => ({ age, count: count as number }))

  // Country distribution - simple field (not array)
  const country_distribution = Object.entries(
    data.reduce((acc, item) => {
      const country = getFieldValue(item, ['user_country', 'UserCountry', 'USER_COUNTRY', 'country', 'Country', 'COUNTRY'])
      if (country) {
        acc[country] = (acc[country] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)
  )
    .map(([country, count]) => ({ country, count: count as number }))
    .sort((a, b) => (b.count as number) - (a.count as number))
    // Removed slice limit - now shows all countries

  console.log('📊 Processed distributions:')
  console.log('- Gender:', gender_distribution)
  console.log('- Occasion:', occasion_distribution)
  console.log('- Scent Preference:', scent_preference_distribution)
  console.log('- Budget:', budget_distribution)
  console.log('- Avoid Scents:', avoid_scents_distribution)
  console.log('- Intensity:', intensity_distribution)
  console.log('- Weather:', weather_distribution)
  console.log('- Longevity:', longevity_distribution)
  console.log('- Brand Preference:', brand_preference_distribution)
  console.log('- Age:', age_distribution)
  console.log('- Country:', country_distribution)
  
  // Debug individual field processing
  console.log('🔍 Field processing debug:')
  console.log('- All scent preferences:', allScentPreferences)
  console.log('- All avoid scents:', allAvoidScents)
  console.log('- Sample scent profile from first record:', getFieldValue(data[0], ['scent_profile', 'ScentProfile', 'SCENT_PROFILE']))
  console.log('- Sample avoidance from first record:', getFieldValue(data[0], ['avoidance', 'Avoidance', 'AVOIDANCE']))
  
  // Debug raw field values
  console.log('🔍 Raw field values debug:')
  const sampleScentProfile = getFieldValue(data[0], ['scent_profile', 'ScentProfile', 'SCENT_PROFILE'])
  const sampleAvoidance = getFieldValue(data[0], ['avoidance', 'Avoidance', 'AVOIDANCE'])
  console.log('- Raw scent profile type:', typeof sampleScentProfile)
  console.log('- Raw scent profile value:', sampleScentProfile)
  console.log('- Raw avoidance type:', typeof sampleAvoidance)
  console.log('- Raw avoidance value:', sampleAvoidance)
  
  // Debug processed distributions
  console.log('🔍 Processed distributions debug:')
  console.log('- Scent preference distribution:', scent_preference_distribution)
  console.log('- Avoid scents distribution:', avoid_scents_distribution)
  
  // Debug sample processing
  console.log('🔍 Sample processing debug:')
  const sampleRecord = data[0]
  const sampleAvoidanceValue = getFieldValue(sampleRecord, ['avoidance', 'Avoidance', 'AVOIDANCE'])
  console.log('- Sample avoidance value:', sampleAvoidanceValue)
  console.log('- Sample avoidance type:', typeof sampleAvoidanceValue)
  console.log('- Is array?', Array.isArray(sampleAvoidanceValue))
  if (Array.isArray(sampleAvoidanceValue)) {
    console.log('- Array length:', sampleAvoidanceValue.length)
    console.log('- First item type:', typeof sampleAvoidanceValue[0])
    console.log('- First item is array?', Array.isArray(sampleAvoidanceValue[0]))
    if (sampleAvoidanceValue[0] && Array.isArray(sampleAvoidanceValue[0])) {
      console.log('- Nested array content:', sampleAvoidanceValue[0])
    }
  }
  if (sampleAvoidanceValue && typeof sampleAvoidanceValue === 'string') {
    if (sampleAvoidanceValue.includes(',')) {
      const split = sampleAvoidanceValue.split(',').map(v => v.trim())
      console.log('- Split avoidance values:', split)
    }
  }

  return {
    total_responses,
    gender_distribution,
    occasion_distribution,
    scent_preference_distribution,
    intensity_distribution,
    weather_distribution,
    avoid_scents_distribution,
    longevity_distribution,
    budget_distribution,
    brand_preference_distribution,
    age_distribution,
    country_distribution
  }
}

// Helper function to get recent trends (last 30 days)
export function getRecentTrends(data: QuizResponse[]) {
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  
  const recentData = data.filter(item => 
    new Date(item.timestamp) > thirtyDaysAgo
  )

  return processQuizData(recentData)
}

// Helper function to get responses by date for time series
export function getResponsesByDate(data: QuizResponse[]) {
  const responsesByDate = data.reduce((acc, item) => {
    const date = new Date(item.timestamp).toLocaleDateString()
    acc[date] = (acc[date] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  return Object.entries(responsesByDate)
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(-7) // Last 7 days
}

// Helper function to format display names
export function formatDisplayName(key: string): string {
  const displayNames: Record<string, string> = {
    // Gender
    'for-men': 'Men',
    'for-women': 'Women', 
    'for-unisex': 'Unisex',
    'male': 'Men',
    'female': 'Women',
    'unisex': 'Unisex',
    
    // Occasion
    'daily-wear': 'Daily Wear',
    'office-use': 'Office Use',
    'evening-wear': 'Evening Wear',
    'special-event': 'Special Events',
    'sporty-fragrance': 'Sports',
    'daily': 'Daily Wear',
    'office': 'Office Use',
    'evening': 'Evening Wear',
    'special': 'Special Events',
    'sports': 'Sports',
    
    // Scent Preference
    'fresh-citrus': 'Fresh & Citrusy',
    'spicy-warm': 'Spicy & Warm',
    'woody-earthy': 'Woody & Earthy',
    'floral-scent': 'Floral',
    'sweet-gourmand': 'Sweet & Gourmand',
    'aquatic-clean': 'Clean & Aquatic',
    'fresh': 'Fresh & Citrusy',
    'spicy': 'Spicy & Warm',
    'woody': 'Woody & Earthy',
    'floral': 'Floral',
    'sweet': 'Sweet & Gourmand',
    'aquatic': 'Clean & Aquatic',
    
    // Intensity
    'light-intensity': 'Light & Subtle',
    'moderate-intensity': 'Moderate',
    'strong-intensity': 'Strong & Long-lasting',
    'light': 'Light & Subtle',
    'moderate': 'Moderate',
    'strong': 'Strong & Long-lasting',
    
    // Weather
    'warm-weather': 'Hot/Summer',
    'cold-weather': 'Cold/Winter',
    'all-season': 'All Seasons',
    'summer': 'Hot/Summer',
    'winter': 'Cold/Winter',
    'all': 'All Seasons',
    
    // Countries
    'US': 'United States',
    'USA': 'United States',
    'UK': 'United Kingdom',
    'GB': 'United Kingdom',
    'CA': 'Canada',
    'AU': 'Australia',
    'DE': 'Germany',
    'FR': 'France',
    'IT': 'Italy',
    'ES': 'Spain',
    'NL': 'Netherlands',
    'BE': 'Belgium',
    'SE': 'Sweden',
    'NO': 'Norway',
    'DK': 'Denmark',
    'FI': 'Finland',
    'CH': 'Switzerland',
    'AT': 'Austria',
    'PL': 'Poland',
    'CZ': 'Czech Republic',
    'HU': 'Hungary',
    'RO': 'Romania',
    'BG': 'Bulgaria',
    'HR': 'Croatia',
    'SI': 'Slovenia',
    'SK': 'Slovakia',
    'LT': 'Lithuania',
    'LV': 'Latvia',
    'EE': 'Estonia',
    'IE': 'Ireland',
    'PT': 'Portugal',
    'GR': 'Greece',
    'CY': 'Cyprus',
    'MT': 'Malta',
    'LU': 'Luxembourg',
    'IS': 'Iceland',
    'LI': 'Liechtenstein',
    'MC': 'Monaco',
    'AD': 'Andorra',
    'SM': 'San Marino',
    'VA': 'Vatican City',
    'JP': 'Japan',
    'KR': 'South Korea',
    'CN': 'China',
    'IN': 'India',
    'BR': 'Brazil',
    'MX': 'Mexico',
    'AR': 'Argentina',
    'CL': 'Chile',
    'CO': 'Colombia',
    'PE': 'Peru',
    'VE': 'Venezuela',
    'EC': 'Ecuador',
    'BO': 'Bolivia',
    'PY': 'Paraguay',
    'UY': 'Uruguay',
    'GY': 'Guyana',
    'SR': 'Suriname',
    'GF': 'French Guiana',
    'FK': 'Falkland Islands',
    'GS': 'South Georgia',
    'ZA': 'South Africa',
    'EG': 'Egypt',
    'NG': 'Nigeria',
    'KE': 'Kenya',
    'GH': 'Ghana',
    'UG': 'Uganda',
    'TZ': 'Tanzania',
    'ET': 'Ethiopia',
    'SD': 'Sudan',
    'DZ': 'Algeria',
    'MA': 'Morocco',
    'TN': 'Tunisia',
    'LY': 'Libya',
    'NE': 'Niger',
    'TD': 'Chad',
    'ML': 'Mali',
    'BF': 'Burkina Faso',
    'CI': 'Ivory Coast',
    'SN': 'Senegal',
    'GN': 'Guinea',
    'SL': 'Sierra Leone',
    'LR': 'Liberia',
    'TG': 'Togo',
    'BJ': 'Benin',
    'CM': 'Cameroon',
    'CF': 'Central African Republic',
    'CG': 'Republic of the Congo',
    'CD': 'Democratic Republic of the Congo',
    'GA': 'Gabon',
    'GQ': 'Equatorial Guinea',
    'ST': 'Sao Tome and Principe',
    'GW': 'Guinea-Bissau',
    'CV': 'Cape Verde',
    'GM': 'Gambia',
    'MR': 'Mauritania',
    'EH': 'Western Sahara',
    'DJ': 'Djibouti',
    'SO': 'Somalia',
    'ER': 'Eritrea',
    'SS': 'South Sudan'
  }
  
  return displayNames[key] || key
} 