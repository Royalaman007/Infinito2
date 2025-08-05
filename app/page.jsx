"use client"

import dynamic from 'next/dynamic'
import React from 'react'
import { HydrationErrorBoundary } from '../components/hydration-error-boundary'

// Import all components with no SSR to avoid hydration issues
const AdminPortal = dynamic(() => import("../admin-portal"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading Admin Dashboard...</p>
        <p className="text-sm text-gray-500 mt-2">Initializing components...</p>
      </div>
    </div>
  )
})

// Create a client-only wrapper to prevent any SSR issues
function ClientOnlyWrapper({ children }) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Admin Dashboard...</p>
        </div>
      </div>
    )
  }

  return children
}

export default function Page() {
  return (
    <HydrationErrorBoundary>
      <ClientOnlyWrapper>
        <AdminPortal />
      </ClientOnlyWrapper>
    </HydrationErrorBoundary>
  )
}
