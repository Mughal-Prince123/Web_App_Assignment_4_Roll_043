import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">ShopVibe</Link>
        <div className="space-x-6 flex items-center">
          <Link to="/products" className="hover:text-blue-600">Shop</Link>
          <Link to="/cart" className="relative p-2">
            <span>🛒</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <Link to="/login" className="border border-blue-600 px-4 py-1 rounded-md text-blue-600 hover:bg-blue-50">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;