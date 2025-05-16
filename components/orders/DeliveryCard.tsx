"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Order } from "@/types/order"

interface DeliveryCardProps {
  order: Order
}

export default function DeliveryCard({ order }: DeliveryCardProps) {
  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-medium">#{order.id}</span>
            <span className="text-gray-700">{order.customerName}</span>
          </div>
          <div className="flex items-center gap-1 text-orange-500">
            <span className="font-medium">{order.deliveryTime} min</span>
            <div className="text-orange-500">🔥</div>
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-1">Despachado há {order.dispatchedTime} min</div>
      </CardContent>
    </Card>
  )
}
