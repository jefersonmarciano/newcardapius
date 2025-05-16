import React, { useState } from 'react'

interface SidebarSubmenuProps {
  icon?: React.ReactNode
  label: string
  expanded?: boolean
  active?: boolean
  defaultOpen?: boolean
  children: React.ReactNode
  nested?: boolean
}

export default function SidebarSubmenu({ icon, label, expanded, active, defaultOpen, children, nested }: SidebarSubmenuProps) {
  const [open, setOpen] = useState(!!defaultOpen)
  return (
    <div className={
      nested
        ? ''
        : 'bg-white border-b border-gray-200'
    }>
      <div
        className={`flex items-center gap-3 px-4 h-12 rounded-lg cursor-pointer transition-colors select-none
          ${active ? 'bg-orange-50 text-orange-500 font-bold' : 'text-gray-700 hover:bg-gray-50'}
          ${nested ? 'pl-6' : ''}
        `}
        onClick={() => setOpen(v => !v)}
      >
        <span className="w-6 h-6 flex items-center justify-center">{icon}</span>
        {expanded && <span className="text-base flex-1 whitespace-nowrap">{label}</span>}
        {expanded && (
          <svg className={`w-5 h-5 ml-auto transition-transform ${open ? 'rotate-180' : ''} ${active ? 'text-orange-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        )}
      </div>
      {expanded && open && (
        <div className={nested ? 'pl-4' : 'pl-8'}>
          {React.Children.map(children, child =>
            React.isValidElement(child)
              ? React.cloneElement(child as any, { nested: true })
              : child
          )}
        </div>
      )}
    </div>
  )
} 