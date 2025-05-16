"use client"

import { useState } from "react"
import { useOrdersStore } from "@/hooks/useOrdersStore"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Order } from "@/types/order"
import OrderDetailsModal from "./OrderDetailsModal"

interface OrderCardProps {
  order: Order
  status?: "novo" | "preparando" | "enviado"
  timeRange?: string
}

export default function OrderCard({ order, status = "novo", timeRange }: OrderCardProps) {
  const { acceptOrder } = useOrdersStore()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card className="bg-white">
        <CardContent className="p-0">
          <div className="flex items-center justify-between p-4 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 font-medium">#{order.id}</span>
              <span className="text-gray-700">{order.customerName}</span>
            </div>
            <div className="bg-gray-100 text-gray-700 rounded-md px-2 py-1 text-xs flex flex-col items-center">
              <span className="font-bold">5</span>
              <span className="text-[10px]">min</span>
            </div>
          </div>

          <div className="px-4 py-2">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-1">
                <div className="text-sm text-gray-700">
                  {item.quantity}x {item.name}
                </div>
                <div className="text-sm text-gray-700">R$ {item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div className="mx-4 my-2 border-t border-dashed border-gray-200"></div>

          <div className="px-4 py-2 flex items-center justify-between">
            <div className="font-medium text-gray-700">Total</div>
            <div className="font-medium text-gray-700">R$ {order.total.toFixed(2)}</div>
          </div>

          <div className="p-4 pt-2">
            {status === "novo" && (
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium"
                onClick={() => acceptOrder(order.id)}
              >
                Aceitar pedido
              </Button>
            )}
            
            {(status === "preparando" || status === "enviado") && (
              <Button
                className={`w-full ${
                  status === "preparando"
                    ? "bg-orange-50 hover:bg-orange-100 text-orange-500"
                    : status === "enviado"
                      ? "bg-[#3F7CFF] hover:bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => setIsModalOpen(true)}
              >
                Ver detalhes
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {(status === "preparando" || status === "enviado") && (
        <OrderDetailsModal
          orderId={order.id}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}
