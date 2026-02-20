import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const Home = () => (
  <div className="flex flex-col items-center justify-center text-center space-y-8 py-20 bg-gradient-to-b from-blue-50 to-white rounded-3xl">
    <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight">
      Elevate Your <span className="text-blue-600">Lifestyle</span>
    </h1>
    <p className="max-w-2xl text-lg text-gray-600 px-4">
      Discover the latest trends in electronics, jewelry, and fashion. 
      High-quality products, delivered right to your doorstep.
    </p>
    <div className="flex gap-4">
      <Link to="/products">
        <Button className="px-10 py-4 text-lg">Shop Now</Button>
      </Link>
      <Link to="/login">
        <Button variant="secondary" className="px-10 py-4 text-lg">Join Us</Button>
      </Link>
    </div>
  </div>
);
export default Home;