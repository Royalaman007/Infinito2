"use client"

import { useEffect, useState } from 'react'

export function HydrationErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Catch hydration errors
    const originalError = console.error
    console.error = (...args) => {
      if (args[0] && typeof args[0] === 'string' && 
          (args[0].includes('Hydration failed') || 
           args[0].includes('server rendered HTML didn\'t match') ||
           args[0].includes('data-arp') ||
           args[0].includes('cz-shortcut-listen'))) {
        setHasError(true)
        return
      }
      originalError.apply(console, args)
    }

    return () => {
      console.error = originalError
    }
  }, [])

  if (hasError || !mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Admin Dashboard...</p>
          <p className="text-sm text-gray-500 mt-2">Resolving component conflicts...</p>
        </div>
      </div>
    )
  }

  return children
} 