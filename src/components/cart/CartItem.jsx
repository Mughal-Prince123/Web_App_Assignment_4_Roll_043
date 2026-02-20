import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 gap-4">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-contain p-2 bg-gray-50 rounded" />
      <div className="flex-grow">
        <h3 className="font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
        <p className="text-blue-600 font-bold">${item.price}</p>
      </div>
      <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-2">
        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-blue-600 font-bold">-</button>
        <span className="w-6 text-center font-medium">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-blue-600 font-bold">+</button>
      </div>
      <button 
        onClick={() => removeFromCart(item.id)}
        className="text-red-400 hover:text-red-600 transition-colors p-2"
        title="Remove item"
      >
        🗑️
      </button>
    </div>
  );
};
export default CartItem;