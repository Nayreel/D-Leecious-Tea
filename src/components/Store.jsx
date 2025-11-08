import { useState } from "react";
import { stores } from "../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Store = () => {
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  useGSAP(() => {
    gsap.from("#store-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#store-title",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".location-card", {
      opacity: 0,
      x: -50,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".location-card",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from("#map", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      scrollTrigger: {
        trigger: "#map",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section
      id="store"
      className="store-section min-h-screen w-screen overflow-hidden px-4 py-20 relative"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="store-container max-w-screen-2xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/50 to-white/50"></div>
              <div className="flex items-center gap-2 text-white/70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-bold tracking-widest uppercase">Find Us</span>
              </div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-white/50 to-white/50"></div>
            </div>
          </div>

          <h1 id="store-title" className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Visit Our Stores
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Experience the perfect cup at any of our welcoming locations
          </p>

          {/* Quick Stats */}
          <div className="flex items-center justify-center gap-8 flex-wrap text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span>All Stores Open Now</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+123 456 7890</span>
            </div>
          </div>
        </div>

        {/* Locations Grid - New Modern Design */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {stores.map((store, index) => (
            <div
              key={store.id}
              className="location-card group relative cursor-pointer"
              onClick={() => setSelectedStore(store)}
            >
              {/* Card Container */}
              <div className={`relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
                selectedStore.id === store.id
                  ? "border-white/60 shadow-2xl scale-105 ring-4 ring-white/20"
                  : "border-white/20 hover:border-white/40 hover:scale-102"
              }`}>
                
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Top Section - Store Number & Status */}
                <div className="relative p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    {/* Store Badge */}
                    <div className={`relative flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedStore.id === store.id
                        ? "bg-white/30 shadow-lg"
                        : "bg-white/10 group-hover:bg-white/20"
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                          selectedStore.id === store.id ? "bg-white/30" : "bg-white/20"
                        }`}>
                          {store.id}
                        </div>
                        <span className="text-sm font-bold text-white">Store {store.id}</span>
                      </div>
                    </div>

                    {/* Active Status */}
                    {selectedStore.id === store.id && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-400/40 rounded-full animate-fadeInUp">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs font-semibold text-green-100">Selected</span>
                      </div>
                    )}
                  </div>

                  {/* Store Name */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {store.address}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4 group-hover:text-white/90 transition-colors">
                    {store.desc}
                  </p>

                  {/* Features Icons */}
                  <div className="flex items-center gap-4 text-white/60 text-xs">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Open Daily</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>Dine-in</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span>Takeout</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Bottom Section - Action */}
                <div className="relative p-6 pt-4">
                  <button className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    selectedStore.id === store.id
                      ? "bg-white/30 text-white shadow-lg"
                      : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span>{selectedStore.id === store.id ? "View on Map Below" : "Get Directions"}</span>
                  </button>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full transition-opacity duration-500 ${
                  selectedStore.id === store.id ? "opacity-100" : "opacity-0"
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section - Full Width Modern Design */}
        <div className="w-full">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-4 border-2 border-white/20 shadow-2xl">
            {/* Map Header */}
            <div className="flex items-center justify-between mb-4 px-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{selectedStore.address}</h4>
                  <p className="text-white/60 text-sm">Click and drag to explore the area</p>
                </div>
              </div>

              {/* Opening Hours Badge */}
              <div className="hidden md:flex items-center gap-4 bg-white/10 px-4 py-2 rounded-xl">
                <div className="text-right">
                  <p className="text-white/60 text-xs">Opening Hours</p>
                  <p className="text-white font-semibold text-sm">8:00 AM - 10:00 PM</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
            </div>

            {/* Map Container */}
            <div id="map" className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
              <iframe
                src={selectedStore.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl"
              ></iframe>

              {/* Floating Action Button */}
              <a
                href={selectedStore.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-semibold text-sm transition-all duration-300 hover:scale-105 group"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Open in Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Operating Hours */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Operating Hours</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                <span className="text-white/80 font-medium">Monday - Friday</span>
                <span className="text-white font-bold">8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                <span className="text-white/80 font-medium">Saturday - Sunday</span>
                <span className="text-white font-bold">9:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                <span className="text-white/80 font-medium">Holidays</span>
                <span className="text-white font-bold">10:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
            </div>
            
            <div className="space-y-4">
              <a href="tel:+1234567890" className="flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-xs">Phone</p>
                  <p className="text-white font-semibold">+123 456 7890</p>
                </div>
              </a>

              <a href="mailto:hello@dleecious.com" className="flex items-center gap-4 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-xs">Email</p>
                  <p className="text-white font-semibold">hello@dleecious.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/60 text-xs">Response Time</p>
                  <p className="text-white font-semibold">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;


