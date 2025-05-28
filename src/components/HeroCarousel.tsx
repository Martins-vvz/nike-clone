import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      image: '/hero-1.jpg',
      title: 'VOA VINI',
      subtitle: 'Bem-vindo a bordo da velocidade inigualável na primeira Mercurial Vapor Vini Jr.',
      buttonText: 'Ver Chuteira',
      buttonLink: '#',
    },
    {
      id: 2,
      image: '/hero-2.jpg',
      title: 'Nova coleção do Corinthians',
      subtitle: 'Inspirada no mundial de 2000',
      buttonText: 'Saiba Mais',
      buttonLink: '#',
    },
    {
      id: 3,
      image: '/hero-3.jpg',
      title: 'Vomero 18',
      subtitle: 'Amortecimento máximo',
      buttonText: 'Ver Lançamento',
      buttonLink: '#',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="min-w-full relative">
            <div className="relative h-[500px] md:h-[600px] bg-gray-100">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-16 left-16 text-white">
                <h2 className="text-5xl font-bold mb-2">{item.title}</h2>
                <p className="text-xl mb-6">{item.subtitle}</p>
                <a 
                  href={item.buttonLink} 
                  className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        aria-label="Voltar para o item anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        aria-label="Ir para o próximo item"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default HeroCarousel;
