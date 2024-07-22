import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Card from "./Card"

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0})
  })

  return (
    <section id='about' className="highlights-section w-screen overflow-hidden h-full common-padding bg-brown-100">
      <div className="highlights-container ">
        <div className="title-container mb-12 w-full items-end justify-between">
          <h1 id="title" className="title section-heading">
            Why we are special?
          </h1>
        </div>
        <Card/>
      </div>
    </section>
  )
}

export default Highlights