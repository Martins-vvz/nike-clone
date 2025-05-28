import { useState } from 'react';
import CategoryBlock from './CategoryBlock';

interface CategoriesGridProps {
  title: string;
  categories: {
    id: number;
    image: string;
    title: string;
    link: string;
  }[];
}

const CategoriesGrid = ({ title, categories }: CategoriesGridProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="transform transition-all duration-300"
              style={{ 
                transform: hoveredIndex === index ? 'scale(1.03)' : 'scale(1)',
                zIndex: hoveredIndex === index ? 10 : 1
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CategoryBlock 
                id={category.id}
                image={category.image}
                title={category.title}
                link={category.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
