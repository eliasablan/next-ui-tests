import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { cn } from '@/lib/utils'
import HomeButton from '@/components/home-button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UI Tests',
  description: 'UI/UX Tests with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('relative', inter.className)}>
        {children}
        <HomeButton />
      </body>
    </html>
  )
}
