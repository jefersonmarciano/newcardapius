"use client"

import { useRouter } from "next/navigation"
import Header from "@/components/layout/Header"
import OrdersPanel from "@/components/orders/OrdersPanel"
import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function CadastroProdutoPage() {
  const router = useRouter()
  
  const handleCadastroSimplesClick = () => {
    router.push("/cadastro-produto/cadastro-simples")
  }
  
  const handleCadastroPizzaClick = () => {
    router.push("/cadastro-produto/cadastro-pizza")
  }

  const handleCadastroBebidasClick = () => {
    router.push("/cadastro-produto/cadastro-bebidas")
  }
  
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header title="Cadastro produto" />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
            <div className="p-6">
              <div className="flex flex-col space-y-1 mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium">Novo produto</h2>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
                <p className="text-sm text-gray-500">Seção de cadastro de produto simples</p>
              </div>

              <div className="space-y-4">
                {/* Opção 1 */}
                <div data-lov-id="app/cadastro-produto/page"
                  className="bg-white rounded-lg border border-orange-200 p-4 flex justify-between items-center cursor-pointer hover:bg-orange-50 transition-colors"
                  onClick={handleCadastroSimplesClick}
                  
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <Image src="/images/burger.svg" alt="Hambúrguer" width={64} height={64} />
                    </div>
                    <div>
                      <div className="font-medium">Cadastro Simples</div>
                      <div className="text-sm text-gray-500">Ideal para lanches pratos, sobremesas, etc.</div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-orange-500" />
                </div>

                {/* Opção 2 */}
                <div
                  className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                  data-lov-id="app/cadastro-produto/page"
                  onClick={handleCadastroBebidasClick}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <Image src="/images/bebidas.svg" alt="Bebidas" width={64} height={64} />
                    </div>
                    <div>
                      <div className="font-medium">Cadastro de Bebidas</div>
                      <div className="text-sm text-gray-500">
                        Inclua no seu cardápio sucos, refrigerantes, cervejas, etc...
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-orange-500" />
                </div>

                {/* Opção 3 */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors" data-lov-id="app/cadastro-produto/page" onClick={handleCadastroPizzaClick}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <Image src="/images/pizza.svg" alt="Pizza" width={64} height={64} />
                    </div>
                    <div>
                      <div className="font-medium">Cadastro de pizzas</div>
                      <div className="text-sm text-gray-500">
                        Defina com clareza a quantidade de sabores, bordas e tipos de massas
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
          <OrdersPanel />
        </div>
      </div>
    </div>
  )
}
