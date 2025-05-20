import React, { createContext, useContext, useState, ReactNode } from "react";

interface CategoryItem {
  id: string;
  name: string;
  children?: CategoryItem[];
}

interface PizzaCategoriesContextType {
  predefinedCategories: CategoryItem[];
  selectedCategories: string[];
  toggleCategory: (categoryId: string) => void;
  addCategory: (name: string, parentId?: string) => string;
  getCategoryNameById: (categoryId: string) => string | null;
  getSelectedCategoriesWithPath: () => { id: string; path: string }[];
}

const PizzaCategoriesContext = createContext<PizzaCategoriesContextType | undefined>(undefined);

export function PizzaCategoriesProvider({ children }: { children: ReactNode }) {
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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const addCategory = (name: string, parentId?: string) => {
    const newId = Date.now().toString();

    function addToTree(categories: CategoryItem[]): CategoryItem[] {
      return categories.map(category => {
        if (category.id === parentId) {
          return {
            ...category,
            children: [
              ...(category.children || []),
              { id: newId, name }
            ]
          };
        }
        if (category.children) {
          return {
            ...category,
            children: addToTree(category.children)
          };
        }
        return category;
      });
    }

    if (parentId) {
      setPredefinedCategories(prev => addToTree(prev));
    } else {
      setPredefinedCategories(prev => [...prev, { id: newId, name }]);
    }
    return newId;
  };

  const getCategoryNameById = (categoryId: string): string | null => {
    const findCategory = (categories: CategoryItem[]): string | null => {
      for (const category of categories) {
        if (category.id === categoryId) {
          return category.name;
        }
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

  const getSelectedCategoriesWithPath = () => {
    const result: { id: string; path: string }[] = [];
    const buildCategoryPath = (
      categories: CategoryItem[], 
      parentPath: string = ""
    ): void => {
      for (const category of categories) {
        const currentPath = parentPath ? `${parentPath} > ${category.name}` : category.name;
        if (selectedCategories.includes(category.id)) {
          result.push({ id: category.id, path: currentPath });
        }
        if (category.children && category.children.length > 0) {
          buildCategoryPath(category.children, currentPath);
        }
      }
    };
    buildCategoryPath(predefinedCategories);
    return result;
  };

  return (
    <PizzaCategoriesContext.Provider value={{
      predefinedCategories,
      selectedCategories,
      toggleCategory,
      addCategory,
      getCategoryNameById,
      getSelectedCategoriesWithPath
    }}>
      {children}
    </PizzaCategoriesContext.Provider>
  );
}

export function usePizzaCategories() {
  const ctx = useContext(PizzaCategoriesContext);
  if (!ctx) throw new Error("usePizzaCategories must be used within a PizzaCategoriesProvider");
  return ctx;
}
// data-lov-id: app/cadastro-produto/cadastro-pizza/PizzaCategoriesProvider.tsx 