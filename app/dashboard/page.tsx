'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  Scatter,
  ScatterChart,
  ZAxis
} from 'recharts'
import { fetchQuizData, processQuizData, getRecentTrends, getResponsesByDate, formatDisplayName } from '../../lib/quizData'
import { FragranceInsights } from '../../lib/supabase'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

// Sidebar Component
const Sidebar = ({ 
  timeFilter, 
  setTimeFilter, 
  genderFilter, 
  setGenderFilter,
  ageFilter,
  setAgeFilter,
  scentFilter,
  setScentFilter
}: {
  timeFilter: string
  setTimeFilter: (filter: string) => void
  genderFilter: string
  setGenderFilter: (filter: string) => void
  ageFilter: string
  setAgeFilter: (filter: string) => void
  scentFilter: string
  setScentFilter: (filter: string) => void
}) => (
  <aside className="w-64 bg-dark-800/50 backdrop-blur-sm border-r border-dark-700/50 h-screen fixed left-0 top-0 z-40">
    <div className="p-6">
      <div className="text-2xl font-bold gradient-text mb-8">Zeluxe</div>
      
      <nav className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-slate uppercase tracking-wider">Navigation</h3>
          <a href="/dashboard" className="flex items-center space-x-3 text-white hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-zeluxe-400 rounded-full"></span>
            <span>Dashboard</span>
          </a>
          <a href="/dashboard/market-trends" className="flex items-center space-x-3 text-slate hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-slate rounded-full"></span>
            <span>Market Trends</span>
          </a>
          <a href="/dashboard/competitor-analysis" className="flex items-center space-x-3 text-slate hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-slate rounded-full"></span>
            <span>Competitor Analysis</span>
          </a>
          <a href="/dashboard/consumer-insights" className="flex items-center space-x-3 text-slate hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-slate rounded-full"></span>
            <span>Consumer Insights</span>
          </a>
          <a href="/dashboard/forecasting" className="flex items-center space-x-3 text-slate hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-slate rounded-full"></span>
            <span>Forecasting</span>
          </a>
        </div>
        
        <div className="space-y-2 pt-6">
          <h3 className="text-xs font-semibold text-slate uppercase tracking-wider">Filters</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate mb-2 block">Time Range</label>
              <select 
                value={timeFilter} 
                onChange={(e) => setTimeFilter(e.target.value)}
                className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 text-white text-sm"
              >
                <option value="all">All Time</option>
                <option value="30">Last 30 Days</option>
                <option value="7">Last 7 Days</option>
                <option value="1">Last 24 Hours</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm text-slate mb-2 block">Gender</label>
              <select 
                value={genderFilter} 
                onChange={(e) => setGenderFilter(e.target.value)}
                className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 text-white text-sm"
              >
                <option value="all">All Genders</option>
                <option value="for-men">Men</option>
                <option value="for-women">Women</option>
                <option value="for-unisex">Unisex</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm text-slate mb-2 block">Age Group</label>
              <select 
                value={ageFilter} 
                onChange={(e) => setAgeFilter(e.target.value)}
                className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 text-white text-sm"
              >
                <option value="all">All Ages</option>
                <option value="age-under-25">Under 25</option>
                <option value="age-26-35">26–35</option>
                <option value="age-36-45">36–45</option>
                <option value="age-46-plus">46+</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-slate mb-2 block">Scent Preference</label>
              <select 
                value={scentFilter} 
                onChange={(e) => setScentFilter(e.target.value)}
                className="w-full bg-dark-700 border border-dark-600 rounded px-3 py-2 text-white text-sm"
              >
                <option value="all">All Scents</option>
                <option value="fresh-citrus">Fresh & Citrusy</option>
                <option value="spicy-warm">Spicy & Warm</option>
                <option value="woody-earthy">Woody & Earthy</option>
                <option value="floral-scent">Floral</option>
                <option value="sweet-gourmand">Sweet & Gourmand</option>
                <option value="aquatic-clean">Clean & Aquatic</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </aside>
)

