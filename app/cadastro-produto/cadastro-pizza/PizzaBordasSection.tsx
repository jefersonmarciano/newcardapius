import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil } from "lucide-react";

interface PizzaBorda {
  sabor: string;
  valor: string;
  disponivel: boolean;
}

const PizzaBordasSection: React.FC = () => {
  const [bordas, setBordas] = useState<PizzaBorda[]>([]);
  const [draftBordas, setDraftBordas] = useState<Omit<PizzaBorda, "disponivel">[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddDraft = () => {
    setDraftBordas(prev => [...prev, { sabor: "", valor: "" }]);
    setIsEditing(true);
  };

  const handleChangeDraft = (idx: number, field: keyof Omit<PizzaBorda, "disponivel">, value: string) => {
    setDraftBordas(prev => prev.map((item, i) => i === idx ? { ...item, [field]: value } : item));
  };

  const handleContinue = () => {
    setBordas(prev => [
      ...prev,
      ...draftBordas.map(d => ({ ...d, disponivel: true }))
    ]);
    setDraftBordas([]);
    setIsEditing(false);
  };

  const handleToggleDisponibilidade = (idx: number) => {
    setBordas(prev => prev.map((item, i) => i === idx ? { ...item, disponivel: !item.disponivel } : item));
  };

  const handleRemove = (idx: number) => {
    setBordas(prev => prev.filter((_, i) => i !== idx));
  };

  const handleEdit = () => {
    setDraftBordas(bordas.map(({ sabor, valor }) => ({ sabor, valor })));
    setIsEditing(true);
    setBordas([]);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6" data-lov-id="app/cadastro-produto/cadastro-pizza/PizzaBordasSection.tsx">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold mb-1">Bordas</h2>
          <p className="text-sm text-gray-500 mb-6">Ofereça a seu cliente opção de bordas</p>
        </div>
        {!isEditing && (
          <Button
            variant="outline"
            className="flex items-center gap-2 border-orange-500 text-orange-500 hover:bg-orange-50"
            onClick={handleEdit}
          >
            <Pencil className="w-4 h-4" /> Editar
          </Button>
        )}
      </div>
      {!isEditing && (
        <Button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-6 py-3 rounded-lg mb-8"
          onClick={handleAddDraft}
        >
          + adicionar borda
        </Button>
      )}
      {isEditing && (
        <div className="mt-2">
          <h3 className="text-base font-semibold mb-4">Adicione as bordas</h3>
          {draftBordas.map((borda, idx) => (
            <div className="flex flex-wrap gap-4 items-center mb-4" key={idx}>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium mb-1">Sabor</label>
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 text-base"
                  placeholder="Ex: Requeijão"
                  value={borda.sabor}
                  onChange={e => handleChangeDraft(idx, "sabor", e.target.value)}
                />
              </div>
              <div className="flex-1 min-w-[160px]">
                <label className="block text-sm font-medium mb-1">Valor</label>
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 text-base"
                  placeholder="R$ 0,00"
                  value={borda.valor}
                  onChange={e => handleChangeDraft(idx, "valor", e.target.value)}
                />
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
      {!isEditing && bordas.length > 0 && (
        <div className="mt-8">
          <div className="bg-orange-50 rounded-md px-4 py-2 font-semibold text-base text-orange-900 mb-4">Bordas cadastradas</div>
          {bordas.map((borda, idx) => (
            <div className="flex flex-wrap gap-4 items-center mb-6 border-b pb-4 last:border-b-0" key={idx}>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium mb-1">Sabor</label>
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 text-base bg-gray-50"
                  value={borda.sabor}
                  readOnly
                />
              </div>
              <div className="flex-1 min-w-[160px]">
                <label className="block text-sm font-medium mb-1">Valor</label>
                <input
                  className="w-full border border-gray-300 rounded-md px-4 py-2 h-11 text-base bg-gray-50"
                  value={borda.valor}
                  readOnly
                />
              </div>
              <div className="flex flex-col items-center min-w-[120px]">
                <label className="block text-sm font-medium mb-1">Disponibilidade</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={borda.disponivel}
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

export default PizzaBordasSection; 