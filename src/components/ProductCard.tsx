interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  category?: string;
  price?: string;
  buttonText?: string;
  buttonLink?: string;
}

const ProductCard = ({ 
  image, 
  title, 
  category, 
  price, 
  buttonText = "Ver Produto", 
  buttonLink = "#" 
}: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col">
      <div className="relative overflow-hidden rounded-md bg-gray-100 mb-3">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        {category && (
          <span className="text-sm text-gray-500 mb-1">{category}</span>
        )}
        <h3 className="font-medium text-lg">{title}</h3>
        {price && (
          <span className="font-medium mt-1">R$ {price}</span>
        )}
        {buttonText && (
          <a 
            href={buttonLink} 
            className="mt-3 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-colors inline-block w-fit"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
