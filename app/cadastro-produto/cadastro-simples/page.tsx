"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/layout/Header"
import OrdersPanel from "@/components/orders/OrdersPanel"
import { ChevronLeft, ChevronRight, Pencil, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SelectCategoryModal from "@/components/products/SelectCategoryModal"
import { useCategories } from "@/providers/CategoriesProvider"

export default function CadastroSimplesPage() {
  const router = useRouter()
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const { getSelectedCategoriesWithPath, toggleCategory } = useCategories()

  // Obtém as categorias selecionadas com seus caminhos completos
  const selectedCategories = getSelectedCategoriesWithPath()

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header title="Cadastro produto" />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
            <div className="p-6">
              <button 
                onClick={() => router.back()}
                className="flex items-center text-gray-500 mb-6 hover:text-orange-500"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Cadastro simples
              </button>
              
              <p className="text-sm text-gray-500 mb-6">Seção de cadastro de produto simples</p>

              {/* Card Cadastro Simples */}
              <div className="bg-white rounded-lg border border-orange-200 p-4 flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src="/images/burger.svg" alt="Hambúrguer" width={64} height={64} />
                </div>
                <div>
                  <div className="font-medium">Cadastro Simples</div>
                  <div className="text-sm text-gray-500">Ideal para lanches pratos, sobremesas, etc.</div>
                </div>
              </div>

              {/* Seção de Categorias */}
              <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-base font-medium">Categorias</h3>
                  {selectedCategories.length > 0 && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 text-orange-500 hover:text-orange-600"
                      onClick={() => setIsCategoryModalOpen(true)}
                    >
                      <Pencil className="h-3.5 w-3.5 mr-1" />
                      Editar
                    </Button>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4">As categorias ajudam seus clientes a encontrarem os produtos mais rápido.</p>
                
                {selectedCategories.length > 0 ? (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {selectedCategories.map((category) => (
                      <div 
                        key={category.id}
                        className="px-3 py-1.5 bg-teal-50 text-teal-700 border border-teal-200 rounded-md flex items-center gap-1 text-sm"
                      >
                        {category.path}
                        <button 
                          className="ml-1 text-teal-600 hover:text-teal-800"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCategory(category.id);
                          }}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Button 
                    className="text-sm h-9 px-3 bg-orange-500 hover:bg-orange-600"
                    onClick={() => setIsCategoryModalOpen(true)}
                  >
                    + adiciona categoria (s)
                  </Button>
                )}
              </div>

              {/* Botão Continuar */}
              <div className="flex justify-end mt-10">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600"
                  onClick={() => router.push("/cadastro-produto/cadastro-simples/detalhes")}
                >
                  Continuar
                </Button>
              </div>
              
              {/* Modal de Seleção de Categorias */}
              <SelectCategoryModal
                isOpen={isCategoryModalOpen}
                onClose={() => setIsCategoryModalOpen(false)}
              />
            </div>
          </div>
          <OrdersPanel />
        </div>
      </div>
    </div>
  )
} 