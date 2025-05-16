"use client"

import { useRouter } from "next/navigation"
import Header from "@/components/layout/Header"
import OrdersPanel from "@/components/orders/OrdersPanel"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft } from "lucide-react"
import { useProductForm } from "@/hooks/useProductForm"
import ImageUpload from "@/components/products/ImageUpload"

export default function CadastroSimplesDetalhesPage() {
  const router = useRouter()
  const { 
    produto, 
    isSubmitting, 
    handleInputChange, 
    handleSwitchChange, 
    handleImageChange, 
    handleSubmit 
  } = useProductForm()

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header title="Cadastro de Produto" />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
            <div className="p-6">
              <button 
                onClick={() => router.back()}
                className="flex items-center text-gray-500 mb-6 hover:text-orange-500"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Voltar para categorias
              </button>
              
              <div className="flex flex-col space-y-1 mb-6">
                <h2 className="text-lg font-medium">Cadastro Simples</h2>
                <p className="text-sm text-gray-500">Preencha as informações abaixo para cadastrar um novo produto</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome do produto *</Label>
                      <Input 
                        id="nome"
                        name="nome"
                        placeholder="Ex: Hambúrguer Clássico" 
                        value={produto.nome}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="categoria">Categoria *</Label>
                      <Input 
                        id="categoria"
                        name="categoria"
                        placeholder="Ex: Lanches" 
                        value={produto.categoria}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="descricao">Descrição</Label>
                      <Textarea 
                        id="descricao"
                        name="descricao"
                        placeholder="Descreva os ingredientes e características do produto" 
                        value={produto.descricao}
                        onChange={handleInputChange}
                        className="min-h-[100px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="preco">Preço (R$) *</Label>
                      <Input 
                        id="preco"
                        name="preco"
                        type="number"
                        step="0.01" 
                        placeholder="0,00" 
                        value={produto.preco}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Disponibilidade</Label>
                        <p className="text-sm text-gray-500">Produto disponível para venda</p>
                      </div>
                      <Switch
                        checked={produto.disponivel}
                        onCheckedChange={handleSwitchChange}
                        className="data-[state=checked]:bg-teal-400"
                      />
                    </div>
                    
                    <div className="col-span-2 border-t border-gray-200 pt-6 mt-2">
                      <ImageUpload 
                        value={produto.imagem}
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                
                  <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => router.back()}
                      disabled={isSubmitting}
                    >
                      Cancelar
                    </Button>
                    <Button 
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Salvando..." : "Salvar produto"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <OrdersPanel />
        </div>
      </div>
    </div>
  )
} 