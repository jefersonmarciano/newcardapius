"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface AddCategoryModalProps {
  isOpen: boolean
  onClose: () => void
  onCategoryAdd: (category: string) => void
}

export default function AddCategoryModal({
  isOpen,
  onClose,
  onCategoryAdd,
}: AddCategoryModalProps) {
  const [categoryName, setCategoryName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!categoryName.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe o nome da categoria.",
        variant: "destructive",
      })
      return
    }
    
    setIsSubmitting(true)
    
    // Simula uma chamada à API
    setTimeout(() => {
      onCategoryAdd(categoryName)
      
      toast({
        title: "Categoria adicionada",
        description: `A categoria "${categoryName}" foi adicionada com sucesso.`,
      })
      
      setCategoryName("")
      setIsSubmitting(false)
      onClose()
    }, 500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova categoria</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="categoryName">Nome da categoria *</Label>
              <Input
                id="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Ex: Lanches, Bebidas, Sobremesas..."
                className="col-span-3"
                required
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button 
              type="submit"
              className="bg-orange-500 hover:bg-orange-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adicionando..." : "Adicionar categoria"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 