"use client"

import { Store, MessageCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 px-6 py-3 flex items-center justify-between bg-white">
      <h1 className="text-xl font-medium">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md">
          <Store className="text-gray-500 h-5 w-5" />
          <span className="text-gray-600 font-normal">Loja aberta</span>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>

        {/* Ícone de mensagem */}
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <MessageCircle className="text-gray-500 h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/images/perfil.png" alt="Luciano França" />
            <AvatarFallback>LF</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium text-sm">Luciano França</span>
            <span className="text-xs text-gray-500">Administrador geral</span>
          </div>
        </div>
      </div>
    </header>
  )
}
