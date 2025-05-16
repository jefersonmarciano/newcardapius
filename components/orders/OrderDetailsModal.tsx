"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Printer, MapPin, MessageCircle, Trash2, Pencil } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useOrderDetails } from "@/hooks/useOrderDetails"
import EditOrderContent from "./EditOrderModal"

interface OrderDetailsModalProps {
  orderId: string
  isOpen: boolean
  onClose: () => void
}

export default function OrderDetailsModal({ orderId, isOpen, onClose }: OrderDetailsModalProps) {
  const { order } = useOrderDetails(orderId)
  const [message, setMessage] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  const handleOpenEditMode = () => {
    setIsEditing(true)
  }

  const handleCloseEditMode = () => {
    setIsEditing(false)
    // Aqui você poderia atualizar os detalhes do pedido após uma edição, se necessário
  }

  if (!order) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${isEditing ? 'max-w-4xl' : 'max-w-3xl'} max-h-[90vh] overflow-y-auto`}>
        {isEditing ? (
          <EditOrderContent 
            orderId={orderId}
            onClose={handleCloseEditMode}
          />
        ) : (
          <>
            <DialogHeader className="flex flex-row items-center justify-between pb-2 border-b border-gray-100">
              <div>
                <DialogTitle className="text-xl font-semibold">{order.customerName}</DialogTitle>
                <div className="text-sm text-gray-500">
                  Pedido #{order.id} · Feito às {order.time} · {order.duration}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="h-8 w-8 border-gray-200">
                  <Printer className="h-4 w-4 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 text-gray-500">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Entrega prevista:</span>
                <span className="font-medium">{order.estimatedDelivery}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">{order.itemCount} itens</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Total:</span>
                <span className="font-medium">R$ {order.total.toFixed(2)}</span>
              </div>
              <div className="ml-auto">
                <Button className="bg-orange-500 hover:bg-orange-600 h-9">Despachar pedido</Button>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-5">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-base font-medium">Itens do pedido</h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 flex items-center gap-1 text-xs px-3 border-gray-200"
                  onClick={handleOpenEditMode}
                >
                  <Pencil className="h-3.5 w-3.5" /> Editar pedido
                </Button>
              </div>
              
              <div className="space-y-5">
                {order.items.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">{item.quantity}x</span>
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                      <span className="text-sm">R$ {item.price.toFixed(2)}</span>
                    </div>
                    
                    {item.options && item.options.length > 0 && (
                      <div className="mt-2 ml-6 space-y-2">
                        {item.options.map((option, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <div className="flex items-center">
                              <span className="text-sm text-gray-500 mr-1.5">•</span>
                              <span className="text-sm text-gray-600">{option.name}</span>
                            </div>
                            <span className="text-sm text-gray-600">R$ {option.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {order.notes && (
                <div className="mt-5 bg-blue-50 p-3 rounded-md flex items-start gap-2">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-1">
                    <MessageCircle className="h-3.5 w-3.5 text-blue-500" />
                  </div>
                  <div className="text-sm text-gray-700">
                    {order.notes}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5">
              <div className="py-3 flex justify-between items-center border-b border-gray-100">
                <span className="text-sm">Subtotal</span>
                <span className="text-sm">R$ {order.subtotal.toFixed(2)}</span>
              </div>
              <div className="py-3 flex justify-between items-center border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Frete</span>
                  {order.freeDelivery && (
                    <Badge variant="outline" className="text-green-500 bg-green-50 border-green-100 font-normal px-1.5 py-0 h-5">
                      Grátis
                    </Badge>
                  )}
                </div>
                <span className={order.freeDelivery ? "line-through text-gray-400 text-sm" : "text-sm"}>
                  R$ {order.deliveryFee.toFixed(2)}
                </span>
              </div>

              {order.discounts && order.discounts.length > 0 && (
                <div className="mt-5">
                  <h3 className="text-sm font-medium mb-3">Descontos</h3>
                  <div className="bg-green-50 rounded-lg">
                    {order.discounts.map((discount, index) => (
                      <div key={index} className={`px-4 py-3 flex justify-between items-center ${index > 0 ? "border-t border-green-100" : ""}`}>
                        <div className="flex items-center">
                          <Badge
                            variant="outline"
                            className={`${
                              discount.type === "coupon"
                                ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                                : "bg-blue-50 text-blue-600 border-blue-100"
                            } px-1.5 py-0 h-5 font-normal`}
                          >
                            {discount.type === "coupon" ? "Cupom" : "Desconto"}
                          </Badge>
                          <span className="ml-2 text-sm">{discount.description}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-red-500">- R$ {discount.value.toFixed(2)}</span>
                          <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-gray-600 hover:bg-gray-100">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5 py-5 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-lg">Total</span>
                  <span className="text-2xl font-bold text-orange-500">R$ {order.finalTotal.toFixed(2)}</span>
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
                  <div className="absolute top-2 left-2 bg-white p-1 rounded-full shadow-sm">
                    <MapPin className="h-4 w-4 text-red-500" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium">{order.address.street}</p>
                  <p className="text-sm text-gray-500 mt-1">{order.address.complement}</p>
                </div>
              </div>

              {order.deliveryNotes && (
                <div className="mt-4 bg-blue-50 p-3 rounded-md flex items-start gap-2">
                  <MessageCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium text-xs text-blue-600 mb-0.5">Instrução para entrega</p>
                    {order.deliveryNotes}
                  </div>
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
                          message.sender === "customer" ? "bg-blue-50 text-gray-700" : "bg-orange-50 text-gray-700"
                        }`}
                      >
                        <p>{message.text}</p>
                        <span className="text-xs text-gray-500 block mt-1 text-right">{message.time}</span>
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
                      className="flex-1 text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium">Status do pedido</h3>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100 border-transparent px-2 py-0.5 h-6">
                    Saiu para entrega
                    <span className="ml-2 text-xs">13:16</span>
                  </Badge>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" className="flex-1 gap-2 text-gray-600 border-gray-200 h-9 text-xs font-normal">
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
                <Button variant="outline" className="flex-1 gap-2 bg-orange-50 text-orange-500 border-orange-200 h-9 text-xs font-normal">
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
                <Button variant="outline" className="flex-1 gap-2 text-gray-600 border-gray-200 h-9 text-xs font-normal">
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
                <Button variant="outline" className="flex-1 gap-2 text-gray-600 border-gray-200 h-9 text-xs font-normal">
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
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
