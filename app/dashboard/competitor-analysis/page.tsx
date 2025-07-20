'use client'

import React, { useState } from 'react'

// Force dynamic rendering to prevent build errors
export const dynamic = 'force-dynamic'
export const revalidate = 0
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

// Mock competitor data
const competitorPerformance = [
  { month: 'Jan', brand_a: 1200, brand_b: 980, brand_c: 850, brand_d: 720, brand_e: 650 },
  { month: 'Feb', brand_a: 1350, brand_b: 1050, brand_c: 920, brand_d: 780, brand_e: 720 },
  { month: 'Mar', brand_a: 1420, brand_b: 1120, brand_c: 980, brand_d: 820, brand_e: 780 },
  { month: 'Apr', brand_a: 1580, brand_b: 1250, brand_c: 1100, brand_d: 920, brand_e: 850 },
  { month: 'May', brand_a: 1720, brand_b: 1380, brand_c: 1220, brand_d: 1050, brand_e: 920 },
  { month: 'Jun', brand_a: 1890, brand_b: 1520, brand_c: 1350, brand_d: 1180, brand_e: 1050 },
]

const competitorMetrics = [
  { 
    name: 'Brand A', 
    market_share: 28, 
    growth_rate: 12.5, 
    social_presence: 85, 
    innovation_score: 78,
    customer_satisfaction: 4.2,
    price_position: 'Premium',
    distribution_reach: 92
  },
  { 
    name: 'Brand B', 
    market_share: 22, 
    growth_rate: 8.3, 
    social_presence: 72, 
    innovation_score: 65,
    customer_satisfaction: 3.8,
    price_position: 'Mid-range',
    distribution_reach: 78
  },
  { 
    name: 'Brand C', 
    market_share: 18, 
    growth_rate: 15.7, 
    social_presence: 91, 
    innovation_score: 82,
    customer_satisfaction: 4.5,
    price_position: 'Luxury',
    distribution_reach: 85
  },
  { 
    name: 'Brand D', 
    market_share: 15, 
    growth_rate: 6.2, 
    social_presence: 68, 
    innovation_score: 71,
    customer_satisfaction: 3.9,
    price_position: 'Value',
    distribution_reach: 95
  },
  { 
    name: 'Brand E', 
    market_share: 12, 
    growth_rate: 9.8, 
    social_presence: 79, 
    innovation_score: 69,
    customer_satisfaction: 4.1,
    price_position: 'Mid-range',
    distribution_reach: 82
  },
]

const socialMediaData = [
  { platform: 'Instagram', brand_a: 125000, brand_b: 89000, brand_c: 156000, brand_d: 67000, brand_e: 92000 },
  { platform: 'TikTok', brand_a: 89000, brand_b: 45000, brand_c: 134000, brand_d: 23000, brand_e: 67000 },
  { platform: 'YouTube', brand_a: 156000, brand_b: 112000, brand_c: 189000, brand_d: 89000, brand_e: 134000 },
  { platform: 'Twitter', brand_a: 67000, brand_b: 78000, brand_c: 92000, brand_d: 45000, brand_e: 56000 },
]

const productComparison = [
  { feature: 'Scent Variety', brand_a: 85, brand_b: 72, brand_c: 91, brand_d: 68, brand_e: 78 },
  { feature: 'Packaging Design', brand_a: 78, brand_b: 82, brand_c: 88, brand_d: 65, brand_e: 75 },
  { feature: 'Sustainability', brand_a: 72, brand_b: 68, brand_c: 95, brand_d: 58, brand_e: 82 },
  { feature: 'Price Value', brand_a: 65, brand_b: 85, brand_c: 72, brand_d: 92, brand_e: 78 },
  { feature: 'Brand Recognition', brand_a: 88, brand_b: 75, brand_c: 82, brand_d: 62, brand_e: 71 },
]

// Competitor Analysis Overview Component
const CompetitorAnalysisOverview = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="glass-card p-6 mb-6"
  >
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Competitor Intelligence</h1>
        <p className="text-slate">Comprehensive competitive analysis and market positioning</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-green-400">Live Monitoring</span>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">5</div>
        <div className="text-sm text-slate">Key Competitors</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">28%</div>
        <div className="text-sm text-slate">Market Leader Share</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">+15.7%</div>
        <div className="text-sm text-slate">Fastest Growth</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">4.5</div>
        <div className="text-sm text-slate">Top Satisfaction</div>
      </motion.div>
    </div>
  </motion.div>
)

