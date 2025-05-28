import IconCard from './IconCard';

interface IconsGridProps {
  title: string;
  icons: {
    id: number;
    image: string;
    title: string;
    link: string;
  }[];
}

const IconsGrid = ({ title, icons }: IconsGridProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {icons.map((icon) => (
            <IconCard 
              key={icon.id}
              id={icon.id}
              image={icon.image}
              title={icon.title}
              link={icon.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconsGrid;
