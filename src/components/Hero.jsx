import Slider from 'react-slick';
import Form from "./Form.jsx"; // ✅ Correct path
import { useState } from "react";

// 🖼️ Image list
const ImageList = [          
  {
    id: 1,
    img: './boy.png',
    title: 'Men Collection',
    description: 'Explore premium styles and outfits just for men.',
  },
  {
    id: 2,
    img: './girl.png',
    title: 'Women Fashion',
    description: 'Trendy and elegant outfits for modern women.',
  },
  {
    id: 3,
    img: './b2.png',
    title: 'Big Sale',
    description: 'Limited time offers on selected items. Don’t miss out!',
  },
];

function Hero() {
  const [showForm, setShowForm] = useState(false);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center">
      {/* 🧱 Hero Content Container */}
      <div className="container pb-8 sm:pb-0 text-center sm:text-left relative z-10">
        
        {/* 🔺 Triangle Background INSIDE content */}
        <div className="absolute top-[-550px] right-[-300px] w-[1000px] h-[1000px] bg-orange-300 rotate-45 rounded-3xl -z-10"></div>

        {/* 🖼️ Slider */}
        <Slider {...settings}>
          {ImageList.map((data, index) => (
            <div key={`hero-${data.id}-${index}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                
                {/* 📄 Text Section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-2xl text-gray-700 font-medium"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <div className="p-6 text-center">
                      {!showForm && (
                        <button
                          onClick={() => setShowForm(true)}
                          className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
                        >
                          Place an Order
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* 🖼️ Image Section */}
                <div>
                  <div>
                    <img
                      className="w-[600px] h-[800px] sm:scale-125 lg:scale-110 object-contain mx-auto"
                      src={data.img}
                      alt={data.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ Form moved OUTSIDE slider to avoid aria-hidden issues */}
      {showForm && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Form onClose={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
}

export default Hero;
