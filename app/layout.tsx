import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zeluxe - The insights engine powering Gen Z beauty trends',
  description: 'Real-time consumer insights from TikTok, Gen Z surveys, and AI-analyzed trends. Help fragrance and beauty brands understand and act on Gen Z behavior.',
  keywords: 'Gen Z, beauty trends, fragrance insights, TikTok data, consumer insights, beauty brands',
  authors: [{ name: 'Zeluxe' }],
  openGraph: {
    title: 'Zeluxe - The insights engine powering Gen Z beauty trends',
    description: 'Real-time consumer insights from TikTok, Gen Z surveys, and AI-analyzed trends.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-950 text-white tech-bg">
        {children}
      </body>
    </html>
  )
} 