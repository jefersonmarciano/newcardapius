"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import OrdersPanel from "@/components/orders/OrdersPanel";
import Header from "@/components/layout/Header";

const MOCK_ADICIONAIS = [
  {
    id: 1,
    nome: "Maionese",
    descricao: "Maionese a moda da casa",
    preco: "R$ 100",
    promocional: "R$ 75",
    imagem: "/images/maionese.png",
  },
  {
    id: 2,
    nome: "Molho mostarda",
    descricao: "Maionese a moda da casa",
    preco: "R$ 100",
    promocional: "R$ 75",
    imagem: "/images/mostarda.png",
  },
  {
    id: 3,
    nome: "Molho tropical",
    descricao: "Maionese a moda da casa",
    preco: "R$ 100",
    promocional: "R$ 75",
    imagem: "/images/tropical.png",
  },
];

function AdicionalRow({ adicional }: { adicional: any }) {
  return (
    <tr className="border-b last:border-b-0" data-lov-id="app/adicionais/lista/AdicionalRow.tsx">
      <td className="flex items-center gap-4 py-4 min-w-[220px]">
        <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          <Image src={adicional.imagem} alt={adicional.nome} width={56} height={56} className="object-cover w-14 h-14" />
        </div>
        <div>
          <div className="font-semibold text-gray-800">{adicional.nome}</div>
          <div className="text-xs text-gray-500">{adicional.descricao}</div>
        </div>
      </td>
      <td className="px-4">
        <Input className="w-24 text-center" value={adicional.preco} readOnly />
      </td>
      <td className="px-4">
        <Input className="w-24 text-center" value={adicional.promocional} readOnly />
      </td>
      <td className="px-4 flex gap-2 items-center justify-center">
        <button className="text-orange-500 hover:text-orange-700" title="Editar">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 0 1 2.828 2.828l-7.5 7.5-3.5.5.5-3.5 7.5-7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button className="text-red-500 hover:text-red-700" title="Excluir">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M6 6V5.5C6 4.67157 6.67157 4 7.5 4H12.5C13.3284 4 14 4.67157 14 5.5V6M5 6H15M7 9V13M10 9V13M13 9V13M4 15.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </td>
    </tr>
  );
}

function AdicionaisTable({ adicionais }: { adicionais: any[] }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-" data-lov-id="app/adicionais/lista/AdicionaisTable.tsx">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-orange-50 text-gray-700">
            <th className="py-3 px-6 text-left font-semibold">Adicional <span className="align-middle">▼</span></th>
            <th className="py-3 px-6 text-left font-semibold">Preço <span className="align-middle">▼</span></th>
            <th className="py-3 px-6 text-left font-semibold">Promocional <span className="align-middle">▼</span></th>
            <th className="py-3 px-6 text-center font-semibold">Ação</th>
          </tr>
        </thead>
        <tbody>
          {adicionais.map((adicional) => (
            <AdicionalRow key={adicional.id} adicional={adicional} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AdicionaisListaPage() {
  const [busca, setBusca] = useState("");
  const [adicionais, setAdicionais] = useState(MOCK_ADICIONAIS);

  return (
    <>
      <Header title="Adicionais" />
      <div className="flex h-screen bg-[#F7F7F8]" data-lov-id="app/adicionais/lista/page.tsx">
        {/* Conteúdo central */}
        <div className="flex-1 flex flex-col items-center pt-8">
          <div className="w-full px-2">
            
              {/* Mantém o layout central exatamente como está */}
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mt-2 mb-6">
                  <div>
                    <div className="text-lg font-semibold">Listagem de adicionais <span className="text-base text-gray-400 align-middle">▼</span></div>
                    <div className="text-xs text-gray-500 mt-1">categorias cadastradas</div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow" data-lov-id="app/adicionais/lista/page.tsx:btn-cadastrar">
                    +Cadastrar adicional
                  </Button>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Input
                    className="w-72 h-10"
                    placeholder="Buscar adicional"
                    value={busca}
                    onChange={e => setBusca(e.target.value)}
                    data-lov-id="app/adicionais/lista/page.tsx:input-busca"
                  />
                  <button className="p-2 border border-gray-200 rounded-md bg-white" data-lov-id="app/adicionais/lista/page.tsx:btn-busca">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="9.5" cy="9.5" r="7.5" stroke="#6B7280" strokeWidth="1.5"/><path d="M16 16L14 14" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </button>
                </div>
                <div className="border border-gray-200 rounded-xl bg-white p-8 my-8 mx-auto w-full ">
                <AdicionaisTable adicionais={adicionais.filter(a => a.nome.toLowerCase().includes(busca.toLowerCase()))} />
              </div>
            </div>
          </div>
        </div>
        {/* OrdersPanel à direita */}
        <div className="w-[420px] border-l border-gray-100 min-h-[calc(100vh-64px)] bg-[#F7F7F8]">
          <OrdersPanel />
        </div>
      </div>
    </>
  );
} 