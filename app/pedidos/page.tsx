"use client"

import React from 'react'
import { Eye, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useOrdersList } from '@/hooks/useOrdersList'
import { useOrdersMetrics } from '@/hooks/useOrdersMetrics'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function PedidosPage() {
  const { orders } = useOrdersList()
  const { metrics } = useOrdersMetrics()
  const router = useRouter()
  
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-gray-200 px-6 flex items-center justify-between bg-white">
        <h1 className="text-xl font-medium">Pedidos</h1>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 8.33334H2.5C2.27899 8.33334 2.06702 8.42113 1.91074 8.57741C1.75446 8.73369 1.66667 8.94565 1.66667 9.16667V15.8333C1.66667 16.0544 1.75446 16.2663 1.91074 16.4226C2.06702 16.5789 2.27899 16.6667 2.5 16.6667H17.5C17.721 16.6667 17.933 16.5789 18.0893 16.4226C18.2455 16.2663 18.3333 16.0544 18.3333 15.8333V9.16667C18.3333 8.94565 18.2455 8.73369 18.0893 8.57741C17.933 8.42113 17.721 8.33334 17.5 8.33334Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.83333 8.33334V5.00001C5.83333 4.11595 6.18452 3.26811 6.80964 2.64299C7.43476 2.01787 8.2826 1.66667 9.16667 1.66667C10.0507 1.66667 10.8986 2.01787 11.5237 2.64299C12.1488 3.26811 12.5 4.11595 12.5 5.00001V8.33334" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-gray-600 font-normal">Loja aberta</span>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6667 11.28V13.28C14.6675 13.4657 14.6294 13.6495 14.5548 13.8195C14.4802 13.9894 14.3705 14.1416 14.2328 14.2679C14.095 14.3942 13.9325 14.4914 13.7554 14.5535C13.5784 14.6155 13.3908 14.6409 13.2053 14.6283C11.1619 14.3904 9.21871 13.6221 7.51997 12.3883C5.94421 11.2646 4.62969 9.8501 3.64664 8.17434C2.5323 6.27563 1.83416 4.10692 1.67197 1.83767C1.66068 1.63916 1.68545 1.43989 1.74565 1.25126C1.80586 1.06264 1.90056 0.888821 2.02293 0.741042C2.1453 0.593264 2.29324 0.474411 2.45902 0.391937C2.6248 0.309463 2.80458 0.264929 2.98664 0.260669H4.8053C5.12539 0.257288 5.43658 0.367599 5.68481 0.572315C5.93304 0.77703 6.10163 1.06258 6.15997 1.37767C6.26602 2.01819 6.43946 2.64577 6.67864 3.24967C6.77431 3.48687 6.79981 3.74702 6.75195 3.99838C6.70409 4.24974 6.58489 4.48089 6.4053 4.66434L5.5973 5.52434C6.50251 7.27567 7.84166 8.72009 9.46664 9.69234L10.2746 8.83234C10.4465 8.64293 10.6633 8.51637 10.8992 8.46534C11.1351 8.41431 11.3789 8.44173 11.6 8.54234C12.1649 8.79823 12.7518 8.98432 13.3506 9.09634C13.6524 9.15817 13.9252 9.33598 14.1213 9.59782C14.3173 9.85967 14.4246 10.1866 14.4213 10.5233L14.6667 11.28Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src="/placeholder-user.jpg" 
                  alt="Luciano França" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm">Luciano França</span>
                <span className="text-xs text-gray-500">Administrador geral</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Content */}
      <div className="flex-1 bg-gray-50 overflow-auto">
        {/* Metrics */}
        <div className="grid grid-cols-7 gap-4 p-4">
          {/* Hoje */}
          <div className="col-span-1 flex items-center justify-center h-[180px]">
            <div className="bg-orange-500 text-white rounded-xl flex flex-col items-center justify-center h-full w-full max-w-[100%] min-w-[100%]">
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.3333 1.66667V5.00001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66667 1.66667V5.00001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 8.33334H17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-lg font-bold">Hoje</span>
                </div>
                <div className="text-xs font-medium">{metrics.dataAtual}</div>
              </div>
            </div>
          </div>
          
          {/* Faturamento Hoje */}
          <div className="col-span-2 bg-white rounded-[7.5px] border border-[#EFEFEF] flex flex-col justify-center p-8 h-[180px]">
            <div className="text-left text-gray-500 text-2xl font-medium mb-4">Faturamento Hoje</div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-end gap-2">
                <span className="text-gray-700 text-2xl font-bold">R$</span>
                <span className="text-4xl font-extrabold text-gray-800">13.459</span>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <Image 
                    src="/vetores/VectorBlue.svg" 
                    alt="Tendência de alta" 
                    width={28} 
                    height={28} 
                    className="mr-1" 
                  />
                  <span className="text-blue-500 font-bold text-2xl mr-2">5.3%</span>
                </div>
                <span className="text-gray-500 text-xl mt-1">da semana passada</span>
              </div>
            </div>
          </div>
          
          {/* Total de pedidos */}
          <div className="col-span-2 bg-white rounded-[7.5px] border border-[#EFEFEF] flex flex-col justify-center p-8 h-[180px]">
            <div className="text-left text-gray-500 text-2xl font-medium mb-4">Total de pedidos</div>
            <div className="flex items-center justify-between w-full">
              <span className="text-4xl font-extrabold text-gray-800">{metrics.totalPedidos.value}</span>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <Image 
                    src="/vetores/VectorRed.svg" 
                    alt="Tendência de queda" 
                    width={28} 
                    height={28} 
                    className="mr-1" 
                  />
                  <span className="text-red-500 font-bold text-2xl mr-2">{metrics.totalPedidos.percentage}%</span>
                </div>
                <span className="text-gray-500 text-xl mt-1">da semana passada</span>
              </div>
            </div>
          </div>
          
          {/* Pedidos cancelados */}
          <div className="col-span-2 bg-white rounded-[7.5px] border border-[#EFEFEF] flex flex-col justify-center p-8 h-[180px]">
            <div className="text-left text-gray-500 text-2xl font-medium mb-4">Pedidos cancelados</div>
            <div className="flex items-center justify-between w-full">
              <span className="text-4xl font-extrabold text-gray-800">{metrics.pedidosCancelados.value}</span>
              <div className="flex flex-col items-end">
                <div className="flex items-center">
                  <Image 
                    src="/vetores/VectorRed.svg" 
                    alt="Tendência de queda" 
                    width={28} 
                    height={28} 
                    className="mr-1" 
                  />
                  <span className="text-red-500 font-bold text-2xl mr-2">{metrics.pedidosCancelados.percentage}%</span>
                </div>
                <span className="text-gray-500 text-xl mt-1">da semana passada</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Orders Header */}
        <div className="p-4 pb-0">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col space-y-1">
              <div className="flex items-center gap-2 text-gray-800 font-medium">
                <h2 className="text-lg">Lista de Pedidos</h2>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-sm text-gray-500">Todos os pedidos feitos para o estabelecimento</p>
            </div>
            
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input placeholder="Buscar pedido" className="pl-10 h-9 w-60" />
              </div>
              
              <button
                className="p-2 border border-gray-200 rounded-md bg-white"
                onClick={() => router.push('/pedidos-v2')}
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 2.5H11.6667V8.33333H17.5V2.5Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 11.6667H11.6667V17.5H17.5V11.6667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.33333 11.6667H2.5V17.5H8.33333V11.6667Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button className="p-2 border border-gray-200 rounded-md bg-white">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66667 5H17.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66667 10H17.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.66667 15H17.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.5 5H2.50833" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.5 10H2.50833" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.5 15H2.50833" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Orders Table */}
        <div className="p-4 pt-0">
          <div className="bg-white rounded-md overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Pedido <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Cliente <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Descrição <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Valor <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Hora <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Status <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </th>
                  <th className="text-center p-4 text-sm font-medium text-gray-500">
                    <div className="flex items-center justify-end gap-1 cursor-pointer">
                      Ação <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 text-sm font-medium">
                      {order.id}
                    </td>
                    <td className="p-4 text-sm">
                      {order.customerName}
                    </td>
                    <td className="p-4 text-sm">
                      <div className="flex flex-col space-y-1">
                        {order.items.map((item, idx) => (
                          <div key={idx}>{item.quantity}x {item.name}</div>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-sm">
                      R$ {order.total.toFixed(2).replace('.', ',')}
                    </td>
                    <td className="p-4 text-sm">
                      {order.time}
                    </td>
                    <td className="p-4">
                      <span className={
                        order.status === 'Preparando' ? 'text-orange-500' : 
                        order.status === 'Enviado' ? 'text-blue-500' : 
                        'text-green-500'
                      }>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-center">
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Eye className="h-5 w-5 text-gray-500" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Pagination */}
            <div className="flex items-center justify-center p-4 border-t border-gray-100 gap-2">
              <Button variant="destructive" size="sm" className="bg-orange-500 hover:bg-orange-600 rounded-md px-3 h-8 min-w-8">
                1
              </Button>
              <Button variant="ghost" size="sm" className="rounded-md px-3 h-8 min-w-8">
                2
              </Button>
              <Button variant="ghost" size="sm" className="rounded-md px-3 h-8 min-w-8">
                3
              </Button>
              <Button variant="ghost" size="sm" className="rounded-md h-8 px-3">
                Próxima
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 