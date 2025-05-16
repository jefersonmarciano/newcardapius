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
│   ├── cadastro-produto/   # Página de cadastro de produtos
│   ├── categorias/         # Página de gerenciamento de categorias
│   ├── layout.tsx          # Layout principal da aplicação
│   └── page.tsx            # Página inicial do dashboard
├── components/             # Componentes reutilizáveis
│   ├── banners/            # Componentes de banners promocionais
│   ├── clients/            # Componentes relanpocionados a clientes
│   ├── layout/             # Componentes de layout (Header, Sidebar)
│   ├── metrics/            # Componentes de métricas de desempenho
│   ├── orders/             # Componentes relacionados a pedidos
│   ├── products/           # Componentes de produtos e cadastro
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
7. **Gerenciamento de Clientes**: Visualização e gerenciamento de clientes cadastrados
8. **Cadastro de Produtos**: Sistema completo para cadastro de diferentes tipos de produtos
9. **Gerenciamento de Categorias**: Sistema hierárquico de categorias com interface visual intuitiva

## Sistema de Cadastro de Produtos

- Implementamos um fluxo completo de cadastro de produtos com diferentes tipos (produtos simples, bebidas, pizzas)
- A página "Cadastro Simples" permite a inserção de todas as informações necessárias para um produto:
  - Nome e descrição do produto
  - Categoria (com modal de seleção hierárquica)
  - Preço e disponibilidade
  - Upload de imagem do produto
- O formulário é validado para garantir que todas as informações necessárias sejam fornecidas
- A interface é responsiva e segue o padrão visual do restante da aplicação

## Modal de Seleção de Categorias

- Desenvolvemos um modal personalizado para seleção de categorias que permite:
  - Visualização de categorias em estrutura hierárquica (ex: "Bebidas > Refrigerantes")
  - Seleção de categorias através de botões de rádio personalizados (círculos laranja com centro branco)
  - Criação de novas categorias diretamente do modal
- O design do modal foi implementado com atenção a detalhes específicos:
  - Botão "Criar nova categoria" alinhado à esquerda e com tamanho apropriado
  - Lista de categorias com separadores de borda entre itens
  - Botão "Continuar" posicionado à direita no rodapé do modal
- O componente é reutilizável e pode ser integrado em qualquer parte do sistema

## Sistema de Gerenciamento de Categorias

- Implementamos um sistema completo para gerenciamento de categorias usando:
  - Hook personalizado (`useCategories`) para centralizar a lógica de gerenciamento
  - Provider de contexto (`CategoriesProvider`) para compartilhar os dados entre componentes
  - Suporte para categorias hierárquicas com relações pai-filho
- As categorias são exibidas com uma representação visual clara da hierarquia
- A interface permite adicionar, selecionar e gerenciar categorias de forma intuitiva
- O sistema é integrado ao cadastro de produtos para facilitar a categorização

## Padronização Visual e Reutilização de Componentes

- As páginas de pedidos (`/pedidos` e `/pedidos-v2`) agora utilizam o mesmo layout e componentes para exibição dos cards de métricas (data, faturamento, total de pedidos e pedidos cancelados), garantindo consistência visual e reutilização de lógica via hooks.
- A página de clientes (`/clientes`) utiliza componentes reutilizáveis e hooks específicos para gerenciar os dados dos clientes, seguindo o mesmo padrão de componentização do restante da aplicação.
- A página de cadastro de produtos segue o mesmo padrão visual, mantendo a consistência da aplicação.

## Sidebar Componentizado e Expansível

- O Sidebar foi totalmente refatorado e componentizado, utilizando os componentes `SidebarLogo`, `SidebarSection`, `SidebarItem`, `SidebarSubmenu` e `SidebarFooter`.
- O menu lateral expande ao passar o mouse, exibindo textos e submenus, seguindo o layout do design.
- Implementamos submenus aninhados para "Produtos" e "Adicionais" que aparecem apenas ao clicar no item "Cardápio".
- O item "Dashboard" na barra lateral agora direciona para a página inicial ("/"), tornando a navegação mais intuitiva.
- Cada item e submenu é um componente reutilizável, facilitando manutenção e customização.

## Componentes Principais

- **Header**: Exibe informações do usuário e status da loja
- **Sidebar**: Navegação principal do sistema
- **ClientsList**: Listagem de clientes com funcionalidade de busca
- **ClientItem**: Item individual de cliente com ações
- **PromotionalBanners**: Banners promocionais
- **PerformanceMetrics**: Métricas de desempenho
- **PopularProducts**: Produtos mais vendidos
- **OrdersPanel**: Painel de gerenciamento de pedidos
- **OrderCard**: Card de pedido pendente
- **DeliveryCard**: Card de pedido em entrega
- **OrdersSidebar**: Painel lateral para visualização e aceitação de pedidos
- **SelectCategoryModal**: Modal para seleção hierárquica de categorias
- **ProductForm**: Formulário de cadastro de produtos com validação