// Competitor Performance Chart
const CompetitorPerformanceChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Competitor Performance Trends</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={competitorPerformance}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="month" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e293b', 
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#ffffff'
          }}
        />
        <Line type="monotone" dataKey="brand_a" stroke="#ff8181" strokeWidth={2} name="Brand A" />
        <Line type="monotone" dataKey="brand_b" stroke="#ff5c5c" strokeWidth={2} name="Brand B" />
        <Line type="monotone" dataKey="brand_c" stroke="#ff3333" strokeWidth={2} name="Brand C" />
        <Line type="monotone" dataKey="brand_d" stroke="#ffa0a0" strokeWidth={2} name="Brand D" />
        <Line type="monotone" dataKey="brand_e" stroke="#ffc7c7" strokeWidth={2} name="Brand E" />
      </LineChart>
    </ResponsiveContainer>
  </motion.div>
)

// Competitor Metrics Chart
const CompetitorMetricsChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Competitor Metrics Comparison</h3>
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={competitorMetrics}>
        <PolarGrid stroke="#475569" />
        <PolarAngleAxis dataKey="name" stroke="#94a3b8" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" />
        <Radar name="Market Share" dataKey="market_share" stroke="#ff8181" fill="#ff8181" fillOpacity={0.3} />
        <Radar name="Growth Rate" dataKey="growth_rate" stroke="#ff5c5c" fill="#ff5c5c" fillOpacity={0.3} />
        <Radar name="Social Presence" dataKey="social_presence" stroke="#ff3333" fill="#ff3333" fillOpacity={0.3} />
        <Radar name="Innovation Score" dataKey="innovation_score" stroke="#ffa0a0" fill="#ffa0a0" fillOpacity={0.3} />
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

// Social Media Presence Chart
const SocialMediaPresenceChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Social Media Presence</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={socialMediaData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="platform" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e293b', 
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#ffffff'
          }}
        />
        <Bar dataKey="brand_a" fill="#ff8181" radius={[4, 4, 0, 0]} name="Brand A" />
        <Bar dataKey="brand_b" fill="#ff5c5c" radius={[4, 4, 0, 0]} name="Brand B" />
        <Bar dataKey="brand_c" fill="#ff3333" radius={[4, 4, 0, 0]} name="Brand C" />
        <Bar dataKey="brand_d" fill="#ffa0a0" radius={[4, 4, 0, 0]} name="Brand D" />
        <Bar dataKey="brand_e" fill="#ffc7c7" radius={[4, 4, 0, 0]} name="Brand E" />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
)

// Product Comparison Chart
const ProductComparisonChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Product Feature Comparison</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={productComparison} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis type="number" stroke="#94a3b8" />
        <YAxis dataKey="feature" type="category" stroke="#94a3b8" width={120} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e293b', 
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#ffffff'
          }}
        />
        <Bar dataKey="brand_a" fill="#ff8181" radius={[0, 4, 4, 0]} name="Brand A" />
        <Bar dataKey="brand_b" fill="#ff5c5c" radius={[0, 4, 4, 0]} name="Brand B" />
        <Bar dataKey="brand_c" fill="#ff3333" radius={[0, 4, 4, 0]} name="Brand C" />
        <Bar dataKey="brand_d" fill="#ffa0a0" radius={[0, 4, 4, 0]} name="Brand D" />
        <Bar dataKey="brand_e" fill="#ffc7c7" radius={[0, 4, 4, 0]} name="Brand E" />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
)

// Competitive Insights Component
const CompetitiveInsights = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Competitive Intelligence Insights</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Brand C shows highest innovation score at 82%
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Brand A leads market share with 28% dominance
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Brand C has highest customer satisfaction at 4.5/5
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Brand D offers best price value but lower quality
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            TikTok presence strongest for Brand C at 134K followers
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Brand C leads in sustainability with 95% score
          </span>
        </div>
      </div>
    </div>
  </motion.div>
)

// Navigation Component
const Navigation = () => (
  <aside className="w-64 bg-dark-800/50 backdrop-blur-sm border-r border-dark-700/50 h-screen fixed left-0 top-0 z-40">
    <div className="p-6">
      <div className="text-2xl font-bold gradient-text mb-8">Zeluxe</div>
      
      <nav className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-slate uppercase tracking-wider">Navigation</h3>
          <a href="/dashboard" className="flex items-center space-x-3 text-slate hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-slate rounded-full"></span>
            <span>Dashboard</span>
          </a>
          <a href="/dashboard/market-trends" className="flex items-center space-x-3 text-slate hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-slate rounded-full"></span>
            <span>Market Trends</span>
          </a>
          <a href="/dashboard/competitor-analysis" className="flex items-center space-x-3 text-white hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-zeluxe-400 rounded-full"></span>
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
      </nav>
    </div>
  </aside>
)

export default function CompetitorAnalysisPage() {
  return (
    <div className="min-h-screen bg-dark-950 text-white tech-bg">
      <Navigation />
      <main className="p-8 ml-64">
        <CompetitorAnalysisOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <CompetitorPerformanceChart />
          <CompetitorMetricsChart />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SocialMediaPresenceChart />
          <ProductComparisonChart />
        </div>
        
        <CompetitiveInsights />
      </main>
    </div>
  )
} 