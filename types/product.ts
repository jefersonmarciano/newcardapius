export interface Product {
  id: string
  name: string
  price: number
  originalPrice: number | null
  discount: number
  imageUrl: string
  ordersToday: number
  description?: string
  category?: string
  available?: boolean
}

export interface ProductFormData {
  nome: string
  descricao: string
  preco: string
  categoria: string
  disponivel: boolean
  imagem: File | null
}
