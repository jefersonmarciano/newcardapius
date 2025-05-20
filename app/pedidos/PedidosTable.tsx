import PedidoRow from './PedidoRow';

export default function PedidosTable({ orders }: { orders: any[] }) {
  return (
    <div className="p-4 pt-0" data-lov-id="app/pedidos/PedidosTable">
      <div className="bg-white rounded-md overflow-hidden border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 text-sm font-medium text-gray-500">Pedido</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Cliente</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Descrição</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Valor</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Hora</th>
              <th className="text-left p-4 text-sm font-medium text-gray-500">Status</th>
              <th className="text-center p-4 text-sm font-medium text-gray-500">Ação</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <PedidoRow key={index} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 