import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Logo ROTA.png";
import SignIn from "../../Pages/SignIn";
import { Link } from "react-router-dom";



const Navbar = () => {

  const [showSignIn, setShowSignIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignIn = (name) => {
    setUsername(name);
    setIsSignedIn(true);
    setShowSignIn(false);
  }

  const handleLogout = () => {
    setIsSignedIn(false);
    setUsername('');
    setShowSignIn(false);
  }
  
  return (
    <div className="navbar-container">
      <nav className="navbar bg-ivory font-bhadra text-burgundy shadow-lg">
        <div className="container mx-auto h-24">
          <div className="flex justify-between items-center">
            <div className="mt-2 flex flex-row">
              <Link to="/">
                <img src={logo} className="logo" alt="Logo" />
              </Link>
              <div className="mt-1 flex items-center">
                <h2 className="font-raja logos mx-2 max-sm:font-xl">
                  Resonance of the Archipelago
                </h2>
              </div>
            </div>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="md:hidden ml-3 text-burgundy hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-cream rounded-lg inline-flex items-center justify-center mt-6 me-4"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div
              className="hidden md:block w-full md:w-auto mt-6"
              id="mobile-menu"
            >
              <ul className="flex-col md:flex-row flex md:space-x-8 md:mt-0 md:text-sm md:font-medium me-10">
                <li>
                  <a
                    href="/home"
                    className="hover:text-taupe bg-taupe md:bg-transparent text-burgundy block pl-3 pr-4 py-2 md:p-0 rounded focus:outline-none"
                    aria-current="page"
                  ><Link to="/">Home</Link>

                    
                  </a>
                </li>
                <li>
                  <a
                    href="/resonance"
                    className="hover:text-taupe border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-taupe md:p-0"
                  ><Link to="/resonance"> Resonance</Link>
                    
                  </a>
                </li>
                <li>
                  <a
                    href="/melody"
                    className="hover:text-taupe border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-taupe md:p-0"
                  ><Link to="/melody"> Melody</Link>
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="hover:text-taupe border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-taupe md:p-0"
                  >
                    <Link to="/aboutus">
                    About Us
                    </Link>
                  </a>
                </li>
              </ul>
              <div className="ms-10">
                {!isSignedIn ? (
                <button 
                className="text-sm text-ivory bg-burgundy rounded-md hover:border-2 
                hover:border-burgundy hover:text-burgundy hover:bg-ivory absolute 
                bottom-1 right-3 w-16 h-8 mb-5" 
                onClick={() => setShowSignIn(true)}>
                  Sign In
                </button>
              ) : (
                <div className="relative">
                  <button
                  className="text-sm text-burgundy rounded-md hover:border-2 
                 hover:text-burgundy absolute 
                  bottom-1 right-3 w-28 h-8 mb-5"
                  onClick={() => setShowDropdown(!showDropdown)}
                  >
                    Welcome, {username}
                  </button>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={handleLogout}
                      >
                        Favorites
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={handleLogout}
                      >
                        Log out
                      </button>
                    </div>
                  )}
                </div>
              )}
              </div>
              <SignIn 
                isVisible={showSignIn} 
                onClose={() => setShowSignIn(false)}
                onSignIn={handleSignIn}
              >
              </SignIn>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;