## Gerenciamento de Estado e Hooks

O projeto utiliza Jotai para gerenciamento de estado, com atoms para diferentes partes da aplicação organizados em hooks específicos:

### Hooks Principais e Suas Utilizações

- **useCategories**: 
  - **Função**: Gerencia categorias de produtos com suporte a hierarquia
  - **Utilizado por**: `SelectCategoryModal`, formulários de produtos
  - **Dados**: Categorias predefinidas, selecionadas e relacionamentos hierárquicos

- **useProductForm**: 
  - **Função**: Gerencia o estado do formulário de cadastro de produtos
  - **Utilizado por**: Página de cadastro de produtos
  - **Dados**: Informações do produto em cadastro, validação e processamento

- **useOrdersList**: 
  - **Função**: Fonte única de verdade para todos os pedidos do sistema
  - **Utilizado por**: `useOrdersStore`, páginas de pedidos
  - **Dados**: Lista completa de pedidos com todos os detalhes e status
  
- **useOrdersStore**: 
  - **Função**: Gerencia pedidos pendentes e em entrega para o painel lateral
  - **Utilizado por**: `OrdersPanel`, `OrderCard`, `DeliveryCard`
  - **Refatoração**: Agora consome dados de `useOrdersList` para evitar duplicação e manter consistência

- **useClients**: 
  - **Função**: Gerencia a lista de clientes com funcionalidades de busca e filtragem
  - **Utilizado por**: Página `clientes`, componentes `ClientsList` e `ClientItem`

- **useUserStore**: 
  - **Função**: Gerencia informações do usuário logado
  - **Utilizado por**: Componente `Header` e outras áreas que exibem dados do usuário

- **usePromotionalBanners**: 
  - **Função**: Gerencia banners promocionais da página inicial
  - **Utilizado por**: Componente `PromotionalBanners`

- **usePerformanceMetrics**: 
  - **Função**: Fornece métricas de desempenho como faturamento e novos clientes
  - **Utilizado por**: Componente `PerformanceMetrics`

- **usePopularProducts**: 
  - **Função**: Gerencia lista de produtos populares
  - **Utilizado por**: Componente `PopularProducts`

- **useRecentOrders**: 
  - **Função**: Fornece histórico de pedidos recentes
  - **Utilizado por**: Componente `RecentOrders`

- **useOrdersMetrics**: 
  - **Função**: Fornece métricas específicas para a página de pedidos
  - **Utilizado por**: Páginas `/pedidos` e `/pedidos-v2`

- **useOrdersFilter**:
  - **Função**: Gerencia filtros aplicados à lista de pedidos
  - **Utilizado por**: Páginas e componentes de pedidos com filtros

- **useOrderDetails**:
  - **Função**: Fornece detalhes específicos de um pedido para visualização detalhada
  - **Utilizado por**: Componentes de visualização detalhada de pedidos

## Melhorias Recentes

- Implementação do sistema completo de cadastro de produtos com suporte a diferentes tipos
- Desenvolvimento do modal de seleção de categorias com design pixel-perfect conforme especificações
- Criação do sistema de gerenciamento hierárquico de categorias com contexto compartilhado
- Refinamento da UI do modal de categorias com ajustes de posicionamento, espaçamento e cores
- Integração do sistema de categorias com o formulário de cadastro de produtos
- Refatoração do sistema de hooks para eliminar duplicação de dados entre `useOrdersStore` e `useOrdersList`
- Correção da visualização de barras de rolagem com classes CSS personalizadas
- Correção de erro de build na página de clientes adicionando a diretiva "use client"
- Refinamento da navegação com o Dashboard redirecionando para a página inicial
- Melhoria na UX do sidebar com submenus interativos
- Redesign da página de clientes com integração do painel lateral de pedidos
- Implementação de visualização consistente entre diferentes seções do sistema
- Componentização completa da seção de clientes com hook dedicado para gerenciamento de dados

## Próximos Passos

- Implementar autenticação
- Adicionar funcionalidade de busca avançada
- Implementar filtros para pedidos
- Adicionar gráficos de desempenho
- Implementar integração com backend
- Expandir funcionalidades de cadastro de produtos
- Implementar sistema de promoções e descontos
