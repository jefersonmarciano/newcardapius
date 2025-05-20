"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import OrdersPanel from "@/components/orders/OrdersPanel";
import { BebidasCategoriesProvider, useBebidasCategories } from "./BebidasCategoriesProvider";
import BebidasCategorySection from "./BebidasCategorySection";
import BebidasSelectCategoryModal from "./BebidasSelectCategoryModal";
import { Input } from "@/components/ui/input";
import BebidasProdutoSection from "./BebidasProdutoSection";

const mockImg = "/images/pizza.svg"; // Substitua pelo campo real de imagem depois

function AdicionaisSection() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8" data-lov-id="app/cadastro-produto/cadastro-bebidas/AdicionaisSection.tsx">
      <div className="mb-4">
        <div className="text-lg font-semibold mb-1">Adicionais</div>
        <div className="text-sm text-gray-500">Se este produto pode receber adicionais, inclua por aqui.</div>
      </div>
      <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-base font-semibold rounded-lg shadow">
        + Criar grupos de adicionais
      </Button>
    </div>
  );
}

export default function CadastroBebidasPage() {
  return (
    <BebidasCategoriesProvider>
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col">
          <Header title="Cadastro de bebidas" />
          <div className="flex flex-1">
            <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
              <div className="p-6">
                <CadastroBebidasPageContent />
              </div>
            </div>
            <OrdersPanel />
          </div>
        </div>
      </div>
    </BebidasCategoriesProvider>
  );
}

function CadastroBebidasPageContent() {
  const router = useRouter();
  const showCadastro = true;
  const [showCadastroProduto, setShowCadastroProduto] = useState(true);
  const [produtos, setProdutos] = useState<any[]>([]);
  const [showAdicionais, setShowAdicionais] = useState(false);

  // Categoria modal state
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [showNewCategoryModal, setShowNewCategoryModal] = useState(false);
  const {
    getSelectedCategoriesWithPath,
    toggleCategory,
  } = useBebidasCategories();
  const selectedCategories = getSelectedCategoriesWithPath();

  // Handler para adicionar produto
  function handleAdicionarProduto(produto: any) {
    setProdutos([...produtos, produto]);
    setShowAdicionais(true);
  }

  return (
    <div data-lov-id="app/cadastro-produto/cadastro-bebidas/page.tsx">
      <button
        onClick={() => router.back()}
        className="flex items-center text-gray-500 mb-6 hover:text-orange-500"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Cadastro de bebidas
      </button>
      <p className="text-sm text-gray-500 mb-6">Seção de cadastro de bebidas</p>

      {/* Seção de categorias de bebidas */}
      <BebidasCategorySection
        selectedCategories={selectedCategories}
        setIsCategoryModalOpen={setIsCategoryModalOpen}
        toggleCategory={toggleCategory}
      />

      {/* Modal de seleção de categoria */}
      <BebidasSelectCategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        showNewCategoryModal={showNewCategoryModal}
        setShowNewCategoryModal={setShowNewCategoryModal}
      />

      {/* Seção de cadastro do produto (igual à imagem) */}
      {showCadastroProduto && produtos.length === 0 && (
        <BebidasProdutoSection onSubmit={handleAdicionarProduto} />
      )}

      {/* Tabela/lista de produtos cadastrados */}
      {produtos.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-8" data-lov-id="app/cadastro-produto/cadastro-bebidas/page.tsx:tabela-produtos">
          <div className="mb-4">
            <div className="text-lg font-semibold mb-1">Produto</div>
            <div className="text-sm text-gray-500">Adicione as informações do produto</div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-orange-50">
                  <th className="px-4 py-2 text-left font-semibold">Produto <span className="align-middle">▼</span></th>
                  <th className="px-4 py-2 text-left font-semibold">Preço <span className="align-middle">▼</span></th>
                  <th className="px-4 py-2 text-left font-semibold">Promocional <span className="align-middle">▼</span></th>
                  <th className="px-4 py-2 text-left font-semibold">Disponibilidade</th>
                  <th className="px-4 py-2 text-left font-semibold">Ação</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto, idx) => (
                  <tr key={idx} className="border-b last:border-b-0">
                    <td className="px-4 py-3 flex items-center gap-3 min-w-[220px]">
                      <img src={produto.imagem || mockImg} alt="img" className="w-16 h-16 rounded-lg object-cover" />
                      <div>
                        <div className="font-semibold">{produto.nome}</div>
                        <div className="text-gray-500 text-xs max-w-[180px] truncate">{produto.descricao}</div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <input className="w-24 border border-gray-300 rounded-md px-2 py-1" value={produto.valor} readOnly />
                    </td>
                    <td className="px-4 py-3">
                      <input className="w-24 border border-gray-300 rounded-md px-2 py-1" value={produto.valorPromocional} readOnly />
                    </td>
                    <td className="px-4 py-3">
                      {produto.disponivel ? <span className="inline-block w-5 h-5 rounded-full bg-emerald-400 text-white flex items-center justify-center">✓</span> : null}
                    </td>
                    <td className="px-4 py-3 flex gap-2">
                      <button className="text-orange-500 hover:text-orange-700"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M4 15.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V15.5M7 9V13M10 9V13M13 9V13M5 6H15M6 6V5.5C6 4.67157 6.67157 4 7.5 4H12.5C13.3284 4 14 4.67157 14 5.5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                      <button className="text-red-500 hover:text-red-700"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M6 6V5.5C6 4.67157 6.67157 4 7.5 4H12.5C13.3284 4 14 4.67157 14 5.5V6M5 6H15M7 9V13M10 9V13M13 9V13M4 15.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Section de adicionais */}
      {showAdicionais && (
        <AdicionaisSection />
      )}

      {/* Botão Continuar sempre abaixo das sections */}
      <div className="flex justify-end mt-8">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 text-base font-semibold rounded-lg shadow" type="button">
          Continuar
        </Button>
      </div>
    </div>
  );
} 