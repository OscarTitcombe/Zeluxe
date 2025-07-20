'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Header Component
const Header = () => (
  <header className="fixed top-0 w-full bg-dark-950/80 backdrop-blur-md z-50 border-b border-dark-800">
    <div className="container-custom px-4 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold gradient-text">Zeluxe</div>
      <nav className="hidden md:flex space-x-8">
        <a href="#how-it-works" className="text-slate hover:text-zeluxe-400 transition-colors">How it works</a>
        <a href="#insights" className="text-slate hover:text-zeluxe-400 transition-colors">Insights</a>
        <a href="#contact" className="text-slate hover:text-zeluxe-400 transition-colors">Contact</a>
      </nav>
      <button className="btn-primary text-sm py-2 px-6">Request Access</button>
    </div>
  </header>
)

// Hero Section
const Hero = () => (
  <section className="pt-32 pb-20 section-padding relative overflow-hidden">
    <div className="absolute inset-0 grid-overlay"></div>
    <div className="container-custom text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          The insights engine
          <br />
          <span className="gradient-text">powering Gen Z</span>
          <br />
          beauty trends
        </h1>
        <p className="text-xl md:text-2xl text-slate mb-12 max-w-3xl mx-auto leading-relaxed">
          Real-time consumer signals from TikTok, Gen Z surveys, and AI-analyzed trends. 
          Help fragrance and beauty brands understand and act on Gen Z behavior.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary text-lg px-10 py-5 glow-effect">
            Request Access
          </button>
          <button className="btn-secondary text-lg px-10 py-5">
            Book a Demo
          </button>
        </div>
      </motion.div>
    </div>
  </section>
)

// Problem/Opportunity Section
const ProblemSection = () => (
  <section className="section-padding bg-dark-900/50 relative">
    <div className="absolute inset-0 bg-gradient-to-br from-zeluxe-400/5 to-transparent"></div>
    <div className="container-custom relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Gen Z moves fast.
          <br />
          Traditional research doesn't.
        </h2>
        <p className="text-xl text-slate max-w-3xl mx-auto">
          By the time traditional market research reports reach your desk, 
          the trends have already moved on. Gen Z's beauty preferences change 
          faster than ever before.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-card p-8 tech-border"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-zeluxe-400 to-zeluxe-600 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-white">Slow Insights</h3>
          <p className="text-slate">Traditional research takes months. Gen Z trends move in days.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 tech-border"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-zeluxe-400 to-zeluxe-600 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-white">Missed Opportunities</h3>
          <p className="text-slate">Brands miss the moment to capitalize on emerging trends.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card p-8 tech-border"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-zeluxe-400 to-zeluxe-600 rounded-lg flex items-center justify-center mb-6">
            <span className="text-2xl">💡</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-white">Outdated Data</h3>
          <p className="text-slate">Static reports can't capture the dynamic nature of Gen Z culture.</p>
        </motion.div>
      </div>
    </div>
  </section>
)

// Solution Section
const SolutionSection = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-tl from-zeluxe-400/5 to-transparent"></div>
    <div className="container-custom relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real-time insights
            <br />
            for real-time decisions
          </h2>
          <p className="text-xl text-slate mb-8">
            Zeluxe gives beauty and fragrance brands the tools to analyze Gen Z behavior 
            in real-time, with a beautiful and intuitive dashboard that makes complex 
            data feel simple and actionable.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-lg">
              <span className="w-6 h-6 bg-gradient-to-br from-zeluxe-400 to-zeluxe-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm">✓</span>
              </span>
              <span className="text-white">TikTok trend analysis and sentiment tracking</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="w-6 h-6 bg-gradient-to-br from-zeluxe-400 to-zeluxe-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm">✓</span>
              </span>
              <span className="text-white">Gen Z survey data and preference mapping</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="w-6 h-6 bg-gradient-to-br from-zeluxe-400 to-zeluxe-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm">✓</span>
              </span>
              <span className="text-white">AI-powered trend prediction and forecasting</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-dark-800 to-dark-900 p-8 rounded-3xl border border-zeluxe-400/20 glow-effect">
            <div className="bg-dark-800 rounded-2xl p-6 border border-dark-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Gen Z Beauty Trends</h3>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate">Clean Beauty</span>
                  <span className="text-sm font-semibold gradient-text">+127%</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-zeluxe-400 to-zeluxe-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate">Fragrance Discovery</span>
                  <span className="text-sm font-semibold gradient-text">+89%</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-zeluxe-400 to-zeluxe-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate">Social Commerce</span>
                  <span className="text-sm font-semibold gradient-text">+203%</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-zeluxe-400 to-zeluxe-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

// How It Works Section
const HowItWorks = () => (
  <section id="how-it-works" className="section-padding bg-dark-900/50 relative">
    <div className="absolute inset-0 bg-gradient-to-tr from-zeluxe-400/5 to-transparent"></div>
    <div className="container-custom relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          How it works
        </h2>
        <p className="text-xl text-slate max-w-2xl mx-auto">
          Three simple steps to unlock Gen Z insights and transform your brand strategy
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-zeluxe-400 to-zeluxe-600 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
            <span className="text-white text-2xl font-bold">1</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Capture Signals</h3>
          <p className="text-slate">
            We gather real-time data from TikTok trends, Gen Z surveys, 
            and proprietary trend analysis to capture the latest beauty movements.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-zeluxe-400 to-zeluxe-600 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
            <span className="text-white text-2xl font-bold">2</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-white">AI Processing</h3>
          <p className="text-slate">
            Our AI processes and structures the data, identifying patterns, 
            sentiment shifts, and emerging trends in real-time.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-zeluxe-400 to-zeluxe-600 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
            <span className="text-white text-2xl font-bold">3</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-white">Make Decisions</h3>
          <p className="text-slate">
            Brands use our beautiful dashboard to explore insights and make 
            better creative and product decisions with confidence.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
)

