import type { OrderItem as OrderItemType } from "@/types/order"

interface OrderItemProps {
  item: OrderItemType
}

export default function OrderItem({ item }: OrderItemProps) {
  return (
    <div className="flex items-center justify-between py-1">
      <div className="text-sm text-gray-700">
        {item.quantity}x {item.name}
      </div>
      <div className="text-sm text-gray-700">R$ {item.price.toFixed(2)}</div>
    </div>
  )
}
