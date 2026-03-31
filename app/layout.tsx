import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Primitivo Grill — Wagyu & Dry-Aged Steakhouse | Malta',
  description: 'Bold flavours, rugged vibes, refined taste. Premium Wagyu & Dry-Aged Steakhouse in St. Julian\'s, Malta.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Anybody:wght@100;200;300;400;500&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
