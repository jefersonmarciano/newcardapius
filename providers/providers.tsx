"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { CategoriesProvider } from "@/providers/CategoriesProvider"
import { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <CategoriesProvider>
        {children}
      </CategoriesProvider>
    </ThemeProvider>
  )
}
