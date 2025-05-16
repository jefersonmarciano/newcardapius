"use client"

import { useOrdersMetrics } from "@/hooks/useOrdersMetrics"
import { formatCurrency } from "@/lib/utils"

export default function OrdersMetrics() {
  const { metrics } = useOrdersMetrics()

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* Hoje */}
      <div className="bg-orange-500 text-white rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3333 1.66667V5.00001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.66667 1.66667V5.00001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.5 8.33334H17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-lg font-medium">Hoje</span>
        </div>
        <div className="text-sm mb-2">{metrics.dataAtual}</div>
      </div>
      
      {/* Faturamento Hoje */}
      <div className="bg-white rounded-lg p-4">
        <div className="text-gray-500 text-sm mb-2">Faturamento Hoje</div>
        <div className="flex items-baseline">
          <span className="text-gray-700 text-sm">R$</span>
          <span className="text-3xl font-bold text-gray-700">{metrics.faturamentoHoje.value.toLocaleString()}</span>
        </div>
        <div className="border-b border-gray-200 my-2"></div>
        <div className="flex justify-end items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500 mr-1">
            <path d="M8 12.6667L8 3.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33334 8.00001L8.00001 3.33334L12.6667 8.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-red-500 font-medium mr-1">{metrics.faturamentoHoje.percentage}%</span>
          <span className="text-gray-500 text-xs">da semana passada</span>
        </div>
      </div>
      
      {/* Total de pedidos */}
      <div className="bg-white rounded-lg p-4">
        <div className="text-gray-500 text-sm mb-2">Total de pedidos</div>
        <div className="text-3xl font-bold text-gray-700">{metrics.totalPedidos.value}</div>
        <div className="border-b border-gray-200 my-2"></div>
        <div className="flex justify-end items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500 mr-1">
            <path d="M8 12.6667L8 3.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33334 8.00001L8.00001 3.33334L12.6667 8.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-red-500 font-medium mr-1">{metrics.totalPedidos.percentage}%</span>
          <span className="text-gray-500 text-xs">da semana passada</span>
        </div>
      </div>
      
      {/* Pedidos cancelados */}
      <div className="bg-white rounded-lg p-4">
        <div className="text-gray-500 text-sm mb-2">Pedidos cancelados</div>
        <div className="text-3xl font-bold text-gray-700">{metrics.pedidosCancelados.value}</div>
        <div className="border-b border-gray-200 my-2"></div>
        <div className="flex justify-end items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500 mr-1">
            <path d="M8 12.6667L8 3.33334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.33334 8.00001L8.00001 3.33334L12.6667 8.00001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-red-500 font-medium mr-1">{metrics.pedidosCancelados.percentage}%</span>
          <span className="text-gray-500 text-xs">da semana passada</span>
        </div>
      </div>
    </div>
  )
}
