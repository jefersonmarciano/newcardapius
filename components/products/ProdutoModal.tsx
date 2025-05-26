"use client";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useState, ChangeEvent, FormEvent } from "react";

interface ProdutoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (produto: any) => void;
}

export default function ProdutoModal({ open, onOpenChange, onSave }: ProdutoModalProps) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [promocional, setPromocional] = useState("");
  const [categoria, setCategoria] = useState("");
  const [minimo, setMinimo] = useState(1);
  const [maximo, setMaximo] = useState(6);
  const [obrigatorio, setObrigatorio] = useState(false);
  const [disponivel, setDisponivel] = useState(true);
  const [imagem, setImagem] = useState<File | null>(null);
  const [imagemPreview, setImagemPreview] = useState<string | null>(null);

  function handleImagemChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImagem(file);
      setImagemPreview(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSave({
      id: Date.now(),
      nome,
      descricao,
      preco,
      promocional,
      categoria,
      minimo,
      maximo,
      obrigatorio,
      disponivel,
      imagem: imagemPreview,
      imagemFile: imagem,
    });
    setNome("");
    setDescricao("");
    setPreco("");
    setPromocional("");
    setCategoria("");
    setMinimo(1);
    setMaximo(6);
    setObrigatorio(false);
    setDisponivel(true);
    setImagem(null);
    setImagemPreview(null);
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl rounded-2xl p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Produto</DialogTitle>
          <DialogDescription>Cadastre as informações do produto</DialogDescription>
        </DialogHeader>
        <form className="grid grid-cols-2 gap-8 mt-4 text-xs" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div>
              <label className="font-semibold">Nome do produto</label>
              <Input placeholder="Nome do produto" value={nome} onChange={e => setNome(e.target.value)} required />
            </div>
            <div>
              <label className="font-semibold">Descrição</label>
              <textarea className="w-full border border-gray-300 rounded-lg p-2 min-h-[60px] text-sm" placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} required />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="font-semibold block mb-2">Valor</label>
                <Input type="number" placeholder="R$ 100" value={preco} onChange={e => setPreco(e.target.value.replace(/[^0-9]/g, ""))} required />
              </div>
              <div>
                <label className="font-semibold block mb-2">Valor promocional</label>
                <Input type="number" placeholder="R$ 85" value={promocional} onChange={e => setPromocional(e.target.value.replace(/[^0-9]/g, ""))} />
              </div>
              <div>
                <label className="font-semibold block mb-2 text-center">Mínimo</label>
                <div className="flex items-center justify-center border rounded-lg px-4 py-2 gap-4 w-full">
                  <button type="button" className="text-red-500 text-xl" onClick={() => setMinimo(Math.max(1, minimo - 1))} tabIndex={-1}>-</button>
                  <span className="text-lg font-medium select-none">{minimo}</span>
                  <button type="button" className="text-green-600 text-xl" onClick={() => setMinimo(minimo + 1)} tabIndex={-1}>+</button>
                </div>
              </div>
              <div>
                <label className="font-semibold block mb-2 text-center">Máximo</label>
                <div className="flex items-center justify-center border rounded-lg px-4 py-2 gap-4 w-full">
                  <button type="button" className="text-red-500 text-xl" onClick={() => setMaximo(Math.max(minimo, maximo - 1))} tabIndex={-1}>-</button>
                  <span className="text-lg font-medium select-none">{maximo}</span>
                  <button type="button" className="text-green-600 text-xl" onClick={() => setMaximo(maximo + 1)} tabIndex={-1}>+</button>
                </div>
              </div>
            </div>
            <div className="flex gap-8 mt-2">
              <div>
                <label className="font-semibold">Obrigatório</label>
                <div className="mt-2">
                  <Switch
                    checked={obrigatorio}
                    onCheckedChange={setObrigatorio}
                    className={obrigatorio
                      ? 'bg-[#52D7C1] border-[#52D7C1] data-[state=checked]:bg-[#52D7C1]'
                      : 'bg-[#FE4848] border-[#FE4848] data-[state=unchecked]:bg-[#FE4848]'}
                  />
                </div>
              </div>
              <div>
                <label className="font-semibold">Disponibilidade</label>
                <div className="mt-2">
                  <Switch
                    checked={disponivel}
                    onCheckedChange={setDisponivel}
                    className={disponivel
                      ? 'bg-[#52D7C1] border-[#52D7C1] data-[state=checked]:bg-[#52D7C1]'
                      : 'bg-[#FE4848] border-[#FE4848] data-[state=unchecked]:bg-[#FE4848]'}
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="font-semibold">Categoria</label>
              <Input placeholder="Categoria" value={categoria} onChange={e => setCategoria(e.target.value)} required />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border border-gray-300 rounded-xl min-h-[220px] p-4">
            <label className="w-full flex flex-col items-center cursor-pointer">
              {imagemPreview ? (
                <img src={imagemPreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg mb-2" />
              ) : (
                <div className="flex flex-col items-center">
                  <div className="text-gray-400 mb-2 text-5xl">🍔</div>
                  <span className="text-gray-500">Inserir imagem</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImagemChange}
              />
            </label>
            <div className="text-xs text-gray-400 mt-4 text-center">
              <div>Formatos: jpg, jpeg, png ou heic</div>
              <div>Tamanho: Até 5 mb</div>
              <div>Resolução mínima: 500x500 px</div>
            </div>
          </div>
          <hr className="mb-2 mt-8 border-t border-gray-200 col-span-2" />
          <div className="flex justify-end col-span-2">
            <Button className="bg-orange-500 hover:bg-orange-600" type="submit">Salvar</Button>
          </div>
        </form>
        <DialogClose asChild>
          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">&times;</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
} 