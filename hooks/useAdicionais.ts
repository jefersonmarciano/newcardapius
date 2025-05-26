import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export interface Adicional {
  id: string
  nome: string
  descricao: string
  preco: number
  precoPromocional: number
  imagem: string
}

// Função para buscar os adicionais (simulada por enquanto)
const fetchAdicionais = async (): Promise<Adicional[]> => {
  // Aqui você substituirá por uma chamada real à API
  return [
    {
      id: '1',
      nome: 'Maionese',
      descricao: 'Maionese a moda da casa',
      preco: 100,
      precoPromocional: 75,
      imagem: '/images/maionese.png'
    },
    {
      id: '2',
      nome: 'Molho mostarda',
      descricao: 'Maionese a moda da casa',
      preco: 100,
      precoPromocional: 75,
      imagem: '/images/mostarda.png'
    },
    {
      id: '3',
      nome: 'Molho tropical',
      descricao: 'Maionese a moda da casa',
      preco: 100,
      precoPromocional: 75,
      imagem: '/images/molho-tropical.png'
    }
  ]
}

const useAdicionais = () => {
  const queryClient = useQueryClient()

  const { data: adicionais, isLoading, error } = useQuery<Adicional[]>({
    queryKey: ['adicionais'],
    queryFn: fetchAdicionais
  })

  const { mutate: deleteAdicional } = useMutation({
    mutationFn: async (id: string) => {
      // Aqui você implementará a chamada real para deletar
      console.log('Deletando adicional:', id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adicionais'] })
    }
  })

  const { mutate: updateAdicional } = useMutation({
    mutationFn: async (adicional: Adicional) => {
      // Aqui você implementará a chamada real para atualizar
      console.log('Atualizando adicional:', adicional)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adicionais'] })
    }
  })

  return {
    adicionais,
    isLoading,
    error,
    deleteAdicional,
    updateAdicional
  }
}

export default useAdicionais 