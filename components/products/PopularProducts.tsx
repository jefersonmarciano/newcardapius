"use client"

import { usePopularProducts } from "@/hooks/usePopularProducts"
import { ArrowRight } from "lucide-react"
import ProductCard from "./ProductCard"

export default function PopularProducts() {
  const { products } = usePopularProducts()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Produtos mais pedidos</h2>
        <button className="text-orange-500 flex items-center text-sm">
          Ver mais <ArrowRight size={16} className="ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
