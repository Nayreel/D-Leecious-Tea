import { useState, useEffect } from "react";
import { stores } from "../data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Store = () => {
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  useEffect(() => {
    const mapAnimation = gsap.fromTo(
      "#map",
      { rotation: 0 },
      {
        rotation: 360,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#store",
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );

    const locationAnimation = gsap.fromTo(
      "#location",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#store",
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );

    return () => {
      mapAnimation.kill();
      locationAnimation.kill();
    };
  }, []);

  return (
    <section
      id="store"
      className="store-section nav-height justify-center content-center w-screen overflow-hidden h-full px-4 py-8 bg-brown-200"
    >
      <div className="store-container max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between lg:gap-8">
        <div className="info-container mb-12 w-full lg:w-1/2 text-center lg:text-left">
        <h1 id="title" className="title section-heading text-green-900">
            Our Locations
          </h1>

          <div
            id="location"
            className="storename-container bg-brown-200 w-full opacity-0 mt-20"
          >
            {stores.map((store) => (
              <div
                key={store.id}
                className={`bg-brown p-4 lg:p-8 flex gap-4 lg:gap-8 cursor-pointer mt-2 transition-all ease-in-out transform duration-300 rounded-lg ${
                  selectedStore.id === store.id
                    ? "bg-brown-100"
                    : "hover:bg-brown-100"
                }`}
                onClick={() => setSelectedStore(store)}
              >
                <div
                  className={`number flex rounded-full size-12 lg:size-20 justify-center items-center text-xl lg:text-4xl
                    ${selectedStore.id === store.id ? "bg-brown" : "bg-brown-100"}`}
                >
                  {store.id}
                </div>

                <div className="address text-center flex items-center text-xl lg:text-2xl">
                  {store.address}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="map"
          className="map-container w-full border-4 border-brown h-64 lg:h-96 rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src={selectedStore.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Store;
