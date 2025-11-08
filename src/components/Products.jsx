import { useState, useEffect, useRef } from "react";
import { products } from "../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCart } from "../context/CartContext";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const { addToCart } = useCart();

  useGSAP(() => {
    gsap.from('#products-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '#products-title',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.from('#products-subtitle', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: '#products-subtitle',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % products.length);
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  // Calculate visible cards
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % products.length;
      cards.push({ ...products[index], position: i });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  return (
    <section
      id="products"
      className="products-section min-h-screen w-screen overflow-hidden common-padding relative"
    >
      {/* Stunning Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="screen-max-width relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
            <div className="px-8 py-3 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md">
              <span className="text-white text-sm font-black tracking-[0.3em] uppercase">Featured</span>
            </div>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent via-white/60 to-transparent rounded-full"></div>
          </div>

          <h1 id="products-title" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            Our Signature
            <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
              Collection
            </span>
          </h1>
          <p id="products-subtitle" className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
            Experience the art of tea craftsmanship with our premium selection
          </p>
        </div>

        {/* Modern 3D Carousel */}
        <div className="relative px-4 lg:px-20 py-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 z-30 w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl group"
          >
            <svg className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 z-30 w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl group"
          >
            <svg className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center perspective-1000">
            {visibleCards.map((product, idx) => {
              const isCenter = idx === 1;
              const isLeft = idx === 0;
              const isRight = idx === 2;

              return (
                <div
                  key={`${product.id}-${idx}`}
                  className={`absolute transition-all duration-700 ease-out transform-gpu ${
                    isCenter
                      ? 'z-20 scale-100 opacity-100 rotate-0'
                      : isLeft
                      ? 'z-10 scale-75 opacity-60 -translate-x-[85%] lg:-translate-x-[70%] -rotate-6'
                      : 'z-10 scale-75 opacity-60 translate-x-[85%] lg:translate-x-[70%] rotate-6'
                  }`}
                  style={{
                    filter: isCenter ? 'blur(0px) brightness(1)' : 'blur(2px) brightness(0.8)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className={`w-[280px] sm:w-[320px] lg:w-[420px] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden border-2 transition-all duration-700 shadow-2xl cursor-pointer ${
                      isCenter
                        ? 'border-white/40 shadow-[0_30px_90px_rgba(255,255,255,0.2)] animate-slideIn'
                        : 'border-white/20'
                    }`}
                    onClick={() => !isCenter && goToSlide((activeIndex + idx) % products.length)}
                  >
                    {/* Animated Glow Effect */}
                    {isCenter && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50 animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </>
                    )}

                    <div className="relative p-6 lg:p-8">
                      {/* Image Container */}
                      <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square group">
                        <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent transition-opacity duration-700 ${
                          isCenter ? 'opacity-100' : 'opacity-50'
                        }`}></div>
                        <img
                          src={product.img}
                          alt={product.name}
                          className={`w-full h-full object-cover transition-all duration-700 ${
                            isCenter ? 'scale-100 rotate-0' : 'scale-90 rotate-3'
                          }`}
                        />

                        {/* Premium Badge */}
                        <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 border-2 border-yellow-300/50 shadow-xl">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs font-black text-white uppercase tracking-wider">Premium</span>
                          </div>
                        </div>

                        {/* Overlay for center card */}
                        {isCenter && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                            <button className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl">
                              View Details
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className={`font-bold text-white mb-3 transition-all duration-300 ${
                          isCenter ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                        }`}>
                          {product.name}
                        </h3>
                        
                        <p className={`text-white/70 mb-6 transition-all duration-300 line-clamp-2 ${
                          isCenter ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
                        }`}>
                          {product.desc}
                        </p>

                        {isCenter && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(product);
                            }}
                            className="w-full px-6 py-4 bg-white/15 hover:bg-white/25 border-2 border-white/30 hover:border-white/50 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg flex items-center justify-center gap-2 group"
                          >
                            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Modern Progress Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8 lg:mt-12">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group"
              >
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? 'w-16 bg-white'
                      : 'w-2 bg-white/30 group-hover:bg-white/50 group-hover:w-8'
                  }`}
                >
                  {activeIndex === index && (
                    <div className="h-full bg-gradient-to-r from-white via-white/90 to-white/70 rounded-full animate-pulse"></div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Counter & Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <span className="text-white/70 text-sm font-medium">
              {activeIndex + 1} / {products.length}
            </span>
            
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              {isAutoPlaying ? (
                <>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                  <span className="text-white text-xs font-medium">Pause</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="text-white text-xs font-medium">Play</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 lg:gap-8 mt-16 max-w-3xl mx-auto">
          {[
            { icon: "🌟", text: "Premium Quality" },
            { icon: "🍃", text: "Fresh Daily" },
            { icon: "💯", text: "100% Natural" }
          ].map((feature, idx) => (
            <div key={idx} className="text-center p-4 lg:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="text-3xl lg:text-4xl mb-2">{feature.icon}</div>
              <p className="text-white/80 text-xs lg:text-sm font-semibold">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
