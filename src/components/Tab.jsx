import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Tab = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Make sure these image files exist in your public/ folder
  const homeImages = ["/bin.jpg", "/h2.jpg", "/H3.jpg", "/H4.jpg", "/H5.jpg", "/H6.jpg"];
  const profileImages = ["/pk1.jpg", "/pk2.jpg", "/pk3.jpg", "/pk4.jpg", "/pk5.jpg", "/pk6.jpg"];
  const settingsImages = ["/t1.jpg", "/t2.jpg", "/t3.jpg", "/t4.jpg", "/t5.jpg", "/t6.jpg"];

  const currentImages =
    active === 1 ? homeImages : active === 2 ? profileImages : settingsImages;

  const hoverColor =
    active === 1
      ? "hover:bg-blue-100"
      : active === 2
      ? "hover:bg-pink-100"
      : "hover:bg-yellow-100";

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b pb-3">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setActive(num)}
            className={`py-2 px-4 rounded font-bold ${
              active === num
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-orange-200"
            } transition`}
          >
            {num === 1 ? "Baby Girl" : num === 2 ? "Baby Boy" : "Twins Baby"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {currentImages.map((img, i) => (
          <div
            key={`${active}-${i}`} // Important: unique key per tab
            data-aos="fade-up"
            className={`bg-gray-100 p-3 rounded-lg ${hoverColor} transition hover:scale-105 duration-300 ease-in-out shadow-sm hover:shadow-md`}
          >
            <img
              src={img}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/fallback.jpg"; // 👈 Add a fallback image in public/
              }}
              alt={`Tab Image ${i + 1}`}
              className="w-full h-64 object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
