"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Printer, MapPin, MessageCircle, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useOrderDetails } from "@/hooks/useOrderDetails"

interface OrderDetailsModalProps {
  orderId: string
  isOpen: boolean
  onClose: () => void
}

export default function OrderDetailsModal({ orderId, isOpen, onClose }: OrderDetailsModalProps) {
  const { order } = useOrderDetails(orderId)
  const [message, setMessage] = useState("")

  if (!order) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <div>
            <DialogTitle className="text-xl">{order.customerName}</DialogTitle>
            <div className="text-sm text-gray-500">
              Pedido #{order.id} · Feito às {order.time} · {order.duration}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Printer className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Entrega prevista:</span>
            <span className="text-sm font-medium">{order.estimatedDelivery}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{order.itemCount} pedidos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Total:</span>
            <span className="text-sm font-medium">R$ {order.total.toFixed(2)}</span>
          </div>
          <div className="ml-auto">
            <Button className="bg-orange-500 hover:bg-orange-600">Despachar pedido</Button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium mb-2">Itens do pedido</h3>
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div className="flex items-start gap-2">
                  <span className="text-sm text-gray-500">{item.quantity}x</span>
                  <div>
                    <div className="text-sm">{item.name}</div>
                    {item.options &&
                      item.options.map((option, idx) => (
                        <div key={idx} className="text-sm text-gray-500 flex items-center gap-1 ml-4">
                          <span className="text-xs">•</span>
                          <span>{option.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="text-sm">R$ {item.price.toFixed(2)}</div>
              </div>
            ))}
          </div>

          {order.notes && (
            <div className="mt-4 bg-blue-50 p-3 rounded-md flex items-start gap-2">
              <MessageCircle className="h-4 w-4 text-blue-500 mt-0.5" />
              <div className="text-sm text-gray-700">{order.notes}</div>
            </div>
          )}
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>R$ {order.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <span>Frete</span>
              {order.freeDelivery && (
                <Badge variant="outline" className="text-green-500 bg-green-50 border-green-100">
                  Grátis
                </Badge>
              )}
            </div>
            <span>R$ {order.deliveryFee.toFixed(2)}</span>
          </div>

          {order.discounts && order.discounts.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Descontos</h3>
              {order.discounts.map((discount, index) => (
                <div key={index} className="flex justify-between items-center mt-2">
                  <div>
                    <Badge
                      variant="outline"
                      className={`${discount.type === "coupon" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"}`}
                    >
                      {discount.type === "coupon" ? "Cupom" : "Desconto"}
                    </Badge>
                    <span className="ml-2 text-sm">{discount.description}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">- R$ {discount.value.toFixed(2)}</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total</span>
              <span className="text-lg font-bold text-orange-500">R$ {order.finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium mb-2">Endereço</h3>
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <div className="h-32 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modal%20detalhes%20pedidos-kgy63jwbSw4Lasatagj8isosCPC8fA.png"
                alt="Mapa de localização"
                fill
                className="object-cover"
              />
              <div className="absolute top-2 left-2 bg-white p-1 rounded-full">
                <MapPin className="h-4 w-4 text-red-500" />
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm">{order.address.street}</p>
              <p className="text-sm text-gray-500">{order.address.complement}</p>
            </div>
          </div>

          {order.deliveryNotes && (
            <div className="mt-4 bg-blue-50 p-3 rounded-md flex items-start gap-2">
              <MessageCircle className="h-4 w-4 text-blue-500 mt-0.5" />
              <div className="text-sm text-gray-700">{order.deliveryNotes}</div>
            </div>
          )}
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium mb-2">Chat</h3>
          <div className="border border-gray-200 rounded-md h-64 flex flex-col">
            <div className="flex-1 p-3 overflow-y-auto space-y-4">
              {order.chat.map((message, index) => (
                <div key={index} className={`flex ${message.sender === "customer" ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[80%] p-2 rounded-md text-sm ${
                      message.sender === "customer" ? "bg-blue-50 text-gray-700" : "bg-orange-100 text-gray-700"
                    }`}
                  >
                    <p>{message.text}</p>
                    <span className="text-xs text-gray-500 mt-1">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-gray-200">
              <div className="flex gap-2">
                <Input
                  placeholder="Digite uma mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">Status do pedido</h3>
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-100 text-blue-500 hover:bg-blue-100">
                Saiu para entrega
                <span className="ml-2 text-xs">13:16</span>
              </Badge>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button variant="outline" className="flex-1 gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 5.33333V8L10 10"
                  stroke="#475467"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.31811 1.33334 8.00001C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                  stroke="#475467"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Pedido feito
            </Button>
            <Button variant="outline" className="flex-1 gap-2 bg-orange-50 text-orange-500 border-orange-200">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 5.33333V8L10 10"
                  stroke="#F97316"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.31811 1.33334 8.00001C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                  stroke="#F97316"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Em preparo
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 5.33333V8L10 10"
                  stroke="#475467"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.31811 1.33334 8.00001C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                  stroke="#475467"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Saiu para entrega
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 5.33333V8L10 10"
                  stroke="#475467"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.31811 1.33334 8.00001C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
                  stroke="#475467"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Concluído
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
