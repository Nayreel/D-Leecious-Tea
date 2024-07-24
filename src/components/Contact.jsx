import { socials } from "../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {

  useGSAP(() => {
    gsap.to("#icon", { opacity: 1, delay: 1 });
    gsap.to("#desc", { opacity: 1, delay: 0.5 });
  })

  return (
    <section
      id="contact"
      className="store-section w-screen overflow-hidden h-full px-4 py-8 bg-brown-100"
    >
      <div className="store-container max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between lg:gap-8">
        <div className="text-content flex flex-col text-center justify-center w-full">
          <h1
            id="title"
            className="title section-heading text-brown mb-4 text-2xl lg:text-4xl"
          >
            Get in Touch
          </h1>
          <p id="desc" className=" text-lg p-10 opacity-0">
            We&apos;re here to help you! Whether you have questions about our menu,
            need assistance with an order, or just want to say hello, feel free
            to reach out. Our team is always ready to assist you.
          </p>

          <div className="social-container flex gap-2 lg:gap-10 justify-center">
            {socials.map((social) => (
              <img
                id="icon"
                key={social.id}
                src={social.icon}
                alt={social.id}
                className="w-10 lg:w-14 flex cursor-pointer opacity-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
