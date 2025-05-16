"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCategories } from "@/providers/CategoriesProvider"

interface SelectCategoryModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SelectCategoryModal({
  isOpen,
  onClose,
}: SelectCategoryModalProps) {
  const { 
    predefinedCategories, 
    selectedCategories, 
    toggleCategory, 
    addCategory 
  } = useCategories();
  
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      addCategory(newCategoryName.trim());
      setNewCategoryName("");
      setShowNewCategoryInput(false);
    }
  };

  // Renderiza um radio button
  const renderRadio = (selected: boolean) => (
    <div 
      className={`w-5 h-5 rounded-full border flex items-center justify-center ${selected ? 'border-orange-500 bg-orange-500' : 'border-gray-300'}`}
    >
      {selected && <div className="w-2 h-2 rounded-full bg-white"></div>}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <div className="p-6 pb-0">
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
        
        <div className="px-6 py-4">
          {!showNewCategoryInput ? (
            <div className="flex justify-start">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 h-12 text-base"
                onClick={() => setShowNewCategoryInput(true)}
              >
                + Criar nova categoria
              </Button>
            </div>
          ) : (
            <div className="mb-2 flex h-12">
              <Input
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="Nome da nova categoria"
                className="pr-2 flex-1 h-full"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAddCategory();
                  }
                }}
              />
            </div>
          )}
        </div>
        
        <div className="px-6 pb-4">
          <div className="py-1 border-t border-gray-200">
            <p className="text-sm text-gray-500 my-3">Categorias cadastradas:</p>
            
            <div className="overflow-auto">
              {/* Lanches */}
              <div className="border-b border-gray-200 py-3 flex justify-between items-center">
                <span className="text-sm">Lanches</span>
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleCategory("1")}
                >
                  {renderRadio(selectedCategories.includes("1"))}
                </div>
              </div>
              
              {/* Bebidas */}
              <div className="border-b border-gray-200 py-3 flex justify-between items-center">
                <span className="text-sm">Bebidas</span>
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleCategory("2")}
                >
                  {renderRadio(selectedCategories.includes("2"))}
                </div>
              </div>
              
              {/* Bebidas > Refrigerantes */}
              <div className="border-b border-gray-200 py-3 flex justify-between items-center">
                <span className="text-sm">Bebidas &gt; Refrigerantes</span>
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleCategory("2-1")}
                >
                  {renderRadio(selectedCategories.includes("2-1"))}
                </div>
              </div>
              
              {/* Bebidas > Cervejas */}
              <div className="border-b border-gray-200 py-3 flex justify-between items-center">
                <span className="text-sm">Bebidas &gt; Cervejas</span>
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleCategory("2-2")}
                >
                  {renderRadio(selectedCategories.includes("2-2"))}
                </div>
              </div>
              
              {/* Combos */}
              <div className="border-b border-gray-200 py-3 flex justify-between items-center">
                <span className="text-sm">Combos</span>
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleCategory("3")}
                >
                  {renderRadio(selectedCategories.includes("3"))}
                </div>
              </div>
              
              {/* Promoções */}
              <div className="border-b border-gray-200 py-3 flex justify-between items-center">
                <span className="text-sm">Promoções</span>
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleCategory("4")}
                >
                  {renderRadio(selectedCategories.includes("4"))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 p-4 flex justify-end">
          <Button 
            className="bg-orange-500 hover:bg-orange-600 w-32 h-10"
            onClick={onClose}
          >
            Continuar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 