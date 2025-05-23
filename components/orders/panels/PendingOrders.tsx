import { ChevronDown } from "lucide-react"
import { Order } from "@/hooks/useOrderPanelData"

interface PendingOrdersProps {
  orders: Order[]
  expanded: boolean
  onToggleExpand: () => void
}

export function PendingOrders({ orders, expanded, onToggleExpand }: PendingOrdersProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <div className="p-4 bg-[#F3F3F3]">
      <div
        className="flex items-center justify-between mb-2 cursor-pointer"
        onClick={onToggleExpand}
      >
        <div className="flex items-center gap-2">
          <span className="font-medium">Aceitar pedidos</span>
          <div className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {orders.length}
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-gray-500 transition-transform ${expanded ? "" : "transform rotate-180"}`}
        />
      </div>

      {expanded && (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 font-medium">#{order.id}</span>
                  <span>{order.customerName}</span>
                </div>
                <div className="bg-gray-100 text-gray-700 rounded-md px-2 py-1 text-xs flex flex-col items-center">
                  <span className="font-bold">{order.timeInMinutes}</span>
                  <span className="text-[10px]">min</span>
                </div>
              </div>

              <div className="space-y-1 mb-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.quantity}x {item.name}</span>
                    <span>{formatPrice(item.price)}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mb-3">
                <span className="font-medium">Total</span>
                <span className="font-medium">{formatPrice(order.total)}</span>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-md">
                Aceitar pedido
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 