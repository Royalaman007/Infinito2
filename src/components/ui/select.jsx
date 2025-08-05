"use client"

import React, { useState } from "react"

export function Select({ children, defaultValue, onValueChange, ...props }) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)

  const handleValueChange = (newValue) => {
    setValue(newValue)
    onValueChange?.(newValue)
    setIsOpen(false)
  }

  return (
    <div className="relative" {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen,
          setIsOpen,
          value,
          onValueChange: handleValueChange,
        }),
      )}
    </div>
  )
}

export function SelectTrigger({ children, className = "", isOpen, setIsOpen, ...props }) {
  return (
    <button
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
      <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

export function SelectValue({ value, placeholder = "Select..." }) {
  return <span>{value || placeholder}</span>
}

export function SelectContent({ children, isOpen, ...props }) {
  if (!isOpen) return null

  return (
    <div
      className="absolute top-full left-0 z-50 w-full min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md animate-in fade-in-0 zoom-in-95"
      {...props}
    >
      {children}
    </div>
  )
}

export function SelectItem({ children, value, onValueChange, ...props }) {
  return (
    <div
      className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      onClick={() => onValueChange(value)}
      {...props}
    >
      {children}
    </div>
  )
}
