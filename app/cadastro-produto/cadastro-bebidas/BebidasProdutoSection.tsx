import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface BebidasProdutoSectionProps {
  onSubmit: (produto: any) => void;
}

const BebidasProdutoSection: React.FC<BebidasProdutoSectionProps> = ({ onSubmit }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [unidade, setUnidade] = useState("Litro(s)");
  const [valor, setValor] = useState("");
  const [valorPromocional, setValorPromocional] = useState("");
  const [disponivel, setDisponivel] = useState(true);
  const [imagem, setImagem] = useState<File | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setImagem(e.target.files[0]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({
      nome,
      descricao,
      quantidade,
      unidade,
      valor,
      valorPromocional,
      disponivel,
      imagem: imagem ? URL.createObjectURL(imagem) : null,
    });
    setNome("");
    setDescricao("");
    setQuantidade("");
    setUnidade("Litro(s)");
    setValor("");
    setValorPromocional("");
    setDisponivel(true);
    setImagem(null);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8 mb-8 flex flex-col gap-6" data-lov-id="app/cadastro-produto/cadastro-bebidas/BebidasProdutoSection.tsx">
      <div className="mb-6">
        <div className="text-lg font-semibold mb-1">Produto</div>
        <div className="text-sm text-gray-500">Adicione as informações do produto</div>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 min-w-[320px]">
          <label className="block text-sm font-semibold mb-2">Nome do produto</label>
          <Input className="mb-6 h-12 text-base" placeholder="Nome do produto" value={nome} onChange={e => setNome(e.target.value)} />
          <label className="block text-sm font-semibold mb-2">Descrição</label>
          <textarea className="w-full border border-gray-300 rounded-md px-4 py-3 h-20 text-base mb-6" placeholder="Descrição do produto" style={{ resize: 'none' }} value={descricao} onChange={e => setDescricao(e.target.value)} />
          <div className="flex gap-3 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Quantidade</label>
              <Input className="h-12 w-20 text-base" placeholder="0" type="number" min="0" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Un. de medida</label>
              <select className="h-12 w-32 border border-gray-300 rounded-md px-3 text-base" value={unidade} onChange={e => setUnidade(e.target.value)}>
                <option>Litro(s)</option>
                <option>Mililitro(s)</option>
                <option>Unidade(s)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Valor</label>
              <Input className="h-12 w-32 text-base" placeholder="R$ 0,00" value={valor} onChange={e => setValor(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Valor promocional</label>
              <Input className="h-12 w-32 text-base" placeholder="R$ 0,00" value={valorPromocional} onChange={e => setValorPromocional(e.target.value)} />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Disponibilidade</label>
            <label className="relative inline-flex items-center cursor-pointer mt-2">
              <input type="checkbox" className="sr-only peer" checked={disponivel} onChange={e => setDisponivel(e.target.checked)} />
              <div className="w-11 h-6 bg-gray-200 peer-checked:bg-emerald-400 rounded-full transition-all"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white border border-gray-300 rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>
        <div className="w-[320px] flex flex-col items-center">
          <label className="block text-sm font-semibold mb-2 w-full">imagem do produto</label>
          <label className="w-full h-48 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer text-gray-400 text-base mb-2">
            {imagem ? (
              <img src={URL.createObjectURL(imagem)} alt="preview" className="h-24 object-contain" />
            ) : (
              <>
                <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-2 text-gray-300"><rect width="48" height="48" rx="8" fill="#F3F4F6"/><path d="M32 20a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM24 28c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4Z" fill="#D1D5DB"/></svg>
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
      <div className="flex justify-end mt-8">
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 text-base font-semibold rounded-lg shadow" type="submit">
          Continuar
        </Button>
      </div>
    </form>
  );
};

export default BebidasProdutoSection; 