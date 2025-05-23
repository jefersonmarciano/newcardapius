"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useOrdersMetrics } from "@/hooks/useOrdersMetrics"
import { useOrdersList } from "@/hooks/useOrdersList"
import { useOrdersStore } from "@/hooks/useOrdersStore"
import Header from "@/components/layout/Header"
import OrderCard from "@/components/orders/OrderCard"

export default function PedidosV2Page() {
  const { metrics } = useOrdersMetrics()
  const { orders } = useOrdersList()
  const { pendingOrders } = useOrdersStore()
  const [activeTab, setActiveTab] = useState("todos")

  return (
    <div className="flex flex-col h-screen">
      <Header title="Pedidos" />
      <div className="flex-1 bg-gray-50 overflow-auto">
        {/* Metrics */}
        <div className="grid grid-cols-7 gap-4 p-4">
          {/* Hoje */}
          <div className="col-span-1 flex items-center justify-center h-[180px]">
            <div className="bg-orange-500 text-white rounded-xl flex flex-col items-center justify-center h-full w-full max-w-[100%] min-w-[100%]">
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.3333 1.66667V5.00001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 1.66667V5.00001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 8.33334H17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-lg font-bold">Hoje</span>
                </div>
                <div className="text-xs font-medium">{metrics.dataAtual}</div>
              </div>
            </div>
          </div>
          {/* Faturamento Hoje */}
          <div className="col-span-2 bg-white rounded-[7.5px] border border-[#EFEFEF] flex flex-col justify-center p-8 h-[180px]">
            <div className="text-left text-gray-500 text-2xl font-medium mb-4">Faturamento Hoje</div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-end gap-2">
                <span className="text-gray-700 text-2xl font-bold">R$</span>
                <span className="text-4xl font-extrabold text-gray-800">{metrics.faturamentoHoje.value}</span>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <img 
                    src="./vetores/Vectorblue.svg" 
                    alt="Tendência de alta" 
                    width={28} 
                    height={28} 
                    className="mr-1" 
                  />
                  <span className="text-blue-500 font-bold text-2xl mr-2">{metrics.faturamentoHoje.percentage}%</span>
                </div>
                <span className="text-gray-500 text-xl mt-1">da semana passada</span>
              </div>
            </div>
          </div>
          {/* Total de pedidos */}
          <div className="col-span-2 bg-white rounded-[7.5px] border border-[#EFEFEF] flex flex-col justify-center p-8 h-[180px]">
            <div className="text-left text-gray-500 text-2xl font-medium mb-4">Total de pedidos</div>
            <div className="flex items-center justify-between w-full">
              <span className="text-4xl font-extrabold text-gray-800">{metrics.totalPedidos.value}</span>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <img 
                    src="/vetores/VectorRed.svg" 
                    alt="Tendência de queda" 
                    width={28} 
                    height={28} 
                    className="mr-1" 
                  />
                  <span className="text-red-500 font-bold text-2xl mr-2">{metrics.totalPedidos.percentage}%</span>
                </div>
                <span className="text-gray-500 text-xl mt-1">da semana passada</span>
              </div>
            </div>
          </div>
          {/* Pedidos cancelados */}
          <div className="col-span-2 bg-white rounded-[7.5px] border border-[#EFEFEF] flex flex-col justify-center p-8 h-[180px]">
            <div className="text-left text-gray-500 text-2xl font-medium mb-4">Pedidos cancelados</div>
            <div className="flex items-center justify-between w-full">
              <span className="text-4xl font-extrabold text-gray-800">{metrics.pedidosCancelados.value}</span>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <img 
                    src="/vetores/VectorRed.svg" 
                    alt="Tendência de queda" 
                    width={28} 
                    height={28} 
                    className="mr-1" 
                  />
                  <span className="text-red-500 font-bold text-2xl mr-2">{metrics.pedidosCancelados.percentage}%</span>
                </div>
                <span className="text-gray-500 text-xl mt-1">da semana passada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4">
          <div className="flex border-b border-gray-200">
            <button
              className={`py-3 px-4 font-medium relative ${
                activeTab === "todos" ? "text-gray-800 border-b-2 border-orange-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("todos")}
            >
              Todos
            </button>
            <button
              className={`py-3 px-4 font-medium flex items-center gap-2 relative ${
                activeTab === "novos" ? "text-gray-800 border-b-2 border-orange-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("novos")}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 6.66667V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 13.3333H10.0083"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Novos
            </button>
            <button
              className={`py-3 px-4 font-medium flex items-center gap-2 relative ${
                activeTab === "preparando" ? "text-gray-800 border-b-2 border-orange-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("preparando")}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 6.66667V10L12.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Preparando
            </button>
            <button
              className={`py-3 px-4 font-medium flex items-center gap-2 relative ${
                activeTab === "enviado" ? "text-gray-800 border-b-2 border-orange-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("enviado")}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.6667 10H13.3333L11.6667 15.8333L8.33333 4.16667L6.66667 10H3.33333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Enviado
            </button>
            <button
              className={`py-3 px-4 font-medium flex items-center gap-2 relative ${
                activeTab === "finalizado" ? "text-gray-800 border-b-2 border-orange-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("finalizado")}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.6667 5.00001L7.5 14.1667L3.33333 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Finalizado
            </button>

            <div className="ml-auto flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input placeholder="Buscar pedido" className="pl-10 h-9 w-60" />
              </div>

              <button className="p-2 border border-gray-200 rounded-md bg-white">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 2.5H11.6667V8.33333H17.5V2.5Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 11.6667H11.6667V17.5H17.5V11.6667Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.33333 11.6667H2.5V17.5H8.33333V11.6667Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button className="p-2 border border-gray-200 rounded-md bg-white">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.66667 5H17.5"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66667 10H17.5"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.66667 15H17.5"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.5 5H2.50833"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.5 10H2.50833"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.5 15H2.50833"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Novos pedidos */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6.66667V10"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 13.3333H10.0083"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium">Novos pedidos</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6L8 10L12 6"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {pendingOrders.map((order, index) => (
              <OrderCard key={index} order={order} status="novo" />
            ))}
          </div>
        </div>

        {/* Preparando */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                stroke="#F97316"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6.66667V10L12.5 12.5"
                stroke="#F97316"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium">Preparando</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6L8 10L12 6"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {orders
              .filter((order) => order.status === "Preparando")
              .map((order, index) => (
                <OrderCard key={index} order={order} status="preparando" timeRange="18:30 - 19:30" />
              ))}
          </div>
        </div>

        {/* Enviados */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.6667 10H13.3333L11.6667 15.8333L8.33333 4.16667L6.66667 10H3.33333"
                stroke="#3B82F6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium">Enviados</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 6L8 10L12 6"
                stroke="#6B7280"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {orders
              .filter((order) => order.status === "Enviado")
              .map((order, index) => (
                <OrderCard key={index} order={order} status="enviado" />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
