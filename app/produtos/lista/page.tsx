"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import OrdersPanel from "@/components/orders/OrdersPanel";
import Header from "@/components/layout/Header";
import ProdutoModal from "@/components/products/ProdutoModal";
import { useProdutosStore } from "@/hooks/useProdutosStore";

function ProdutoRow({ produto }: { produto: any }) {
  return (
    <tr>
      <td className="flex items-center gap-4 py-4 min-w-[220px]">
        <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
          {produto.imagem && produto.imagem.startsWith("blob:") ? (
            <img src={produto.imagem} alt={produto.nome} width={56} height={56} className="object-cover w-14 h-14" />
          ) : (
            <Image src={produto.imagem} alt={produto.nome} width={56} height={56} className="object-cover w-14 h-14" />
          )}
        </div>
        <div>
          <div className="font-semibold text-gray-800">{produto.nome}</div>
          <div className="text-xs text-gray-500">{produto.descricao}</div>
        </div>
      </td>
      <td className="px-4">
        <Input className="w-24 text-center" value={produto.preco} readOnly />
      </td>
      <td className="px-4">
        <Input className="w-24 text-center" value={produto.promocional} readOnly />
      </td>
      <td className="px-4">
        <Input className="w-48 text-center" value={produto.categoria} readOnly />
      </td>
      <td className="px-4 flex gap-5 items-center justify-center">
      <button className="text-orange-500 hover:text-orange-700" title="Compartilhar">
          <img src="/vetores/compartilhar.svg" alt="Compartilhar" className="h-5 w-5" />
        </button>
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

function ProdutosTable({ produtos }: { produtos: any[] }) {
  return (
    <div className="bg-white rounded-2xl">
      <table className="min-w-full text-sm rounded-2xl">
        <thead className="rounded-t-3">
          <tr className="bg-orange-50 text-gray-700 rounded-t-2xl">
            <th className="py-3 px-6 text-left font-semibold">Produto <span className="align-middle">▼</span></th>
            <th className="py-3 px-6 text-left font-semibold">Preço <span className="align-middle">▼</span></th>
            <th className="py-3 px-6 text-left font-semibold">Promocional <span className="align-middle">▼</span></th>
            <th className="py-3 px-6 text-left font-semibold">Categoria <span className="align-middle">▼</span></th>
            <th className="py-3 px-6 text-center font-semibold">Ação</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <>
              <ProdutoRow key={produto.id} produto={produto} />
              <tr><td colSpan={5}><hr className="border-gray-200" /></td></tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ProdutosListaPage() {
  const [busca, setBusca] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const produtos = useProdutosStore((state) => state.produtos);
  const addProduto = useProdutosStore((state) => state.addProduto);

  function handleAddProduto(novoProduto: any) {
    addProduto({
      ...novoProduto,
      preco: novoProduto.preco ? `R$ ${novoProduto.preco}` : "",
      promocional: novoProduto.promocional ? `R$ ${novoProduto.promocional}` : "",
    });
  }

  return (
    <>
      <Header title="Produtos" />
      <div className="flex h-screen bg-[#F7F7F8]">
        {/* Conteúdo central */}
        <div className="flex-1 flex flex-col items-center pt-8">
          <div className="w-full px-2">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mt-2 mb-6">
                <div>
                  <div className="text-lg font-semibold">Listagem de produtos <span className="text-base text-gray-400 align-middle">▼</span></div>
                  <div className="text-xs text-gray-500 mt-1">produtos cadastrados</div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg shadow" onClick={() => setModalOpen(true)}>
                  +Cadastrar produto
                </Button>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Input
                  className="w-72 h-10"
                  placeholder="Buscar produto"
                  value={busca}
                  onChange={e => setBusca(e.target.value)}
                />
                <button className="p-2 border border-gray-200 rounded-md bg-white">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="9.5" cy="9.5" r="7.5" stroke="#6B7280" strokeWidth="1.5"/><path d="M16 16L14 14" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
              <div className="border border-gray-200 rounded-2xl bg-white p-5 my-8 mx-auto w-full ">
                <ProdutosTable produtos={produtos.filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()))} />
              </div>
            </div>
          </div>
        </div>
        {/* OrdersPanel à direita */}
        <div className="w-[420px] border-l border-gray-100 min-h-[calc(100vh-64px)] bg-[#F7F7F8]">
          <OrdersPanel />
        </div>
      </div>
      <ProdutoModal open={modalOpen} onOpenChange={setModalOpen} onSave={handleAddProduto} />
    </>
  );
} 