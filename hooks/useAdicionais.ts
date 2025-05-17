import { useState } from 'react';

export interface Adicional {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  promocional: string;
  disponivel: boolean;
  imagem: string;
}

export default function useAdicionais() {
  const [adicionais, setAdicionais] = useState<Adicional[]>([
    {
      id: 1,
      nome: 'Pizza napolitana',
      descricao: 'Pizza Napolitana da casa com ervas finas e queijo premium...',
      preco: 'R$ 100',
      promocional: 'R$ 75',
      disponivel: true,
      imagem: '/images/pizza-napolitana.jpg',
    },
    {
      id: 2,
      nome: 'Pizza marguerita',
      descricao: 'Pizza Marguerita tradicional com tomate e manjericão...',
      preco: 'R$ 90',
      promocional: 'R$ 70',
      disponivel: true,
      imagem: '/images/pizza-marguerita.jpg',
    },
    {
      id: 3,
      nome: 'Pizza portuguesa',
      descricao: 'Pizza Portuguesa com ovos, presunto e cebola...',
      preco: 'R$ 110',
      promocional: 'R$ 85',
      disponivel: true,
      imagem: '/images/pizza-portuguesa.jpg',
    },
  ]);

  const toggleDisponibilidade = (id: number) => {
    setAdicionais(prev =>
      prev.map(adicional =>
        adicional.id === id
          ? { ...adicional, disponivel: !adicional.disponivel }
          : adicional
      )
    );
  };

  const addAdicionais = (novos: Adicional[]) => {
    setAdicionais(prev => [
      ...prev,
      ...novos.filter(novo => !prev.some(a => a.id === novo.id))
    ]);
  };

  return {
    adicionais,
    toggleDisponibilidade,
    addAdicionais,
    setAdicionais,
  };
} 