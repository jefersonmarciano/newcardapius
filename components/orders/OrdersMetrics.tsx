"use client"

import { useOrdersMetrics } from "@/hooks/useOrdersMetrics"
import { Calendar } from "lucide-react"

export default function OrdersMetrics() {
  const { metrics } = useOrdersMetrics()

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {/* Card Hoje */}
      <div className="bg-orange-500 text-white rounded-lg p-4 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mb-2">
          <Calendar className="h-6 w-6 mr-2" />
          <span className="text-xl font-medium">Hoje</span>
        </div>
        <div className="text-sm">{metrics.dataAtual}</div>
      </div>

      {/* Card Faturamento Hoje */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-gray-500 text-sm mb-2">Faturamento Hoje</div>
        <div className="flex flex-col">
          <div className="flex items-start">
            <span className="text-gray-700 text-lg">R$</span>
            <span className="text-[40px] leading-tight font-bold text-gray-700">
              {metrics.faturamentoHoje.value.toLocaleString()}
            </span>
          </div>
          <div className="border-b border-gray-200 mt-1 mb-3"></div>
          <div className="flex justify-end items-center">
            <svg
              className="h-5 w-5 text-blue-500 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9L7 5M7 5L11 9M7 5V19"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 15L17 19M17 19L13 15M17 19V5"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-blue-500 font-medium mr-1">{metrics.faturamentoHoje.percentage}%</span>
            <span className="text-gray-500 text-sm">da semana passada</span>
          </div>
        </div>
      </div>

      {/* Card Total de pedidos */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-gray-500 text-sm mb-2">Total de pedidos</div>
        <div className="flex flex-col">
          <div className="text-[40px] leading-tight font-bold text-gray-700">{metrics.totalPedidos.value}</div>
          <div className="border-b border-gray-200 mt-1 mb-3"></div>
          <div className="flex justify-end items-center">
            <svg
              className="h-5 w-5 text-red-500 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 15L7 19M7 19L11 15M7 19V5"
                stroke="#EF4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 9L17 5M17 5L13 9M17 5V19"
                stroke="#EF4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-red-500 font-medium mr-1">{metrics.totalPedidos.percentage}%</span>
            <span className="text-gray-500 text-sm">da semana passada</span>
          </div>
        </div>
      </div>

      {/* Card Pedidos cancelados */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-gray-500 text-sm mb-2">Pedidos cancelados</div>
        <div className="flex flex-col">
          <div className="text-[40px] leading-tight font-bold text-gray-700">{metrics.pedidosCancelados.value}</div>
          <div className="border-b border-gray-200 mt-1 mb-3"></div>
          <div className="flex justify-end items-center">
            <svg
              className="h-5 w-5 text-red-500 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 15L7 19M7 19L11 15M7 19V5"
                stroke="#EF4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 9L17 5M17 5L13 9M17 5V19"
                stroke="#EF4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-red-500 font-medium mr-1">{metrics.pedidosCancelados.percentage}%</span>
            <span className="text-gray-500 text-sm">da semana passada</span>
          </div>
        </div>
      </div>
    </div>
  )
}
