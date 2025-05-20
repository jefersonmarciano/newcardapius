"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/layout/Header"
import OrdersPanel from "@/components/orders/OrdersPanel"
import { ChevronLeft, ChevronRight, Pencil, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SelectCategoryModal from "@/components/products/SelectCategoryModal"
import { useCategories } from "@/providers/CategoriesProvider"
import CategorySection from "./CategorySection"
import ProductInfoSection from './ProductInfoSection'
import AdicionaisGroupModal from './AdicionaisGroupModal'
import IncluirAdicionalModal from './IncluirAdicionalModal'
import NovoAdicionalModal from './NovoAdicionalModal'
import useAdicionais from '@/hooks/useAdicionais'

// Exemplo de próxima seção
const EstoqueSection = () => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6" data-lov-id="app/cadastro-produto/cadastro-simples/page">
    <h2 className="text-lg font-semibold mb-1">Estoque</h2>
    <p className="text-sm text-gray-500 mb-6">Adicione as informações de estoque do produto</p>
    {/* Campos de estoque aqui */}
  </div>
);

// Card resumo do produto
const ProductSummaryCard = ({ name, description, price, promoPrice, imageUrl, onEdit, onDelete }: {
  name: string;
  description: string;
  price: string;
  promoPrice: string;
  imageUrl: string | null;
  onEdit: () => void;
  onDelete: () => void;
}) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6" data-lov-id="app/cadastro-produto/cadastro-simples/page">
    <h2 className="text-lg font-semibold mb-1">Produto</h2>
    <p className="text-sm text-gray-500 mb-6">Adicione as informações do produto</p>
    <div className="w-full">
      {/* Cabeçalho da tabela */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.7fr] bg-orange-50 rounded-t-md px-6 py-3 text-sm font-semibold text-gray-700 mb-2">
        <span>Produto</span>
        <span>Preço</span>
        <span>Promocional</span>
        <span>Disponibilidade</span>
        <span>Ação</span>
      </div>
      {/* Linha do produto */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.7fr] items-center px-6 py-4 gap-2">
        {/* Produto (imagem + nome + descrição) */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
            <Image src={imageUrl || '/images/burger.svg'} alt={name} width={64} height={64} className="object-cover" />
          </div>
          <div>
            <div className="font-semibold text-base">{name}</div>
            <div className="text-gray-500 text-sm truncate max-w-xs">{description}</div>
          </div>
        </div>
        {/* Preço */}
        <input value={price} readOnly className="w-24 border rounded px-2 py-1 text-center bg-gray-50" />
        {/* Promocional */}
        <input value={promoPrice} readOnly className="w-24 border rounded px-2 py-1 text-center bg-gray-50" />
        {/* Disponibilidade */}
        <div className="flex justify-center">
          <span className="inline-block w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg width="20" height="20" fill="none" stroke="#10b981"><circle cx="10" cy="10" r="8" strokeWidth="2"/><path d="M7 10l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
        {/* Ação */}
        <div className="flex items-center gap-2 justify-center">
          <button onClick={onEdit} className="text-orange-600 hover:text-orange-800">
            <Image src="/vetores/edit.svg" alt="Editar" width={20} height={20} />
          </button>
          <button onClick={onDelete} className="text-red-600 hover:text-red-800"><svg width="20" height="20" fill="none" stroke="currentColor"><path d="M6 6v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6M9 6V4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v2m-7 0h14"/></svg></button>
        </div>
      </div>
    </div>
  </div>
);


