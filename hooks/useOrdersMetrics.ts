"use client"

import { atom, useAtom } from "jotai"

interface OrderMetric {
  faturamentoHoje: {
    value: number
    percentage: number
    trend: "up" | "down"
  }
  totalPedidos: {
    value: number
    percentage: number
    trend: "up" | "down"
  }
  pedidosCancelados: {
    value: number
    percentage: number
    trend: "up" | "down"
  }
  dataAtual: string
}

const ordersMetricsAtom = atom<OrderMetric>({
  faturamentoHoje: {
    value: 13459,
    percentage: 6.3,
    trend: "down",
  },
  totalPedidos: {
    value: 13,
    percentage: 3.2,
    trend: "down",
  },
  pedidosCancelados: {
    value: 3,
    percentage: 3.2,
    trend: "down",
  },
  dataAtual: "09 de março 2025",
})

export function useOrdersMetrics() {
  const [metrics, setMetrics] = useAtom(ordersMetricsAtom)

  return {
    metrics,
    setMetrics,
  }
}
