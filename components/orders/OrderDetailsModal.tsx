"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  X,
  Printer,
  MapPin,
  MessageCircle,
  Trash2,
  Pencil,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useOrderDetails } from "@/hooks/useOrderDetails";
import EditOrderContent from "./EditOrderModal";
import styles from './OrderDetailsModal.module.css';

interface OrderDetailsModalProps {
  orderId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderDetailsModal({
  orderId,
  isOpen,
  onClose,
}: OrderDetailsModalProps) {
  const { order } = useOrderDetails(orderId);
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenEditMode = () => {
    setIsEditing(true);
  };

  const handleCloseEditMode = () => {
    setIsEditing(false);
    // Aqui você poderia atualizar os detalhes do pedido após uma edição, se necessário
  };

  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={`${
          isEditing ? "max-w-4xl" : "max-w-3xl"
        } max-h-[90vh] overflow-y-auto`}
      >
        {isEditing ? (
          <EditOrderContent orderId={orderId} onClose={handleCloseEditMode} />
        ) : (
          <>
            <DialogHeader className="flex flex-row items-center justify-between pb-2 border-b border-gray-100">
              <div>
                <DialogTitle className="text-xl font-semibold">
                  {order.customerName}
                </DialogTitle>
                <div className="text-sm text-gray-500">
                  Pedido #{order.id} · Feito às {order.time} · {order.duration}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-gray-200"
                >
                  <Printer className="h-4 w-4 text-gray-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="h-8 w-8 text-gray-500"
                >
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
                <Button className="bg-orange-500 hover:bg-orange-600 h-9">
                  Despachar pedido
                </Button>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-5 border border-gray-200 pt-6 pb-5 rounded-md">
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
                        <span className="text-sm text-gray-500">
                          {item.quantity}x
                        </span>
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                      <span className="text-sm">
                        R$ {item.price.toFixed(2)}
                      </span>
                    </div>

                    {item.options && item.options.length > 0 && (
                      <div className="mt-2 ml-6 space-y-2">
                        {item.options.map((option, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center"
                          >
                            <div className="flex items-center">
                              <span className="text-sm text-gray-500 mr-1.5">
                                •
                              </span>
                              <span className="text-sm text-gray-600">
                                {option.name}
                              </span>
                            </div>
                            <span className="text-sm text-gray-600">
                              R$ {option.price.toFixed(2)}
                            </span>
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
                  <div className="text-sm text-gray-700">{order.notes}</div>
                </div>
              )}
            <div className="mt-5">
              <div className="py-3 flex justify-between items-center border-b border-gray-100">
                <span className="text-sm">Subtotal</span>
                <span className="text-sm">R$ {order.subtotal.toFixed(2)}</span>
              </div>
              <div className="py-3 flex justify-between items-center border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Frete</span>
                  {order.freeDelivery && (
                    <Badge
                      variant="outline"
                      className="text-green-500 bg-green-50 border-green-100 font-normal px-1.5 py-0 h-5"
                    >
                      Grátis
                    </Badge>
                  )}
                </div>
                <span
                  className={
                    order.freeDelivery
                      ? "line-through text-gray-400 text-sm"
                      : "text-sm"
                  }
                >
                  R$ {order.deliveryFee.toFixed(2)}
                </span>
              </div>

              {order.discounts && order.discounts.length > 0 && (
                <div className="discounts-container">
                  <h3 className="discounts-title">Descontos</h3>
                  <div className="discounts-wrapper">
                    {order.discounts.map((discount, index) => (
                      <div
                        key={index}
                        className="discount-item"
                      >
                        <div className="flex items-center">
                          <Badge
                            className="discount-badge"
                          >
                            {discount.type === "coupon" ? "Cupom" : "Desconto"}
                          </Badge>
                          <span className="discount-description">
                            {discount.description}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="discount-value">
                            - R$ {discount.value.toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="discount-delete-button"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 bg-[#FFEFE8] rounded-lg p-4 border border-[#FF5900]">
                    <div className="flex justify-between items-center">
                      <span className="text-[#FF5900] text-lg">Total</span>
                      <span className="text-[#FF5900] text-2xl font-medium">
                        R$ {order.finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            </div>

            

            {/* Endereço */}

            <div className="mt-6 border border-gray-200 pt-6 pb-5 rounded-md">
              <h3 className="text-sm font-medium mb-2 ml-2">Endereço</h3>
              <div className=" overflow-hidden">
                <div className="h-32 relative mx-2">
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
                  <p className="text-sm text-gray-500 mt-1">
                    {order.address.complement}
                  </p>
                </div>
              </div>

              {order.deliveryNotes && (
                <div className="mt-4 bg-blue-50 p-3 rounded-md flex items-start gap-2 mg-2 mx-2 rounded-md">
                  <MessageCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-700">
                    <p className="font-medium text-xs text-blue-600 mb-0.5">
                      Instrução para entrega
                    </p>
                    {order.deliveryNotes}
                  </div>
                </div>
              )}
            </div>

            {/* Chat */}
            <div className="mt-6 border border-gray-200 pt-6 pb-5 rounded-md">
              <h3 className="text-sm font-medium mb-2 ml-2">Chat</h3>
              <div className=" rounded-md h-150 flex flex-col">
                {" "}
                {/* Increased height from h-64 to h-96 */}
                <div className="flex-1 p-3 overflow-y-auto space-y-4">
                  {order.chat.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.sender === "customer"
                          ? "justify-start"
                          : "justify-end"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-2 rounded-md text-sm ${
                          message.sender === "customer"
                            ? "bg-blue-50 text-gray-700"
                            : "bg-orange-50 text-gray-700"
                        }`}
                      >
                        <p>{message.text}</p>
                        <span className="text-xs text-gray-500 block mt-1 text-right">
                          {message.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-[#E3E3E3] mg-2 mx-2 rounded-md">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Digite uma mensagem"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 text-sm"
                    />
                  </div>
                  <div className="mt-0 ml-1 mb-2">
                    <div className="flex items-center gap-2 mt-1">
                      <div className="bg-blue-500 text-white rounded-md px-3 py-1.5 text-sm flex items-center gap-2">
                        <img
                          src="/vetores/pedidosicon.svg"
                          alt="Pedido feito"
                          className="w-4 h-4"
                        />
                        Pedido feito
                      </div>

                      <div className="bg-orange-500 text-white rounded-md px-3 py-1.5 text-sm flex items-center gap-2">
                        <img
                          src="/vetores/empreparo.svg"
                          alt="Em preparo"
                          className="w-4 h-4"
                        />
                        Em preparo
                      </div>

                      <div className="bg-[#9776F9] text-white rounded-md px-3 py-1.5 text-sm flex items-center gap-2">
                        <img
                          src="/vetores/delivery.svg"
                          alt="Saiu para entrega"
                          className="w-4 h-4"
                        />
                        Saiu para entrega
                      </div>

                      <div className="bg-green-500 text-white rounded-md px-3 py-1.5 text-sm flex items-center gap-2">
                        <img
                          src="/vetores/man.svg"
                          alt="Concluído"
                          className="w-4 h-4"
                        />
                        Concluído
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
