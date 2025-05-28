import { Search, Heart, ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full">
      {/* Barra superior */}
      <div className="bg-white flex justify-between items-center px-4 py-2 text-xs">
        <div className="flex items-center space-x-2">
          <a href="#" className="flex items-center">
            <img src="/jordan-logo.svg" alt="Jordan" className="h-6" />
          </a>
          <a href="#" className="flex items-center ml-4">
            <img src="/sneakers-logo.svg" alt="Ir para página do Sneakers" className="h-4" />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:underline">Acessibilidade</button>
          <button className="hover:underline">Nike Journal</button>
          <button className="hover:underline">Acompanhe seu pedido</button>
          <button className="hover:underline">Ajuda</button>
          <a href="#" className="hover:underline">Junte-se a nós</a>
          <button className="hover:underline">Entrar</button>
        </div>
      </div>

      {/* Menu principal */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <div className="flex items-center">
          <a href="#" className="mr-8">
            <img src="/nike-logo.svg" alt="Nike" className="h-6" />
          </a>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li className="relative group">
                <a href="#" className="font-medium hover:text-black/70 py-2">Lançamentos</a>
              </li>
              <li className="relative group">
                <a href="#" className="font-medium hover:text-black/70 py-2">Masculino</a>
              </li>
              <li className="relative group">
                <a href="#" className="font-medium hover:text-black/70 py-2">Feminino</a>
              </li>
              <li className="relative group">
                <a href="#" className="font-medium hover:text-black/70 py-2">Infantil</a>
              </li>
              <li className="relative group">
                <a href="#" className="font-medium hover:text-black/70 py-2">Ofertas</a>
              </li>
              <li className="relative group">
                <a href="#" className="font-medium hover:text-black/70 py-2">SNKRS</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Buscar"
              className="bg-gray-100 rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>
          <button className="p-2">
            <Heart className="h-6 w-6" />
          </button>
          <button className="p-2">
            <ShoppingBag className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
