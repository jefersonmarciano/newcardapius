import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import NovoAdicionalModal from './NovoAdicionalModal';

interface IncluirAdicionalModalProps {
  open: boolean;
  onClose: () => void;
  adicionais: {
    id: number;
    nome: string;
    descricao: string;
    preco: string;
    promocional: string;
    disponivel: boolean;
    imagem: string;
  }[];
  onToggleDisponibilidade: (id: number) => void;
  addAdicionais: (novos: any[]) => void;
  onAddGrupo?: (grupo: any) => void;
  onOpenNovoAdicionalModal?: () => void;
}

const IncluirAdicionalModal: React.FC<IncluirAdicionalModalProps> = ({
  open,
  onClose,
  adicionais,
  onToggleDisponibilidade,
  addAdicionais,
  onAddGrupo,
}) => {
  const [busca, setBusca] = useState('');
  const [showNovoAdicionalModal, setShowNovoAdicionalModal] = useState(false);

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-30">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-[960px] p-6 relative">
          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-orange-500 text-xl font-bold rounded-full bg-white border border-gray-200 w-8 h-8 flex items-center justify-center hover:bg-orange-100 transition"
          >
            ×
          </button>

          {/* Cabeçalho */}
          <h2 className="text-2xl font-bold text-[#2E2E2E] mb-1">Incluir adicional (s)</h2>
          <p className="text-gray-500 mb-6">Inclua adicionais</p>

          {/* Barra de busca e botão */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar categoria"
                className="w-full border border-[#D6D6D6] rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#FF5900]"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A9A9A9]">
                <svg width="20" height="20" fill="none" stroke="currentColor">
                  <circle cx="9" cy="9" r="7" strokeWidth="2" />
                  <path d="M16 16l-3-3" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <Button
              variant="outline"
              className="border border-[#FF5900] text-[#FF5900] rounded-md px-4 py-2 text-sm font-semibold"
              onClick={() => setShowNovoAdicionalModal(true)}
            >
              + Novo adicional
            </Button>
          </div>

          {/* Título da lista */}
          <h3 className="font-semibold text-[#434343] text-base mb-2">Adicionais cadastrados</h3>

          {/* Cabeçalho da lista */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] bg-orange-50 rounded-md px-6 py-3 text-sm font-semibold text-gray-700 mb-2">
            <span>Produto</span>
            <span>Preço</span>
            <span>Promocional</span>
            <span>Disponibilidade</span>
            <span>Ação</span>
          </div>

          {/* Lista de adicionais */}
          {adicionais.map((adicional) => (
            <div
              key={adicional.id}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] items-center px-6 py-4 border-b last:border-b-0"
            >
              {/* Produto */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={adicional.imagem}
                    alt={adicional.nome}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-base mb-1 leading-tight">{adicional.nome}</div>
                  <div className="text-gray-500 text-sm max-w-xs truncate">{adicional.descricao}</div>
                </div>
              </div>

              {/* Preço */}
              <input
                value={adicional.preco}
                readOnly
                className="w-[80px] border border-[#C9C9C9] rounded-md px-2 py-1 text-center text-base"
              />

              {/* Promocional */}
              <input
                value={adicional.promocional}
                readOnly
                className="w-[80px] border border-[#C9C9C9] rounded-md px-2 py-1 text-center text-base"
              />

              {/* Disponibilidade */}
              <div className="flex justify-center">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={adicional.disponivel}
                    onChange={() => onToggleDisponibilidade(adicional.id)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-[#00BB9C] transition"></div>
                  <div className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full border border-gray-300 transition-transform peer-checked:translate-x-5" />
                </label>
              </div>

              {/* Ação */}
              <div className="flex justify-center">
                <button className="bg-[#00BB9C] w-8 h-8 rounded-md text-white font-bold text-lg hover:opacity-80 transition">
                  +
                </button>
              </div>
            </div>
          ))}

          {/* Botão Continuar */}
          <div className="flex justify-end mt-8">
            <Button className="bg-[#FF5900] hover:bg-[#e65100] text-white font-semibold px-6 py-2 rounded-md shadow-sm">
              Continuar
            </Button>
          </div>
        </div>
      </div>
      {showNovoAdicionalModal && (
        <NovoAdicionalModal
          open={showNovoAdicionalModal}
          onClose={() => setShowNovoAdicionalModal(false)}
          onAddGrupo={onAddGrupo || (() => {})}
          onOpenIncluirAdicionalModal={() => setShowNovoAdicionalModal(false)}
        />
      )}
    </>
  );
};

export default IncluirAdicionalModal;
