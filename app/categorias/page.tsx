import Header from "@/components/layout/Header"
import OrdersSidebar from "@/components/layout/OrdersSidebar"
import { Input } from "@/components/ui/input"
import { Search, ChevronDown, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CategoriasPage() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header title="Categorias" />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
            <div className="p-6">
              <div className="flex flex-col space-y-1 mb-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium">Litagem de categorias</h2>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </div>
                <p className="text-sm text-gray-500">categorias cadastradas</p>
              </div>

              <div className="flex justify-between mb-6">
                <div className="relative w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input placeholder="Buscar Cliente" className="pl-10 bg-white rounded-md border-gray-200" />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600">+ Cadastrar categoria</Button>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {/* Categoria 1 */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100" data-lov-id="app/categorias/page">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4 6H20M4 12H20M4 18H20"
                          stroke="#9CA3AF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">Entradas</span>
                  </div>
                  <MoreVertical className="h-5 w-5 text-gray-400" />
                </div>

                {/* Categoria 2 */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100" data-lov-id="app/categorias/page">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4 6H20M4 12H20M4 18H20"
                          stroke="#9CA3AF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">Lanches</span>
                  </div>
                  <MoreVertical className="h-5 w-5 text-gray-400" />
                </div>

                {/* Categoria 3 */}
                <div className="flex items-center justify-between p-4" data-lov-id="app/categorias/page">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4 6H20M4 12H20M4 18H20"
                          stroke="#9CA3AF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="font-medium">Pizzas</span>
                  </div>
                  <MoreVertical className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <OrdersSidebar />
        </div>
      </div>
    </div>
  )
}
