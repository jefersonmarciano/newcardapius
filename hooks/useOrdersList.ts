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
    id: "5579",
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
    id: "5579",
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
    id: "5579",
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
    id: "5579",
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
    id: "5579",
    customerName: "Clarissa Gomes",
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
    id: "5579",
    customerName: "Clarissa Gomes",
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
    id: "5579",
    customerName: "Clarissa Gomes",
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
    id: "5579",
    customerName: "Clarissa Gomes",
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
