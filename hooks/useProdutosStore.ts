import { create } from "zustand";

export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  promocional: string;
  imagem: string;
  categoria: string;
}

interface ProdutosState {
  produtos: Produto[];
  addProduto: (produto: Produto) => void;
}

export const useProdutosStore = create<ProdutosState>((set) => ({
  produtos: [
    {
      id: 1,
      nome: "Hamburguer Caseiro",
      descricao: "2 hamburgueres, queijo, molho especial, cebola e picles e pão com gergelim",
      preco: "R$ 100",
      promocional: "R$ 75",
      imagem: "/images/hamburguer.png",
      categoria: "Lanches > Hamburguer",
    },
    // ...outros mocks
  ],
  addProduto: (produto) =>
    set((state) => ({
      produtos: [...state.produtos, produto],
    })),
})); 