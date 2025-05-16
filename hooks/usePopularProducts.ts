"use client"

import { atom, useAtom } from "jotai"
import type { Product } from "@/types/product"

const productsAtom = atom<Product[]>([
  {
    id: "1",
    name: "Durum Kebab - a moda da casa",
    price: 50.0,
    originalPrice: 50.0,
    discount: 15,
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kebab-SABVdcIKIecQICHf2AgVAHB7ZdxRr4.png",
    ordersToday: 2,
  },
  {
    id: "2",
    name: "Hamburguer nostradamos Duplo torre",
    price: 50.0,
    originalPrice: 50.0,
    discount: 15,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hambuger%20duplo%20torre-7T8pzcVymkYtBbRXkW4nGubGdCAI4b.png",
    ordersToday: 10,
  },
  {
    id: "3",
    name: "Suco detox elevador lacerda",
    price: 35.9,
    originalPrice: null,
    discount: 0,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suco%20detox%20elevador%20lacerda-2pyftSQgWbwcFk9DyIQFfaVSPhPVxL.png",
    ordersToday: 2,
  },
  {
    id: "4",
    name: "Pizza família - Calabresa e queijo",
    price: 50.0,
    originalPrice: 50.0,
    discount: 15,
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pizza%20calabresa%20e%20queijo-t33rovgEhpN7AYuNt5nRVu7kPNL3Tc.png",
    ordersToday: 1,
  },
])

export function usePopularProducts() {
  const [products, setProducts] = useAtom(productsAtom)

  return {
    products,
    setProducts,
  }
}
