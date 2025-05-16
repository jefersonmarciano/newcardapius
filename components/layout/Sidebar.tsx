"use client"

import React, { useState } from 'react'
import SidebarLogo from './SidebarLogo'
import SidebarSection from './SidebarSection'
import SidebarItem from './SidebarItem'
import SidebarSubmenu from './SidebarSubmenu'
import SidebarFooter from './SidebarFooter'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function Sidebar() {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={
        cn(
          'bg-white border-r border-gray-200 flex flex-col h-screen transition-all duration-200',
          expanded ? 'w-64' : 'w-16',
        )
      }
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="flex flex-col items-center py-6 gap-8">
        <SidebarLogo />
      </div>
      <nav className="flex-1 flex flex-col gap-2">
        <SidebarSection>
          <SidebarItem
            icon={<img src="/vetores/dashboard.svg" alt="Dashboard" className="w-6 h-6" />}
            label="Dashboard"
            href="/"
            active={pathname === '/'}
            expanded={expanded}
          />
          <SidebarItem
            icon={<img src="/vetores/delivery.svg" alt="Delivery" className="w-6 h-6" />}
            label="Delivery"
            href="/delivery"
            active={pathname === '/delivery'}
            expanded={expanded}
          />
        </SidebarSection>
        <SidebarSection>
          <SidebarSubmenu
            icon={<img src="/vetores/cardapio.svg" alt="Cardápio" className="w-6 h-6" />}
            label="Cardápio"
            expanded={expanded}
            active={pathname.startsWith('/cardapio')}
            defaultOpen={pathname.startsWith('/cardapio')}
          >
            <SidebarSubmenu
              label="Produtos"
              expanded={expanded}
              active={pathname.startsWith('/produtos')}
              defaultOpen={pathname.startsWith('/produtos')}
            >
              <SidebarItem
                icon={undefined}
                label="Cadastrar"
                href="/produtos/cadastrar"
                active={pathname === '/produtos/cadastrar'}
                expanded={expanded}
              />
              <SidebarItem
                icon={undefined}
                label="Lista de produtos"
                href="/produtos/lista"
                active={pathname === '/produtos/lista'}
                expanded={expanded}
              />
            </SidebarSubmenu>
            <SidebarSubmenu
              label="Adicionais"
              expanded={expanded}
              active={pathname.startsWith('/adicionais')}
              defaultOpen={pathname.startsWith('/adicionais')}
            >
              <SidebarItem
                icon={undefined}
                label="Cadastrar"
                href="/adicionais/cadastrar"
                active={pathname === '/adicionais/cadastrar'}
                expanded={expanded}
              />
              <SidebarItem
                icon={undefined}
                label="Listar adicionais"
                href="/adicionais/lista"
                active={pathname === '/adicionais/lista'}
                expanded={expanded}
              />
            </SidebarSubmenu>
          </SidebarSubmenu>
        </SidebarSection>
        <SidebarSection>
          <SidebarItem
            icon={<img src="/vetores/pedidos.svg" alt="Pedidos" className="w-6 h-6" />}
            label="Pedidos"
            href="/pedidos"
            active={pathname === '/pedidos'}
            expanded={expanded}
          />
          <SidebarItem
            icon={<img src="/vetores/clientes.svg" alt="Clientes" className="w-6 h-6" />}
            label="Clientes"
            href="/clientes"
            active={pathname === '/clientes'}
            expanded={expanded}
          />
          <SidebarItem
            icon={<img src="/vetores/mensagens.svg" alt="Mensagens" className="w-6 h-6" />}
            label="Mensagens"
            href="/mensagens"
            active={pathname === '/mensagens'}
            expanded={expanded}
          />
        </SidebarSection>
      </nav>
      <SidebarFooter>
        <SidebarItem
          icon={<img src="/vetores/configuraçao.svg" alt="Configurações" className="w-6 h-6" />}
          label="Configurações"
          href="/configuracoes"
          active={pathname === '/configuracoes'}
          expanded={expanded}
        />
        <SidebarItem
          icon={<img src="/vetores/ajuda.svg" alt="Ajuda" className="w-6 h-6" />}
          label="Ajuda"
          href="/ajuda"
          active={pathname === '/ajuda'}
          expanded={expanded}
        />
        <SidebarItem
          icon={<img src="/vetores/carapius.svg" alt="Carapius" className="w-6 h-6" />}
          label="Carapius"
          href="/carapius"
          active={pathname === '/carapius'}
          expanded={expanded}
        />
      </SidebarFooter>
    </div>
  )
}
