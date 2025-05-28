interface IconCardProps {
  id: number;
  image: string;
  title: string;
  link: string;
}

const IconCard = ({ image, title, link }: IconCardProps) => {
  return (
    <a 
      href={link}
      className="block bg-gray-100 rounded-md transition-transform hover:scale-[1.02] duration-300"
    >
      <div className="aspect-square p-6 flex items-center justify-center">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </a>
  );
};

export default IconCard;
