"use client"

import { atom, useAtom } from "jotai"

interface OrdersFilterState {
  startDate?: Date
  endDate?: Date
  status: string
  minValue: number | null
  maxValue: number | null
  customerName: string
  onlyDelivery: boolean
  onlyPickup: boolean
  onlyPaid: boolean
  excludeCanceled: boolean
  onlyWithComments: boolean
  onlyWithDiscount: boolean
  isFiltered: boolean
}

const initialFilters: OrdersFilterState = {
  startDate: undefined,
  endDate: undefined,
  status: "all",
  minValue: null,
  maxValue: null,
  customerName: "",
  onlyDelivery: false,
  onlyPickup: false,
  onlyPaid: false,
  excludeCanceled: false,
  onlyWithComments: false,
  onlyWithDiscount: false,
  isFiltered: false,
}

const ordersFilterAtom = atom<OrdersFilterState>(initialFilters)

export function useOrdersFilter() {
  const [filters, setFilters] = useAtom(ordersFilterAtom)

  const applyFilters = () => {
    setFilters({
      ...filters,
      isFiltered: true,
    })
  }

  const resetFilters = () => {
    setFilters(initialFilters)
  }

  return {
    filters,
    setFilters,
    applyFilters,
    resetFilters,
    isFiltered: filters.isFiltered,
  }
}
