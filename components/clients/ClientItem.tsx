"use client"

import { Client } from "@/hooks/useClients"

interface ClientItemProps {
  client: Client
  selected: boolean
  onSelect: (id: string) => void
}

export default function ClientItem({ client, selected, onSelect }: ClientItemProps) {
  return (
    <div className="flex items-center p-4 border-b border-gray-100">
      <div className="w-6 mr-4">
        <input 
          type="checkbox" 
          className="rounded border-gray-300" 
          checked={selected}
          onChange={() => onSelect(client.id)}
        />
      </div>
      <div className="flex-1">
        <div className="font-medium">{client.name}</div>
        <div className="flex items-center text-sm text-gray-500">
          <img 
            src="/vetores/whatsapp.svg" 
            alt="WhatsApp" 
            className="h-4 w-4 mr-1" 
          />
          {client.phone}
        </div>
      </div>
      <div className="w-48">
        <div className="text-sm font-medium">Último pedido</div>
        <div className="text-sm text-gray-500">{client.lastOrderDate}</div>
      </div>
      <div className="flex gap-2">
        <button className="p-2 rounded-full text-orange-500 hover:bg-orange-50">
          <img 
            src="/vetores/edit.svg" 
            alt="Editar" 
            className="w-5 h-5" 
          />
        </button>
        <button className="p-2 rounded-full text-green-500 hover:bg-green-50">
          <img 
            src="/vetores/whatsapp.svg" 
            alt="WhatsApp" 
            className="w-5 h-5" 
          />
        </button>
        <button className="p-2 rounded-full text-red-500 hover:bg-red-50">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.6667 5.00001L15.8334 15.8333C15.7883 16.3674 15.5557 16.8657 15.1805 17.2324C14.8053 17.5992 14.3142 17.8125 13.8 17.8333H6.20004C5.68586 17.8125 5.19476 17.5992 4.81956 17.2324C4.44437 16.8657 4.21174 16.3674 4.16671 15.8333L3.33337 5.00001M8.33337 9.16667V13.3333M11.6667 9.16667V13.3333M12.5 5.00001V2.50001C12.5 2.27899 12.4122 2.06703 12.2559 1.91075C12.0996 1.75447 11.8877 1.66667 11.6667 1.66667H8.33337C8.11236 1.66667 7.90039 1.75447 7.74412 1.91075C7.58784 2.06703 7.50004 2.27899 7.50004 2.50001V5.00001M2.50004 5.00001H17.5"
              stroke="#EF4444"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
} 