import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, X } from 'lucide-react';

interface Category {
  id: string;
  path: string;
}

interface CategorySectionProps {
  selectedCategories: Category[];
  setIsCategoryModalOpen: (open: boolean) => void;
  toggleCategory: (id: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ selectedCategories, setIsCategoryModalOpen, toggleCategory }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-base font-medium">Categorias</h3>
        {selectedCategories.length > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 text-orange-500 hover:text-orange-600"
            onClick={() => setIsCategoryModalOpen(true)}
          >
            <Pencil className="h-3.5 w-3.5 mr-1" />
            Editar
          </Button>
        )}
      </div>
      <p className="text-sm text-gray-500 mb-4">As categorias ajudam seus clientes a encontrarem os produtos mais rápido.</p>
      {selectedCategories.length > 0 ? (
        <div className="flex flex-wrap gap-2 mb-2">
          {selectedCategories.map((category) => (
            <div 
              key={category.id}
              className="px-3 py-1.5 bg-teal-50 text-teal-700 border border-teal-200 rounded-md flex items-center gap-1 text-sm"
            >
              {category.path}
              <button 
                className="ml-1 text-teal-600 hover:text-teal-800"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleCategory(category.id);
                }}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Button 
          className="text-sm h-9 px-3 bg-orange-500 hover:bg-orange-600"
          onClick={() => setIsCategoryModalOpen(true)}
        >
          + adiciona categoria (s)
        </Button>
      )}
    </div>
  );
};

export default CategorySection; 