import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../common/Button';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-contain p-4 bg-gray-50" 
        />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 truncate">{product.title}</h3>
        <p className="text-gray-500 text-sm mb-2 uppercase font-bold">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <Button onClick={() => addToCart(product)} className="text-sm">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;