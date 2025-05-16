# Dashboard de Delivery - Next.js

Este projeto é um dashboard para gerenciamento de pedidos de delivery, desenvolvido com Next.js, TypeScript, Tailwind CSS e Jotai para gerenciamento de estado.

## Tecnologias Utilizadas

- **Next.js**: Framework React com App Router
- **TypeScript**: Para tipagem estática
- **Tailwind CSS**: Para estilização
- **Jotai**: Para gerenciamento de estado
- **Lucide React**: Para ícones
- **shadcn/ui**: Para componentes de UI

## Estrutura do Projeto

O projeto segue uma estrutura modular, com componentes reutilizáveis e hooks organizados:

\`\`\`
src/
├── app/                    # Diretório principal do Next.js App Router
│   ├── layout.tsx          # Layout principal da aplicação
│   └── page.tsx            # Página inicial do dashboard
├── components/             # Componentes reutilizáveis
│   ├── banners/            # Componentes de banners promocionais
│   ├── layout/             # Componentes de layout (Header, Sidebar)
│   ├── metrics/            # Componentes de métricas de desempenho
│   ├── orders/             # Componentes relacionados a pedidos
│   ├── products/           # Componentes de produtos
│   └── ui/                 # Componentes de UI básicos (shadcn/ui)
├── hooks/                  # Hooks personalizados e lógica de estado
├── providers/              # Providers de contexto
└── types/                  # Definições de tipos TypeScript
\`\`\`

## Funcionalidades Implementadas

1. **Layout Responsivo**: Com sidebar, header e painéis de conteúdo
2. **Métricas de Desempenho**: Exibição de KPIs como faturamento, novos clientes, etc.
3. **Gerenciamento de Pedidos**: Visualização e aceitação de pedidos
4. **Produtos Populares**: Exibição dos produtos mais vendidos
5. **Histórico de Pedidos**: Visualização dos pedidos recentes
6. **Estado Global**: Gerenciamento de estado com Jotai

## Padronização Visual e Reutilização de Componentes

- As páginas de pedidos (`/pedidos` e `/pedidos-v2`) agora utilizam o mesmo layout e componentes para exibição dos cards de métricas (data, faturamento, total de pedidos e pedidos cancelados), garantindo consistência visual e reutilização de lógica via hooks.

## Sidebar Componentizado e Expansível

- O Sidebar foi totalmente refatorado e componentizado, utilizando os componentes `SidebarLogo`, `SidebarSection`, `SidebarItem`, `SidebarSubmenu`, `SidebarDivider` e `SidebarFooter`.
- O menu lateral agora expande ao passar o mouse, exibindo textos, submenus e divisores, seguindo exatamente o layout do design.
- Cada item, submenu e divisor é um componente reutilizável, facilitando manutenção e customização.

## Componentes Principais

- **Header**: Exibe informações do usuário e status da loja
- **Sidebar**: Navegação principal do sistema
- **PromotionalBanners**: Banners promocionais
- **PerformanceMetrics**: Métricas de desempenho
- **PopularProducts**: Produtos mais vendidos
- **OrdersPanel**: Painel de gerenciamento de pedidos
- **OrderCard**: Card de pedido pendente
- **DeliveryCard**: Card de pedido em entrega

## Gerenciamento de Estado

O projeto utiliza Jotai para gerenciamento de estado, com atoms para diferentes partes da aplicação:

- **useUserStore**: Gerencia informações do usuário
- **usePromotionalBanners**: Gerencia banners promocionais
- **usePerformanceMetrics**: Gerencia métricas de desempenho
- **usePopularProducts**: Gerencia produtos populares
- **useRecentOrders**: Gerencia pedidos recentes
- **useOrdersStore**: Gerencia pedidos pendentes e em entrega

## Próximos Passos

- Implementar autenticação
- Adicionar funcionalidade de busca
- Implementar filtros para pedidos
- Adicionar gráficos de desempenho
- Implementar integração com backend
