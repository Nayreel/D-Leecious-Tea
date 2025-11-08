import { milkteaLogo } from '../utils';
import { navLists } from '../data/index.js';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

const Navbar = ({ currentColor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems, toggleCart } = useCart();
    
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on scroll or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false);
      }
    };
    
    const handleScrollClose = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScrollClose);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [mobileMenuOpen]);

  const handleSmoothScroll = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu on navigation
    const targetElement = document.querySelector(link);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header 
      className={`navbar-container fixed top-0 left-0 right-0 z-50 w-full py-4 sm:px-10 px-5 flex justify-between items-center transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className='navbar flex w-full items-center'>
        <img 
          src={milkteaLogo} 
          alt='D-Leecious Tea' 
          onClick={scrollToTop}
          className='w-8 lg:w-16 transition-transform duration-300 hover:scale-110 cursor-pointer' 
        />

        <div className='category flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav, i) => (
            <div
              key={i}
              className='nav-link px-4 lg:px-6 text-sm lg:text-lg cursor-pointer text-white/80 hover:text-white transition-all duration-300 font-medium relative group'
              onClick={(e) => handleSmoothScroll(e, nav.link)} 
            >
              {nav.name}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='sm:hidden w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 flex items-center justify-center transition-all duration-300 mr-2'
        >
          {mobileMenuOpen ? (
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </button>

        <div className='right-content flex items-center gap-4 lg:gap-6 max-sm:flex-1 max-sm:justify-end'>
          <button 
            onClick={toggleCart}
            className='relative group'
          >
            {/* Modern Shopping Bag Icon */}
            <div className='w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95'>
              <svg className='w-5 lg:w-6 h-5 lg:h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
              </svg>
            </div>
            
            {/* Animated Badge */}
            {getTotalItems() > 0 && (
              <span className='absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg animate-bounceIn border-2 border-white'>
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='sm:hidden fixed top-[72px] left-0 right-0 bg-black/95 backdrop-blur-xl z-40 border-t border-white/10 animate-fadeIn'>
          <nav className='flex flex-col py-4'>
            {navLists.map((nav, i) => (
              <div
                key={i}
                className='nav-link px-6 py-4 text-base cursor-pointer text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium border-b border-white/5'
                onClick={(e) => handleSmoothScroll(e, nav.link)}
              >
                {nav.name}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;