// AI Insights Header
const AIInsightsHeader = ({ insights }: { insights: FragranceInsights | null }) => {
  if (!insights) return null

  const topScent = insights.scent_preference_distribution[0]
  const topOccasion = insights.occasion_distribution[0]
  const totalResponses = insights.total_responses
  const topGender = insights.gender_distribution[0]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass-card p-6 mb-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Fragrance Quiz Insights</h1>
          <p className="text-slate">Real-time analysis of fragrance preferences from quiz responses</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-400">Live</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
        >
          <div className="text-2xl font-bold gradient-text">{totalResponses}</div>
          <div className="text-sm text-slate">Total Responses</div>
        </motion.div>
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
        >
          <div className="text-2xl font-bold gradient-text">{formatDisplayName(topScent?.preference || 'N/A')}</div>
          <div className="text-sm text-slate">Top Scent Preference</div>
        </motion.div>
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
        >
          <div className="text-2xl font-bold gradient-text">{formatDisplayName(topOccasion?.occasion || 'N/A')}</div>
          <div className="text-sm text-slate">Most Popular Occasion</div>
        </motion.div>
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
        >
          <div className="text-2xl font-bold gradient-text">{formatDisplayName(topGender?.gender || 'N/A')}</div>
          <div className="text-sm text-slate">Primary Audience</div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Time Series Chart - Responses Over Time
const ResponsesOverTimeChart = ({ data }: { data: any[] }) => {
  if (!data || data.length === 0) return null

  const timeData = getResponsesByDate(data)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Quiz Responses Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={timeData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="date" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              border: '1px solid #475569',
              borderRadius: '8px',
              color: '#ffffff'
            }}
          />
          <Line type="monotone" dataKey="count" stroke="#ff8181" strokeWidth={3} dot={{ fill: '#ff8181' }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

// Age Distribution Chart
const AgeDistributionChart = ({ insights }: { insights: FragranceInsights | null }) => {
  if (!insights) return null

  const data = insights.age_distribution.map(item => ({
    name: formatDisplayName(item.age),
    responses: item.count
  }))

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Age Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              border: '1px solid #475569',
              borderRadius: '8px',
              color: '#ffffff'
            }}
          />
          <Bar dataKey="responses" fill="#ff8181" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

// Scent Preference Chart
const ScentPreferenceChart = ({ insights }: { insights: FragranceInsights | null }) => {
  if (!insights) return null

  const data = insights.scent_preference_distribution.map(item => ({
    name: formatDisplayName(item.preference),
    count: item.count
  }))

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Scent Preferences</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              border: '1px solid #475569',
              borderRadius: '8px',
              color: '#ffffff'
            }}
          />
          <Bar dataKey="count" fill="#ff8181" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

// Budget Distribution Chart
const BudgetDistributionChart = ({ insights }: { insights: FragranceInsights | null }) => {
  if (!insights) return null

  const data = insights.budget_distribution.map(item => ({
    name: formatDisplayName(item.budget),
    count: item.count
  }))

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Budget Preferences</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              border: '1px solid #475569',
              borderRadius: '8px',
              color: '#ffffff'
            }}
          />
          <Area type="monotone" dataKey="count" stroke="#ff8181" fill="#ff8181" fillOpacity={0.6} />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

// Avoid Scents Chart
const AvoidScentsChart = ({ insights }: { insights: FragranceInsights | null }) => {
  if (!insights) return null

  const data = insights.avoid_scents_distribution.slice(0, 8).map(item => ({
    name: formatDisplayName(item.scent),
    count: item.count
  }))

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Most Avoided Scents</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              border: '1px solid #475569',
              borderRadius: '8px',
              color: '#ffffff'
            }}
          />
          <Area type="monotone" dataKey="count" stroke="#ff8181" fill="#ff8181" fillOpacity={0.6} />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

// Gender Distribution Chart
const GenderDistributionChart = ({ insights }: { insights: FragranceInsights | null }) => {
  if (!insights) return null

  const data = insights.gender_distribution.map(item => ({
    name: formatDisplayName(item.gender),
    responses: item.count
  }))

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Gender Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="responses"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={['#ff8181', '#ff5c5c', '#ff3a3a'][index % 3]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              border: '1px solid #475569',
              borderRadius: '8px',
              color: '#ffffff'
            }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </motion.div>
  )
}



// Country World Map Heat Map
const CountryWorldMapChart = ({ insights }: { insights: FragranceInsights | null }) => {
  if (!insights) return null

  // Create a map of country names to response counts
  const countryData = insights.country_distribution.reduce((acc, item) => {
    acc[item.country.toLowerCase()] = item.count
    return acc
  }, {} as Record<string, number>)

  // Get the maximum count for normalization
  const maxCount = Math.max(...insights.country_distribution.map(c => c.count))

  const getFillColor = (countryName: string) => {
    const count = countryData[countryName.toLowerCase()]
    if (!count) return '#1e293b' // Default dark color for countries with no data
    
    // Calculate intensity based on response count
    const intensity = count / maxCount
    
    // Use zeluxe color palette based on intensity
    if (intensity > 0.7) return '#ff3333' // zeluxe-600 (high)
    if (intensity > 0.4) return '#ff5c5c' // zeluxe-500 (medium)
    if (intensity > 0.1) return '#ff8181' // zeluxe-400 (low)
    return '#ffa0a0' // zeluxe-300 (very low)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Global Response Heat Map</h3>
      <div className="relative h-[500px]">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{
            scale: 200,
            center: [0, 0]
          }}
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo: any) => {
                const countryName = geo.properties.name
                const fillColor = getFillColor(countryName)
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#475569"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: '#ff8181' },
                      pressed: { outline: 'none' }
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ComposableMap>
        
        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-dark-800/80 p-3 rounded-lg">
          <div className="text-white text-sm font-semibold mb-2">Response Intensity</div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-zeluxe-400 rounded"></div>
            <span className="text-white text-xs">Low</span>
            <div className="w-4 h-4 bg-zeluxe-500 rounded"></div>
            <span className="text-white text-xs">Medium</span>
            <div className="w-4 h-4 bg-zeluxe-600 rounded"></div>
            <span className="text-white text-xs">High</span>
          </div>
        </div>
      </div>
      

    </motion.div>
  )
}

