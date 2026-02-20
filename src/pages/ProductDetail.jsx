import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Button from '../components/common/Button';
import Loader from '../components/common/Loader';
import Rating from '../components/common/Rating';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12 grid md:grid-cols-2 gap-12 mt-8">
      <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
        <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-blue-600 font-bold uppercase tracking-wider mb-2">{product.category}</span>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{product.title}</h1>
        <Rating rate={product.rating?.rate} count={product.rating?.count} />
        <p className="text-gray-600 my-6 leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between mb-8">
          <span className="text-4xl font-bold text-gray-900">${product.price}</span>
        </div>
        <Button onClick={() => addToCart(product)} className="w-full py-4 text-lg">
          Add to Shopping Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;