// Seção de adicionais
const AdicionaisSection = ({ onOpenModal, gruposSelecionados }: { onOpenModal: () => void, gruposSelecionados: any[] }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6" data-lov-id="app/cadastro-produto/cadastro-simples/page">
    <h2 className="text-lg font-semibold mb-1">Adicionais</h2>
    <p className="text-sm text-gray-500 mb-6">Se este produto pode receber adicionais, inclua por aqui.</p>
    <Button className="bg-orange-500 hover:bg-orange-600" onClick={onOpenModal}>+ Criar grupos de adicionais</Button>
    {gruposSelecionados.length > 0 && (
      <div className="mb-6">
        {gruposSelecionados.map((grupo) => (
          <div key={grupo.id} className="mb-2">
            <div className="font-semibold text-base text-[#353535] mb-2">{grupo.nome}</div>
            <div className="flex flex-wrap gap-2 mb-2">
              {grupo.adicionais.map((item: any) => (
                <span key={item.id} className="border border-[#2DB97C] text-[#2DB97C] text-sm font-medium px-3 py-[6px] rounded-[6px] bg-white">
                  {item.nome}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default function CadastroSimplesPage() {
  const router = useRouter()
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const { getSelectedCategoriesWithPath, toggleCategory } = useCategories()

  // Estados para os campos do produto
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [promoPrice, setPromoPrice] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [showProductInfoSection, setShowProductInfoSection] = useState(false);
  const [showEstoqueSection, setShowEstoqueSection] = useState(false);
  const [showAdicionaisSection, setShowAdicionaisSection] = useState(false);
  const [isEditingProduct, setIsEditingProduct] = useState(true);
  const [showAdicionaisGroupModal, setShowAdicionaisGroupModal] = useState(false);
  const [showIncluirAdicionalModal, setShowIncluirAdicionalModal] = useState(false);
  const [showNovoAdicionalModal, setShowNovoAdicionalModal] = useState(false);
  const [gruposSelecionados, setGruposSelecionados] = useState<any[]>([]);

  const {
    adicionais,
    toggleDisponibilidade,
    addAdicionais,
    setAdicionais,
  } = useAdicionais();

  // Obtém as categorias selecionadas com seus caminhos completos
  const selectedCategories = getSelectedCategoriesWithPath()

  const handleContinueProduct = () => {
    setIsEditingProduct(false);
    setShowAdicionaisSection(true);
  };
  const handleEditProduct = () => setIsEditingProduct(true);
  const handleDeleteProduct = () => {
    setName('');
    setDescription('');
    setPrice('');
    setPromoPrice('');
    setImageUrl(null);
    setIsEditingProduct(true);
    setShowAdicionaisSection(false);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Header title="Cadastro produto" />
        <div className="flex flex-1">
          <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
            <div className="p-6">
              <button 
                onClick={() => router.back()}
                className="flex items-center text-gray-500 mb-6 hover:text-orange-500"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Cadastro simples
              </button>
              
              <p className="text-sm text-gray-500 mb-6">Seção de cadastro de produto simples</p>

              {/* Card Cadastro Simples */}
              <div className="bg-white rounded-lg border border-orange-200 p-4 flex items-center gap-4 mb-6" data-lov-id="app/cadastro-produto/cadastro-simples/page">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src="/images/burger.svg" alt="Hambúrguer" width={64} height={64} />
                </div>
                <div>
                  <div className="font-medium">Cadastro Simples</div>
                  <div className="text-sm text-gray-500">Ideal para lanches pratos, sobremesas, etc.</div>
                </div>
              </div>

              {/* Seção de Categorias */}
              <CategorySection 
                selectedCategories={selectedCategories}
                setIsCategoryModalOpen={setIsCategoryModalOpen}
                toggleCategory={toggleCategory}
              />
              {isEditingProduct ? (
                <>
                  <ProductInfoSection
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                    price={price}
                    setPrice={setPrice}
                    promoPrice={promoPrice}
                    setPromoPrice={setPromoPrice}
                    imageUrl={imageUrl}
                    setImageUrl={setImageUrl}
                  />
                  <div className="flex justify-end mt-10">
                    <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleContinueProduct} disabled={!name || !description || !price}>
                      Continuar
                    </Button>
                  </div>
                </>
              ) : (
                <ProductSummaryCard
                  name={name}
                  description={description}
                  price={price}
                  promoPrice={promoPrice}
                  imageUrl={imageUrl}
                  onEdit={handleEditProduct}
                  onDelete={handleDeleteProduct}
                />
              )}

              {/* Seção de Estoque (exemplo) */}
              {showEstoqueSection && <EstoqueSection />}

              {showAdicionaisSection && (
                <>
                  <AdicionaisSection 
                    onOpenModal={() => setShowAdicionaisGroupModal(true)} 
                    gruposSelecionados={gruposSelecionados} 
                  />
                  <AdicionaisGroupModal 
                    open={showAdicionaisGroupModal} 
                    onClose={() => setShowAdicionaisGroupModal(false)}
                    adicionaisSelecionados={adicionais.filter(a => a.disponivel)}
                    adicionaisDisponiveis={adicionais}
                    onToggleDisponibilidade={toggleDisponibilidade}
                  />
                </>
              )}

              {/* Modal de Seleção de Categorias */}
              <SelectCategoryModal
                isOpen={isCategoryModalOpen}
                onClose={() => setIsCategoryModalOpen(false)}
              />

              {/* Seção de Adicionais */}
              

              <IncluirAdicionalModal
                open={showIncluirAdicionalModal}
                onClose={() => setShowIncluirAdicionalModal(false)}
                adicionais={adicionais}
                onToggleDisponibilidade={toggleDisponibilidade}
                addAdicionais={addAdicionais}
                onOpenNovoAdicionalModal={() => {
                  console.log('Abrindo NovoAdicionalModal');
                  setShowIncluirAdicionalModal(false);
                  setShowNovoAdicionalModal(true);
                }}
              />
              
              <NovoAdicionalModal
                open={showNovoAdicionalModal}
                onClose={() => setShowNovoAdicionalModal(false)}
                onAddGrupo={(grupo) => {
                  setGruposSelecionados(prev => prev.some(g => g.id === grupo.id) ? prev : [...prev, grupo]);
                  addAdicionais(grupo.adicionais);
                }}
                onOpenIncluirAdicionalModal={() => setShowIncluirAdicionalModal(true)}
              />
            </div>
          </div>
          <OrdersPanel />
        </div>
      </div>
    </div>
  )
} 