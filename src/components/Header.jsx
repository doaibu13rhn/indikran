// import React, { useEffect, useState } from "react";
// import getImageUrl from "../utils/imageGetter";
// import { Link, NavLink, useLocation } from "react-router-dom";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;

//       setIsScrolled(scrollPosition > scrollThreshold);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Check if the current location is either "/en/about" or "/en/contact"
//   const isAboutOrContactPage =
//     location.pathname === "/en/about" || location.pathname === "/en/contact";

//   return (
//     <header
//       className={`fixed w-full h-[15vh] z-50 transition-all duration-300 ${
//         isScrolled && isAboutOrContactPage
//           ? "bg-white"
//           : isScrolled
//           ? "bg-shade"
//           : "bg-transparent"
//       }`}
//     >
//       <nav
//         className={`text-white md:flex flex justify-between items-center md:justify-between md:items-center pt-7 md:pt-7 mx-8 md:mx-20 ${
//           isAboutOrContactPage ? "text-black" : ""
//         }`}
//       >
//         <Link to="/">
//           {/* Conditional rendering based on whether it's About or Contact page */}
//           {isAboutOrContactPage ? (
//             <img
//               src={getImageUrl("logo-black", "webp")}
//               alt="logo-indikran"
//               className="w-[45vw] md:w-[15vw]"
//             />
//           ) : (
//             <img
//               src={getImageUrl("logo-white", "webp")}
//               alt="logo-indikran"
//               className="w-[45vw] md:w-[15vw]"
//             />
//           )}
//         </Link>
//         <label className="text-white border-none swap swap-rotate md:hidden relative top-[10px] bg-transparent">
//           {/* this hidden checkbox controls the state */}
//           <input type="checkbox" />

//           {/* hamburger icon */}
//           <svg
//             className="swap-off fill-current"
//             xmlns="http://www.w3.org/2000/svg"
//             width="32"
//             height="32"
//             viewBox="0 0 512 512"
//           >
//             <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
//           </svg>

//           {/* close icon */}
//           <svg
//             className="swap-on fill-current"
//             xmlns="http://www.w3.org/2000/svg"
//             width="32"
//             height="32"
//             viewBox="0 0 512 512"
//           >
//             <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
//           </svg>
//         </label>
//         <div
//           className={`pages hidden md:flex gap-[5.7rem] text-base text-[0.75rem] ${
//             isAboutOrContactPage ? "text-black" : ""
//           }`}
//         >
//           <NavLink
//             to="/"
//             className="hover:text-second"
//             activeClassName="text-second font-bold"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/en/about"
//             className="hover:text-second"
//             activeClassName="text-second"
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/en/service"
//             className="hover:text-second"
//             activeClassName="text-second"
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/en/contact"
//             className="hover:text-second"
//             activeClassName="text-second"
//           >
//             Contact
//           </NavLink>
//           <div
//             className={`lang flex gap-1 ${
//               isAboutOrContactPage ? "text-black" : ""
//             }`}
//           >
//             <div className="en">EN</div>|<div className="id">ID</div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
