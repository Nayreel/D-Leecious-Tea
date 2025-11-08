import { specialty } from "../data";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  useEffect(() => {
    // Modern stagger animation from bottom
    gsap.fromTo(
      ".feature-card",
      { 
        y: 100, 
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".box-content",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="box-content grid sm:grid-cols-2 lg:grid-cols-4 w-full h-full gap-6 lg:gap-8">
      {specialty.map((special, index) => (
        <div
          key={special.id}
          className="feature-card group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
        >
          {/* Animated gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center h-full">
            {/* Icon container with animated background */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative w-20 h-20 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-500 group-hover:rotate-12">
                <img
                  src={special.img}
                  alt={special.title}
                  className="w-10 h-10 filter brightness-0 invert group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
              {special.title}
            </h3>
            
            {/* Description */}
            <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
              {special.desc}
            </p>

            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
