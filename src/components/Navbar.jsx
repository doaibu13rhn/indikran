import React, { useEffect, useState } from "react";
import getImageUrl from "../utils/imageGetter";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;

      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isAboutOrContactPage =
    location.pathname === "/en/about" || location.pathname === "/en/contact";

  return (
    <header
      className={`fixed w-full h-[15vh] z-50 transition-all duration-300 ${
        isScrolled && isAboutOrContactPage
          ? "bg-white"
          : isScrolled
          ? "bg-shade"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`text-white md:flex flex justify-between items-center md:justify-between md:items-center pt-7 md:pt-7 mx-8 md:mx-20 ${
          isAboutOrContactPage ? "text-black" : ""
        }`}
      >
        <Link to="/">
          {/* Conditional rendering based on whether it's About or Contact page */}
          {isAboutOrContactPage ? (
            <img
              src={getImageUrl("logo-black", "webp")}
              alt="logo-indikran"
              className="w-[45vw] md:w-[15vw]"
            />
          ) : (
            <img
              src={getImageUrl("logo-white", "webp")}
              alt="logo-indikran"
              className="w-[45vw] md:w-[15vw]"
            />
          )}
        </Link>

        {/* Mobile Toggle Button */}
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </div>

        {/* Desktop Navigation */}
        <div
          className={`pages hidden md:flex gap-[5.7rem] text-base text-[0.75rem] ${
            isAboutOrContactPage ? "text-black" : ""
          }`}
        >
          <NavLink
            to="/"
            className="hover:text-second"
            activeClassName="text-second font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/en/about"
            className="hover:text-second"
            activeClassName="text-second"
          >
            About Us
          </NavLink>
          <NavLink
            to="/en/service"
            className="hover:text-second"
            activeClassName="text-second"
          >
            Services
          </NavLink>
          <NavLink
            to="/en/contact"
            className="hover:text-second"
            activeClassName="text-second"
          >
            Contact
          </NavLink>
          <div
            className={`lang flex gap-1 ${
              isAboutOrContactPage ? "text-black" : ""
            }`}
          >
            <div className="en">EN</div>|<div className="id">ID</div>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-shade fixed inset-0 z-50 text-white">
          <div className="flex justify-between py-8 mx-8 items-center">
            <Link to="/">
              <img
                src={getImageUrl("logo-white", "webp")}
                alt="logo-indikran"
                className="w-[45vw]"
              />
            </Link>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 cursor-pointer"
              onClick={closeMobileMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start mx-8">
            <div
              className={`pages flex flex-col items-start gap-4 text-base w-full py-10 text-[2rem]`}
            >
              <div className="w-full border-b-2 py-5 border-second border-dashed flex justify-between">
                <NavLink
                  to="/"
                  className="hover:text-second text-xl"
                  activeClassName="text-second font-bold"
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
                <img
                  src={getImageUrl("arrow-3", "webp")}
                  alt="arrow"
                  className="w-4 h-4"
                />
              </div>
              <div className="w-full border-b-2 py-5 border-second border-dashed flex justify-between">
                <NavLink
                  to="/en/about"
                  className="hover:text-second text-xl"
                  activeClassName="text-second font-bold"
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>
                <img
                  src={getImageUrl("arrow-3", "webp")}
                  alt="arrow"
                  className="w-4 h-4"
                />
              </div>
              <div className="w-full border-b-2 py-5 border-second border-dashed flex justify-between">
                <NavLink
                  to="/en/service"
                  className="hover:text-second text-xl"
                  activeClassName="text-second font-bold"
                  onClick={closeMobileMenu}
                >
                  Service
                </NavLink>
                <img
                  src={getImageUrl("arrow-3", "webp")}
                  alt="arrow"
                  className="w-4 h-4"
                />
              </div>
              <div className="w-full border-b-2 py-5 border-second border-dashed flex justify-between">
                <NavLink
                  to="/en/contact"
                  className="hover:text-second text-xl"
                  activeClassName="text-second font-bold"
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
                <img
                  src={getImageUrl("arrow-3", "webp")}
                  alt="arrow"
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
