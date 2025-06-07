import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: 'Avneet Singh Nijjer - Portfolio',
  description: 'Created by Avneet Singh Nijjer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
        <Toaster richColors position="bottom-left" />
      </body>
    </html>
  )
}
