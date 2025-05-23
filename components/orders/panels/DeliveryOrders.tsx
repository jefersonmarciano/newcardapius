import { ChevronDown } from "lucide-react"
import { DeliveryOrder } from "@/hooks/useOrderPanelData"

interface DeliveryOrdersProps {
  orders: DeliveryOrder[]
  expanded: boolean
  onToggleExpand: () => void
}

export function DeliveryOrders({ orders, expanded, onToggleExpand }: DeliveryOrdersProps) {
  return (
    <div className="p-4 bg-[#F3F3F3] border-t border-gray-200">
      <div
        className="flex items-center justify-between mb-2 cursor-pointer"
        onClick={onToggleExpand}
      >
        <div className="flex items-center gap-2">
          <span className="font-medium">Em entrega</span>
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
            <div key={order.id} className="bg-white rounded-lg p-3 mb-3 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-500 font-medium">#{order.id}</span>
                  <span>{order.customerName}</span>
                </div>
                <div className="text-sm text-gray-500">Despachado há {order.dispatchedTime}</div>
              </div>
              <div className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 11H9L12 14L15 11Z" fill="#F97316" />
                </svg>
                <div className="text-orange-500">{order.estimatedTime} min</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 