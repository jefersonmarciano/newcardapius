"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-8">
      {/* Logo laranja no topo */}
      <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
        <span className="text-white font-bold text-xl">e</span>
      </div>

      <nav className="flex flex-col gap-6">
        {/* Ícone de localização/restaurante */}
        <Link
          href="/dashboard"
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
            pathname === "/dashboard" ? "bg-orange-100 text-orange-500" : "text-gray-500 hover:bg-gray-100",
          )}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restaurant%20Location-FEDLYJ0RfiEUp4ek4CxtpOsFQn29Qd.png"
            alt="Dashboard"
            width={20}
            height={20}
          />
        </Link>

        {/* Ícone de lista/documento */}
        <Link
          href="/pedidos"
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
            pathname === "/pedidos" ? "bg-orange-100 text-orange-500" : "text-gray-500 hover:bg-gray-100",
          )}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lista-Na56yOWVlAiprzU9xClqtMcuxxdeYg.png"
            alt="Pedidos"
            width={20}
            height={20}
          />
        </Link>

        {/* Nova opção para Pedidos V2 */}
        <Link
          href="/pedidos-v2"
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
            pathname === "/pedidos-v2" ? "bg-orange-100 text-orange-500" : "text-gray-500 hover:bg-gray-100",
          )}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3333 1.66667V5.00001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66667 1.66667V5.00001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 8.33334H17.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* Ícone de mensagem/comentário */}
        <Link
          href="/cadastro-produto"
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
            pathname === "/cadastro-produto" ? "bg-orange-100 text-orange-500" : "text-gray-500 hover:bg-gray-100",
          )}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/comentario-3RrqorOX7Fj4Tgc7tFTVJBTrV1aoF1.png"
            alt="Cadastro Produto"
            width={20}
            height={20}
          />
        </Link>

        {/* Ícone de gráfico/estatísticas */}
        <Link
          href="/categorias"
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
            pathname === "/categorias" ? "bg-orange-100 text-orange-500" : "text-gray-500 hover:bg-gray-100",
          )}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/timer-6jk95YhYnuMmrZ9C0bpVCjrtxbTuYc.png"
            alt="Categorias"
            width={20}
            height={20}
          />
        </Link>

        {/* Ícone de garfo e faca */}
        <Link
          href="/cardapio"
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
            pathname === "/cardapio" ? "bg-orange-100 text-orange-500" : "text-gray-500 hover:bg-gray-100",
          )}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garfo-hjBXawrVpmk3iYbUpX4RKI0PIdTKm1.png"
            alt="Cardápio"
            width={20}
            height={20}
          />
        </Link>

        {/* Ícone de mensagem/chat */}
        <Link
          href="/adicionais"
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
            pathname === "/adicionais" ? "bg-orange-100 text-orange-500" : "text-gray-500 hover:bg-gray-100",
          )}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moto-BkaW6bDv9XvDxq2lbdhokhGwadFa5F.png"
            alt="Adicionais"
            width={20}
            height={20}
          />
        </Link>

        {/* Ícone de engrenagem */}
        <Link
          href="/template"
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
            pathname === "/template" ? "bg-orange-100 text-orange-500" : "text-gray-500 hover:bg-gray-100",
          )}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Process-uYrUyTGjr0Mc2d8j60hxhl7MtQc5ZY.png"
            alt="Template"
            width={20}
            height={20}
          />
        </Link>

        {/* Ícone de ponto de interrogação */}
        <Link
          href="/clientes"
          className={cn(
            "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
            pathname === "/clientes" ? "bg-orange-100 text-orange-500" : "text-gray-500 hover:bg-gray-100",
          )}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/question-80FmclSaWlzVKczoKaWZD972SofcGO.png"
            alt="Clientes"
            width={20}
            height={20}
          />
        </Link>
      </nav>

      <div className="mt-auto mb-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/settings-gear-Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9Yd9.png"
            alt="Configurações"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  )
}
