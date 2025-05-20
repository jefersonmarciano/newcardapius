"use client"

import { useState } from "react"
import Header from "@/components/layout/Header"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import OrdersSidebar from "@/components/layout/OrdersSidebar"
import ClientsList from "@/components/clients/ClientsList"
import { useClients } from "@/hooks/useClients"

export default function ClientesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header title="Clientes" />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
            <div className="p-6" data-lov-id="app/clientes/page">
              <div className="flex flex-col space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium">Listagem de clientes</h2>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
                <p className="text-sm text-gray-500">Clientes cadastrados no sistema</p>
              </div>

              <div className="flex justify-between mb-6">
                <div className="flex gap-2">
                  <div className="relative w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input 
                      placeholder="Buscar Cliente" 
                      className="pl-10 bg-white rounded-md border-gray-200"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button className="p-2 bg-white border border-gray-200 rounded-md">
                    <Trash2 className="h-5 w-5 text-gray-500" />
                  </button>
                  <button className="p-2 bg-white border border-gray-200 rounded-md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 7H21M6 12H18M10 17H14"
                        stroke="#667085"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">+ Cadastrar cliente</Button>
              </div>

              <ClientsList searchQuery={searchQuery} />
            </div>
          </div>

          {/* Orders sidebar */}
          <OrdersSidebar />
        </div>
      </div>
    </div>
  )
}
