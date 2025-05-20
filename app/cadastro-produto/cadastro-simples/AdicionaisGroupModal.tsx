import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import IncluirAdicionalModal from './IncluirAdicionalModal';
import useAdicionais from '@/hooks/useAdicionais';

interface AdicionaisGroupModalProps {
  open: boolean;
  onClose: () => void;
  adicionaisSelecionados: {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    promocional: string;
    disponivel: boolean;
    imagem: string;
  }[];
  adicionaisDisponiveis: {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    promocional: string;
    disponivel: boolean;
    imagem: string;
  }[];
  onToggleDisponibilidade: (id: number) => void;
  onOpenIncluirAdicionalModal: () => void;
}

const AdicionaisGroupModal: React.FC<AdicionaisGroupModalProps> = ({ open, onClose, adicionaisSelecionados, adicionaisDisponiveis, onToggleDisponibilidade, onOpenIncluirAdicionalModal }) => {
  const [groupName, setGroupName] = useState('');
  const [isRequired, setIsRequired] = useState(true);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(6);
  const [showIncluirAdicionalModal, setShowIncluirAdicionalModal] = useState(false);
  const [gruposSelecionados, setGruposSelecionados] = useState<any[]>([]);
  const { addAdicionais } = useAdicionais();

  // Função para adicionar grupo visualmente igual ao CategorySection
  const handleAddGrupo = (grupo: any) => {
    if (!gruposSelecionados.find((g) => g.id === grupo.id)) {
      setGruposSelecionados([...gruposSelecionados, grupo]);
    }
  };

  return open ? (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30" data-lov-id="app/cadastro-produto/cadastro-simples/AdicionaisGroupModal">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-[900px] relative p-8">
          {/* Botão fechar */}
          <button onClick={onClose} className="absolute top-4 right-4 text-orange-500 text-xl font-bold rounded-full bg-[#FFF] border border-[#F5F5F5] w-8 h-8 flex items-center justify-center hover:bg-orange-100 transition">
            ×
          </button>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#434343]">Novo grupo de adicionais</h2>
              <p className="text-gray-500 mt-1">Crie adicionais para seu produto</p>
            </div>
            <Button className="bg-[#FF5900] hover:bg-[#e65100] rounded-md px-5 py-2 text-white font-semibold text-base shadow-none">
              + Incluir grupo de adicional
            </Button>
          </div>

          {/* Grupos selecionados visual, igual ao CategorySection */}
          

          <div className="grid grid-cols-[minmax(0,1fr)_160px_120px_120px] gap-x-6 gap-y-0 items-end w-full mb-0">
            {/* Nome do grupo */}
            <div>
            <label className="block text-[18px] font-semibold mb-1 text-[#333]">Nome do grupo</label>
              <input value={groupName} onChange={e => setGroupName(e.target.value)} className="w-full border border-[#C9C9C9] rounded-xl px-4 py-3 h-[48px] text-[17px] font-normal text-[#434343] placeholder:text-[#A9A9A9] focus:outline-none focus:ring-2 focus:ring-[#FF5900]" placeholder="Pizza calabresa" />
            </div>
            {/* Obrigatório */}
            <div>
              <label className="block text-[18px] font-semibold mb-1 text-[#333]">Obrigatório</label>
              <div className="relative">
                <select value={isRequired ? 'Sim' : 'Não'} onChange={e => setIsRequired(e.target.value === 'Sim')} className="w-full border border-[#C9C9C9] rounded-xl px-4 pr-8 h-[48px] text-[17px] font-normal text-[#434343] appearance-none focus:outline-none">
                  <option>Sim</option>
                  <option>Não</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#FF5900]">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M6 8l4 4 4-4" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
            </div>
            {/* Mínimo */}
            <div>
              <label className="block text-[18px] font-semibold mb-1 text-[#333]">Mínimo</label>
              <div className="flex items-center gap-2">
                <button type="button" className="w-8 h-8 border border-[#FF5900] rounded-md text-[#FF5900] text-xl flex items-center justify-center bg-white p-0" style={{boxShadow:'none'}} onClick={() => setMin(Math.max(0, min - 1))}>-</button>
                <input value={min} readOnly className="w-10 h-[48px] text-center border border-[#C9C9C9] rounded-xl px-1 text-[17px] font-normal text-[#434343] bg-white" />
                <button type="button" className="w-8 h-8 border border-[#FF5900] rounded-md text-[#FF5900] text-xl flex items-center justify-center bg-white p-0" style={{boxShadow:'none'}} onClick={() => setMin(min + 1)}>+</button>
              </div>
            </div>
            {/* Máximo */}
            <div>
              <label className="block text-[18px] font-semibold mb-1 text-[#333]">Máximo</label>
              <div className="flex items-center gap-2">
                <button type="button" className="w-8 h-8 border border-[#FF5900] rounded-md text-[#FF5900] text-xl flex items-center justify-center bg-white p-0" style={{boxShadow:'none'}} onClick={() => setMax(Math.max(min, max - 1))}>-</button>
                <input value={max} readOnly className="w-10 h-[48px] text-center border border-[#C9C9C9] rounded-xl px-1 text-[17px] font-normal text-[#434343] bg-white" />
                <button type="button" className="w-8 h-8 border border-[#FF5900] rounded-md text-[#FF5900] text-xl flex items-center justify-center bg-white p-0" style={{boxShadow:'none'}} onClick={() => setMax(max + 1)}>+</button>
              </div>
            </div>
          </div>
          <hr className="mt-6 mb-6 border-[#E5E5E5]" />
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#434343] text-base">Adicionais neste grupo</h3>
            <Button variant="outline" className="border-[#FF5900] text-[#FF5900] flex items-center gap-2 px-4 py-2" onClick={() => setShowIncluirAdicionalModal(true)}>
              <span className="text-lg">+</span> Incluir adicional
            </Button>
          </div>
          {adicionaisSelecionados.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Image src="/vetores/fork-knife.svg" alt="Sem adicionais" width={64} height={64} className="mb-4 opacity-40" />
              <div className="text-[#A9A9A9] text-base font-medium mb-1">Ops! Este grupo ainda não possui adicionais.</div>
              <div className="text-[#A9A9A9] text-sm">Clique em incluir adicional e ofereça mais opções para turbinar seu produto!</div>
            </div>
          ) : (
            <div className="w-full">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.7fr] bg-orange-50 rounded-t-md px-6 py-3 text-sm font-semibold text-gray-700 mb-2">
                <span>Produto</span>
                <span>Preço</span>
                <span>Promocional</span>
                <span>Disponibilidade</span>
                <span>Ação</span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {adicionaisSelecionados.map((adicional) => (
                  <div key={adicional.id} className="grid grid-cols-[2fr_1fr_1fr_1fr_0.7fr] items-center px-6 py-6 gap-2 border-b last:border-b-0 bg-white" data-lov-id="app/cadastro-produto/cadastro-simples/AdicionaisGroupModal">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={adicional.imagem} alt={adicional.nome} width={96} height={96} className="object-cover w-full h-full" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg leading-tight mb-1">{adicional.nome}</div>
                        <div className="text-gray-500 text-sm truncate max-w-xs leading-snug">{adicional.descricao}</div>
                      </div>
                    </div>
                    <input value={adicional.preco} readOnly className="w-24 border border-[#C9C9C9] rounded-md px-2 py-2 text-center bg-white text-base font-normal" />
                    <input value={adicional.promocional} readOnly className="w-24 border border-[#C9C9C9] rounded-md px-2 py-2 text-center bg-white text-base font-normal" />
                    <div className="flex justify-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={adicional.disponivel} readOnly className="sr-only peer" />
                        <div className="w-11 h-6 bg-[#E5E5E5] rounded-full peer peer-checked:bg-[#00BB9C] transition-all"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white border border-[#C9C9C9] rounded-full transition-all peer-checked:translate-x-5"></div>
                      </label>
                    </div>
                    <div className="flex items-center gap-4 justify-center">
                      <button className="p-0 bg-transparent border-none hover:opacity-80" title="Editar">
                        <svg width="24" height="24" fill="none" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
                      </button>
                      <button className="p-0 bg-transparent border-none hover:opacity-80" title="Excluir">
                        <svg width="24" height="24" fill="none" stroke="#FF5900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="15" rx="2"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex justify-end mt-8">
            <Button className="bg-[#FF5900] hover:bg-[#e65100] rounded-md px-8 py-2 text-white font-semibold text-base shadow-none">
              Continuar
            </Button>
          </div>
        </div>
      </div>
      <IncluirAdicionalModal 
        open={showIncluirAdicionalModal} 
        onClose={() => setShowIncluirAdicionalModal(false)} 
        adicionais={adicionaisDisponiveis}
        onToggleDisponibilidade={onToggleDisponibilidade}
        addAdicionais={addAdicionais}
        onAddGrupo={handleAddGrupo}
        onOpenNovoAdicionalModal={() => setShowIncluirAdicionalModal(true)}
      />
    </>
  ) : null;
};

export default AdicionaisGroupModal; 