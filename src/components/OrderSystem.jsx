// src/components/OrderSystem.jsx
import { useState } from "react";
import shirt1 from "/shirt1.jpg";
import shirt2 from "/shirt2.jpg";
import shirt3 from "/shirt3.jpg";
import jeans1 from "/jeans1.jpg";
import jeans2 from "/jeans2.jpg";
import jeans3 from "/jeans3.jpg";

const products = [
  { id: 1, title: "Product 1", price: 1000, img: shirt1 },
  { id: 2, title: "Product 2", price: 1200, img: shirt2 },
  { id: 3, title: "Product 3", price: 1100, img: shirt3 },
  { id: 4, title: "Product 4", price: 2000, img: jeans1 },
  { id: 5, title: "Product 5", price: 2100, img: jeans2 },
  { id: 6, title: "Product 6", price: 1900, img: jeans3 },
];

function OrderSystem() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div id="cloth" className="p-4">
      {/* Header */}
      <div className="text-center my-10" data-aos="fade-down">
        <div className="flex flex-row items-center justify-center text-center">
          <span className="font-semibold md:text-6xl text-4xl">Welcome to</span>
          <h1 className="md:text-6xl text-4xl font-semibold text-orange-500 mb-2 drop-shadow-sm">
            Shop 🛒
          </h1>
        </div>
        <p className="text-2xl text-zinc-500 mx-auto px-4">
          Discover quality products, unbeatable prices, and fast delivery, all in one place. Shop smart. Live better.
        </p>
      </div>

      {/* Grid Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p, index) => (
          <div
            key={p.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="border mt-4 m-auto rounded-lg overflow-hidden shadow hover:shadow-lg transition w-50 h-100 hover:scale-105 duration-300 ease-in-out"
          >
            <img src={p.img} alt={p.title} className="w-50 h-70 object-cover" />
            <div className="p-3">
              <h2 className="font-semibold text-lg">{p.title}</h2>
              <p className="text-gray-700">Rs. {p.price}</p>
              <button
                onClick={() => addToCart(p)}
                className="mt-2 bg-orange-600 border-2 border-black cursor-pointer text-white px-3 py-1 rounded hover:bg-orange-300 transition duration-200 hover:border-orange-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🛒 Cart Summary */}
      <div
        className="bg-white shadow-md rounded-xl p-6 mt-10 w-full max-w-lg mx-auto border border-gray-200"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold text-orange-500 mb-4 flex items-center gap-2">
          🧺 Cart Summary
        </h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 italic text-center">Your cart is currently empty.</p>
        ) : (
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-orange-50 px-4 py-2 rounded-lg shadow-sm"
              >
                <span className="font-medium text-gray-700">
                  {item.title} × {item.quantity}
                </span>
                <span className="text-gray-800 font-semibold">
                  Rs. {item.quantity * item.price}
                </span>
              </div>
            ))}
            <div className="mt-4 text-right">
              <p className="text-lg font-bold text-gray-800 border-t pt-2">
                Total: Rs. {total}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderSystem;
