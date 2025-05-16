import Header from "@/components/layout/Header"
import OrdersFilterContent from "@/components/orders/OrdersFilterContent"

export default function PedidosFiltrosPage() {
  return (
    <div className="flex flex-col h-full">
      <Header title="Filtrar Pedidos" />
      <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)]">
        <div className="p-4 space-y-6">
          <OrdersFilterContent />
        </div>
      </div>
    </div>
  )
}
