"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, ChevronRight, Eye, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useOrdersList } from "@/hooks/useOrdersList"
import OrderDetailsModal from "./OrderDetailsModal"
import { useOrdersFilter } from "@/hooks/useOrdersFilter"

export default function OrdersList() {
  const router = useRouter()
  const { orders } = useOrdersList()
  const { isFiltered } = useOrdersFilter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null)

  const handleOpenModal = (orderId: string) => {
    setSelectedOrderId(orderId)
    setIsModalOpen(true)
  }

  const handleOpenFilterPage = () => {
    router.push("/pedidos/filtros")
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-medium">Lista de Pedidos</h2>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <p className="text-sm text-gray-500">Todos os pedidos feitos para o estabelecimento</p>
        </div>

        <div className="flex gap-4">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input placeholder="Buscar pedido" className="pl-10 bg-white rounded-md border-gray-200" />
          </div>
          <Button
            variant="outline"
            className={`flex items-center gap-2 ${isFiltered ? "border-orange-500 text-orange-500" : ""}`}
            onClick={handleOpenFilterPage}
          >
            <Filter size={18} />
            <span>Filtros</span>
            {isFiltered && <Badge className="ml-1 bg-orange-500 text-white">Ativos</Badge>}
          </Button>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Cabeçalho da tabela */}
          <div className="grid grid-cols-7 bg-orange-50 p-3 text-sm font-medium text-gray-700">
            <div className="flex items-center gap-1">
              Pedido
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-1">
              Cliente
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-1 col-span-2">
              Descrição
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-1">
              Valor
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-1">
              Hora
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
            <div className="flex items-center gap-1 justify-between">
              <div className="flex items-center gap-1">
                Status
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
              <div>Ação</div>
            </div>
          </div>

          {/* Linhas da tabela */}
          <div className="divide-y divide-gray-200">
            {orders.map((order) => (
              <div key={order.id} className="grid grid-cols-7 p-3 text-sm hover:bg-gray-50">
                <div className="text-gray-700">{order.id}</div>
                <div className="text-gray-700">{order.customerName}</div>
                <div className="col-span-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="text-gray-700">
                      {item.quantity}x {item.name}
                    </div>
                  ))}
                </div>
                <div className="text-gray-700">R$ {order.total.toFixed(2)}</div>
                <div className="text-gray-700">{order.time}</div>
                <div className="flex items-center justify-between">
                  <Badge
                    className={`
                    ${
                      order.status === "Preparando"
                        ? "bg-orange-100 text-orange-500 hover:bg-orange-100"
                        : order.status === "Enviado"
                          ? "bg-blue-100 text-blue-500 hover:bg-blue-100"
                          : "bg-green-100 text-green-500 hover:bg-green-100"
                    }
                  `}
                  >
                    {order.status}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500"
                    onClick={() => handleOpenModal(order.id)}
                  >
                    <Eye className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Paginação */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <Button className="w-8 h-8 p-0 bg-orange-500 hover:bg-orange-600">1</Button>
        <Button variant="outline" className="w-8 h-8 p-0">
          2
        </Button>
        <Button variant="outline" className="w-8 h-8 p-0">
          3
        </Button>
        <Button variant="outline" className="flex items-center gap-1 px-3">
          Próxima
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Modal de Detalhes do Pedido */}
      {isModalOpen && selectedOrderId && (
        <OrderDetailsModal orderId={selectedOrderId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}
