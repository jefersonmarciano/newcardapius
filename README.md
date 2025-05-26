# Dashboard de Delivery - Next.js

Este projeto é um dashboard para gerenciamento de pedidos de delivery, desenvolvido com Next.js, TypeScript, Tailwind CSS e Zustand para gerenciamento de estado global.

## Tecnologias Utilizadas

- **Next.js**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização utilitária
- **Zustand**: Gerenciamento de estado global
- **Lucide React**: Ícones
- **shadcn/ui**: Componentes de UI

## Estrutura do Projeto

```plaintext
src/
├── app/                    # Diretório principal do Next.js App Router
│   ├── cadastro-produto/   # Página de cadastro de produtos
│   ├── categorias/         # Página de gerenciamento de categorias
│   ├── adicionais/         # Listagem e cadastro de adicionais
│   ├── produtos/           # Listagem e cadastro de produtos
│   ├── layout.tsx          # Layout principal da aplicação
│   └── page.tsx            # Página inicial do dashboard
├── components/             # Componentes reutilizáveis
│   ├── banners/            # Banners promocionais
│   ├── clients/            # Componentes de clientes
│   ├── layout/             # Header, Sidebar, etc.
│   ├── metrics/            # Métricas de desempenho
│   ├── orders/             # Componentes de pedidos
│   ├── products/           # Componentes de produtos
│   ├── adicionais/         # Componentes de adicionais
│   └── ui/                 # Componentes de UI básicos (shadcn/ui)
├── hooks/                  # Hooks personalizados e lógica de estado
├── providers/              # Providers de contexto
└── types/                  # Definições de tipos TypeScript
```

## Funcionalidades Principais

- **Layout Responsivo**: Sidebar expansível, header e painéis de conteúdo
- **Métricas de Desempenho**: KPIs como faturamento, novos clientes, etc.
- **Gerenciamento de Pedidos**: Visualização, aceitação e histórico de pedidos
- **Produtos Populares**: Exibição dos produtos mais vendidos
- **Cadastro e Listagem de Produtos**: Sistema completo, com modal, upload de imagem, validação e estado global
- **Cadastro e Listagem de Adicionais**: Modal idêntico ao de produtos, controles de mínimo/máximo, switches, etc.
- **Gerenciamento de Categorias**: Sistema hierárquico, seleção via modal, criação e visualização
- **Componentização**: Todas as seções do cadastro e listagem são componentizadas
- **Estado Global**: Zustand para produtos, adicionais, pedidos, clientes, etc.

## Cadastro de Produtos e Adicionais

- Modal de cadastro com layout em duas colunas, upload de imagem, switches, mínimo/máximo, etc.
- Listagem com tabela, busca, ícones de ação, separador `<hr>` entre itens
- Inclusão de novos itens via modal, aparecendo imediatamente na lista
- Estado global compartilhado entre páginas

## Sistema de Categorias

- Modal de seleção hierárquica de categorias
- Criação de novas categorias diretamente do modal
- Visualização clara da hierarquia
- Integração com cadastro de produtos

## Sidebar Componentizado

- Sidebar expansível ao passar o mouse
- Submenus aninhados para "Produtos" e "Adicionais"
- Componentes reutilizáveis: `SidebarLogo`, `SidebarSection`, `SidebarItem`, `SidebarSubmenu`, `SidebarFooter`

## Hooks e Estado Global

- **useProdutosStore**: Produtos globais
- **useAdicionaisStore**: Adicionais globais
- **useCategories**: Gerenciamento de categorias
- **useOrdersStore**: Pedidos globais
- **useClients**: Clientes globais
- Outros hooks para métricas, banners, usuários, etc.

## Melhorias Recentes

- Modal de cadastro de produtos e adicionais idênticos ao design
- Listagem com separador visual entre itens
- Sidebar refatorado e componentizado
- Integração de categorias hierárquicas
- Estado global com Zustand

## Próximos Passos

- Implementar autenticação
- Adicionar busca avançada e filtros
- Gráficos de desempenho
- Integração com backend
- Sistema de promoções e descontos

---

> Para rodar o projeto:
>
> ```bash
> npm install
> npm run dev
> ```

Se tiver dúvidas sobre a estrutura ou quiser contribuir, fique à vontade para abrir uma issue ou PR!