// Occasion vs Intensity Chart
const OccasionIntensityChart = ({ insights }: { insights: FragranceInsights | null }) => {
  if (!insights) return null

  const data = insights.occasion_distribution.slice(0, 5).map(item => ({
    subject: formatDisplayName(item.occasion),
    A: item.count,
    B: Math.floor(item.count * 0.8), // Mock comparison data
    fullMark: Math.max(...insights.occasion_distribution.map(o => o.count))
  }))

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="glass-card p-6"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Occasion Preferences</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#475569" />
          <PolarAngleAxis dataKey="subject" stroke="#94a3b8" />
          <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} stroke="#94a3b8" />
          <Radar name="Current" dataKey="A" stroke="#ff8181" fill="#ff8181" fillOpacity={0.3} />
          <Radar name="Previous" dataKey="B" stroke="#ff5c5c" fill="#ff5c5c" fillOpacity={0.3} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#1e293b', 
              border: '1px solid #475569',
              borderRadius: '8px',
              color: '#ffffff'
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

// Main Dashboard Component
export default function Dashboard() {
  const [insights, setInsights] = useState<FragranceInsights | null>(null)
  const [rawData, setRawData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [timeFilter, setTimeFilter] = useState('all')
  const [genderFilter, setGenderFilter] = useState('all')
  const [ageFilter, setAgeFilter] = useState('all')
  const [scentFilter, setScentFilter] = useState('all')

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const data = await fetchQuizData()
        setRawData(data)
        
        // Apply filters
        let filteredData = data
        
        if (timeFilter !== 'all') {
          const daysAgo = new Date()
          daysAgo.setDate(daysAgo.getDate() - parseInt(timeFilter))
          filteredData = data.filter(item => new Date(item.timestamp) > daysAgo)
        }
        
        if (genderFilter !== 'all') {
          filteredData = filteredData.filter(item => item.gender === genderFilter)
        }
        
        if (ageFilter !== 'all') {
          filteredData = filteredData.filter(item => item.age_group === ageFilter)
        }

        // Remove scent filter since it's now an array field
        // if (scentFilter !== 'all') {
        //   filteredData = filteredData.filter(item => item.scent_preference === scentFilter)
        // }
        
        const processedInsights = processQuizData(filteredData)
        setInsights(processedInsights)
      } catch (error) {
        console.error('Error loading data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [timeFilter, genderFilter, ageFilter, scentFilter])

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-950 text-white tech-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zeluxe-400 mx-auto mb-4"></div>
          <p className="text-slate">Loading quiz insights...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-950 text-white tech-bg">
      <Sidebar 
        timeFilter={timeFilter}
        setTimeFilter={setTimeFilter}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        ageFilter={ageFilter}
        setAgeFilter={setAgeFilter}
        scentFilter={scentFilter}
        setScentFilter={setScentFilter}
      />
      
      <main className="ml-64 p-8">
        <AIInsightsHeader insights={insights} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ResponsesOverTimeChart data={rawData} />
          <AgeDistributionChart insights={insights} />
          <ScentPreferenceChart insights={insights} />
          <BudgetDistributionChart insights={insights} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <AvoidScentsChart insights={insights} />
          <GenderDistributionChart insights={insights} />
          <CountryWorldMapChart insights={insights} />
          <OccasionIntensityChart insights={insights} />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
                <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate">
                  {formatDisplayName(insights?.scent_preference_distribution[0]?.preference || 'N/A')} is the most popular scent preference
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
                <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate">
                  {formatDisplayName(insights?.occasion_distribution[0]?.occasion || 'N/A')} is the most popular occasion
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
                <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate">
                  {formatDisplayName(insights?.age_distribution[0]?.age || 'N/A')} age group shows highest engagement
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
                <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate">
                  {formatDisplayName(insights?.budget_distribution[0]?.budget || 'N/A')} is the most common budget range
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
                <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate">
                  {formatDisplayName(insights?.gender_distribution[0]?.gender || 'N/A')} is the primary audience
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
                <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate">
                  {formatDisplayName(insights?.avoid_scents_distribution[0]?.scent || 'N/A')} is the most avoided scent
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 