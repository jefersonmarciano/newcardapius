import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

export default function PedidoRow({ order }: { order: any }) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50" data-lov-id="app/pedidos/PedidoRow">
      <td className="p-4 text-sm font-medium">{order.id}</td>
      <td className="p-4 text-sm">{order.customerName}</td>
      <td className="p-4 text-sm">
        <div className="flex flex-col space-y-1">
          {order.items.map((item: any, idx: number) => (
            <div key={idx}>{item.quantity}x {item.name}</div>
          ))}
        </div>
      </td>
      <td className="p-4 text-sm">R$ {order.total.toFixed(2).replace('.', ',')}</td>
      <td className="p-4 text-sm">{order.time}</td>
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
  );
} 