"use client"

import { useOrdersList } from "./useOrdersList"

interface OrderOption {
  name: string
  price: number
}

interface OrderItem {
  quantity: number
  name: string
  price: number
  options?: OrderOption[]
}

interface Discount {
  type: "coupon" | "discount"
  code?: string
  description: string
  value: number
}

interface Address {
  street: string
  complement: string
}

interface ChatMessage {
  sender: "customer" | "establishment"
  text: string
  time: string
}

interface OrderDetail {
  id: string
  customerName: string
  time: string
  duration: string
  status: string
  estimatedDelivery: string
  itemCount: number
  total: number
  items: OrderItem[]
  notes?: string
  subtotal: number
  deliveryFee: number
  freeDelivery: boolean
  discounts?: Discount[]
  finalTotal: number
  address: Address
  deliveryNotes?: string
  chat: ChatMessage[]
}

// Dados complementares que serão adicionados aos pedidos
const defaultOrderDetails = {
  duration: "5min",
  estimatedDelivery: "14:10",
  notes: "Eu quero uma rota no meio pão, com pimenta.",
  subtotal: 0, // será calculado com base no pedido original
  deliveryFee: 10.0,
  freeDelivery: true,
  discounts: [
    { type: "coupon" as const, code: "#CUPOMCARNAVAL", description: "#CUPOMCARNAVAL", value: 14.9 },
    { type: "discount" as const, description: "10% off - 1º acesso", value: 10.9 },
  ],
  address: {
    street: "Rua conselheiro Saraiva, 72, - Parque ecológico - Salvador - Bahia 40270-550",
    complement: "Edif Maria das Glórias Próximo a panificadora Amor de Pão, na esquina da Dom João",
  },
  deliveryNotes: "Quando chegar na portaria, por favor me ligue. Pedirei por ameu filho descer",
  chat: [
    { sender: "customer" as const, text: "Gostaria de acrescentar um suco", time: "13:35" },
    { sender: "customer" as const, text: "E mais 2 talheres", time: "13:35" },
    { sender: "establishment" as const, text: "Tudo bem! qual suco?", time: "13:36" },
    { sender: "customer" as const, text: "Laranja", time: "13:36" },
  ],
}

export function useOrderDetails(orderId: string) {
  const { orders } = useOrdersList()
  
  // Encontrar o pedido com o ID correspondente
  const baseOrder = orders.find(order => order.id === orderId)
  
  if (!baseOrder) {
    return { order: null }
  }
  
  // Calcular o subtotal
  const subtotal = baseOrder.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  
  // Calcular o total final (subtotal + taxa de entrega - descontos)
  const discountTotal = defaultOrderDetails.discounts.reduce((sum, discount) => sum + discount.value, 0)
  const finalTotal = subtotal + defaultOrderDetails.deliveryFee - discountTotal
  
  // Criar o objeto completo do pedido com detalhes extras
  const order: OrderDetail = {
    id: baseOrder.id,
    customerName: baseOrder.customerName,
    time: baseOrder.time,
    status: baseOrder.status,
    itemCount: baseOrder.items.length,
    total: baseOrder.total,
    items: baseOrder.items.map(item => ({
      quantity: item.quantity,
      name: item.name,
      price: item.price,
    })),
    ...defaultOrderDetails,
    subtotal,
    finalTotal: Math.max(0, finalTotal),
  }
  
  return { order }
}
