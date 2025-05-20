"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useBebidasCategories } from "./BebidasCategoriesProvider"
import BebidasNewCategoryModal from "./BebidasNewCategoryModal"

interface BebidasSelectCategoryModalProps {
  isOpen: boolean
  onClose: () => void
  showNewCategoryModal: boolean
  setShowNewCategoryModal: (open: boolean) => void
}

export default function BebidasSelectCategoryModal({
  isOpen,
  onClose,
  showNewCategoryModal,
  setShowNewCategoryModal
}: BebidasSelectCategoryModalProps) {
  const { 
    predefinedCategories, 
    selectedCategories, 
    toggleCategory, 
    addCategory 
  } = useBebidasCategories();

  // Renderiza um radio button
  const renderRadio = (selected: boolean) => (
    <div 
      className={`w-5 h-5 rounded-full border flex items-center justify-center ${selected ? 'border-orange-500 bg-orange-500' : 'border-gray-300'}`}
    >
      {selected && <div className="w-2 h-2 rounded-full bg-white"></div>}
    </div>
  );

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose} data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasSelectCategoryModal.tsx:dialog">
        <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden" data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasSelectCategoryModal.tsx">
          <div className="p-6 pb-0" data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasSelectCategoryModal.tsx:header">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-medium">Adicionar categoria</h2>
                <p className="text-sm text-gray-500 mt-1">Selecione ou cadastre uma categoria</p>
              </div>
              <button 
                onClick={onClose}
                className="text-orange-500 font-bold text-lg"
              >
                x
              </button>
            </div>
          </div>
          <div className="px-6 py-4" data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasSelectCategoryModal.tsx:criar-nova">
            <div className="flex justify-start">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 h-12 text-base"
                onClick={() => setShowNewCategoryModal(true)}
                data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasSelectCategoryModal.tsx:btn-nova"
              >
                + Criar nova categoria
              </Button>
            </div>
          </div>
          <div className="px-6 pb-4" data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasSelectCategoryModal.tsx:categorias-lista">
            <div className="py-1 border-t border-gray-200">
              <p className="text-sm text-gray-500 my-3">Categorias cadastradas:</p>
              <div className="overflow-auto">
                {predefinedCategories.map(cat => (
                  <div key={cat.id} className="border-b border-gray-200 py-3 flex justify-between items-center" data-lov-id={`app/cadastro-produto/cadastro-bebidas/BebidasSelectCategoryModal.tsx:cat-${cat.id}`}>
                    <span className="text-sm">{cat.name}</span>
                    <div 
                      className="cursor-pointer"
                      onClick={() => toggleCategory(cat.id)}
                    >
                      {renderRadio(selectedCategories.includes(cat.id))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 p-4 flex justify-end" data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasSelectCategoryModal.tsx:footer">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 w-32 h-10"
              onClick={onClose}
            >
              Continuar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <BebidasNewCategoryModal
        isOpen={showNewCategoryModal}
        onClose={() => setShowNewCategoryModal(false)}
        onAddCategory={addCategory}
        predefinedCategories={predefinedCategories}
      />
    </>
  )
} 