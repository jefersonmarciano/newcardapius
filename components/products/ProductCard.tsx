"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />

        {product.discount > 0 && <Badge className="absolute top-2 left-2 bg-green-500">{product.discount}% Off</Badge>}

        <button
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart size={18} className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"} />
        </button>
      </div>

      <CardContent className="p-3">
        <h3 className="font-medium text-sm">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">R$ {product.originalPrice.toFixed(2)}</span>
          )}
          <span className="text-orange-500 font-bold">R$ {product.price.toFixed(2)}</span>
        </div>
        <div className="text-xs text-gray-500 mt-2">{product.ordersToday} pedidos hoje</div>
      </CardContent>
    </Card>
  )
}
