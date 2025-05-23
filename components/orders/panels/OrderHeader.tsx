interface OrderHeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function OrderHeader({ activeTab, onTabChange }: OrderHeaderProps) {
  return (
    <div className="flex border-b border-gray-200">
      <button
        className={`flex-1 py-4 text-center font-medium relative ${
          activeTab === "now" ? "text-gray-800" : "text-gray-400"
        }`}
        onClick={() => onTabChange("now")}
      >
        Agora
        {activeTab === "now" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"></div>}
      </button>
      <button
        className={`flex-1 py-4 text-center font-medium relative ${
          activeTab === "preparing" ? "text-gray-800" : "text-gray-400"
        }`}
        onClick={() => onTabChange("preparing")}
      >
        Preparando
        {activeTab === "preparing" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500"></div>}
      </button>
    </div>
  )
} 