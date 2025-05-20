import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Utensils } from "lucide-react";

interface TamanhoSabor {
  nome: string;
  valor: string;
  valorPromocao: string;
  disponivel: boolean;
}

interface AdicionarSaborModalProps {
  open: boolean;
  onClose: () => void;
  tamanhos: { nome: string }[];
  onAdicionar: (sabor: {
    nome: string;
    descricao: string;
    imagem?: File | string | null;
    tamanhos: TamanhoSabor[];
  }) => void;
}

const AdicionarSaborModal: React.FC<AdicionarSaborModalProps> = ({ open, onClose, tamanhos, onAdicionar }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);
  const [tamanhosSabor, setTamanhosSabor] = useState<TamanhoSabor[]>(
    tamanhos.map(t => ({ nome: t.nome, valor: "", valorPromocao: "", disponivel: true }))
  );

  React.useEffect(() => {
    setTamanhosSabor(tamanhos.map(t => ({ nome: t.nome, valor: "", valorPromocao: "", disponivel: true })));
  }, [tamanhos]);

  const handleChangeTamanho = (idx: number, field: keyof Omit<TamanhoSabor, "nome">, value: string | boolean) => {
    setTamanhosSabor(prev => prev.map((item, i) => i === idx ? { ...item, [field]: value } : item));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagem(e.target.files[0]);
    }
  };

  const handleAdicionar = () => {
    onAdicionar({
      nome,
      descricao,
      imagem,
      tamanhos: tamanhosSabor,
    });
    setNome("");
    setDescricao("");
    setImagem(null);
    setTamanhosSabor(tamanhos.map(t => ({ nome: t.nome, valor: "", valorPromocao: "", disponivel: true })));
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 overflow-visible rounded-2xl">
        <DialogTitle className="sr-only">Adicionar sabor</DialogTitle>
        <div className="relative p-12 pb-0 min-h-[600px]">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white shadow text-orange-500 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <X size={20} />
          </button>
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-1">Adicionar sabor</h2>
            <p className="text-sm text-zinc-500">Aumente seu ticket médio</p>
          </div>
          <div className="flex gap-12 mb-12">
            <div className="flex-1">
              <label className="block text-sm font-semibold mb-2">Nome do sabor</label>
              <Input
                className="mb-6 h-12 text-base"
                placeholder="Ex: Mussarela"
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
              <label className="block text-sm font-semibold mb-2">Descrição</label>
              <textarea
                className="w-full border border-gray-300 rounded-md px-4 py-3 h-28 text-base"
                placeholder="Pizza de mussarela com molho de tomate e orégano"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                style={{ resize: 'none' }}
              />
            </div>
            <div className="w-[320px] flex flex-col items-center">
              <label className="block text-sm font-semibold mb-2 w-full">imagem do produto</label>
              <label className="w-full h-48 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer text-gray-400 text-base mb-2">
                {imagem ? (
                  <img src={URL.createObjectURL(imagem)} alt="preview" className="h-24 object-contain" />
                ) : (
                  <>
                    <Utensils size={40} className="mb-2 text-gray-300" />
                    <span className="text-sm">Inserir imagem</span>
                  </>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
              <div className="text-xs text-gray-400 text-left w-full pl-1 leading-tight mt-1">
                <span className="inline-block align-top mr-1">ⓘ</span>
                Formatos: jpg, jpeg, png ou heic<br />
                Tamanho: Até 5 mb<br />
                Resolução mínima: 500x500 px
              </div>
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="bg-[#FFF3EA] text-orange-600 px-6 py-3 rounded-t-lg font-semibold text-sm mb-0">Tamanhos</div>
            <div className="divide-y divide-gray-200">
              {tamanhosSabor.map((t, idx) => (
                <div key={idx} className="flex items-center py-6 px-2 gap-6">
                  <div className="flex-1 min-w-[180px]">
                    <label className="block text-sm font-semibold mb-1">Sabor</label>
                    <Input value={t.nome} readOnly className="bg-gray-50 h-11 text-base" />
                  </div>
                  <div className="flex-1 min-w-[120px]">
                    <label className="block text-sm font-semibold mb-1">Valor</label>
                    <Input
                      placeholder="R$ 0,00"
                      value={t.valor}
                      onChange={e => handleChangeTamanho(idx, "valor", e.target.value)}
                      className="h-11 text-base"
                    />
                  </div>
                  <div className="flex-1 min-w-[120px]">
                    <label className="block text-sm font-semibold mb-1">Valor promoção</label>
                    <Input
                      placeholder="R$ 0,00"
                      value={t.valorPromocao}
                      onChange={e => handleChangeTamanho(idx, "valorPromocao", e.target.value)}
                      className="h-11 text-base"
                    />
                  </div>
                  <div className="flex flex-col items-center min-w-[140px]">
                    <label className="block text-sm font-semibold mb-1">Disponibilidade</label>
                    <label className="relative inline-flex items-center cursor-pointer mt-2">
                      <input
                        type="checkbox"
                        checked={t.disponivel}
                        onChange={e => handleChangeTamanho(idx, "disponivel", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-checked:bg-emerald-400 rounded-full transition-all"></div>
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white border border-gray-300 rounded-full transition-all peer-checked:translate-x-5"></div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-8 border-gray-300" />
          <div className="absolute right-0 bottom-0 p-10 pt-0 flex justify-end w-full bg-gradient-to-t from-white via-white/80 to-transparent rounded-b-2xl">
            <Button
              className="bg-[#FF6600] hover:bg-[#e05500] text-white px-12 py-3 text-base font-semibold rounded-lg shadow"
              onClick={handleAdicionar}
            >
              Adicionar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdicionarSaborModal;
