"use client"

import { useRecentOrders } from "@/hooks/useRecentOrders"
import { ArrowRight } from "lucide-react"
import ProductCard from "../products/ProductCard"

export default function RecentOrders() {
  const { orders } = useRecentOrders()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Últimos pedidos</h2>
        <button className="text-orange-500 flex items-center text-sm">
          Ver mais <ArrowRight size={16} className="ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {orders.map((order) => (
          <ProductCard key={order.id} product={order.product} />
        ))}
      </div>
    </div>
  )
}
