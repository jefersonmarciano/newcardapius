import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  percentage: string
  icon: LucideIcon
  trend: "up" | "down"
}

export default function MetricCard({ title, value, percentage, icon: Icon, trend }: MetricCardProps) {
  return (
    <Card>
      <CardContent className="p-4 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
          <Icon size={20} />
        </div>

        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-xl font-bold">{value}</p>
          <p className={`text-xs ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
            {trend === "up" ? "+" : ""}
            {percentage}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
