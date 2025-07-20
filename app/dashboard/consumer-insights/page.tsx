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

// Mock consumer behavior data
const consumerBehaviorData = [
  { month: 'Jan', purchase_frequency: 2.3, avg_spend: 180, loyalty_score: 0.72, satisfaction: 4.1 },
  { month: 'Feb', purchase_frequency: 2.5, avg_spend: 195, loyalty_score: 0.75, satisfaction: 4.2 },
  { month: 'Mar', purchase_frequency: 2.7, avg_spend: 210, loyalty_score: 0.78, satisfaction: 4.3 },
  { month: 'Apr', purchase_frequency: 2.9, avg_spend: 225, loyalty_score: 0.81, satisfaction: 4.4 },
  { month: 'May', purchase_frequency: 3.1, avg_spend: 240, loyalty_score: 0.84, satisfaction: 4.5 },
  { month: 'Jun', purchase_frequency: 3.3, avg_spend: 255, loyalty_score: 0.87, satisfaction: 4.6 },
]

const demographicSegments = [
  { age_group: '18-24', size: 25, avg_spend: 120, loyalty: 0.65, social_influence: 0.85 },
  { age_group: '25-34', size: 35, avg_spend: 180, loyalty: 0.78, social_influence: 0.72 },
  { age_group: '35-44', size: 22, avg_spend: 220, loyalty: 0.82, social_influence: 0.68 },
  { age_group: '45-54', size: 12, avg_spend: 280, loyalty: 0.88, social_influence: 0.55 },
  { age_group: '55+', size: 6, avg_spend: 320, loyalty: 0.92, social_influence: 0.42 },
]

const purchaseMotivations = [
  { motivation: 'Self-Expression', percentage: 35, avg_spend: 250, loyalty_impact: 0.82 },
  { motivation: 'Gift Giving', percentage: 28, avg_spend: 180, loyalty_impact: 0.75 },
  { motivation: 'Status Symbol', percentage: 18, avg_spend: 320, loyalty_impact: 0.68 },
  { motivation: 'Mood Enhancement', percentage: 12, avg_spend: 150, loyalty_impact: 0.78 },
  { motivation: 'Collection', percentage: 7, avg_spend: 450, loyalty_impact: 0.95 },
]

const channelPreferences = [
  { channel: 'Online Retail', preference: 45, conversion_rate: 3.2, avg_order_value: 220 },
  { channel: 'Department Stores', preference: 25, conversion_rate: 2.8, avg_order_value: 280 },
  { channel: 'Specialty Stores', preference: 18, conversion_rate: 4.1, avg_order_value: 320 },
  { channel: 'Direct Brand', preference: 12, conversion_rate: 5.5, avg_order_value: 380 },
]

const sentimentAnalysis = [
  { aspect: 'Scent Quality', positive: 78, neutral: 15, negative: 7, impact_score: 0.85 },
  { aspect: 'Packaging Design', positive: 72, neutral: 20, negative: 8, impact_score: 0.78 },
  { aspect: 'Price Value', positive: 65, neutral: 25, negative: 10, impact_score: 0.72 },
  { aspect: 'Brand Experience', positive: 82, neutral: 12, negative: 6, impact_score: 0.88 },
  { aspect: 'Sustainability', positive: 68, neutral: 22, negative: 10, impact_score: 0.75 },
]

const seasonalTrends = [
  { season: 'Spring', demand: 85, avg_spend: 200, popular_scents: 'Floral, Fresh' },
  { season: 'Summer', demand: 92, avg_spend: 180, popular_scents: 'Citrus, Aquatic' },
  { season: 'Fall', demand: 78, avg_spend: 240, popular_scents: 'Woody, Spicy' },
  { season: 'Winter', demand: 88, avg_spend: 280, popular_scents: 'Warm, Gourmand' },
]

// Consumer Insights Overview Component
const ConsumerInsightsOverview = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="glass-card p-6 mb-6"
  >
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Consumer Behavior Analysis</h1>
        <p className="text-slate">Deep insights into customer preferences and purchasing patterns</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-green-400">Real-time Data</span>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">3.3</div>
        <div className="text-sm text-slate">Avg Purchase Frequency</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">$255</div>
        <div className="text-sm text-slate">Average Spend</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">87%</div>
        <div className="text-sm text-slate">Loyalty Score</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">4.6</div>
        <div className="text-sm text-slate">Satisfaction Rating</div>
      </motion.div>
    </div>
  </motion.div>
)

