import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bubblemilktea } from "../utils";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const scrollRef = useRef();

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

    gsap.to("#hero-title", { opacity: 1, delay: 0.5 });
    gsap.to("#hero-button", { opacity: 1, y: -50, delay: 0.5 });
    gsap.to("#hero-desc", { opacity: 1, delay: 1 });

    const milktea = scrollRef.current;

    gsap.to(milktea, {
      rotation: 360,
      scrollTrigger: {
        trigger: milktea,
        start: "top bottom",
        scrub: true,
      },
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="hero-section w-full nav-height bg-brown relative screen-max-width">
      <div className="hero-content h-5/6 w-full flex-center flex flex-col lg:flex-row justify-between gap-5">
        <div className="left-content">
          <p id="hero-title" className="hero-title mt-20">
            D-Leecious Tea
          </p>

          <div className="sub-content text-2xl p-5 md:p-14 lg:p-20 text-center lg:text-start">
            <h1
              id="hero-desc"
              className="description text-base md:text-xl lg:text-2xl opacity-0"
            >
              We blend the finest ingredients to create refreshing and
              satisfying drinks. From classic milk tea to innovative flavors,
              every sip is a treat for your taste buds. Join us and discover
              your new favorite tea today!
            </h1>
          </div>

          <div
            id="hero-button"
            className="flex flex-col items-center opacity-0 translate-y-20 mt-10"
          >
            <a href="#products" className="btn" onClick={(e) => handleSmoothScroll(e)} >
              Buy Now
            </a>
            <p className="font-normal text-xl">From ₱49 up to ₱149</p>
          </div>
        </div>

        <div className="video-container lg:w-full md:w-5/12 w-7/12">
          <img ref={scrollRef} src={bubblemilktea} alt="bubble tea" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
