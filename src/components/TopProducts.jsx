import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bs1 from '/bs1.png';
import bs2 from '/bs2.png';
import bs3 from '/bs3.png';
import bo4 from '/bo4.png';

const ProductsData = [
  { id: 1, img: bs1, title: "Modern Style", rating: 4.8 },
  { id: 2, img: bs2, title: "Smart Style", rating: 4.5 },
  { id: 3, img: bs3, title: "Wooden Style", rating: 4.9 },
  { id: 4, img: bo4, title: "King Style", rating: 4.9 },
];

function TopProducts() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // ✅ Initialize once component mounts
  }, []);

  return (
    <div id="top" className='container m-auto mt-14 mb-12'>
      {/* Header */}
      <div className='text-center mb-30'>
        <p data-aos='fade-up' className='md:text-4xl text-2xl text-orange-400'>Top Rated Products for You</p>
        <h1 data-aos='fade-up' className=' md:text-6xl text-4xlfont-bold'>Best Products</h1>
        <p data-aos='fade-up' className='md:text-2xl text-xl text-gray-400'>
          Style that Speaks – Explore Our Trendiest Shirts!","Every Stitch Tells a Story – Shop Premium Shirts Today!"
        </p>
      </div>

      {/* Body */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-5 place-items-center'>
        {ProductsData.map((data) => (
          <div
            data-aos='fade-up'
            key={data.id}
            className='rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-2xl duration-400 max-w-[400px] mt-8 transition-transform hover:scale-105'
          >
            {/* Image */}
            <div>
              <img
                src={data.img}
                alt={data.title}
                className='max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md'
              />
            </div>

            {/* ⭐ Stars */}
            <div className="flex justify-center gap-1 -mt-12 mb-2">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>

            {/* Title */}
            <h3 className="text-center font-semibold text-lg mb-4">{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
