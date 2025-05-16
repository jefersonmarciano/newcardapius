import React from 'react'

export default function SidebarFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-auto flex flex-col gap-1 w-full px-2 pb-4">{children}</div>
} 