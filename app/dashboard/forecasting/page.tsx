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

// Mock forecasting data
const salesForecast = [
  { month: 'Jul', actual: 1890, forecast: 1950, confidence: 0.85, trend: 'up' },
  { month: 'Aug', actual: 2100, forecast: 2180, confidence: 0.82, trend: 'up' },
  { month: 'Sep', actual: 2250, forecast: 2320, confidence: 0.79, trend: 'up' },
  { month: 'Oct', actual: 2400, forecast: 2480, confidence: 0.76, trend: 'up' },
  { month: 'Nov', actual: 2600, forecast: 2680, confidence: 0.73, trend: 'up' },
  { month: 'Dec', actual: 2850, forecast: 2950, confidence: 0.70, trend: 'up' },
]

const marketPredictions = [
  { category: 'Clean Beauty', current_growth: 23.5, predicted_growth: 28.2, confidence: 0.88, timeframe: '6 months' },
  { category: 'Genderless Fragrances', current_growth: 18.2, predicted_growth: 22.5, confidence: 0.85, timeframe: '6 months' },
  { category: 'Sustainable Packaging', current_growth: 31.7, predicted_growth: 38.4, confidence: 0.92, timeframe: '6 months' },
  { category: 'Niche Perfumes', current_growth: 15.8, predicted_growth: 19.2, confidence: 0.78, timeframe: '6 months' },
  { category: 'Celebrity Scents', current_growth: 12.3, predicted_growth: 14.8, confidence: 0.72, timeframe: '6 months' },
  { category: 'Artisanal Brands', current_growth: 27.4, predicted_growth: 32.1, confidence: 0.86, timeframe: '6 months' },
]

const seasonalForecast = [
  { quarter: 'Q3 2024', demand: 92, avg_spend: 280, popular_categories: 'Summer Scents, Light Florals' },
  { quarter: 'Q4 2024', demand: 88, avg_spend: 320, popular_categories: 'Holiday Collections, Warm Notes' },
  { quarter: 'Q1 2025', demand: 85, avg_spend: 260, popular_categories: 'Fresh Starts, Clean Scents' },
  { quarter: 'Q2 2025', demand: 95, avg_spend: 240, popular_categories: 'Spring Blooms, Citrus Notes' },
]

const riskFactors = [
  { factor: 'Economic Downturn', probability: 0.25, impact: 'High', mitigation: 'Diversify product range' },
  { factor: 'Supply Chain Disruption', probability: 0.35, impact: 'Medium', mitigation: 'Multiple suppliers' },
  { factor: 'Regulatory Changes', probability: 0.15, impact: 'Medium', mitigation: 'Compliance monitoring' },
  { factor: 'Competitor Innovation', probability: 0.45, impact: 'High', mitigation: 'R&D investment' },
  { factor: 'Consumer Preference Shift', probability: 0.30, impact: 'High', mitigation: 'Market research' },
]

const predictiveMetrics = [
  { metric: 'Revenue Growth', current: 18.5, predicted: 22.3, confidence: 0.85, trend: 'up' },
  { metric: 'Market Share', current: 12.8, predicted: 15.2, confidence: 0.78, trend: 'up' },
  { metric: 'Customer Acquisition', current: 8.2, predicted: 10.5, confidence: 0.82, trend: 'up' },
  { metric: 'Brand Recognition', current: 65.4, predicted: 72.1, confidence: 0.88, trend: 'up' },
  { metric: 'Customer Retention', current: 87.3, predicted: 89.7, confidence: 0.91, trend: 'up' },
]

// Forecasting Overview Component
const ForecastingOverview = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="glass-card p-6 mb-6"
  >
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Predictive Analytics</h1>
        <p className="text-slate">AI-powered forecasting and market predictions</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-green-400">Live Predictions</span>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">+22.3%</div>
        <div className="text-sm text-slate">Predicted Growth</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">85%</div>
        <div className="text-sm text-slate">Prediction Accuracy</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">$2.95M</div>
        <div className="text-sm text-slate">Q4 Forecast</div>
      </motion.div>
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20"
      >
        <div className="text-2xl font-bold gradient-text">15.2%</div>
        <div className="text-sm text-slate">Market Share Target</div>
      </motion.div>
    </div>
  </motion.div>
)

