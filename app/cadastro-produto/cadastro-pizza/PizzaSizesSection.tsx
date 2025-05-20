import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface PizzaSize {
  nome: string;
  fatias: string;
  sabores: string;
  disponivel: boolean;
}

const fatiasOptions = [
  "4 fatias",
  "6 fatias",
  "8 fatias",
  "12 fatias"
];
const saboresOptions = [
  "Até 1 sabor",
  "Até 2 sabores",
  "Até 3 sabores",
  "Até 4 sabores"
];

const PizzaSizesSection: React.FC = () => {
  const [sizes, setSizes] = useState<PizzaSize[]>([]);
  const [draftSizes, setDraftSizes] = useState<Omit<PizzaSize, "disponivel">[]>([]);
  const [showDraft, setShowDraft] = useState(false);

  const handleAddSize = () => {
    setDraftSizes(prev => ([
      ...prev,
      {
        nome: "",
        fatias: fatiasOptions[2],
        sabores: saboresOptions[1],
      }
    ]));
    setShowDraft(true);
  };

  const handleChange = (idx: number, field: keyof Omit<PizzaSize, "disponivel">, value: string) => {
    setDraftSizes(prev => prev.map((item, i) => i === idx ? { ...item, [field]: value } : item));
  };

  const handleContinue = () => {
    setSizes(prev => ([
      ...prev,
      ...draftSizes.map(d => ({ ...d, disponivel: true }))
    ]));
    setDraftSizes([]);
    setShowDraft(false);
  };

  const handleToggleDisponibilidade = (idx: number) => {
    setSizes(prev => prev.map((item, i) => i === idx ? { ...item, disponivel: !item.disponivel } : item));
  };

  const handleRemove = (idx: number) => {
    setSizes(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6" data-lov-id="app/cadastro-produto/cadastro-pizza/PizzaSizesSection.tsx">
      <h2 className="text-lg font-semibold mb-1">Tamanhos</h2>
      <p className="text-sm text-gray-500 mb-6">Informe os tamanhos de pizzas, quantidade de fatias e quantidade de sabores de forma individual.</p>
      <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-6 py-3 rounded-lg mb-8" onClick={handleAddSize}>
        + adicionar tamanhos
      </Button>
      {showDraft && draftSizes.length > 0 && (
        <div className="mt-2">
          <h3 className="text-base font-semibold mb-4">Adicione os tamanhos</h3>
          {draftSizes.map((size, idx) => (
            <div className="flex flex-wrap gap-4 items-center mb-4" key={idx}>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium mb-1">Nome</label>
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 text-base"
                  placeholder="Pizza Grande"
                  value={size.nome}
                  onChange={e => handleChange(idx, "nome", e.target.value)}
                />
              </div>
              <div className="flex-1 min-w-[160px]">
                <label className="block text-sm font-medium mb-1">Fatias</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 text-base text-gray-700"
                  value={size.fatias}
                  onChange={e => handleChange(idx, "fatias", e.target.value)}
                >
                  {fatiasOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1 min-w-[180px]">
                <label className="block text-sm font-medium mb-1">Sabores</label>
                <select
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 text-base text-gray-700"
                  value={size.sabores}
                  onChange={e => handleChange(idx, "sabores", e.target.value)}
                >
                  {saboresOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-4">
            <Button className="bg-orange-500 hover:bg-orange-600 px-8 py-2 text-white font-semibold rounded-md" onClick={handleContinue}>
              Continuar
            </Button>
          </div>
        </div>
      )}
      {sizes.length > 0 && (
        <div className="mt-8">
          <div className="bg-orange-50 rounded-md px-4 py-2 font-semibold text-base text-orange-900 mb-4">Tamanhos cadastrados</div>
          {sizes.map((size, idx) => (
            <div className="flex flex-wrap gap-4 items-center mb-6 border-b pb-4 last:border-b-0" key={idx}>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium mb-1">Nome</label>
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 text-base bg-gray-50"
                  value={size.nome}
                  readOnly
                />
              </div>
              <div className="flex-1 min-w-[160px]">
                <label className="block text-sm font-medium mb-1">Fatias</label>
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 text-base bg-gray-50"
                  value={size.fatias}
                  readOnly
                />
              </div>
              <div className="flex-1 min-w-[180px]">
                <label className="block text-sm font-medium mb-1">Sabores</label>
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 text-base bg-gray-50"
                  value={size.sabores}
                  readOnly
                />
              </div>
              <div className="flex flex-col items-center min-w-[120px]">
                <label className="block text-sm font-medium mb-1">Disponibilidade</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={size.disponivel}
                    onChange={() => handleToggleDisponibilidade(idx)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-emerald-400 transition-all"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white border border-gray-300 rounded-full transition-all peer-checked:translate-x-5"></div>
                </label>
              </div>
              <div className="flex flex-col items-center min-w-[80px]">
                <label className="block text-sm font-medium mb-1">Ação</label>
                <button className="p-2 rounded-full text-red-500 hover:bg-red-50" onClick={() => handleRemove(idx)}>
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PizzaSizesSection; 