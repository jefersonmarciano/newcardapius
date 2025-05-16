"use client"

import { atom, useAtom } from "jotai"
import type { Product } from "@/types/product"

interface OrderProduct {
  id: string
  product: Product
}

const ordersAtom = atom<OrderProduct[]>([
  {
    id: "1",
    product: {
      id: "5",
      name: "Kebab de frango com molho de iogurte",
      price: 27.9,
      originalPrice: null,
      discount: 0,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kebab%20frango-DOzqljxVVXPufjymPr4BUtiKA78mAv.png",
      ordersToday: 0,
    },
  },
  {
    id: "2",
    product: {
      id: "6",
      name: "Yakisoba tradicional",
      price: 75.0,
      originalPrice: null,
      discount: 0,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yakisoba%20tradicional-gpG0UmFlew5nPdK2zPKNbq2AvjdRUl.png",
      ordersToday: 0,
    },
  },
  {
    id: "3",
    product: {
      id: "7",
      name: "Suco detox elevador lacerda",
      price: 35.9,
      originalPrice: null,
      discount: 0,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suco%20detox%20elevador%20lacerda-2pyftSQgWbwcFk9DyIQFfaVSPhPVxL.png",
      ordersToday: 0,
    },
  },
  {
    id: "4",
    product: {
      id: "8",
      name: "Pizza napoletana - Italy perazzo",
      price: 19.0,
      originalPrice: 50.0,
      discount: 15,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pizza%20napoleatana-WdkyHSWUKusZk98lkuBAECeo0ctO0I.png",
      ordersToday: 0,
    },
  },
])

export function useRecentOrders() {
  const [orders, setOrders] = useAtom(ordersAtom)

  return {
    orders,
    setOrders,
  }
}