// Sales Forecast Chart
const SalesForecastChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Sales Forecast vs Actual</h3>
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={salesForecast}>
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
        <Area type="monotone" dataKey="forecast" fill="#ff8181" fillOpacity={0.3} stroke="#ff8181" />
        <Line type="monotone" dataKey="actual" stroke="#ff5c5c" strokeWidth={2} />
        <Bar dataKey="confidence" fill="#ffa0a0" radius={[4, 4, 0, 0]} />
      </ComposedChart>
    </ResponsiveContainer>
  </motion.div>
)

// Market Predictions Chart
const MarketPredictionsChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Market Growth Predictions</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={marketPredictions} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis type="number" stroke="#94a3b8" />
        <YAxis dataKey="category" type="category" stroke="#94a3b8" width={120} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e293b', 
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#ffffff'
          }}
        />
        <Bar dataKey="current_growth" fill="#ff8181" radius={[0, 4, 4, 0]} name="Current" />
        <Bar dataKey="predicted_growth" fill="#ff5c5c" radius={[0, 4, 4, 0]} name="Predicted" />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
)

// Seasonal Forecast Chart
const SeasonalForecastChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Seasonal Demand Forecast</h3>
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={seasonalForecast}>
        <PolarGrid stroke="#475569" />
        <PolarAngleAxis dataKey="quarter" stroke="#94a3b8" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" />
        <Radar name="Demand %" dataKey="demand" stroke="#ff8181" fill="#ff8181" fillOpacity={0.3} />
        <Radar name="Avg Spend" dataKey="avg_spend" stroke="#ff5c5c" fill="#ff5c5c" fillOpacity={0.3} />
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

// Risk Analysis Chart
const RiskAnalysisChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Risk Factor Analysis</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={riskFactors} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis type="number" stroke="#94a3b8" />
        <YAxis dataKey="factor" type="category" stroke="#94a3b8" width={120} />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e293b', 
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#ffffff'
          }}
        />
        <Bar dataKey="probability" fill="#ff8181" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
)

// Predictive Metrics Chart
const PredictiveMetricsChart = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Key Metrics Predictions</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={predictiveMetrics}>
        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
        <XAxis dataKey="metric" stroke="#94a3b8" />
        <YAxis stroke="#94a3b8" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e293b', 
            border: '1px solid #475569',
            borderRadius: '8px',
            color: '#ffffff'
          }}
        />
        <Bar dataKey="current" fill="#ff8181" radius={[4, 4, 0, 0]} name="Current" />
        <Bar dataKey="predicted" fill="#ff5c5c" radius={[4, 4, 0, 0]} name="Predicted" />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
)

// Forecasting Insights Component
const ForecastingInsights = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.7 }}
    className="glass-card p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-4">Predictive Insights</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Sustainable packaging predicted to grow 38.4% in 6 months
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Q4 revenue forecast: $2.95M with 85% confidence
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Customer retention predicted to reach 89.7%
          </span>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Competitor innovation is highest risk factor at 45%
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Q2 2025 shows highest seasonal demand at 95%
          </span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg">
          <div className="w-2 h-2 bg-zeluxe-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate">
            Brand recognition predicted to reach 72.1%
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
          <a href="/dashboard/consumer-insights" className="flex items-center space-x-3 text-slate hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-slate rounded-full"></span>
            <span>Consumer Insights</span>
          </a>
          <a href="/dashboard/forecasting" className="flex items-center space-x-3 text-white hover:text-zeluxe-400 transition-colors py-2">
            <span className="w-2 h-2 bg-zeluxe-400 rounded-full"></span>
            <span>Forecasting</span>
          </a>
        </div>
      </nav>
    </div>
  </aside>
)

export default function ForecastingPage() {
  return (
    <div className="min-h-screen bg-dark-950 text-white tech-bg">
      <Navigation />
      <main className="p-8 ml-64">
        <ForecastingOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SalesForecastChart />
          <MarketPredictionsChart />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <SeasonalForecastChart />
          <RiskAnalysisChart />
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-6">
          <PredictiveMetricsChart />
        </div>
        
        <ForecastingInsights />
      </main>
    </div>
  )
} 