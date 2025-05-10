import { useState } from 'react';

export default function Header() {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const hamburgerClick = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };
  return (
    <section
      id="hero"
      className={`bg-mobile-hero md:bg-hero bg-cover bg-center md:bg-top bg-no-repeat ${
        isHamburgerMenuOpen ? 'bg-mobile-hero' : ''
      }`}
    >
      <div className="container max-w-screen-lg mx-auto md:flex flex-col text-white px-8 py-14">
        <nav className="flex items-center justify-between">
          <img src="../src/assets/logo.svg" alt="loopstudio logo" />
          <nav
            className="md:flex hidden"
            data-testid="desktop-menu"
            id="desktop-menu"
          >
            <a href="#" className="font-bold mr-6 hover:underline ">
              Home
            </a>
            <a href="#" className="font-bold mr-6 hover:underline">
              About
            </a>
            <a href="#" className="font-bold mr-6 hover:underline">
              Services
            </a>
            <a href="#" className="font-bold hover:underline">
              Contact
            </a>
          </nav>

          <button
            id="hamburger-menu"
            className={`block md:hidden text-white z-50 ${
              isHamburgerMenuOpen ? 'hamburger-open' : ''
            }`}
            onClick={hamburgerClick}
          >
            <span className="hamburger-top-line block bg-white opacity-100 w-6 h-[2px] mt-1 rounded-lg origin-top-left-0-0 transition-transform"></span>
            <span className="hamburger-middle-line block bg-white opacity-100 w-6 h-[2px] mt-1 rounded-lg"></span>
            <span className="hamburger-bottom-line block bg-white opacity-100 w-6 h-[2px] mt-1 rounded-lg origin-bottom-left-0-100 transition-transform"></span>
          </button>
        </nav>
        <nav
          id="mobile-menu"
          className={`flex-col items-center md:hidden gap-y-4 text-lg flex-wrap absolute p-10 top-0 left-0 pt-40 bg-black min-h-screen w-full uppercase ${
            isHamburgerMenuOpen ? 'flex' : 'hidden'
          }`}
        >
          <a href="#" className="font-bold hover:underline">
            Home
          </a>
          <a href="#" className="font-bold hover:underline">
            About
          </a>
          <a href="#" className="font-bold hover:underline">
            Services
          </a>
          <a href="#" className="font-bold hover:underline">
            Contact
          </a>
        </nav>
        <div className="mt-36 mb-36 md:mx-0 p-5 md:p-12 border-2 uppercase text-3xl md:text-6xl md:max-w-lg border-white hover:animate-pulse rounded-md">
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>
  );
}
