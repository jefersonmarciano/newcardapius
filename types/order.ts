export interface OrderItem {
  name: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  customerName: string
  total: number
  items: OrderItem[]
  deliveryTime?: number
  dispatchedTime?: number
}
