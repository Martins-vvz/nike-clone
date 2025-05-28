import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import ProductsSection from './components/ProductsSection';
import IconsGrid from './components/IconsGrid';
import CategoriesGrid from './components/CategoriesGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Dados simulados para os produtos em destaque
  const featuredProducts = [
    {
      id: 1,
      image: '/product-1.jpg',
      title: 'Nike Air Force 1 07',
      category: 'Tênis Masculino',
      price: '799,99',
      buttonLink: '#',
    },
    {
      id: 2,
      image: '/product-2.jpg',
      title: 'Nike Dunk Low',
      category: 'Tênis Feminino',
      price: '899,99',
      buttonLink: '#',
    },
    {
      id: 3,
      image: '/product-3.jpg',
      title: 'Nike Air Max 90',
      category: 'Tênis Unissex',
      price: '999,99',
      buttonLink: '#',
    },
    {
      id: 4,
      image: '/product-4.jpg',
      title: 'Nike Sportswear Club',
      category: 'Moletom Masculino',
      price: '399,99',
      buttonLink: '#',
    },
  ];

  // Dados simulados para os ícones Nike
  const nikeIcons = [
    {
      id: 1,
      image: '/icon-airforce1.jpg',
      title: 'Air Force 1',
      link: '#',
    },
    {
      id: 2,
      image: '/icon-dunk.jpg',
      title: 'Dunk',
      link: '#',
    },
    {
      id: 3,
      image: '/icon-jordan1.jpg',
      title: 'Air Jordan 1',
      link: '#',
    },
    {
      id: 4,
      image: '/icon-airmax.jpg',
      title: 'Air Max',
      link: '#',
    },
  ];

  // Dados simulados para as categorias
  const categories = [
    {
      id: 1,
      image: '/category-men.jpg',
      title: 'Masculino',
      link: '#',
    },
    {
      id: 2,
      image: '/category-women.jpg',
      title: 'Feminino',
      link: '#',
    },
    {
      id: 3,
      image: '/category-kids.jpg',
      title: 'Infantil',
      link: '#',
    },
    {
      id: 4,
      image: '/category-sale.jpg',
      title: 'Ofertas',
      link: '#',
    },
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <HeroCarousel />
        <IconsGrid title="Ícones Nike" icons={nikeIcons} />
        <ProductsSection title="Produtos mais buscados" products={featuredProducts} />
        <CategoriesGrid title="Categorias" categories={categories} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
