import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo ROTA.png";
import SignIn from "../../Pages/SignIn";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignIn = (name) => {
    setUsername(name);
    setIsSignedIn(true);
    setShowSignIn(false);
  };

  const handleLogout = () => {
    setIsSignedIn(false);
    setUsername("");
    setShowSignIn(false);
  };

  return (
    <div className="navbar-container drop-shadow-xl">
      <nav className="navbar bg-ivory">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="logo lg:w-[75px] md:w-[60px] w-[50px] " alt="Logo" />
            <span className="self-center lg:text-2xl md:text-xl text-lg font-raja whitespace-wrap text-burgundy">
              Resonance of the Archipelago
            </span>
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
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto mt-6 me-[-30px]`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="block text-md py-2 px-3 font-bhadra text-burgundy rounded md:hover:bg-transparent md:border-0 md:hover:text-taupe md:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/resonance"
                  className="block py-2 px-3 font-bhadra text-burgundy rounded md:hover:bg-transparent md:border-0 md:hover:text-taupe md:p-0"
                >
                  Resonance
                </Link>
              </li>
              <li>
                <Link
                  to="/melody"
                  className="block py-2 px-3 font-bhadra text-burgundy rounded md:hover:bg-transparent md:border-0 md:hover:text-taupe md:p-0"
                >
                  Melody
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="block py-2 px-3 font-bhadra text-burgundy rounded md:hover:bg-transparent md:border-0 md:hover:text-taupe md:p-0"
                >
                  About Us
                </Link>
              </li>
              <li>
                <div className="relative">
                  {!isSignedIn ? (
                    <button
                      className="text-sm font-bhadra text-ivory bg-burgundy rounded-md hover:border-2 hover:border-burgundy hover:text-burgundy hover:bg-ivory w-16 h-8 mb-5"
                      onClick={() => setShowSignIn(true)}
                    >
                      Sign In
                    </button>
                  ) : (
                    <div className="relative">
                      <button
                        className="text-sm text-burgundy rounded-md hover:border-2 hover:text-burgundy w-28 h-8 mb-5"
                        onClick={() => setShowDropdown(!showDropdown)}
                      >
                        Welcome, {username}
                      </button>
                      {showDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                          <Link
                            to="/favorites"
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Favorites
                          </Link>
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
              </li>
            </ul>
            <SignIn 
                isVisible={showSignIn} 
                onClose={() => setShowSignIn(false)}
                onSignIn={handleSignIn}
              >
              </SignIn>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
