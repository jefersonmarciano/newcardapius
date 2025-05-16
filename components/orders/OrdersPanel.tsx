"use client"

import { useState } from "react"
import { useOrdersStore } from "@/hooks/useOrdersStore"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import CollapsibleSection from "./CollapsibleSection"
import OrderCard from "./OrderCard"
import DeliveryCard from "./DeliveryCard"

export default function OrdersPanel() {
  const { pendingOrders, inDeliveryOrders } = useOrdersStore()
  const [autoAccept, setAutoAccept] = useState(true)
  const [activeTab, setActiveTab] = useState("now") // "now" or "preparing"

  return (
    <div className="w-96 bg-gray-50 border-l border-gray-200 flex flex-col rounded-[15px] overflow-hidden h-[calc(100vh-64px)]">
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
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-md flex items-center justify-between min-w-[150px]">
            <span className="text-gray-500">Filtros</span>
            <ChevronDown size={16} className="text-orange-500" />
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

      {/* Main content with rounded corners */}
      <div className="flex-1 overflow-y-auto mx-4 mb-4 bg-white rounded-2xl">
        <div className="flex flex-col">
          {/* Pending Orders Section */}
          <CollapsibleSection title="Aceitar pedidos" count={pendingOrders.length} defaultOpen={true}>
            <div className="space-y-4 p-4 bg-[#F3F3F3]">
              {pendingOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          </CollapsibleSection>

          {/* In Delivery Section */}
          <CollapsibleSection title="Em entrega" count={inDeliveryOrders.length} defaultOpen={false}>
            <div className="space-y-4 p-4 bg-[#F3F3F3]">
              {inDeliveryOrders.map((order) => (
                <DeliveryCard key={order.id} order={order} />
              ))}
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  )
}
