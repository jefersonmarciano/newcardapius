import { Input } from "@/components/ui/input"
import { Search, ChevronDown } from "lucide-react"
import { Switch } from "@/components/ui/switch"

interface OrderSearchProps {
  autoAccept: boolean
  onAutoAcceptChange: (value: boolean) => void
}

export function OrderSearch({ autoAccept, onAutoAcceptChange }: OrderSearchProps) {
  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input placeholder="Buscar pedido" className="pl-10 bg-white rounded-md border-gray-200" />
        </div>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-md flex items-center justify-between min-w-[150px]">
          <span className="text-gray-500">Filtros</span>
          <ChevronDown size={16} className="text-orange-500" />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-gray-700">Aceitar pedidos automaticamente</span>
        <Switch
          checked={autoAccept}
          onCheckedChange={onAutoAcceptChange}
          className="data-[state=checked]:bg-teal-400 data-[state=checked]:text-white"
        />
      </div>
    </div>
  )
} 