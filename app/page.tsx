import Header from "@/components/layout/Header"
import PromotionalBanners from "@/components/banners/PromotionalBanners"
import PerformanceMetrics from "@/components/metrics/PerformanceMetrics"
import PopularProducts from "@/components/products/PopularProducts"
import RecentOrders from "@/components/orders/RecentOrders"
import OrdersPanel from "@/components/orders/OrdersPanel"

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex flex-1 gap-4">
        <div className="flex-1 p-4 overflow-y-auto h-[calc(100vh-64px)]">
          <div className="space-y-6">
            <PromotionalBanners />
            <PerformanceMetrics />
            <PopularProducts />
            <RecentOrders />
          </div>
        </div>
        <OrdersPanel />
      </div>
    </div>
  )
}
