export interface Product {
  id: string
  name: string
  price: number
  originalPrice: number | null
  discount: number
  imageUrl: string
  ordersToday: number
}
