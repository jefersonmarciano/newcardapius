import Image from 'next/image';

export default function PedidosMetrics({ metrics }: { metrics: any }) {
  return (
    <div className="grid grid-cols-7 gap-4 p-4" data-lov-id="app/pedidos/PedidosMetrics">
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
  );
} 