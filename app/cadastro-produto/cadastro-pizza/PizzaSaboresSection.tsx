import { useState } from "react";
import { Button } from "@/components/ui/button";
import AdicionarSaborModal from "./AdicionarSaborModal";
import { Pencil, Trash2, CheckCircle } from "lucide-react";
import Image from "next/image";

interface SaborTamanho {
  nome: string;
  valor: string;
  valorPromocao: string;
  disponivel: boolean;
}

interface Sabor {
  nome: string;
  descricao: string;
  imagem?: string | File | null;
  tamanhos: SaborTamanho[];
}

const PizzaSaboresSection: React.FC<{ tamanhos: { nome: string }[] }> = ({ tamanhos }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [sabores, setSabores] = useState<Sabor[]>([]);

  // Adiciona novo sabor
  const handleAdicionarSabor = (novo: Omit<Sabor, "imagem"> & { imagem?: File | string | null }) => {
    setSabores(prev => [...prev, novo]);
    setModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6" data-lov-id="app/cadastro-produto/cadastro-pizza/PizzaSaboresSection.tsx">
      <h2 className="text-lg font-semibold mb-1">Sabores</h2>
      <p className="text-sm text-gray-500 mb-6">Sabores de pizzas disponíveis</p>
      <Button
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-6 py-3 rounded-lg mb-6"
        onClick={() => setModalOpen(true)}
      >
        + Adicionar sabor
      </Button>
      <AdicionarSaborModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        tamanhos={tamanhos}
        onAdicionar={handleAdicionarSabor}
      />
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-[#FFF3EA] text-orange-600">
              <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">Sabor</th>
              <th className="px-4 py-3 text-left font-semibold">Tamanho</th>
              <th className="px-4 py-3 text-left font-semibold">Preço</th>
              <th className="px-4 py-3 text-left font-semibold">Promoção</th>
              <th className="px-4 py-3 text-center font-semibold">Disponibilidade</th>
              <th className="px-4 py-3 text-center font-semibold rounded-tr-lg">Ação</th>
            </tr>
          </thead>
          <tbody>
            {sabores.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-gray-400 py-8">Nenhum sabor cadastrado ainda.</td>
              </tr>
            )}
            {sabores.map((sabor, idx) => (
              sabor.tamanhos.map((t, tIdx) => (
                <tr key={idx + '-' + tIdx} className="border-b last:border-b-0 border-gray-200">
                  {tIdx === 0 && (
                    <td rowSpan={sabor.tamanhos.length} className="align-top px-4 py-4 w-64 min-w-[220px]">
                      <div className="flex gap-3 items-start">
                        {sabor.imagem ? (
                          typeof sabor.imagem === 'string' ? (
                            <Image src={sabor.imagem} alt={sabor.nome} width={56} height={56} className="rounded-lg object-cover w-14 h-14" />
                          ) : (
                            <img src={URL.createObjectURL(sabor.imagem)} alt={sabor.nome} className="rounded-lg object-cover w-14 h-14" />
                          )
                        ) : (
                          <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400 text-xl font-bold">?</span>
                          </div>
                        )}
                        <div>
                          <div className="font-semibold text-base leading-tight">{sabor.nome}</div>
                          <div className="text-xs text-gray-500 mt-1 max-w-[140px] whitespace-pre-line overflow-hidden text-ellipsis">
                            {sabor.descricao}
                          </div>
                        </div>
                      </div>
                    </td>
                  )}
                  <td className="px-4 py-4 align-top">{t.nome}</td>
                  <td className="px-4 py-4 align-top">
                    <input
                      className="w-24 border border-gray-300 rounded-md px-2 py-1 h-10 text-base bg-gray-50"
                      value={t.valor}
                      readOnly
                    />
                  </td>
                  <td className="px-4 py-4 align-top">
                    <input
                      className="w-24 border border-gray-300 rounded-md px-2 py-1 h-10 text-base bg-gray-50"
                      value={t.valorPromocao}
                      readOnly
                    />
                  </td>
                  <td className="px-4 py-4 align-top text-center">
                    {t.disponivel ? (
                      <CheckCircle className="text-emerald-400 w-6 h-6 mx-auto" />
                    ) : (
                      <span className="inline-block w-6 h-6" />
                    )}
                  </td>
                  {tIdx === 0 && (
                    <td rowSpan={sabor.tamanhos.length} className="align-top px-4 py-4 text-center">
                      <button className="p-2 rounded-full text-orange-500 hover:bg-orange-50 mr-2">
                        <Pencil className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-full text-red-500 hover:bg-red-50">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PizzaSaboresSection; 