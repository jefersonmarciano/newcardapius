import { useState } from 'react'

export interface OrderItem {
  name: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  customerName: string
  items: OrderItem[]
  total: number
  timeInMinutes: number
}

export interface DeliveryOrder {
  id: string
  customerName: string
  dispatchedTime: string
  estimatedTime: number
}

export function useOrderPanelData() {
  const [pendingOrders] = useState<Order[]>([
    {
      id: "5089",
      customerName: "Allan Vieira",
      items: [
        { name: "coca cola 350ml", quantity: 10, price: 50.00 },
        { name: "Cheese burguer duplo melt", quantity: 1, price: 8.00 },
        { name: "Cheese burguer quarterão duplo", quantity: 1, price: 69.00 }
      ],
      total: 127.00,
      timeInMinutes: 5
    },
    {
      id: "5579",
      customerName: "Bla bla bla teste",
      items: [
        { name: "Cheese burguer duplo melt", quantity: 1, price: 8.00 },
        { name: "Cheese burguer quarterão duplo", quantity: 1, price: 69.00 }
      ],
      total: 77.00,
      timeInMinutes: 5
    },
    {
      id: "5580",
      customerName: "Maria Silva",
      items: [
        { name: "Pizza Margherita Grande", quantity: 1, price: 45.00 },
        { name: "Refrigerante 2L", quantity: 1, price: 12.00 }
      ],
      total: 57.00,
      timeInMinutes: 8
    },
    {
      id: "5581",
      customerName: "João Santos",
      items: [
        { name: "X-Tudo", quantity: 2, price: 60.00 },
        { name: "Batata Frita Grande", quantity: 1, price: 15.00 },
        { name: "Milk Shake Chocolate", quantity: 2, price: 30.00 }
      ],
      total: 105.00,
      timeInMinutes: 12
    },
    {
      id: "5582",
      customerName: "Pedro Oliveira",
      items: [
        { name: "Hot Dog Completo", quantity: 3, price: 45.00 },
        { name: "Guaraná Lata", quantity: 3, price: 15.00 }
      ],
      total: 60.00,
      timeInMinutes: 7
    }
  ])

  const [deliveryOrders] = useState<DeliveryOrder[]>([
    {
      id: "5089",
      customerName: "Telma Sena",
      dispatchedTime: "9 min",
      estimatedTime: 5
    },
    {
      id: "5089",
      customerName: "Rubem Carv.",
      dispatchedTime: "17 min",
      estimatedTime: 5
    },
    {
      id: "5583",
      customerName: "Ana Paula M.",
      dispatchedTime: "3 min",
      estimatedTime: 8
    },
    {
      id: "5584",
      customerName: "Carlos Eduardo",
      dispatchedTime: "12 min",
      estimatedTime: 4
    }
  ])

  return {
    pendingOrders,
    deliveryOrders
  }
} 