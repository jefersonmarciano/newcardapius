"use client"

import { useOrdersStore } from "@/hooks/useOrdersStore"
import type { Order } from "@/types/order"
import { Clock } from "lucide-react"

interface OrderCardProps {
  order: Order
  status: "novo" | "preparando" | "enviado"
  timeRange?: string
}

export default function OrderCard({ order, status, timeRange }: OrderCardProps) {
  const { acceptOrder } = useOrdersStore()

  return (
    <div
      className={`bg-white rounded-lg border ${status === "enviado" ? "border-blue-200" : "border-orange-200"} overflow-hidden`}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            {status === "novo" && (
              <div className="inline-block bg-orange-100 text-orange-500 text-xs px-2 py-0.5 rounded">Novo</div>
            )}
            {status === "preparando" && (
              <div className="inline-block bg-orange-100 text-orange-500 text-xs px-2 py-0.5 rounded">Preparando</div>
            )}
            {status === "enviado" && (
              <div className="inline-block bg-blue-100 text-blue-500 text-xs px-2 py-0.5 rounded">Enviado</div>
            )}
          </div>
          {(status === "novo" || status === "preparando") && (
            <div className="bg-white border border-gray-200 rounded-md w-8 h-8 flex items-center justify-center text-orange-500 font-medium">
              5<div className="text-[8px] text-gray-500 -mt-3">min</div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 text-gray-700">
          <span className="font-medium">#{order.id}</span>
          <span className="text-gray-500">{order.customerName}</span>
        </div>

        {status === "preparando" && timeRange && (
          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
            <Clock className="h-3.5 w-3.5 text-orange-500" />
            {timeRange}
          </div>
        )}

        <div className="mt-3 space-y-1">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-gray-700">
                {item.quantity}x {item.name}
              </span>
              <span className="text-gray-700">R$ {item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="mt-2">
          <button className="text-orange-500 text-sm flex items-center">
            Ver mais{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="border-t border-dashed border-gray-200 my-3"></div>

        {status === "novo" && (
          <>
            <div className="flex justify-between items-center text-sm">
              <div className="text-gray-700">Frete</div>
              <div className="text-gray-700">R$ 5.00</div>
            </div>

            <div className="flex justify-between items-center text-sm mt-1">
              <div className="text-gray-700">Total + Frete</div>
              <div className="text-orange-500 font-medium">R$ 5.00</div>
            </div>
          </>
        )}

        {(status === "preparando" || status === "enviado") && (
          <div className="flex justify-between items-center text-sm">
            <div className="text-gray-700">Total</div>
            <div className="text-gray-700 font-medium">R$ 50.00</div>
          </div>
        )}
      </div>

      {status === "novo" && (
        <button
          className="w-[calc(100%-16px)] bg-orange-500 hover:bg-orange-600 text-white py-3 font-medium rounded-md mx-2 mb-2"
          onClick={() => acceptOrder(order.id)}
        >
          Aceitar pedido
        </button>
      )}

      {(status === "preparando" || status === "enviado") && (
        <button
          className={`w-[calc(100%-16px)] py-3 font-medium rounded-md mx-2 mb-2 ${
            status === "preparando"
              ? "bg-orange-50 hover:bg-orange-100 text-orange-500"
              : status === "enviado"
                ? "bg-[#3F7CFF] hover:bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          Ver detalhes
        </button>
      )}
    </div>
  )
}
