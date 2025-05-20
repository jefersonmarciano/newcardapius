import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface GruposAdicionaisModalProps {
  open: boolean;
  onClose: () => void;
  onAddGrupo: (grupo: any) => void;
  onOpenIncluirAdicionalModal: () => void;
}

const gruposMock = [
  {
    id: 1,
    nome: "Adicionais para hamburger",
    adicionais: [
      { id: 101, nome: "Maiosese", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 102, nome: "Ketchup", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 103, nome: "Queijo", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 104, nome: "Picles", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 105, nome: "+8", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
    ],
  },
  {
    id: 2,
    nome: "Adicionais para hamburger",
    adicionais: [
      { id: 201, nome: "Maiosese", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 202, nome: "Ketchup", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 203, nome: "Queijo", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 204, nome: "Picles", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 205, nome: "+8", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
    ],
  },
  {
    id: 3,
    nome: "Arroz",
    adicionais: [
      { id: 301, nome: "Maiosese", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 302, nome: "Ketchup", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 303, nome: "Queijo", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 304, nome: "Picles", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
      { id: 305, nome: "+8", descricao: "", preco: "", promocional: "", disponivel: true, imagem: "" },
    ],
  },
];


const NovoAdicionalModal: React.FC<GruposAdicionaisModalProps> = ({ open, onClose, onAddGrupo, onOpenIncluirAdicionalModal }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-30" data-lov-id="app/cadastro-produto/cadastro-simples/NovoAdicionalModal">
      <div className="bg-white rounded-[18px] w-full max-w-[800px] relative px-10 pt-10 pb-6" style={{ boxShadow: "0 2px 24px 0 rgba(53,53,53,0.10)" }} data-lov-id="app/cadastro-produto/cadastro-simples/NovoAdicionalModal">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#FF5900] text-base font-bold rounded-full bg-[#F7F7F7] border border-[#F5F5F5] w-7 h-7 flex items-center justify-center hover:bg-orange-100 transition"
        >
          <span className="text-lg leading-none">x</span>
        </button>

        {/* Título e botão de cadastro */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[28px] font-bold text-[#353535] mb-1 text-left">
              Grupos de adicionais
            </h2>
            <p className="text-[#7D7D7D] text-base text-left">
              Inclua os grupos
            </p>
          </div>
          <Button className="bg-[#FF5900] hover:bg-[#e65100] rounded-[8px] px-5 py-3 text-white font-semibold text-sm shadow-none">
            + Cadastrar novo grupo adicional
          </Button>
        </div>

        {/* Campo de busca */}
        <Input
          placeholder="Buscar categoria"
          className="mb-8 rounded-[8px] border border-[#DCDCDC] text-[#353535] text-[15px] px-4 py-3"
        />

        {/* Lista de grupos */}
        {gruposMock.map((grupo) => (
          <div key={grupo.id} className="border-t border-[#EAEAEA] pt-5 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[#353535] font-semibold text-base mb-3">
                  {grupo.nome}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {grupo.adicionais.map((item: any) => (
                    <span
                      key={item.id}
                      className="border border-[#2DB97C] text-[#2DB97C] text-sm font-medium px-3 py-[6px] rounded-[6px]"
                    >
                      {item.nome}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="bg-[#50E3C2] hover:bg-[#3ed9b1] rounded-md w-[32px] h-[32px] flex items-center justify-center transition"
                onClick={() => onAddGrupo(grupo)}
              >
                <Plus className="text-white w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {/* Botão continuar */}
        <div className="flex justify-end mt-8">
          <Button className="bg-[#FF5900] hover:bg-[#e65100] rounded-[10px] px-10 py-3 text-white font-semibold text-base shadow-none">
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NovoAdicionalModal;
