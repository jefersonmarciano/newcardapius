'use client'

import Header from "@/components/layout/Header"
import OrdersPanel from "@/components/orders/OrdersPanel"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useAdicionaisStore } from "@/hooks/useAdicionaisStore"

export default function AdicionaisPage() {
  const adicionais = useAdicionaisStore((state) => state.adicionais)

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header title="Adicionais" />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
            <div className="p-2">
              <div className="flex flex-col space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium">Listagem de adicionais</h2>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
                <p className="text-sm text-gray-500">categorias cadastradas</p>
              </div>

              <div className="flex justify-between mb-6">
                <div className="relative w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input placeholder="Buscar adicional" className="pl-10 bg-white rounded-md border-gray-200" />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">+ Cadastrar adicional</Button>
              </div>

              <div className="border border-gray-200 rounded-2xl bg-white p-2 my-8 mx-auto w-full">
                {/* Cabeçalho */}
                <div className="grid grid-cols-4 p-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Adicional</span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Preço</span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Promocional</span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="text-right">
                    <span className="font-medium">Ação</span>
                  </div>
                </div>

                {/* Lista de Adicionais */}
                {adicionais?.map((adicional: any) => (
                  <div key={adicional.id} className="grid grid-cols-4 p-2 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden">
                        <Image src={adicional.imagem} alt={adicional.nome} width={48} height={48} />
                      </div>
                      <div>
                        <div className="font-medium">{adicional.nome}</div>
                        <div className="text-sm text-gray-500">{adicional.descricao}</div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-gray-100 rounded-md px-3 py-1 inline-block">
                        R$ {adicional.preco}
                      </div>
                    </div>
                    <div>
                      <div className="bg-gray-100 rounded-md px-3 py-1 inline-block">
                        R$ {adicional.promocional}
                      </div>
                    </div>
                    <div className="flex justify-end gap-2">
                      <button className="p-2 rounded-full text-orange-500 hover:bg-orange-50">
                        <img src="public/vetores/marcelo.png" alt="Editar" className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded-full text-red-500 hover:bg-red-50">
                        <img src="/vetores/trash.svg" alt="Excluir" className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <OrdersPanel />
        </div>
      </div>
    </div>
  )
}
