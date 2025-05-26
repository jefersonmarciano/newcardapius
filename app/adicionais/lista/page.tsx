"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import OrdersPanel from "@/components/orders/OrdersPanel";
import Header from "@/components/layout/Header";
import AdicionalModal from "@/components/adicionais/AdicionalModal";
import { useAdicionaisStore } from "@/hooks/useAdicionaisStore";

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
    <tr className=" " data-lov-id="app/adicionais/lista/AdicionalRow.tsx">
      <td className="flex items-center gap-4 py-4 min-w-[220px]">
        <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          {adicional.imagem && adicional.imagem.startsWith("blob:") ? (
            <img src={adicional.imagem} alt={adicional.nome} width={56} height={56} className="object-cover w-14 h-14" />
          ) : (
            <Image src={adicional.imagem} alt={adicional.nome} width={56} height={56} className="object-cover w-14 h-14" />
          )}
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
      <td className="px-4 flex gap-5 items-center justify-center">
        <button className="text-orange-500 hover:text-orange-700" title="Editar">
          <img src="/vetores/edit.svg" alt="Editar" className="h-5 w-5" />
        </button>
        <button className="text-red-500 hover:text-red-700" title="Excluir">
          <img src="/vetores/trash.svg" alt="Excluir" className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
}

function AdicionaisTable({ adicionais }: { adicionais: any[] }) {
  return (
    <div className="bg-white rounded-2xl " data-lov-id="app/adicionais/lista/AdicionaisTable.tsx">
      <table className="min-w-full text-sm rounded-2xl">
        <thead className="rounded-t-3">
          <tr className="bg-orange-50 text-gray-700 rounded-t-2xl">
            <th className="py-3 px-6 text-left font-semibold">Adicional <span className="align-middle">▼</span></th>
            <th className="py-3 px-6 text-left font-semibold">Preço <span className="align-middle">▼</span></th>
            <th className="py-3 px-6 text-left font-semibold">Promocional <span className="align-middle">▼</span></th>
            <th className="py-3 px-6 text-center font-semibold">Ação</th>
          </tr>
        </thead>
        <tbody>
          {adicionais.map((adicional) => (
            <>
              <AdicionalRow key={adicional.id} adicional={adicional} />
              <tr><td colSpan={4}><hr className="border-gray-200" /></td></tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AdicionaisListaPage() {
  const [busca, setBusca] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const adicionais = useAdicionaisStore((state) => state.adicionais);
  const addAdicional = useAdicionaisStore((state) => state.addAdicional);

  function handleAddAdicional(novoAdicional: any) {
    addAdicional({
      ...novoAdicional,
      preco: novoAdicional.preco ? `R$ ${novoAdicional.preco}` : "",
      promocional: novoAdicional.promocional ? `R$ ${novoAdicional.promocional}` : "",
    });
  }

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
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow" data-lov-id="app/adicionais/lista/page.tsx:btn-cadastrar" onClick={() => setModalOpen(true)}>
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
                <div className="border border-gray-200 rounded-2xl bg-white p-5 my-8 mx-auto w-full ">
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
      <AdicionalModal open={modalOpen} onOpenChange={setModalOpen} onSave={handleAddAdicional} />
    </>
  );
} 