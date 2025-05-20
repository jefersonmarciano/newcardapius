import { useState } from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BebidasNewCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCategory: (name: string, parentId?: string) => void;
  predefinedCategories: { id: string; name: string }[];
}

export default function BebidasNewCategoryModal({
  isOpen,
  onClose,
  onAddCategory,
  predefinedCategories,
}: BebidasNewCategoryModalProps) {
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState<string>("");

  const handleContinue = () => {
    if (name.trim()) {
      onAddCategory(name.trim(), parentId || undefined);
      setName("");
      setParentId("");
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose} data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasNewCategoryModal.tsx:dialog">
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden" data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasNewCategoryModal.tsx">
        <div className="p-6 pb-0" data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasNewCategoryModal.tsx:header">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold">Nova categoria</h2>
              <p className="text-sm text-gray-500 mt-1">Criação de uma nova categoria</p>
            </div>
            <button 
              onClick={onClose}
              className="text-orange-500 font-bold text-lg"
            >
              x
            </button>
          </div>
        </div>
        <form className="px-6 pt-4 pb-2 flex flex-col gap-4" data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasNewCategoryModal.tsx:form" onSubmit={e => { e.preventDefault(); handleContinue(); }}>
          <div>
            <label className="block text-sm font-medium mb-1">Nome da categoria</label>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Ex: Sucos naturais"
              className="h-11"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">É uma subcategoria de:</label>
            <select
              className="w-full border border-gray-300 rounded-md px-3 py-2 h-11 text-sm"
              value={parentId}
              onChange={e => setParentId(e.target.value)}
            >
              <option value="">Selecione uma categoria ou não</option>
              {predefinedCategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </form>
        <div className="flex justify-end px-6 pb-6" data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasNewCategoryModal.tsx:footer">
          <Button
            className="bg-orange-500 hover:bg-orange-600 w-32 h-10"
            onClick={handleContinue}
            disabled={!name.trim()}
          >
            Continuar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 