import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.svg"

export default function NavBar() {
  const [state, setState] = useState(false);
  const location = useLocation();

  // Determine if the current path is the homepage
  const isHomePage = location.pathname === '/';

  // Set text color based on whether it is the homepage or not
  const textColor = isHomePage ? 'text-white' : 'text-black';
  const marginTop = isHomePage ? 'mt-8': '0';

  return (
    <nav className={`bg-inherit w-full roboto-light border-b md:border-0 md:static mt-0 md:${marginTop}`}>

      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 w-full">
          {/* Logo for small screens */}
          <div className="flex items-center md:hidden">
            <Link to="/" className="mr-auto">
              <img
                alt="Logo"
                src={logo}
                className="w-16 h-16 rounded-full"
              />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo for large screens */}
          <div className="hidden md:flex md:items-center md:justify-between w-full">
            
            <ul className={`flex items-center space-x-16 ${textColor}`}>
              <li className={`text-lg group inline-block relative`}>
                <Link to="/" className= {`inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out ` }>
                  Home
                </Link>

              </li>
              <li className={`text-lg group inline-block relative`}>
                <Link to="/about" className={`inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out ${location.pathname=== '/about' ? 'underline underline-offset-4 decoration-2 hover:decoration-4' :"" } `}>
                  About
                </Link>
              </li>
              <li className={`text-lg group inline-block relative`}>
                <Link to="/room" className={`inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out ${location.pathname=== '/room' ? 'underline underline-offset-4 decoration-2 hover:decoration-4' :"" } `}>
                  Room
                </Link>
              </li>

              <li className={`text-lg group inline-block relative`}>
                <Link to="/facility" className={`inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out ${location.pathname=== '/facility' ? 'underline underline-offset-4 decoration-2 hover:decoration-4' :"" } `}>
                  Facilities
                </Link>
              </li>
            </ul>
            
            
            <Link to="/">
              <img
                alt="Logo"
                src={logo}
                className="w-22 h-16 rounded-full"
              />
            </Link>
            <ul className={`flex items-center space-x-16 ${textColor}`}>

            <li className={`text-lg group inline-block relative`}>
                <Link to="/menu" className={`inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out ${location.pathname=== '/menu' ? 'underline underline-offset-4 decoration-2 hover:decoration-4' :"" } `}>
                  Menu
                </Link>
              </li>

              <li className={`text-lg group inline-block relative`}>
                <Link to="/wellness" className={`inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out ${location.pathname=== '/wellness' ? 'underline underline-offset-4 decoration-2 hover:decoration-4' :"" } `}>
                  Wellness
                </Link>
              </li>
              
              <li className={`text-lg group inline-block relative`}>
                <Link to="/gallery" className={`inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out ${location.pathname=== '/gallery' ? 'underline underline-offset-4 decoration-2 hover:decoration-4' :"" } `}>
                  Gallery
                </Link>
              </li>
              <li className={`text-lg group inline-block relative`}>
                <Link to="/contact" className={`inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out ${location.pathname=== '/contact' ? 'underline underline-offset-4 decoration-2 hover:decoration-4' :"" } `}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Menu for small screens */}
        <div
          className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-white transition-transform duration-300 ease-in-out md:hidden ${
            state ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
            onClick={() => setState(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="mt-16 flex flex-col  roboto-bold space-y-8 p-4">
            <li className="text-black  group inline-block relative">
              <Link to="/" className="inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out">
                Home
              </Link>
            </li>
            <li className="text-black  group inline-block relative">
              <Link to="/about" className="inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out">
                About
              </Link>
            </li>
            <li className="text-black  group inline-block relative">
              <Link to="/room" className="inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out">
                Room
              </Link>
            </li>
            <li className="text-black  group inline-block relative">
              <Link to="/facility" className="inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out">
                Facilities
              </Link>
            </li>
            <li className="text-black  group inline-block relative">
              <Link to="/dining" className="inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out">
                Dining
              </Link>
            </li>
            <li className="text-black  group inline-block relative">
              <Link to="/wellness" className="inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out">
                Wellness
              </Link>
            </li>
            <li className="text-black  group inline-block relative">
              <Link to="/gallery" className="inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out">
                Gallery
              </Link>
            </li>
            <li className="text-black  group inline-block relative">
              <Link to="/contact" className="inline-block relative group-hover:after:w-full after:block after:absolute after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-500 after:ease-in-out">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        </div>
</nav>
    
  );
}