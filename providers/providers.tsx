"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { CategoriesProvider } from "@/providers/CategoriesProvider"
import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}
