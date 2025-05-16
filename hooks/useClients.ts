"use client"

import { atom, useAtom } from "jotai"

export interface Client {
  id: string
  name: string
  phone: string
  lastOrderDate: string
}

const clientsAtom = atom<Client[]>([
  {
    id: "1",
    name: "Alan Farias Freitas",
    phone: "11 98421-0974",
    lastOrderDate: "28 de Janeiro de 2025"
  },
  {
    id: "2",
    name: "Camila Gomes",
    phone: "11 98421-0974",
    lastOrderDate: "28 de Janeiro de 2025"
  },
  {
    id: "3",
    name: "Alan Farias Freitas",
    phone: "11 98421-0974",
    lastOrderDate: "28 de Janeiro de 2025"
  },
  {
    id: "4",
    name: "Alan Farias Freitas",
    phone: "11 98421-0974",
    lastOrderDate: "28 de Janeiro de 2025"
  },
  {
    id: "5",
    name: "Alan Farias Freitas",
    phone: "11 98421-0974",
    lastOrderDate: "28 de Janeiro de 2025"
  },
  {
    id: "6",
    name: "Alan Farias Freitas",
    phone: "11 98421-0974",
    lastOrderDate: "28 de Janeiro de 2025"
  },
])

export function useClients() {
  const [clients, setClients] = useAtom(clientsAtom)

  const addClient = (client: Client) => {
    setClients((prev) => [...prev, client])
  }

  const deleteClient = (id: string) => {
    setClients((prev) => prev.filter(client => client.id !== id))
  }

  const searchClients = (query: string) => {
    if (!query) return clients
    return clients.filter(client => 
      client.name.toLowerCase().includes(query.toLowerCase()) || 
      client.phone.includes(query)
    )
  }

  return {
    clients,
    addClient,
    deleteClient,
    searchClients
  }
} 