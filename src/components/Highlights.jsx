import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Card from "./Card"

gsap.registerPlugin(ScrollTrigger)

const Highlights = () => {
  useGSAP(() => {
    gsap.from('#title', { 
      opacity: 0, 
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '#title',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('#subtitle', { 
      opacity: 0, 
      y: 30,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: '#subtitle',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  return (
    <section id='about' className="highlights-section w-screen overflow-hidden min-h-screen common-padding relative">
      {/* Animated gradient background overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-white/5 animate-gradient"></div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
      
      <div className="highlights-container screen-max-width relative z-10">
        {/* Enhanced title with decorative line */}
        <div className="title-container mb-20 w-full text-center">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/50"></div>
              <span className="text-white/60 text-sm font-semibold tracking-widest uppercase">Our Excellence</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/50"></div>
            </div>
          </div>
          
          <h1 id="title" className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Why Choose<br />
            <span className="text-gradient bg-gradient-to-r from-white via-white/90 to-white/70">D-Leecious Tea?</span>
          </h1>
          
          <p id="subtitle" className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of tradition and innovation in every cup.<br />
            <span className="text-base text-white/60">Crafted with passion, served with love</span>
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">1000+</div>
              <div className="text-sm text-white/60">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">4.9★</div>
              <div className="text-sm text-white/60">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">3</div>
              <div className="text-sm text-white/60">Store Locations</div>
            </div>
          </div>
        </div>

        <Card/>
      </div>
    </section>
  )
}

export default Highlights