import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [state, setState] = useState(false);
  const location = useLocation();

  // Determine if the current path is the homepage
  const isHomePage = location.pathname === '/';

  // Set text color based on whether it is the homepage or not
  const textColor = isHomePage ? 'text-white' : 'text-black';
  const marginTop = isHomePage ? 'mt-8': '0';

  return (
    <nav className={`bg-inherit w-full border-b md:border-0 md:static mt-0 md:${marginTop}`}>

      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 w-full">
          {/* Logo for small screens */}
          <div className="flex items-center md:hidden">
            <Link to="/logo" className="mr-auto">
              <img
                alt="Logo"
                src="https://images.pexels.com/photos/24807138/pexels-photo-24807138/free-photo-of-pool-in-luxury-summer-resort.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              <li className={`text-xl hover:text-indigo-600`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`text-xl hover:text-indigo-600`}>
                <Link to="/about">About</Link>
              </li>
              <li className={`text-xl hover:text-indigo-600`}>
                <Link to="/room">Room</Link>
              </li>
            </ul>
            <Link to="/logo">
              <img
                alt="Logo"
                src="https://images.pexels.com/photos/24807138/pexels-photo-24807138/free-photo-of-pool-in-luxury-summer-resort.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-22 h-16 rounded-full"
              />
            </Link>
            <ul className={`flex items-center space-x-16 ${textColor}`}>
              <li className={`text-xl hover:text-indigo-600`}>
                <Link to="/dining">Dining</Link>
              </li>
              <li className={`text-xl hover:text-indigo-600`}>
                <Link to="/wellness">Wellness</Link>
              </li>
              <li className={`text-xl hover:text-indigo-600`}>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className={`text-xl hover:text-indigo-600`}>
                <Link to="/contact">Contact</Link>
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
          <ul className="mt-16 space-y-8 p-4">
            <li className="text-black text-xl hover:text-indigo-600">
              <Link to="/">Home</Link>
            </li>
            <li className="text-black text-xl hover:text-indigo-600">
              <Link to="/about">About</Link>
            </li>
            <li className="text-black text-xl hover:text-indigo-600">
              <Link to="/room">Room</Link>
            </li>
            <li className="text-black text-xl hover:text-indigo-600">
              <Link to="/dining">Dining</Link>
            </li>
            <li className="text-black text-xl hover:text-indigo-600">
              <Link to="/wellness">Wellness</Link>
            </li>
            <li className="text-black text-xl hover:text-indigo-600">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="text-black text-xl hover:text-indigo-600">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
