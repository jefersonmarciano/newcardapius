"use client"

import React from 'react'
import { Eye, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useOrdersList } from '@/hooks/useOrdersList'
import { useOrdersMetrics } from '@/hooks/useOrdersMetrics'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import PedidosHeader from './PedidosHeader'
import PedidosMetrics from './PedidosMetrics'
import PedidosTable from './PedidosTable'
import Link from "next/link";

export default function PedidosPage() {
  const { orders } = useOrdersList()
  const { metrics } = useOrdersMetrics()
  const router = useRouter()
  
  return (
    <main className="min-h-screen bg-gray-50">
      <PedidosHeader />
      <PedidosMetrics metrics={metrics} />
      <div className="flex justify-end items-center gap-2 px-6 py-4">
        <div className="relative">
          <input type="text" placeholder="Buscar pedido" className="pl-8 pr-2 py-2 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
          <svg className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <button className="p-2 border border-gray-200 rounded-md bg-white flex items-center justify-center" title="Filtrar">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2M16 3a4 4 0 01-8 0" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="h-6 w-px bg-gray-200 mx-1"></span>
        <button className="p-2 border border-gray-200 rounded-md bg-white flex items-center justify-center" title="Lista">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          className="p-2 border border-gray-200 rounded-md bg-white flex items-center justify-center"
          title="Grade"
          onClick={() => router.push('/pedidos-v2')}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#F97316" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="#F97316" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="#F97316" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="#F97316" strokeWidth="2"/></svg>
        </button>
      </div>
      <PedidosTable orders={orders} />
    </main>
  )
} 