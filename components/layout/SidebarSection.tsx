import React from 'react'

interface SidebarSectionProps {
  title?: string
  children: React.ReactNode
}

export default function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className="w-full">
      {title && <div className="px-4 py-2 text-xs font-bold text-orange-500 uppercase tracking-wide">{title}</div>}
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  )
} 