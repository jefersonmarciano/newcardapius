"use client"

import Image from "next/image"
import { usePromotionalBanners } from "@/hooks/usePromotionalBanners"
import { Card } from "@/components/ui/card"

export default function PromotionalBanners() {
  const { banners } = usePromotionalBanners()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {banners.map((banner, index) => (
        <Card key={index} className="overflow-hidden">
          <Image
            src={banner.imageUrl || "/placeholder.svg"}
            alt={banner.title}
            width={600}
            height={200}
            className="w-full h-auto"
          />
        </Card>
      ))}
    </div>
  )
}
