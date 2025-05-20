import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProductInfoSectionProps {
  name: string;
  setName: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  price: string;
  setPrice: (value: string) => void;
  promoPrice: string;
  setPromoPrice: (value: string) => void;
  imageUrl: string | null;
  setImageUrl: (url: string) => void;
}

const ProductInfoSection: React.FC<ProductInfoSectionProps> = ({
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  promoPrice,
  setPromoPrice,
  imageUrl,
  setImageUrl
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          setImageUrl(ev.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6" data-lov-id="app/cadastro-produto/cadastro-simples/ProductInfoSection">
      <h2 className="text-lg font-semibold mb-1">Produto</h2>
      <p className="text-sm text-gray-500 mb-6">Adicione as informações do produto</p>
      <div className="flex flex-wrap gap-8">
        <div className="flex-1 min-w-[300px]">
          <label className="block text-sm font-medium mb-1">Nome do produto</label>
          <input
            className="w-full border border-gray-200 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-200"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome do produto"
          />
          <label className="block text-sm font-medium mb-1">Descrição</label>
          <textarea
            className="w-full border border-gray-200 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-200"
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição do produto"
            rows={3}
          />
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Valor</label>
              <input
                className="w-full border border-gray-200 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-200"
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder="R$ 0,00"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Valor promocional</label>
              <input
                className="w-full border border-gray-200 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-200"
                value={promoPrice}
                onChange={e => setPromoPrice(e.target.value)}
                placeholder="R$ 0,00"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center min-w-[240px]">
          <label className="block text-sm font-medium mb-2">imagem do produto</label>
          <div
            className="w-[220px] h-[220px] border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer mb-2 bg-gray-50"
            onClick={() => fileInputRef.current?.click()}
          >
            {imageUrl ? (
              <Image src={imageUrl} alt="Produto" width={120} height={120} className="object-contain" />
            ) : (
              <>
                <Image src="/images/burger.svg" alt="Inserir imagem" width={64} height={64} />
                <span className="text-gray-400 mt-2">Inserir imagem</span>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
          </div>
          <div className="text-xs text-gray-400 mt-2">
            <div>Formatos: jpg, jpeg, png ou heic</div>
            <div>Tamanho: Até 5 mb</div>
            <div>Resolução mínima: 500x500 px</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSection; 