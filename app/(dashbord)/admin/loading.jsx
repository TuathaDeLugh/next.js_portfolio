import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full">
      <div className="w-8 h-8 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
    </div>
  )
}