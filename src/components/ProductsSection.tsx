import ProductCard from './ProductCard';

interface Product {
  id: number;
  image: string;
  title: string;
  category?: string;
  price?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface ProductsSectionProps {
  title: string;
  products: Product[];
}

const ProductsSection = ({ title, products }: ProductsSectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              buttonText={product.buttonText}
              buttonLink={product.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
