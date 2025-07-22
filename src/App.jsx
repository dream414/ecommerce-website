import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Products from './components/Products';
import TopProducts from './components/TopProducts';
import Tab from './components/Tab';
import OrderSystem from './components/OrderSystem';
import Scroll from './components/Scroll';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 999,
      easing: 'ease-in-sine',
      delay: 100,
    });

    AOS.refresh();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="flex items-center gap-3 mb-4">
          <img src="./logo.png" alt="Logo" className="w-20 h-20" />
          <h1 className="text-4xl font-extrabold text-orange-500 uppercase tracking-wide">
            Shopify
          </h1>
        </div>
        <p className="text-black text-2xl animate-pulse">Loading your experience .........</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Tab />
      <OrderSystem />
      < Scroll/>
      <footer className="mt-16">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