// Social Proof Section
const SocialProof = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-bl from-zeluxe-400/5 to-transparent"></div>
    <div className="container-custom relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Trusted by beauty innovators
        </h2>
        <p className="text-xl text-slate max-w-2xl mx-auto">
          Leading fragrance and beauty brands are already using Zeluxe to stay ahead of Gen Z trends
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center glass-card p-8 tech-border"
        >
          <div className="text-4xl font-bold gradient-text mb-2">1M+</div>
          <div className="text-slate">Fragrance fans analyzed</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center glass-card p-8 tech-border"
        >
          <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
          <div className="text-slate">Quiz completions analyzed</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center glass-card p-8 tech-border"
        >
          <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
          <div className="text-slate">Real-time trend monitoring</div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-8 opacity-60"
      >
        <div className="w-32 h-12 bg-dark-800 border border-zeluxe-400/20 rounded flex items-center justify-center">
          <span className="text-zeluxe-400 font-semibold">Brand A</span>
        </div>
        <div className="w-32 h-12 bg-dark-800 border border-zeluxe-400/20 rounded flex items-center justify-center">
          <span className="text-zeluxe-400 font-semibold">Brand B</span>
        </div>
        <div className="w-32 h-12 bg-dark-800 border border-zeluxe-400/20 rounded flex items-center justify-center">
          <span className="text-zeluxe-400 font-semibold">Brand C</span>
        </div>
        <div className="w-32 h-12 bg-dark-800 border border-zeluxe-400/20 rounded flex items-center justify-center">
          <span className="text-zeluxe-400 font-semibold">Brand D</span>
        </div>
      </motion.div>
    </div>
  </section>
)

// Dashboard Mockup Section
const DashboardMockup = () => (
  <section id="insights" className="section-padding bg-dark-900/50 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-zeluxe-400/5 to-transparent"></div>
    <div className="container-custom relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Beautiful insights,
            <br />
            beautifully presented
          </h2>
          <p className="text-xl text-slate mb-8">
            Our dashboard transforms complex Gen Z data into clear, actionable insights. 
            Explore trends, track sentiment, and discover opportunities with our 
            intuitive interface designed for beauty professionals.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-zeluxe-400 rounded-full mr-4"></div>
              <span className="text-lg text-white">Real-time trend visualization</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-zeluxe-400 rounded-full mr-4"></div>
              <span className="text-lg text-white">Sentiment analysis and tracking</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-zeluxe-400 rounded-full mr-4"></div>
              <span className="text-lg text-white">Customizable reporting</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-dark-800 rounded-3xl shadow-2xl p-8 border border-zeluxe-400/20 transform rotate-1 hover:rotate-0 transition-transform duration-300 glow-effect">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Gen Z Beauty Dashboard</h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-zeluxe-400/10 to-zeluxe-600/10 p-4 rounded-lg border border-zeluxe-400/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-white">Top Trending Fragrances</span>
                  <span className="text-xs text-slate">This Week</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Vanilla Gourmand</span>
                    <span className="gradient-text font-semibold">+156%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Clean Musk</span>
                    <span className="gradient-text font-semibold">+89%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Fruity Floral</span>
                    <span className="gradient-text font-semibold">+67%</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-700 p-4 rounded-lg border border-dark-600">
                  <div className="text-2xl font-bold gradient-text">2.4M</div>
                  <div className="text-xs text-slate">TikTok mentions</div>
                </div>
                <div className="bg-dark-700 p-4 rounded-lg border border-dark-600">
                  <div className="text-2xl font-bold gradient-text">89%</div>
                  <div className="text-xs text-slate">Positive sentiment</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

// CTA Section
const CTASection = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-zeluxe-400/5 to-transparent"></div>
    <div className="container-custom text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to understand
          <br />
          Gen Z like never before?
        </h2>
        <p className="text-xl text-slate mb-12 max-w-2xl mx-auto">
          Join the beauty brands already using Zeluxe to stay ahead of trends 
          and connect with Gen Z consumers in real-time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary text-lg px-12 py-6 glow-effect">
            Request Access
          </button>
          <button className="btn-secondary text-lg px-12 py-6">
            Book a Demo
          </button>
        </div>
      </motion.div>
    </div>
  </section>
)

// Footer
const Footer = () => (
  <footer id="contact" className="bg-dark-950 text-white py-16 border-t border-dark-800">
    <div className="container-custom">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="text-2xl font-bold gradient-text mb-4">Zeluxe</div>
          <p className="text-gray-300 mb-6 max-w-md">
            The insights engine powering Gen Z beauty trends. 
            Real-time consumer signals for fragrance and beauty brands.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-white">Product</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#how-it-works" className="hover:text-zeluxe-400 transition-colors">How it works</a></li>
            <li><a href="#insights" className="hover:text-zeluxe-400 transition-colors">Insights</a></li>
            <li><a href="#" className="hover:text-zeluxe-400 transition-colors">Pricing</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-zeluxe-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-zeluxe-400 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-zeluxe-400 transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-zeluxe-400 transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-dark-800 mt-12 pt-8 text-center text-gray-300">
        <p>&copy; 2024 Zeluxe. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <SocialProof />
      <DashboardMockup />
      <CTASection />
      <Footer />
    </main>
  )
} 