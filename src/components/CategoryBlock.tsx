interface CategoryBlockProps {
  id: number;
  image: string;
  title: string;
  link: string;
}

const CategoryBlock = ({ image, title, link }: CategoryBlockProps) => {
  return (
    <a 
      href={link}
      className="block relative overflow-hidden bg-gray-100 rounded-md transition-transform hover:scale-[1.02] duration-300"
    >
      <div className="aspect-square">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-white text-xl font-medium">{title}</h3>
      </div>
    </a>
  );
};

export default CategoryBlock;
