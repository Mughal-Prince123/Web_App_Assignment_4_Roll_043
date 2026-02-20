import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">ShopVibe</h2>
          <p className="text-sm leading-relaxed">
            Your premium destination for high-quality electronics, jewelry, and fashion. 
            Style meets quality, delivered to your door.
          </p>
          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer hover:text-blue-400 transition-colors">🌐</span>
            <span className="cursor-pointer hover:text-blue-400 transition-colors">📸</span>
            <span className="cursor-pointer hover:text-blue-400 transition-colors">🐦</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">New Arrivals</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Best Sellers</Link></li>
            <li><Link to="/products" className="hover:text-white transition-colors">Offers</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">Track Order</li>
            <li className="hover:text-white cursor-pointer transition-colors">Returns & Refunds</li>
            <li className="hover:text-white cursor-pointer transition-colors">Shipping Info</li>
            <li className="hover:text-white cursor-pointer transition-colors">FAQs</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-white font-bold uppercase text-xs tracking-widest">Newsletter</h3>
          <p className="text-sm">Join our list for exclusive discounts and early access.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>&copy; {currentYear} ShopVibe E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;