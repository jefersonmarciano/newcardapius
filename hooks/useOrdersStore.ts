"use client"

import { useOrdersList } from "./useOrdersList"
import type { Order } from "@/types/order"

export function useOrdersStore() {
  const { orders, setOrders } = useOrdersList()

  // Filtrar pedidos baseados no status
  const pendingOrders = orders
    .filter(order => order.status === "Preparando")
    .map(order => ({
      id: order.id,
      customerName: order.customerName,
      total: order.total,
      items: order.items
    })) as Order[]

  const inDeliveryOrders = orders
    .filter(order => order.status === "Enviado")
    .map(order => ({
      id: order.id,
      customerName: order.customerName,
      total: order.total,
      deliveryTime: 5, // Valor padrão
      dispatchedTime: 9, // Valor padrão
      items: order.items
    })) as Order[]

  const acceptOrder = (orderId: string) => {
    setOrders(
      orders.map(order => 
        order.id === orderId 
          ? { ...order, status: "Enviado" } 
          : order
      )
    )
  }

  return {
    pendingOrders,
    inDeliveryOrders,
    acceptOrder,
  }
}
