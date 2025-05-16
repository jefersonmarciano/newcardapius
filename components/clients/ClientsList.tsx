"use client"

import { useState } from "react"
import { useClients } from "@/hooks/useClients"
import ClientItem from "./ClientItem"

interface ClientsListProps {
  searchQuery?: string
}

export default function ClientsList({ searchQuery = "" }: ClientsListProps) {
  const { clients, searchClients } = useClients()
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  
  const filteredClients = searchQuery ? searchClients(searchQuery) : clients

  const handleSelect = (id: string) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(selectedId => selectedId !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {filteredClients.map(client => (
        <ClientItem 
          key={client.id}
          client={client}
          selected={selectedIds.includes(client.id)}
          onSelect={handleSelect}
        />
      ))}
    </div>
  )
} 