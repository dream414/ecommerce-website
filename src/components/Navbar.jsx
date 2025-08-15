import DarkMode from './DarkMode'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa"; // ✅ Correct dropdown icon

// Navigation menu
const Menu = [
  { id: 1, name: "Home", link: "#hero" },
  { id: 2, name: "Top Rated", link: "#top" },
  { id: 3, name: "Kids Wear", link: "#child" },
  { id: 4, name: "Womens Wear", link: "#selling" },
  { id: 5, name: "Traditional outfit ", link: "#cloth" },
]

// Dropdown menu
const DropdownLink = [
  { id: 1, name: "Trending  Products", link: "#cloth" },
  { id: 2, name: "Best Selling", link: "#selling" },
  { id: 3, name: "Top Rated", link: "#top" },
]

function Navbar() {
  return (
    <>
      {/* Top bar */}
      <div className='shadow-md bg-orange-300 duration-200 relative z-40'>
        <div className='bg-primary/40 py-2'>
          <div className='container flex justify-between items-center'>
            {/* Logo */}
            <a href='#' className='font-bold text-2xl sm:text flex gap-2'>
              <img src="./logo.png" alt="Logo" className='w-10 uppercase' />
              Shopify
            </a>

            {/* Search bar */}
            <div className='flex justify-between items-center gap-4'>
              <div className='relative group hidden sm:block'>
                <input
                  type='text'
                  placeholder='Search'
                  className='w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-yellow-300 dark:border-gray-500 dark:bg-gray-800'
                />
                <FaSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
              </div>
            </div>

            {/* Order Button */}
            <button
              className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
              onClick={() => alert("Ordering not available yet")}
            >
              <span className='group-hover:block hidden transition-all duration-200'>
                Order Now
              </span>
              <div className="bg-orange-400 p-3 rounded-full cursor-pointer shadow-md w-fit">
                <FaCartShopping className="text-white text-xl" />
              </div>
            </button>

            {/* Dark mode toggle */}
            <div><DarkMode /></div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-center shadow-md">
        <ul className="sm:flex hidden items-center space-x-6">
          {Menu.map((item, index) => (
            <li key={`menu-${item.id}-${index}`}>
              <a
                className="inline-block px-4 text-lg font-semibold hover:text-orange-400 duration-200"
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Dropdown Menu */}
          <li className='group relative cursor-pointer'>
            <a href='#' className="flex items-center gap-1 py-2">
              Trending Items
              <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white py-2 text-black shadow-md'>
              <ul>
                {DropdownLink.map((data, index) => (
                  <li key={`dropdown-${data.id}-${index}`}>
                    <a href={data.link} className='inline-block w-full hover:text-amber-50   rounded-md p-2 hover:bg-orange-400 text-sm sm:text-[9px] md:text-[13px]'>
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
