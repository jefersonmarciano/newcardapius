"use client"

import { atom, useAtom } from "jotai"

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

const orderDetailsAtom = atom<Record<string, OrderDetail>>({
  "5579": {
    id: "5697",
    customerName: "Luciano França",
    time: "13:23",
    duration: "5min",
    status: "Pedido em preparo",
    estimatedDelivery: "14:10",
    itemCount: 3,
    total: 54.4,
    items: [
      { quantity: 1, name: "Refrigerante coca-cola", price: 8.5 },
      {
        quantity: 1,
        name: "Pizza de calabresa - Família",
        price: 32.0,
        options: [
          { name: "bacon extra", price: 13.0 },
          { name: "borda recheada", price: 19.9 },
        ],
      },
    ],
    notes: "Eu quero uma rota no meio pão, com pimenta.",
    subtotal: 54.4,
    deliveryFee: 10.0,
    freeDelivery: true,
    discounts: [
      { type: "coupon", code: "#CUPOMCARNAVAL", description: "#CUPOMCARNAVAL", value: 14.9 },
      { type: "coupon", code: "#CUPOMCARNAVAL", description: "#CUPOMCARNAVAL", value: 17.2 },
      { type: "discount", description: "10% off - 1º acesso", value: 10.9 },
    ],
    finalTotal: 79.4,
    address: {
      street: "Rua conselheiro Saraiva, 72, - Parque ecológico - Salvador - Bahia 40270-550",
      complement: "Edif Maria das Glórias Próximo a panificadora Amor de Pão, na esquina da Dom João",
    },
    deliveryNotes: "Quando chegar na portaria, por favor me ligue. Pedirei por ameu filho descer",
    chat: [
      { sender: "customer", text: "Gostaria de acrescentar um suco", time: "13:35" },
      { sender: "customer", text: "E mais 2 talheres", time: "13:35" },
      { sender: "establishment", text: "Tudo bem! qual suco?", time: "13:36" },
      { sender: "customer", text: "Laranja", time: "13:36" },
    ],
  },
})

export function useOrderDetails(orderId: string) {
  const [orderDetails] = useAtom(orderDetailsAtom)

  return {
    order: orderDetails[orderId],
  }
}
