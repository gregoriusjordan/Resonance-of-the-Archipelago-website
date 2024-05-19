import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Assets/Logo ROTA.png';
import './Navbar.css';

const Navbar = ({ isSignedIn, username, handleLogout, setPrevLocation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignInClick = () => {
    setPrevLocation(location.pathname);
  };

  useEffect(() => {
    setShowDropdown(false);
  }, [isSignedIn]);

  return (
    <div className="navbar-container drop-shadow-xl">
      <nav className="navbar bg-ivory">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="logo lg:w-[75px] md:w-[60px] w-[50px]" alt="Logo" />
            <div className="flex flex-wrap">
              <span className="self-center lg:text-2xl md:text-xl text-lg font-raja text-burgundy">
                Resonance of the Archipelago
              </span>
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-burgundy rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-multi-level"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto lg:mt-6 me-[-30px]`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link to="/" className="block text-md py-2 px-3 font-bhadra text-burgundy rounded md:hover:bg-transparent md:border-0 md:hover:text-taupe md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resonance" className="block py-2 px-3 font-bhadra text-burgundy rounded md:hover:bg-transparent md:border-0 md:hover:text-taupe md:p-0">
                  Resonance
                </Link>
              </li>
              <li>
                <Link to="/melody" className="block py-2 px-3 font-bhadra text-burgundy rounded md:hover:bg-transparent md:border-0 md:hover:text-taupe md:p-0">
                  Melody
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="block py-2 px-3 font-bhadra text-burgundy rounded md:hover:bg-transparent md:border-0 md:hover:text-taupe md:p-0">
                  About Us
                </Link>
              </li>
              <li>
                <div className="relative">
                  {!isSignedIn ? (
                    <Link to="/signin">
                      <button
                        className="max-sm:ms-2 max-sm:mt-2 text-sm font-bhadra text-ivory bg-burgundy rounded-md hover:border-2 hover:border-burgundy hover:text-burgundy hover:bg-ivory w-16 h-7 mb-5"
                        onClick={handleSignInClick}
                      >
                        Sign In
                      </button>
                    </Link>
                  ) : (
                    <div className="relative">
                      <button
                        className="text-md font-bhadra text-burgundy rounded-md w-30 h-3 lg:mb-7 mb-2 max-sm:ms-3 max-sm:mt-2"
                        onClick={() => setShowDropdown(!showDropdown)}
                      >
                        Welcome, {username}
                      </button>
                      {showDropdown && (
                        <div className="absolute right-3 mt-2 w-50 bg-ivory border-burgundy border-[3px] rounded-md shadow-lg">
                          <button
                            className="block w-full text-left px-4 py-2 text-sm text-burgundy"
                            onClick={handleLogout}
                          >
                            Log out
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
