import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black">
      <header className="header">
        <div className="logo">
          <a href="#">
            <img
              src="https://play-lh.googleusercontent.com/QsdI4sCsSi84gNzVbu6J6OCp4JLj2P78WocUQ5suSYGn7gvgHAuDmu1Hk3-KBMTeAb8"
              alt="Flexbox Logo"
              className="h-12"
            />
          </a>
        </div>
        <button
          className="burger-menu md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <ul
          className={`main-nav ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center`}
        >
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default Header;
