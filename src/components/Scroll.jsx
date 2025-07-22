import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaTshirt, FaShippingFast, FaTags, FaShoppingBag, FaGift } from "react-icons/fa";

const Scroll = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full bg-orange-100 py-6 border-t border-b border-orange-300 mt-5">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
        
        <div
          className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center text-orange-600 transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaTshirt className="text-2xl mb-2" />
          <p className="text-sm font-semibold">Fashion for Everyone</p>
        </div>

        <div
          className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center text-orange-600 transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaShippingFast className="text-2xl mb-2" />
          <p className="text-sm font-semibold">Free Shipping Over Rs. 1500</p>
        </div>

        <div
          className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center text-orange-600 transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaTags className="text-2xl mb-2" />
          <p className="text-sm font-semibold">Best Deals Everyday</p>
        </div>

        <div
          className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center text-orange-600 transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaShoppingBag className="text-2xl mb-2" />
          <p className="text-sm font-semibold">1000+ Products in Stock</p>
        </div>

        <div
          className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center text-orange-600 transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <FaGift className="text-2xl mb-2" />
          <p className="text-sm font-semibold">Special Offers Just for You</p>
        </div>

      </div>
    </div>
  );
};

export default Scroll;
