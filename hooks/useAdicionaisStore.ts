import { create } from "zustand";

export interface Adicional {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  promocional: string;
  imagem: string;
  minimo: number;
  maximo: number;
  obrigatorio: boolean;
  disponivel: boolean;
}

interface AdicionaisState {
  adicionais: Adicional[];
  addAdicional: (adicional: Adicional) => void;
}

export const useAdicionaisStore = create<AdicionaisState>((set) => ({
  adicionais: [
    {
      id: 1,
      nome: "Maionese",
      descricao: "Maionese a moda da casa",
      preco: "R$ 100",
      promocional: "R$ 75",
      imagem: "/images/maionese.png",
      minimo: 1,
      maximo: 6,
      obrigatorio: false,
      disponivel: true,
    },
    // ...outros mocks
  ],
  addAdicional: (adicional) =>
    set((state) => ({
      adicionais: [...state.adicionais, adicional],
    })),
}));