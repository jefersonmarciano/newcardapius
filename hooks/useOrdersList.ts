"use client"

import { atom, useAtom } from "jotai"

interface OrderListItem {
  id: string
  customerName: string
  items: {
    quantity: number
    name: string
    price: number
  }[]
  total: number
  time: string
  status: "Preparando" | "Enviado" | "Finalizado"
}

const ordersListAtom = atom<OrderListItem[]>([
  {
    id: "5570",
    customerName: "Fon",
    items: [
      { quantity: 1, name: "Cheese burguer duplo melt...", price: 8.0 },
      { quantity: 1, name: "Cheese burguer quarterão dup...", price: 69.0 },
      { quantity: 2, name: "Águas com gás", price: 7.0 },
    ],
    total: 84.0,
    time: "09:45:32",
    status: "Preparando",
  },
  {
    id: "5571",
    customerName: "Sanfoneiro Louco",
    items: [
      { quantity: 1, name: "Cheese burguer duplo melt...", price: 8.0 },
      { quantity: 1, name: "Cheese burguer quarterão dup...", price: 69.0 },
      { quantity: 2, name: "Águas com gás", price: 7.0 },
    ],
    total: 84.0,
    time: "09:45:32",
    status: "Preparando",
  },
  {
    id: "5572",
    customerName: "Clarissa Gomes",
    items: [
      { quantity: 1, name: "Cheese burguer duplo melt...", price: 8.0 },
      { quantity: 1, name: "Cheese burguer quarterão dup...", price: 69.0 },
      { quantity: 2, name: "Águas com gás", price: 7.0 },
    ],
    total: 84.0,
    time: "09:45:32",
    status: "Preparando",
  },
  {
    id: "5573",
    customerName: "José Silva",
    items: [
      { quantity: 1, name: "Cheese burguer duplo melt...", price: 8.0 },
      { quantity: 1, name: "Cheese burguer quarterão dup...", price: 69.0 },
      { quantity: 2, name: "Águas com gás", price: 7.0 },
    ],
    total: 84.0,
    time: "09:45:32",
    status: "Preparando",
  },
  {
    id: "5574",
    customerName: "Maria Santos",
    items: [
      { quantity: 1, name: "Cheese burguer duplo melt...", price: 8.0 },
      { quantity: 1, name: "Cheese burguer quarterão dup...", price: 69.0 },
      { quantity: 2, name: "Águas com gás", price: 7.0 },
    ],
    total: 84.0,
    time: "09:45:32",
    status: "Enviado",
  },
  {
    id: "5575",
    customerName: "Pedro Oliveira",
    items: [
      { quantity: 1, name: "Cheese burguer duplo melt...", price: 8.0 },
      { quantity: 1, name: "Cheese burguer quarterão dup...", price: 69.0 },
      { quantity: 2, name: "Águas com gás", price: 7.0 },
    ],
    total: 84.0,
    time: "09:45:32",
    status: "Enviado",
  },
  {
    id: "5576",
    customerName: "Ana Costa",
    items: [
      { quantity: 1, name: "Cheese burguer duplo melt...", price: 8.0 },
      { quantity: 1, name: "Cheese burguer quarterão dup...", price: 69.0 },
      { quantity: 2, name: "Águas com gás", price: 7.0 },
    ],
    total: 84.0,
    time: "09:45:32",
    status: "Enviado",
  },
  {
    id: "5577",
    customerName: "Rafael Souza",
    items: [
      { quantity: 1, name: "Cheese burguer duplo melt...", price: 8.0 },
      { quantity: 1, name: "Cheese burguer quarterão dup...", price: 69.0 },
      { quantity: 2, name: "Águas com gás", price: 7.0 },
    ],
    total: 84.0,
    time: "09:45:32",
    status: "Enviado",
  },
])

export function useOrdersList() {
  const [orders, setOrders] = useAtom(ordersListAtom)

  return {
    orders,
    setOrders,
  }
}
