"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/layout/Header"
import OrdersPanel from "@/components/orders/OrdersPanel"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import PizzaCategorySection from "./PizzaCategorySection"
import PizzaSelectCategoryModal from "./PizzaSelectCategoryModal"
import { usePizzaCategories } from "./PizzaCategoriesProvider"
import { PizzaCategoriesProvider } from "./PizzaCategoriesProvider"
import PizzaSizesSection from "./PizzaSizesSection"
import PizzaBordasSection from "./PizzaBordasSection"
import PizzaSaboresSection from "./PizzaSaboresSection"
// import PizzaInfoSection from './PizzaInfoSection'
// import PizzaAdicionaisSection from './PizzaAdicionaisSection'

export default function CadastroPizzaPage() {
  return (
    <PizzaCategoriesProvider>
      <CadastroPizzaPageContent />
    </PizzaCategoriesProvider>
  )
}

function CadastroPizzaPageContent() {
  const router = useRouter()
  const [showPizzaInfoSection, setShowPizzaInfoSection] = useState(true)
  const [showAdicionaisSection, setShowAdicionaisSection] = useState(false)

  // Estados iniciais para pizza (exemplo)
  const [sabores, setSabores] = useState([])
  const [bordas, setBordas] = useState([])
  const [massas, setMassas] = useState([])
  const [sizes, setSizes] = useState([]); // Adicionar estado para tamanhos cadastrados

  // Wizard step
  const [currentStep, setCurrentStep] = useState(0);

  // Hook de categorias de pizza (agora dentro do provider)
  const {
    getSelectedCategoriesWithPath,
    toggleCategory,
  } = usePizzaCategories();
  const selectedCategories = getSelectedCategoriesWithPath();
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false)

  // Wizard steps
  const steps = [
    {
      label: 'Categorias',
      content: (
        <PizzaCategorySection
          selectedCategories={selectedCategories}
          setIsCategoryModalOpen={setIsCategoryModalOpen}
          toggleCategory={toggleCategory}
        />
      ),
    },
    {
      label: 'Tamanhos',
      content: <PizzaSizesSection />,
    },
    {
      label: 'Bordas',
      content: <PizzaBordasSection />,
    },
    {
      label: 'Sabores',
      content: <PizzaSaboresSection tamanhos={sizes.map((s: any) => ({ nome: s.nome }))} />,
    },
    // Adicione mais etapas conforme necessário
  ];

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header title="Cadastro de pizza" />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
            <div className="p-6">
              <button 
                onClick={() => router.back()}
                className="flex items-center text-gray-500 mb-6 hover:text-orange-500"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Cadastro de pizza
              </button>
              <p className="text-sm text-gray-500 mb-6">Seção de cadastro de pizza</p>

              {/* Card Cadastro de Pizza */}
              <div className="bg-white rounded-lg border border-orange-200 p-4 flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src="/images/pizza.svg" alt="Pizza" width={64} height={64} />
                </div>
                <div>
                  <div className="font-medium">Cadastro de pizza</div>
                  <div className="text-sm text-gray-500">Defina com clareza a quantidade de sabores, bordas e tipos de massas</div>
                </div>
              </div>

              {/* Render all steps up to currentStep (cascata) */}
              {steps.slice(0, currentStep + 1).map((step, idx) => (
                <div key={step.label} className="mb-8">
                  {step.content}
                  {/* Só mostra o botão Continuar na última seção visível */}
                  {idx === currentStep && (
                    <div className="flex justify-end mt-6">
                      {currentStep < steps.length - 1 ? (
                        <Button
                          className="bg-orange-500 hover:bg-orange-600"
                          onClick={() => setCurrentStep(currentStep + 1)}
                        >
                          Continuar
                        </Button>
                      ) : (
                        <Button
                          className="bg-emerald-500 hover:bg-emerald-600"
                          onClick={() => alert('Finalizar cadastro!')}
                        >
                          Finalizar
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              ))}

              <PizzaSelectCategoryModal
                isOpen={isCategoryModalOpen}
                onClose={() => setIsCategoryModalOpen(false)}
                showNewCategoryModal={showNewCategoryModal}
                setShowNewCategoryModal={setShowNewCategoryModal}
              />

              {/* Seção de Informações da Pizza */}
              {/* <PizzaInfoSection ... /> */}

              {/* Seção de Adicionais */}
              {/* <PizzaAdicionaisSection ... /> */}

            </div>
          </div>
          <OrdersPanel />
        </div>
      </div>
    </div>
  )
} 