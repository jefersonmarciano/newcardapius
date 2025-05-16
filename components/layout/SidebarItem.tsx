import React from 'react'
import Link from 'next/link'

interface SidebarItemProps {
  icon?: React.ReactNode
  label: string
  href?: string
  active?: boolean
  expanded?: boolean
  onClick?: () => void
  children?: React.ReactNode
  nested?: boolean
}

export default function SidebarItem({ icon, label, href, active, expanded, onClick, children, nested }: SidebarItemProps) {
  const content = (
    <div
      className={
        `flex items-center gap-3 px-4 h-12 rounded-lg cursor-pointer transition-colors
        ${active ? 'bg-orange-100 text-orange-500 font-semibold' : nested ? 'text-gray-600 hover:bg-gray-50' : 'text-gray-700 hover:bg-gray-100'}
        ${nested ? 'pl-8 text-base' : ''}
        `
      }
      onClick={onClick}
    >
      {nested && (
        <svg className="w-4 h-4 text-gray-300 mr-1" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="2" /></svg>
      )}
      {icon !== undefined && icon !== null && <span className="w-6 h-6 flex items-center justify-center">{icon}</span>}
      {expanded && <span className="whitespace-nowrap">{label}</span>}
      {children}
    </div>
  )
  return href ? <Link href={href}>{content}</Link> : content
} 