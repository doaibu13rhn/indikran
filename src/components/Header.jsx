import React, {useEffect, useState} from 'react'
import getImageUrl from '../utils/imageGetter'
import { Link,  NavLink } from 'react-router-dom'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 50;
  
        setIsScrolled(scrollPosition > scrollThreshold);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <header className={`fixed w-full h-[15vh] z-50 transition-all duration-300 ${isScrolled ? 'bg-shade' : 'bg-transparent'}`}>
        <nav className="text-white flex justify-between items-center pt-7 mx-20">
          <Link to="/">
            <img src={getImageUrl("logo-white", "webp")} alt="logo-indikran" className="w-[15vw]" />
          </Link>
          <div className="pages flex gap-[5.7rem] text-base text-[0.75rem]">
            <NavLink to="/" className="hover:text-second" activeClassName="text-second font-bold">Home</NavLink>
            <NavLink to="/en/about-us" className="hover:text-second" activeClassName="text-second">About Us</NavLink>
            <NavLink to="/en/service" className="hover:text-second" activeClassName="text-second">Services</NavLink>
            <NavLink to="/en/contact" className="hover:text-second" activeClassName="text-second">Contact</NavLink>
            <div className="lang flex gap-1">
              <div className="en">EN</div>
              |
              <div className="id">ID</div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Header;