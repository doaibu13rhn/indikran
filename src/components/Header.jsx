import React, { useEffect, useState } from "react";
import getImageUrl from "../utils/imageGetter";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the current location is either "/en/about" or "/en/contact"
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
        className={`text-white md:flex md:justify-between md:items-center pt-7 md:pt-7 mx-8 md:mx-20 ${
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
            <div className="en cursor-pointer hover:text-second">EN</div>|
            <div className="id cursor-pointer hover:text-second">ID</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
