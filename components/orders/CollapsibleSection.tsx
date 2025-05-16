"use client"

import type React from "react"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

interface CollapsibleSectionProps {
  title: string
  count: number
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function CollapsibleSection({ title, count, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <div
        className="bg-gray-100 p-4 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">{title}</span>
          <div className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {count}
          </div>
        </div>
        {isOpen ? (
          <ChevronUp size={20} className="text-gray-500" />
        ) : (
          <ChevronDown size={20} className="text-gray-500" />
        )}
      </div>

      {isOpen && children}
    </div>
  )
}
