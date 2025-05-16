"use client"

import { usePerformanceMetrics } from "@/hooks/usePerformanceMetrics"
import { ArrowRight } from "lucide-react"
import MetricCard from "./MetricCard"

export default function PerformanceMetrics() {
  const { metrics, period } = usePerformanceMetrics()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Desempenho dos últimos {period} dias</h2>
        <button className="text-orange-500 flex items-center text-sm">
          Ver mais <ArrowRight size={16} className="ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            percentage={metric.percentage}
            icon={metric.icon}
            trend={metric.trend}
          />
        ))}
      </div>
    </div>
  )
}
