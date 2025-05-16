"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface CategoryItem {
  id: string;
  name: string;
  children?: CategoryItem[];
}

interface CategoriesContextType {
  predefinedCategories: CategoryItem[];
  selectedCategories: string[];
  toggleCategory: (categoryId: string) => void;
  addCategory: (name: string, parentId?: string) => string;
  getCategoryNameById: (categoryId: string) => string | null;
  getSelectedCategoriesWithPath: () => { id: string; path: string }[];
  clearSelectedCategories: () => void;
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

export function CategoriesProvider({ children }: { children: ReactNode }) {
  // Lista de categorias pré-definidas com subcategorias
  const [predefinedCategories, setPredefinedCategories] = useState<CategoryItem[]>([
    { id: "1", name: "Lanches" },
    { 
      id: "2", 
      name: "Bebidas",
      children: [
        { id: "2-1", name: "Refrigerantes" },
        { id: "2-2", name: "Cervejas" }
      ]
    },
    { id: "3", name: "Combos" },
    { id: "4", name: "Promoções" },
  ]);

  // Categorias selecionadas atualmente
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  /**
   * Seleciona ou deseleciona uma categoria
   */
  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  /**
   * Limpa todas as categorias selecionadas
   */
  const clearSelectedCategories = () => {
    setSelectedCategories([]);
  };

  /**
   * Adiciona uma nova categoria
   */
  const addCategory = (name: string, parentId?: string) => {
    const newId = Date.now().toString();
    
    // Se tiver um parentId, adicionamos como subcategoria
    if (parentId) {
      const updatedCategories = [...predefinedCategories];
      
      // Função recursiva para encontrar e atualizar a categoria pai
      const updateParentCategory = (categories: CategoryItem[]): boolean => {
        for (let i = 0; i < categories.length; i++) {
          if (categories[i].id === parentId) {
            // Garantir que children existe
            if (!categories[i].children) {
              categories[i].children = [];
            }
            categories[i].children.push({ id: newId, name });
            return true;
          }
          
          // Verificar se children existe antes de chamar recursivamente
          if (categories[i].children && categories[i].children.length > 0) {
            if (updateParentCategory(categories[i].children)) {
              return true;
            }
          }
        }
        return false;
      };
      
      updateParentCategory(updatedCategories);
      setPredefinedCategories(updatedCategories);
    } else {
      // Caso contrário, adicionamos como categoria principal
      setPredefinedCategories([...predefinedCategories, { id: newId, name }]);
    }
    
    return newId;
  };

  /**
   * Retorna o nome da categoria pelo ID
   */
  const getCategoryNameById = (categoryId: string): string | null => {
    // Função recursiva para encontrar a categoria pelo ID
    const findCategory = (categories: CategoryItem[]): string | null => {
      for (const category of categories) {
        if (category.id === categoryId) {
          return category.name;
        }
        
        // Verificar se children existe antes de chamar recursivamente
        if (category.children && category.children.length > 0) {
          const foundInChildren = findCategory(category.children);
          if (foundInChildren) {
            return foundInChildren;
          }
        }
      }
      
      return null;
    };
    
    return findCategory(predefinedCategories);
  };

  /**
   * Retorna categorias completas com seus caminhos, para exibição
   */
  const getSelectedCategoriesWithPath = () => {
    const result: { id: string; path: string }[] = [];
    
    // Função recursiva para construir o caminho da categoria
    const buildCategoryPath = (
      categories: CategoryItem[], 
      parentPath: string = ""
    ): void => {
      for (const category of categories) {
        const currentPath = parentPath ? `${parentPath} > ${category.name}` : category.name;
        
        if (selectedCategories.includes(category.id)) {
          result.push({ id: category.id, path: currentPath });
        }
        
        // Verificar se children existe antes de chamar recursivamente
        if (category.children && category.children.length > 0) {
          buildCategoryPath(category.children, currentPath);
        }
      }
    };
    
    buildCategoryPath(predefinedCategories);
    return result;
  };

  return (
    <CategoriesContext.Provider value={{
      predefinedCategories,
      selectedCategories,
      toggleCategory,
      addCategory,
      getCategoryNameById,
      getSelectedCategoriesWithPath,
      clearSelectedCategories
    }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
} 