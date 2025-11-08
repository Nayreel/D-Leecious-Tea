import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import Slider from "react-slick";
import { heroFlavors } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = ({ setCurrentFlavor }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector("#products");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useGSAP(() => {
    gsap.to("#hero-carousel", { opacity: 1, delay: 0.3, duration: 1, ease: "power2.out" });
    gsap.to("#carousel-navigation", { opacity: 1, y: 0, delay: 1, duration: 0.8, ease: "power2.out" });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    beforeChange: (current, next) => {
      setIsAnimating(true);
      setCurrentSlide(next);
      
      // Find all instances of the current and next images (including clones)
      const currentImages = document.querySelectorAll(`[id="milktea-image-${current}"]`);
      const nextImages = document.querySelectorAll(`[id="milktea-image-${next}"]`);
      
      // Animate all instances of current image (original + clones)
      currentImages.forEach((currentImage) => {
        if (currentImage) {
          gsap.to(currentImage, {
            rotation: 720,
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "power2.in"
          });
        }
      });
      
      // Animate all instances of next image (original + clones)
      nextImages.forEach((nextImage) => {
        if (nextImage) {
          gsap.fromTo(nextImage, 
            { rotation: -720, scale: 0, opacity: 0 },
            { 
              rotation: 0, 
              scale: 1, 
              opacity: 1, 
              duration: 0.8, 
              delay: 0.3,
              ease: "back.out(1.7)" 
            }
          );
        }
      });
      
      // Text animations - target all instances
      const currentTexts = document.querySelectorAll(`[id="slide-${current}"] .slide-text`);
      const nextTexts = document.querySelectorAll(`[id="slide-${next}"] .slide-text`);
      
      gsap.to(currentTexts, {
        x: -100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in"
      });
      
      gsap.fromTo(nextTexts,
        { x: 100, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 0.6, 
          delay: 0.4,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    },
    afterChange: (current) => {
      setCurrentFlavor(heroFlavors[current]);
      setIsAnimating(false);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const nextSlide = () => {
    if (!isAnimating && sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (!isAnimating && sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section className="hero-section w-full min-h-screen relative px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 lg:py-20 flex items-center justify-center overflow-hidden">
      <div className="hero-content h-full w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16">
        
        {/* Carousel */}
        <div id="hero-carousel" className="w-full max-w-7xl opacity-0">
          <Slider ref={sliderRef} {...settings}>
            {heroFlavors.map((flavor, index) => (
              <div key={flavor.id} id={`slide-${index}`}>
                <div className="slide-content flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 px-2 sm:px-4 lg:px-16 py-4 sm:py-6 lg:py-8">
                  
                  {/* Left Content - Text */}
                  <div className="text-content flex-1 text-center lg:text-left">
                    <h1 
                      className="slide-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-3 sm:mb-4 leading-tight"
                      style={{ color: flavor.accentColor }}
                    >
                      {flavor.name}
                    </h1>
                    
                    <p className="slide-text text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light mb-4 sm:mb-6 text-white">
                      {flavor.tagline}
                    </p>

                    <p className="slide-text text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mb-6 sm:mb-8 leading-relaxed lg:mx-0 mx-auto px-4 lg:px-0">
                      {flavor.description}
                    </p>

                    <div className="slide-text flex flex-col items-center lg:items-start">
                      <button 
                        onClick={(e) => handleSmoothScroll(e)}
                        className="px-6 py-3 sm:px-8 sm:py-4 lg:px-12 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white border-2 transition-all duration-300 mb-2 sm:mb-3 transform hover:scale-105 hover:shadow-2xl active:scale-95"
                        style={{ 
                          backgroundColor: 'transparent',
                          borderColor: flavor.accentColor,
                          color: flavor.accentColor
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = flavor.accentColor;
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = flavor.accentColor;
                        }}
                      >
                        Order Now
                      </button>
                      <p className="font-normal text-sm sm:text-base lg:text-lg text-white/80">From ₱49 up to ₱149</p>
                    </div>
                  </div>

                  {/* Right Content - Milk Tea Image */}
                  <div className="image-content flex-1 flex items-center justify-center relative">
                    <div 
                      id={`milktea-image-${index}`}
                      className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]"
                      style={{
                        filter: `drop-shadow(0 25px 50px ${flavor.accentColor}40)`
                      }}
                    >
                      {/* Circular glow effect */}
                      <div 
                        className="absolute inset-0 rounded-full blur-2xl sm:blur-3xl opacity-20 sm:opacity-30"
                        style={{ backgroundColor: flavor.accentColor }}
                      />
                      <img 
                        src={flavor.img} 
                        alt={flavor.name}
                        className="relative w-full h-full object-contain animate-float"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Navigation Controls */}
        <div 
          id="carousel-navigation"
          className="navigation-container w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 opacity-0 translate-y-10"
        >
          {/* Main Navigation Layout */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Desktop Layout: Arrows on sides */}
            <div className="hidden md:flex items-center justify-center gap-4 md:gap-6 lg:gap-8">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="prev-btn w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95 flex-shrink-0"
                disabled={isAnimating}
              >
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Flavor Indicators Grid - Desktop */}
              <div className="grid grid-cols-5 gap-4 md:gap-5 lg:gap-7">
                {heroFlavors.map((flavor, index) => (
                  <button
                    key={flavor.id}
                    onClick={() => goToSlide(index)}
                    disabled={isAnimating}
                    className={`group relative w-16 h-16 md:w-[72px] md:h-[72px] lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                      currentSlide === index 
                        ? 'ring-3 md:ring-4 ring-white shadow-2xl scale-110' 
                        : 'ring-2 ring-white/50 hover:ring-white'
                    }`}
                    style={{ backgroundColor: flavor.accentColor }}
                  >
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ 
                        backgroundColor: flavor.bgColor,
                        boxShadow: `0 0 20px ${flavor.bgColor}`
                      }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-xs md:text-sm lg:text-base font-bold text-white z-10 px-1">
                      {flavor.name.split(' ')[0]}
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg z-20">
                      {flavor.name}
                    </div>
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="next-btn w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95 flex-shrink-0"
                disabled={isAnimating}
              >
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Mobile/Tablet Layout: Flavors on top, arrows below */}
            <div className="md:hidden space-y-4">
              {/* Flavor Indicators Grid - Mobile/Tablet */}
              <div className="grid grid-cols-5 gap-2 xs:gap-2.5 sm:gap-3 max-w-sm sm:max-w-md mx-auto">
                {heroFlavors.map((flavor, index) => (
                  <button
                    key={flavor.id}
                    onClick={() => goToSlide(index)}
                    disabled={isAnimating}
                    className={`group relative w-full aspect-square max-w-[60px] sm:max-w-[72px] mx-auto rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                      currentSlide === index 
                        ? 'ring-2 sm:ring-3 ring-white shadow-2xl scale-110' 
                        : 'ring-1 sm:ring-2 ring-white/50 hover:ring-white'
                    }`}
                    style={{ backgroundColor: flavor.accentColor }}
                  >
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ 
                        backgroundColor: flavor.bgColor,
                        boxShadow: `0 0 20px ${flavor.bgColor}`
                      }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-white z-10 px-0.5">
                      {flavor.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Arrow Controls - Mobile/Tablet */}
              <div className="flex items-center justify-center gap-6 sm:gap-8">
                <button
                  onClick={prevSlide}
                  className="prev-btn w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95"
                  disabled={isAnimating}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="min-w-[70px] text-center">
                  <span className="text-white/70 text-sm sm:text-base font-semibold">
                    {currentSlide + 1} / {heroFlavors.length}
                  </span>
                </div>

                <button
                  onClick={nextSlide}
                  className="next-btn w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 active:scale-95"
                  disabled={isAnimating}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Slide Counter - Desktop Only */}
            <div className="hidden md:block text-center">
              <span className="text-white/60 text-sm md:text-base font-semibold">
                {currentSlide + 1} / {heroFlavors.length}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on very small screens */}
        <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
