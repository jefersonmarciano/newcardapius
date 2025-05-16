"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Search, Filter, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useOrderDetails } from "@/hooks/useOrderDetails"
import { usePopularProducts } from "@/hooks/usePopularProducts"
import type { OrderItem } from "@/types/order"
import type { Product } from "@/types/product"

interface EditOrderModalProps {
  orderId: string
  onClose: () => void
}

interface OrderItemWithQuantity extends OrderItem {
  quantity: number
}

export default function EditOrderContent({ orderId, onClose }: EditOrderModalProps) {
  const { order } = useOrderDetails(orderId)
  const { products } = usePopularProducts()
  const [searchTerm, setSearchTerm] = useState("")
  const [orderItems, setOrderItems] = useState<OrderItemWithQuantity[]>([])
  const [subtotal, setSubtotal] = useState(0)

  // Configurar os itens do pedido quando o componente for montado
  useEffect(() => {
    if (order) {
      setOrderItems(order.items.map(item => ({
        ...item,
        quantity: item.quantity || 1
      })))
      
      // Calcular o subtotal
      const total = order?.items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0) || 0
      setSubtotal(total)
    }
  }, [order])

  // Manipular mudanças de quantidade
  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return

    const updatedItems = [...orderItems]
    updatedItems[index].quantity = newQuantity
    setOrderItems(updatedItems)
    
    // Recalcular o subtotal
    const total = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setSubtotal(total)
  }

  // Remover um item do pedido
  const handleRemoveItem = (index: number) => {
    const updatedItems = orderItems.filter((_, i) => i !== index)
    setOrderItems(updatedItems)
    
    // Recalcular o subtotal
    const total = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setSubtotal(total)
  }

  // Adicionar um produto ao pedido
  const handleAddProduct = (product: Product) => {
    // Verificar se o produto já está no pedido
    const existingItemIndex = orderItems.findIndex(item => item.name === product.name)
    
    if (existingItemIndex >= 0) {
      // Se o produto já existe, aumentar a quantidade
      handleQuantityChange(existingItemIndex, orderItems[existingItemIndex].quantity + 1)
    } else {
      // Se não, adicionar o novo produto
      const newItem: OrderItemWithQuantity = {
        name: product.name,
        price: product.price,
        quantity: 1
      }
      
      setOrderItems([...orderItems, newItem])
      // Recalcular o subtotal
      const total = [...orderItems, newItem].reduce((sum, item) => sum + (item.price * item.quantity), 0)
      setSubtotal(total)
    }
  }

  // Salvar alterações do pedido
  const handleSaveChanges = () => {
    // Aqui você implementaria a lógica para salvar as alterações do pedido
    // Por exemplo, chamar uma API ou atualizar um estado global
    
    // Fechar o modal após salvar
    onClose()
  }

  if (!order) return null

  return (
    <div className="mt-4">
      <div className="flex flex-row items-center justify-between pb-2 border-b border-gray-100">
        <h2 className="text-xl font-semibold">Editar pedido</h2>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 text-gray-500">
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4">
        <div className="mb-5">
          <h3 className="text-base font-medium mb-2">Produto selecionado</h3>

          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between text-sm text-gray-500 px-4 py-3 bg-gray-100">
              <div className="w-[40%]">Itens do pedido</div>
              <div className="w-[15%] text-center">Qtd</div>
              <div className="w-[20%] text-center">Valor</div>
              <div className="w-[15%] text-center">Ação</div>
            </div>

            {orderItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                <div className="w-[40%] text-sm">{item.name}</div>
                <div className="w-[15%] flex justify-center">
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-7 w-7 rounded-r-none border-r-0"
                      onClick={() => handleQuantityChange(index, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <div className="h-7 px-2 flex items-center justify-center border border-gray-200 min-w-[30px]">
                      {item.quantity}
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-7 w-7 rounded-l-none border-l-0"
                      onClick={() => handleQuantityChange(index, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="w-[20%] text-center text-sm">R$ {(item.price * item.quantity).toFixed(2)}</div>
                <div className="w-[15%] text-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-7 w-7 text-red-500"
                    onClick={() => handleRemoveItem(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-gray-200">
              <span className="text-sm font-medium">Subtotal</span>
              <span className="text-sm">R$ {subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center px-4 py-3 bg-orange-50 border-t border-gray-200">
              <span className="text-base font-medium">Total</span>
              <span className="text-orange-500 font-bold">R$ {subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-medium mb-2">Buscar outros produtos</h3>

          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Buscar pedido"
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtros
              <span className="ml-1 bg-gray-100 text-gray-700 rounded-full text-xs px-1.5 py-0.5">0</span>
            </Button>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 5.83301H17.5" stroke="#344054" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 10H17.5" stroke="#344054" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 14.167H17.5" stroke="#344054" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {products
              .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((product, index) => (
                <Card key={index} className="overflow-hidden cursor-pointer" onClick={() => handleAddProduct(product)}>
                  <div className="relative">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      width={200}
                      height={120}
                      className="w-full h-36 object-cover"
                    />
                    {product.discount > 0 && (
                      <Badge className="absolute top-2 left-2 bg-green-500 text-white px-1 py-0 text-xs">
                        {product.discount}% Off
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-medium text-sm">{product.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-xs">
                          R$ {product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-orange-500 font-bold text-sm">R$ {product.price.toFixed(2)}</span>
                    </div>
                    <Button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-xs h-8">+ Adicionar</Button>
                  </CardContent>
                </Card>
              ))}
          </div>
          
          <div className="flex justify-end items-center gap-3 mt-6 pt-5 border-t border-gray-200">
            <Button 
              variant="outline" 
              className="px-4 border-gray-200"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button 
              className="px-4 bg-orange-500 hover:bg-orange-600"
              onClick={handleSaveChanges}
            >
              Salvar alterações
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 