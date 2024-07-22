import { specialty } from "../data";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  useEffect(() => {
    // Scroll Down Animation
    gsap.fromTo(
      ".stagger-box",
      { y: 600, rotation: 360 },
      {
        y: 0,
        rotation: 0,
        stagger: {
          grid: [2, 1],
          axis: "y",
          ease: "circ.inOut",
          from: "edges",
        },
        scrollTrigger: {
          trigger: ".highlights-section",
          start: "top bottom",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Scroll Up Animation
    gsap.fromTo(
      ".stagger-box",
      { y: 0, rotation: 0 },
      {
        y: 600,
        rotation: 360,
        stagger: {
          grid: [2, 1],
          axis: "y",
          ease: "circ.inOut",
          from: "edges",
        },
        scrollTrigger: {
          trigger: ".highlights-section",
          start: "bottom bottom",
          toggleActions: "reverse none none play",
        },
      }
    );
  }, []);

  return (
    <div className="box-content grid md:grid-cols-2 lg:grid-cols-4 w-full h-full gap-5">
      {specialty.map((special) => (
        <div
          key={special.id}
          className="bg-brown rounded-lg p-2 stagger-box shadow-lg"
        >
          <div className="card bg-brown p-10 border-2 border-brown-200 flex flex-col justify-center items-center rounded-lg h-full w-full">
            <img
              src={special.img}
              alt={special.img}
              className="mb-4 w-12 h-auto"
            />
            <h1 className="text-2xl font-bold text-green">{special.title}</h1>
            <p className="mt-5 text-start">{special.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
