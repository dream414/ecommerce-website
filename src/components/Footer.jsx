import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[url('/ob.png')] bg-cover bg-center text-white px-6 py-10 mt-16">
      
      {/* 🔥 Dark overlay on image */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* ✅ All content goes above overlay */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div >
          <h2 className="text-2xl font-bold mb-4">Shopify Zone</h2>
          <p className="text-sm">
            Your one-stop shop for the best fashion, gadgets, and more. Fast delivery, secure checkout.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-300">Home</a></li>
            <li><a href="/products" className="hover:text-orange-300">Products</a></li>
            <li><a href="/about" className="hover:text-orange-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-orange-300">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-orange-300">FAQ</a></li>
            <li><a href="/shipping" className="hover:text-orange-300">Shipping & Returns</a></li>
            <li><a href="/policy" className="hover:text-orange-300">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-orange-300">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-orange-300"><FaFacebook /></a>
            <a href="#" className="hover:text-orange-300"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-300"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-10 text-center text-sm mt-10 border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} ShopZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
