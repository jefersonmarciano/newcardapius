"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ArrowLeft } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { useOrdersFilter } from "@/hooks/useOrdersFilter"
import OrdersMetrics from "@/components/orders/OrdersMetrics"

export default function OrdersFilterContent() {
  const router = useRouter()
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
    router.push("/pedidos")
  }

  const handleResetFilters = () => {
    resetFilters()
    setStartDate(undefined)
    setEndDate(undefined)
  }

  const handleBackToOrders = () => {
    router.push("/pedidos")
  }

  return (
    <div className="space-y-6">
      {/* Métricas no topo */}
      <OrdersMetrics />

      {/* Botão de voltar */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={handleBackToOrders} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar para pedidos
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Período */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Período</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const today = new Date()
                  setStartDate(today)
                  setEndDate(today)
                }}
              >
                Hoje
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const today = new Date()
                  const weekStart = new Date(today)
                  weekStart.setDate(today.getDate() - today.getDay())
                  setStartDate(weekStart)
                  setEndDate(today)
                }}
              >
                Esta semana
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const today = new Date()
                  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
                  setStartDate(monthStart)
                  setEndDate(today)
                }}
              >
                Este mês
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              defaultValue={filters.status}
              onValueChange={(value) => setFilters({ ...filters, status: value })}
              className="grid grid-cols-2 gap-2"
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
          </CardContent>
        </Card>

        {/* Valor */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Valor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
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
          </CardContent>
        </Card>

        {/* Cliente */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="customerName">Nome do cliente</Label>
              <Input
                id="customerName"
                placeholder="Nome do cliente"
                value={filters.customerName || ""}
                onChange={(e) => setFilters({ ...filters, customerName: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        {/* Opções adicionais */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Opções adicionais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="excludeCanceled"
                  checked={filters.excludeCanceled}
                  onCheckedChange={(checked) => setFilters({ ...filters, excludeCanceled: !!checked })}
                />
                <Label htmlFor="excludeCanceled">Excluir cancelados</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="onlyWithComments"
                  checked={filters.onlyWithComments}
                  onCheckedChange={(checked) => setFilters({ ...filters, onlyWithComments: !!checked })}
                />
                <Label htmlFor="onlyWithComments">Com observações</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="onlyWithDiscount"
                  checked={filters.onlyWithDiscount}
                  onCheckedChange={(checked) => setFilters({ ...filters, onlyWithDiscount: !!checked })}
                />
                <Label htmlFor="onlyWithDiscount">Com desconto</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Botões de ação */}
      <div className="flex gap-4 justify-end">
        <Button variant="outline" onClick={handleResetFilters} className="min-w-[150px]">
          Limpar filtros
        </Button>
        <Button onClick={handleApplyFilters} className="min-w-[150px] bg-orange-500 hover:bg-orange-600">
          Aplicar filtros
        </Button>
      </div>
    </div>
  )
}
