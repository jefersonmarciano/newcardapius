import Image from 'next/image';

export default function PedidosHeader() {
  return (
    <header className="h-16 border-b border-gray-200 px-6 flex items-center justify-between bg-white" data-lov-id="app/pedidos/PedidosHeader">
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
  );
} 