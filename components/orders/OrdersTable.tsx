"use client"

import React from 'react'
import { Eye } from 'lucide-react'
import { OrderListItem, useOrdersList } from '@/hooks/useOrdersList'
import { formatCurrency } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type OrderStatus = 'Preparando' | 'Enviado' | 'Finalizado'

const StatusBadge = ({ status }: { status: OrderStatus }) => {
  const statusColors = {
    Preparando: 'text-orange-500',
    Enviado: 'text-blue-500',
    Finalizado: 'text-green-500'
  }
  
  return (
    <span className={`${statusColors[status]}`}>
      {status}
    </span>
  )
}

export default function OrdersTable() {
  const { orders } = useOrdersList()
  
  return (
    <div className="w-full">
      <div className="bg-white rounded-md overflow-hidden border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-1 cursor-pointer">
                  Pedido <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-1 cursor-pointer">
                  Cliente <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-1 cursor-pointer">
                  Descrição <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-1 cursor-pointer">
                  Valor <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-1 cursor-pointer">
                  Hora <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-1 cursor-pointer">
                  Status <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </th>
              <th className="text-center p-4 text-sm font-medium text-gray-500">
                <div className="flex items-center justify-end gap-1 cursor-pointer">
                  Ação <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-4 text-sm font-medium">
                  {order.id}
                </td>
                <td className="p-4 text-sm">
                  {order.customerName}
                </td>
                <td className="p-4 text-sm">
                  <div className="flex flex-col space-y-1">
                    {order.items.map((item, idx) => (
                      <div key={idx}>{item.quantity}x {item.name}</div>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-sm">
                  {formatCurrency(order.total)}
                </td>
                <td className="p-4 text-sm">
                  {order.time}
                </td>
                <td className="p-4">
                  <StatusBadge status={order.status} />
                </td>
                <td className="p-4 text-right">
                  <div className="flex justify-center">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Eye className="h-5 w-5 text-gray-500" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-center p-4 border-t border-gray-100 gap-2">
          <Button variant="destructive" size="sm" className="bg-orange-500 hover:bg-orange-600 rounded-md px-3 h-8 min-w-8">
            1
          </Button>
          <Button variant="ghost" size="sm" className="rounded-md px-3 h-8 min-w-8">
            2
          </Button>
          <Button variant="ghost" size="sm" className="rounded-md px-3 h-8 min-w-8">
            3
          </Button>
          <Button variant="ghost" size="sm" className="rounded-md h-8 px-3">
            Próxima
          </Button>
        </div>
      </div>
    </div>
  )
} 