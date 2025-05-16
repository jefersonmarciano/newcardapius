"use client"

import { atom, useAtom } from "jotai"
import type { Order } from "@/types/order"

const pendingOrdersAtom = atom<Order[]>([
  {
    id: "5579",
    customerName: "Clarissa Gomes",
    total: 84.0,
    items: [
      { name: "Cheese burguer duplo melt...", quantity: 1, price: 8.0 },
      { name: "Cheese burguer quarterão dup...", quantity: 1, price: 69.0 },
      { name: "Águas com gás", quantity: 2, price: 7.0 },
    ],
  },
  {
    id: "5579",
    customerName: "Clarissa Gomes",
    total: 84.0,
    items: [
      { name: "Cheese burguer duplo melt...", quantity: 1, price: 8.0 },
      { name: "Cheese burguer quarterão dup...", quantity: 1, price: 69.0 },
      { name: "Águas com gás", quantity: 2, price: 7.0 },
    ],
  },
  {
    id: "5579",
    customerName: "Clarissa Gomes",
    total: 84.0,
    items: [
      { name: "Cheese burguer duplo melt...", quantity: 1, price: 8.0 },
      { name: "Cheese burguer quarterão dup...", quantity: 1, price: 69.0 },
      { name: "Águas com gás", quantity: 2, price: 7.0 },
    ],
  },
  {
    id: "5579",
    customerName: "Clarissa Gomes",
    total: 84.0,
    items: [
      { name: "Cheese burguer duplo melt...", quantity: 1, price: 8.0 },
      { name: "Cheese burguer quarterão dup...", quantity: 1, price: 69.0 },
      { name: "Águas com gás", quantity: 2, price: 7.0 },
    ],
  },
])

const inDeliveryOrdersAtom = atom<Order[]>([
  {
    id: "5089",
    customerName: "Telma Sena",
    total: 60.0,
    deliveryTime: 5,
    dispatchedTime: 9,
    items: [],
  },
  {
    id: "5089",
    customerName: "Rubem Carv.",
    total: 60.0,
    deliveryTime: 5,
    dispatchedTime: 17,
    items: [],
  },
])

export function useOrdersStore() {
  const [pendingOrders, setPendingOrders] = useAtom(pendingOrdersAtom)
  const [inDeliveryOrders, setInDeliveryOrders] = useAtom(inDeliveryOrdersAtom)

  const acceptOrder = (orderId: string) => {
    const orderIndex = pendingOrders.findIndex((order) => order.id === orderId)

    if (orderIndex !== -1) {
      const order = pendingOrders[orderIndex]
      const newPendingOrders = [...pendingOrders]
      newPendingOrders.splice(orderIndex, 1)

      setPendingOrders(newPendingOrders)

      // Adiciona o pedido à lista de pedidos em entrega
      const newDeliveryOrder = {
        ...order,
        deliveryTime: 5,
        dispatchedTime: 0,
      }

      setInDeliveryOrders([...inDeliveryOrders, newDeliveryOrder])
    }
  }

  return {
    pendingOrders,
    inDeliveryOrders,
    acceptOrder,
  }
}
