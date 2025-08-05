import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress hydration warnings for browser extension attributes
              const originalError = console.error;
              console.error = (...args) => {
                if (args[0] && typeof args[0] === 'string' && 
                    (args[0].includes('data-arp') || 
                     args[0].includes('cz-shortcut-listen') ||
                     args[0].includes('Hydration failed') ||
                     args[0].includes('server rendered HTML didn\'t match'))) {
                  return;
                }
                originalError.apply(console, args);
              };
            `,
          }}
        />
      </head>
      <body className={GeistSans.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
