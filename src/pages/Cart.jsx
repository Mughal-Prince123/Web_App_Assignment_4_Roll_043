import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/common/Button';

const Cart = () => {
  const { cart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20 flex flex-col items-center">
        <div className="text-6xl mb-4 text-gray-300 italic">"Your cart is looking a bit lonely..."</div>
        <p className="text-gray-500 mb-8">Add some amazing products to get started!</p>
        <Link to="/products">
          <Button variant="primary" className="px-8 py-3">Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="lg:col-span-1">
          <CartSummary total={cartTotal} />
        </div>
      </div>
    </div>
  );
};

export default Cart;