// Consumer Behavior Trends Chart
const ConsumerBehaviorChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Consumer Behavior Trends</h3>
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={consumerBehaviorData}>
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
        <Area type="monotone" dataKey="avg_spend" fill="#ff8181" fillOpacity={0.3} stroke="#ff8181" />
        <Line type="monotone" dataKey="purchase_frequency" stroke="#ff5c5c" strokeWidth={2} />
        <Line type="monotone" dataKey="loyalty_score" stroke="#ff3333" strokeWidth={2} />
        <Bar dataKey="satisfaction" fill="#ffa0a0" radius={[4, 4, 0, 0]} />
      </ComposedChart>
    </ResponsiveContainer>
  </motion.div>
)

// Demographic Analysis Chart
const DemographicAnalysisChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Demographic Segmentation</h3>
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={demographicSegments}>
        <PolarGrid stroke="#475569" />
        <PolarAngleAxis dataKey="age_group" stroke="#94a3b8" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" />
        <Radar name="Size %" dataKey="size" stroke="#ff8181" fill="#ff8181" fillOpacity={0.3} />
        <Radar name="Avg Spend" dataKey="avg_spend" stroke="#ff5c5c" fill="#ff5c5c" fillOpacity={0.3} />
        <Radar name="Loyalty" dataKey="loyalty" stroke="#ff3333" fill="#ff3333" fillOpacity={0.3} />
        <Radar name="Social Influence" dataKey="social_influence" stroke="#ffa0a0" fill="#ffa0a0" fillOpacity={0.3} />
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

// Purchase Motivations Chart
const PurchaseMotivationsChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Purchase Motivations</h3>
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPieChart>
        <Pie
          data={purchaseMotivations}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ motivation, percent }) => `${motivation} ${((percent || 0) * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="percentage"
        >
          {purchaseMotivations.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={['#ff8181', '#ff5c5c', '#ff3333', '#ffa0a0', '#ffc7c7'][index % 5]} />
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

// Channel Preferences Chart
const ChannelPreferencesChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Channel Preferences</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={channelPreferences} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis type="number" stroke="#94a3b8" />
        <YAxis dataKey="channel" type="category" stroke="#94a3b8" width={120} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e293b', 
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#ffffff'
          }}
        />
        <Bar dataKey="preference" fill="#ff8181" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
)

// Sentiment Analysis Chart
const SentimentAnalysisChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Customer Sentiment Analysis</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={sentimentAnalysis}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="aspect" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e293b', 
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#ffffff'
          }}
        />
        <Bar dataKey="positive" fill="#ff8181" radius={[4, 4, 0, 0]} name="Positive" />
        <Bar dataKey="neutral" fill="#ff5c5c" radius={[4, 4, 0, 0]} name="Neutral" />
        <Bar dataKey="negative" fill="#ff3333" radius={[4, 4, 0, 0]} name="Negative" />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
)

// Consumer Insights Component
const ConsumerInsights = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.7 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Key Consumer Insights</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Self-expression is the top purchase motivation at 35%
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Online retail preferred by 45% of consumers
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            25-34 age group shows highest social influence
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Brand experience has highest sentiment at 82%
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Collection buyers show 95% loyalty impact
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Summer shows highest demand at 92%
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
          <a href="/dashboard/competitor-analysis" className="flex items-center space-x-3 text-slate hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-slate rounded-full"></span>
            <span>Competitor Analysis</span>
          </a>
          <a href="/dashboard/consumer-insights" className="flex items-center space-x-3 text-white hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-zeluxe-400 rounded-full"></span>
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

export default function ConsumerInsightsPage() {
  return (
    <div className="min-h-screen bg-dark-950 text-white tech-bg">
      <Navigation />
      <main className="p-8 ml-64">
        <ConsumerInsightsOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ConsumerBehaviorChart />
          <DemographicAnalysisChart />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <PurchaseMotivationsChart />
          <ChannelPreferencesChart />
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-6">
          <SentimentAnalysisChart />
        </div>
        
        <ConsumerInsights />
      </main>
    </div>
  )
} 