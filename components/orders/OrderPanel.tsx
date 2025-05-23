"use client"

import { useState } from "react"
import { useOrderPanelData } from "@/hooks/useOrderPanelData"
import { OrderHeader } from "./panels/OrderHeader"
import { OrderSearch } from "./panels/OrderSearch"
import { PendingOrders } from "./panels/PendingOrders"
import { DeliveryOrders } from "./panels/DeliveryOrders"

export default function OrderPanel() {
  const { pendingOrders, deliveryOrders } = useOrderPanelData()
  const [autoAccept, setAutoAccept] = useState(true)
  const [activeTab, setActiveTab] = useState("now") // "now" ou "preparing"
  const [expandedAccept, setExpandedAccept] = useState(true)
  const [expandedDelivery, setExpandedDelivery] = useState(true)

  return (
    <div className="w-96 bg-gray-50 border-l border-gray-200 flex flex-col rounded-[15px] gm overflow-hidden h-[calc(100vh-64px)] mt-4">
      <OrderHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <OrderSearch autoAccept={autoAccept} onAutoAcceptChange={setAutoAccept} />
      
      <div className="flex-1 overflow-y-auto scrollbar-hidden mx-4 mb-4 bg-white rounded-2xl">
        <div className="flex flex-col">
          <div className="max-h-[50%] overflow-y-auto">
            <PendingOrders
              orders={pendingOrders}
              expanded={expandedAccept}
              onToggleExpand={() => setExpandedAccept(!expandedAccept)}
            />
          </div>
          
          <div className="max-h-[50%] overflow-y-auto">
            <DeliveryOrders
              orders={deliveryOrders}
              expanded={expandedDelivery}
              onToggleExpand={() => setExpandedDelivery(!expandedDelivery)}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 