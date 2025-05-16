import { useState } from "react"
import { useToast } from "./use-toast"
import { useRouter } from "next/navigation"

interface ProductFormData {
  nome: string
  descricao: string
  preco: string
  categoria: string
  disponivel: boolean
  imagem: File | null
}

export function useProductForm() {
  const router = useRouter()
  const { toast } = useToast()
  
  const [produto, setProduto] = useState<ProductFormData>({
    nome: "",
    descricao: "",
    preco: "",
    categoria: "",
    disponivel: true,
    imagem: null,
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProduto((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setProduto((prev) => ({ ...prev, disponivel: checked }))
  }
  
  const handleImageChange = (file: File | null) => {
    setProduto((prev) => ({ ...prev, imagem: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulando uma chamada de API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Aqui você implementaria a lógica para salvar o produto via API
      console.log("Produto a ser cadastrado:", produto)
      
      toast({
        title: "Produto cadastrado",
        description: `${produto.nome} foi adicionado ao cardápio com sucesso!`,
      })
      
      // Redirecionar para a página de listagem após o cadastro
      router.push("/cardapio")
    } catch (error) {
      toast({
        title: "Erro ao cadastrar produto",
        description: "Ocorreu um erro ao tentar cadastrar o produto. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const resetForm = () => {
    setProduto({
      nome: "",
      descricao: "",
      preco: "",
      categoria: "",
      disponivel: true,
      imagem: null,
    })
  }

  return {
    produto,
    isSubmitting,
    handleInputChange,
    handleSwitchChange,
    handleImageChange,
    handleSubmit,
    resetForm,
  }
} 