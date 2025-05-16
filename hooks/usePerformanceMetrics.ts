"use client"

import { atom, useAtom } from "jotai"
import { DollarSign, Users, BarChart, MapPin } from "lucide-react"

interface Metric {
  title: string
  value: string
  percentage: string
  trend: "up" | "down"
  icon: any
}

const metricsAtom = atom<Metric[]>([
  {
    title: "Faturamento",
    value: "R$1,5k",
    percentage: "10.80%",
    trend: "down",
    icon: DollarSign,
  },
  {
    title: "Novos clientes",
    value: "44",
    percentage: "10.80%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Recorrência",
    value: "11%",
    percentage: "10.80%",
    trend: "up",
    icon: BarChart,
  },
  {
    title: "Desistências",
    value: "20",
    percentage: "10.80%",
    trend: "down",
    icon: MapPin,
  },
])

const periodAtom = atom(7)

export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useAtom(metricsAtom)
  const [period, setPeriod] = useAtom(periodAtom)

  return {
    metrics,
    setMetrics,
    period,
    setPeriod,
  }
}
