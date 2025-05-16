"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, X } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { useOrdersFilter } from "@/hooks/useOrdersFilter"

interface OrdersFilterModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function OrdersFilterModal({ isOpen, onClose }: OrdersFilterModalProps) {
  const { filters, setFilters, applyFilters, resetFilters } = useOrdersFilter()
  const [startDate, setStartDate] = useState<Date | undefined>(filters.startDate)
  const [endDate, setEndDate] = useState<Date | undefined>(filters.endDate)

  const handleApplyFilters = () => {
    setFilters({
      ...filters,
      startDate,
      endDate,
    })
    applyFilters()
    onClose()
  }

  const handleResetFilters = () => {
    resetFilters()
    setStartDate(undefined)
    setEndDate(undefined)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">Filtrar pedidos</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Período */}
          <div className="space-y-2">
            <h3 className="font-medium">Período</h3>
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="startDate">Data inicial</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "dd/MM/yyyy") : "Selecione uma data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus locale={ptBR} />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="endDate">Data final</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !endDate && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "dd/MM/yyyy") : "Selecione uma data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus locale={ptBR} />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <h3 className="font-medium">Status</h3>
            <RadioGroup
              defaultValue={filters.status}
              onValueChange={(value) => setFilters({ ...filters, status: value })}
              className="flex flex-wrap gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">Todos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="new" id="new" />
                <Label htmlFor="new">Novos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="preparing" id="preparing" />
                <Label htmlFor="preparing">Preparando</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sent" id="sent" />
                <Label htmlFor="sent">Enviado</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="completed" id="completed" />
                <Label htmlFor="completed">Finalizado</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="canceled" id="canceled" />
                <Label htmlFor="canceled">Cancelado</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Valor */}
          <div className="space-y-2">
            <h3 className="font-medium">Valor</h3>
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="minValue">Valor mínimo</Label>
                <Input
                  id="minValue"
                  type="number"
                  placeholder="R$ 0,00"
                  value={filters.minValue || ""}
                  onChange={(e) => setFilters({ ...filters, minValue: e.target.value ? Number(e.target.value) : null })}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="maxValue">Valor máximo</Label>
                <Input
                  id="maxValue"
                  type="number"
                  placeholder="R$ 0,00"
                  value={filters.maxValue || ""}
                  onChange={(e) => setFilters({ ...filters, maxValue: e.target.value ? Number(e.target.value) : null })}
                />
              </div>
            </div>
          </div>

          {/* Cliente */}
          <div className="space-y-2">
            <h3 className="font-medium">Cliente</h3>
            <Input
              placeholder="Nome do cliente"
              value={filters.customerName || ""}
              onChange={(e) => setFilters({ ...filters, customerName: e.target.value })}
            />
          </div>

          {/* Opções adicionais */}
          <div className="space-y-2">
            <h3 className="font-medium">Opções adicionais</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="onlyDelivery"
                  checked={filters.onlyDelivery}
                  onCheckedChange={(checked) => setFilters({ ...filters, onlyDelivery: !!checked })}
                />
                <Label htmlFor="onlyDelivery">Apenas entregas</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="onlyPickup"
                  checked={filters.onlyPickup}
                  onCheckedChange={(checked) => setFilters({ ...filters, onlyPickup: !!checked })}
                />
                <Label htmlFor="onlyPickup">Apenas retiradas</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="onlyPaid"
                  checked={filters.onlyPaid}
                  onCheckedChange={(checked) => setFilters({ ...filters, onlyPaid: !!checked })}
                />
                <Label htmlFor="onlyPaid">Apenas pagos</Label>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="flex gap-2 sm:justify-between">
          <Button variant="outline" onClick={handleResetFilters} className="flex-1">
            Limpar filtros
          </Button>
          <Button onClick={handleApplyFilters} className="flex-1 bg-orange-500 hover:bg-orange-600">
            Aplicar filtros
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
