import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - VIAMS',
    default: 'Viams International - Taking Kenya to the world',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full text-base antialiased">
      <body className="">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
