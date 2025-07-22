import React from 'react';
import { FaStar } from 'react-icons/fa';

import Img1 from '/Img1.png';
import Img2 from '/Img2.png';
import Img3 from '/Img3.png';
import Img4 from '/Img4.png';

const ProductsData = [
  { id: 1, img: Img1, title: 'Women Ethnic', rating: 5.0, color: 'White', aosDelay: '0' },
  { id: 2, img: Img2, title: 'Women Western', rating: 4.5, color: 'Red', aosDelay: '200' },
  { id: 3, img: Img3, title: 'Goggles', rating: 4.7, color: 'Brown', aosDelay: '400' },
  { id: 4, img: Img4, title: 'Goggles', rating: 4.7, color: 'Brown', aosDelay: '600' },
];

function Products() {
  return (
    <div className="mt-14 mb-12 container m-auto">
      {/* Header */}
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p data-aos="fade-up" className="md:text-4xl text-2xl text-orange-500">
          Top Selling Products
        </p>
        <h1 data-aos="fade-up" className="md:text-6xl text-4xl font-bold">Products</h1>
        <p data-aos="fade-up" className="md:text-2xl text-xl text-gray-400">
          Discover our top-rated items loved by customers for their quality and value.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
        {ProductsData.map((data) => (
          <div
            key={data.id}
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="relative group overflow-hidden space-y-3 text-center p-4 rounded-lg shadow-md bg-white transition-all duration-300"
          >
            {/* 🔶 Animated orange hover layer */}
            <div className="absolute inset-0 bg-orange-300 scale-0 group-hover:scale-100 transition-transform duration-300 origin-top-left z-0"></div>

            {/* 🔶 Content over background */}
            <div className="relative z-10">
              <img
                src={data.img}
                alt={data.title}
                className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
              </div>
              <div className="flex justify-center items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>{data.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
