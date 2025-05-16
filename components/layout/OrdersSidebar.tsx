"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useOrdersStore } from "@/hooks/useOrdersStore"

export default function OrdersSidebar() {
  const { pendingOrders, inDeliveryOrders } = useOrdersStore()
  const [autoAccept, setAutoAccept] = useState(true)
  const [activeTab, setActiveTab] = useState("now") // "now" ou "preparing"
  const [expandedAccept, setExpandedAccept] = useState(true)
  const [expandedDelivery, setExpandedDelivery] = useState(true)

  return (
    <div className="w-96 bg-white border-l border-gray-200 flex flex-col h-full">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-4 text-center font-medium relative ${
            activeTab === "now" ? "text-gray-800" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("now")}
        >
          Agora
          {activeTab === "now" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"></div>}
        </button>
        <button
          className={`flex-1 py-4 text-center font-medium relative ${
            activeTab === "preparing" ? "text-gray-800" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("preparing")}
        >
          Preparando
          {activeTab === "preparing" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"></div>}
        </button>
      </div>

      {/* Search and filters */}
      <div className="p-4 space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input placeholder="Buscar pedido" className="pl-10 bg-white rounded-md border-gray-200" />
          </div>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-md flex items-center justify-between min-w-[100px]">
            <span className="text-gray-500">Filtros</span>
            <ChevronDown size={16} className="text-orange-500 ml-2" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-700">Aceitar pedidos automaticamente</span>
          <Switch
            checked={autoAccept}
            onCheckedChange={setAutoAccept}
            className="data-[state=checked]:bg-teal-400 data-[state=checked]:text-white"
          />
        </div>
      </div>

      {/* Pedidos para aceitar */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 bg-gray-50">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => setExpandedAccept(!expandedAccept)}
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">Aceitar pedidos</span>
              <div className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                2
              </div>
            </div>
            <ChevronDown
              size={20}
              className={`text-gray-500 transition-transform ${expandedAccept ? "" : "transform rotate-180"}`}
            />
          </div>

          {expandedAccept && (
            <>
              {/* Pedido 1 */}
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 font-medium">#5089</span>
                    <span>Allan Vieira</span>
                  </div>
                  <div className="bg-gray-100 text-gray-700 rounded-md px-2 py-1 text-xs flex flex-col items-center">
                    <span className="font-bold">5</span>
                    <span className="text-[10px]">min</span>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex justify-between text-sm">
                    <span>10x coca cola 350ml</span>
                    <span>R$ 50.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>1x Cheese burguer duplo melt...</span>
                    <span>R$ 8.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>1x Cheese burguer quarterão dup...</span>
                    <span>R$ 69</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">R$ 50.00</span>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md">
                  Aceitar pedido
                </button>
              </div>

              {/* Pedido 2 */}
              <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 font-medium">#5579</span>
                    <span>Bla bla bla teste</span>
                  </div>
                  <div className="bg-gray-100 text-gray-700 rounded-md px-2 py-1 text-xs flex flex-col items-center">
                    <span className="font-bold">5</span>
                    <span className="text-[10px]">min</span>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex justify-between text-sm">
                    <span>1x Cheese burguer duplo melt...</span>
                    <span>R$ 8.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>1x Cheese burguer quarterão dup...</span>
                    <span>R$ 69</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">R$ 50.00</span>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md">
                  Aceitar pedido
                </button>
              </div>
            </>
          )}
        </div>

        {/* Pedidos em entrega */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => setExpandedDelivery(!expandedDelivery)}
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">Em entrega</span>
              <div className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                2
              </div>
            </div>
            <ChevronDown
              size={20}
              className={`text-gray-500 transition-transform ${expandedDelivery ? "" : "transform rotate-180"}`}
            />
          </div>

          {expandedDelivery && (
            <>
              {/* Entrega 1 */}
              <div className="bg-white rounded-lg p-3 mb-3 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 font-medium">#5089</span>
                    <span>Telma Sena</span>
                  </div>
                  <div className="text-sm text-gray-500">Despachado há 9 min</div>
                </div>
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 11H9L12 14L15 11Z" fill="#F97316" />
                  </svg>
                  <div className="text-orange-500">5 min</div>
                </div>
              </div>

              {/* Entrega 2 */}
              <div className="bg-white rounded-lg p-3 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-500 font-medium">#5089</span>
                    <span>Rubem Carv.</span>
                  </div>
                  <div className="text-sm text-gray-500">Despachado há 17 min</div>
                </div>
                <div className="flex items-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 11H9L12 14L15 11Z" fill="#F97316" />
                  </svg>
                  <div className="text-orange-500">5 min</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
