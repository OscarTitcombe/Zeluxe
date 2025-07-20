'use client'

import React, { useState } from 'react'
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

// Mock data for market trends
const marketTrendsData = [
  { month: 'Jan', fragrance_sales: 1200, social_mentions: 850, search_volume: 650, competitor_activity: 450 },
  { month: 'Feb', fragrance_sales: 1350, social_mentions: 920, search_volume: 720, competitor_activity: 480 },
  { month: 'Mar', fragrance_sales: 1420, social_mentions: 980, search_volume: 780, competitor_activity: 520 },
  { month: 'Apr', fragrance_sales: 1580, social_mentions: 1100, search_volume: 850, competitor_activity: 580 },
  { month: 'May', fragrance_sales: 1720, social_mentions: 1250, search_volume: 920, competitor_activity: 650 },
  { month: 'Jun', fragrance_sales: 1890, social_mentions: 1380, search_volume: 1050, competitor_activity: 720 },
]

const trendCategories = [
  { name: 'Clean Beauty', growth: 23.5, volume: 12500, sentiment: 0.78 },
  { name: 'Genderless Fragrances', growth: 18.2, volume: 8900, sentiment: 0.82 },
  { name: 'Sustainable Packaging', growth: 31.7, volume: 15600, sentiment: 0.91 },
  { name: 'Niche Perfumes', growth: 15.8, volume: 7200, sentiment: 0.75 },
  { name: 'Celebrity Scents', growth: 12.3, volume: 5400, sentiment: 0.68 },
  { name: 'Artisanal Brands', growth: 27.4, volume: 11200, sentiment: 0.85 },
]

const competitorData = [
  { name: 'Brand A', market_share: 28, growth_rate: 12.5, social_presence: 85, innovation_score: 78 },
  { name: 'Brand B', market_share: 22, growth_rate: 8.3, social_presence: 72, innovation_score: 65 },
  { name: 'Brand C', market_share: 18, growth_rate: 15.7, social_presence: 91, innovation_score: 82 },
  { name: 'Brand D', market_share: 15, growth_rate: 6.2, social_presence: 68, innovation_score: 71 },
  { name: 'Brand E', market_share: 12, growth_rate: 9.8, social_presence: 79, innovation_score: 69 },
]

const consumerSegments = [
  { segment: 'Luxury Seekers', size: 25, growth: 18.5, avg_spend: 450, loyalty_score: 0.82 },
  { segment: 'Trend Followers', size: 35, growth: 22.3, avg_spend: 280, loyalty_score: 0.71 },
  { segment: 'Value Conscious', size: 30, growth: 15.7, avg_spend: 180, loyalty_score: 0.65 },
  { segment: 'Eco Conscious', size: 20, growth: 31.2, avg_spend: 320, loyalty_score: 0.88 },
]

// Market Trends Overview Component
const MarketTrendsOverview = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="glass-card p-6 mb-6"
  >
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Market Trends Analysis</h1>
        <p className="text-slate">Real-time industry insights and trend forecasting</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-green-400">Live Data</span>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">+18.5%</div>
        <div className="text-sm text-slate">Market Growth</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">$2.8B</div>
        <div className="text-sm text-slate">Market Size</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">+24.3%</div>
        <div className="text-sm text-slate">Social Engagement</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">156</div>
        <div className="text-sm text-slate">Active Trends</div>
      </motion.div>
    </div>
  </motion.div>
)

// Trend Performance Chart
const TrendPerformanceChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Market Performance Trends</h3>
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={marketTrendsData}>
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
        <Area type="monotone" dataKey="fragrance_sales" fill="#ff8181" fillOpacity={0.3} stroke="#ff8181" />
        <Line type="monotone" dataKey="social_mentions" stroke="#ff5c5c" strokeWidth={2} />
        <Line type="monotone" dataKey="search_volume" stroke="#ff3333" strokeWidth={2} />
        <Bar dataKey="competitor_activity" fill="#ffa0a0" radius={[4, 4, 0, 0]} />
      </ComposedChart>
    </ResponsiveContainer>
  </motion.div>
)

// Trending Categories Chart
const TrendingCategoriesChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Top Trending Categories</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={trendCategories} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis type="number" stroke="#94a3b8" />
        <YAxis dataKey="name" type="category" stroke="#94a3b8" width={120} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e293b', 
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#ffffff'
          }}
        />
        <Bar dataKey="growth" fill="#ff8181" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
)

// Competitor Analysis Chart
const CompetitorAnalysisChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Competitor Landscape</h3>
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={competitorData}>
        <PolarGrid stroke="#475569" />
        <PolarAngleAxis dataKey="name" stroke="#94a3b8" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" />
        <Radar name="Market Share" dataKey="market_share" stroke="#ff8181" fill="#ff8181" fillOpacity={0.3} />
        <Radar name="Growth Rate" dataKey="growth_rate" stroke="#ff5c5c" fill="#ff5c5c" fillOpacity={0.3} />
        <Radar name="Social Presence" dataKey="social_presence" stroke="#ff3333" fill="#ff3333" fillOpacity={0.3} />
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

// Consumer Segments Chart
const ConsumerSegmentsChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Consumer Segments Analysis</h3>
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          data={consumerSegments}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ segment, percent }) => `${segment} ${((percent || 0) * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="size"
        >
          {consumerSegments.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={['#ff8181', '#ff5c5c', '#ff3333', '#ffa0a0'][index % 4]} />
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

// Key Insights Component
const KeyInsights = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Key Market Insights</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Clean beauty segment growing 23.5% YoY
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Sustainable packaging demand up 31.7%
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Genderless fragrances gaining 18.2% market share
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Social media engagement up 24.3% this quarter
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Eco-conscious segment shows highest loyalty at 88%
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Luxury segment average spend increased to $450
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
          <a href="/dashboard/market-trends" className="flex items-center space-x-3 text-white hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-zeluxe-400 rounded-full"></span>
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
      </nav>
    </div>
  </aside>
)

export default function MarketTrendsPage() {
  return (
    <div className="min-h-screen bg-dark-950 text-white tech-bg">
      <Navigation />
      <main className="p-8 ml-64">
        <MarketTrendsOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TrendPerformanceChart />
          <TrendingCategoriesChart />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <CompetitorAnalysisChart />
          <ConsumerSegmentsChart />
        </div>
        
        <KeyInsights />
      </main>
    </div>
  )
} 