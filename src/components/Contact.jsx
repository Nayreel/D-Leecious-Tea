import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime, MdEdit, MdSend, MdCheckCircle } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ currentFlavor }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  useGSAP(() => {
    gsap.from("#contact-title", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#contact-title",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".contact-info-card", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".contact-info-card",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(".contact-form-container", {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact-form-container",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
      setTimeout(() => {
        setFormStatus("");
      }, 5000);
    }, 1500);
  };

  const accentColor = currentFlavor?.accentColor || '#914f1e';
  const bgColor = currentFlavor?.bgColor || '#914f1e';

  return (
    <section
      id="contact"
      className="w-screen overflow-hidden min-h-screen px-4 sm:px-6 lg:px-10 py-20 lg:py-32 relative transition-all duration-1000"
    >
      {/* Stunning Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 animate-pulse-glow transition-all duration-1000"
          style={{ backgroundColor: accentColor }}
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 animate-pulse-glow transition-all duration-1000" 
          style={{ backgroundColor: accentColor, animationDelay: '2s' }}
        ></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Beautiful Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div 
              className="h-[3px] w-16 rounded-full transition-all duration-1000"
              style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }}
            ></div>
            <div 
              className="px-6 py-2 rounded-full border transition-all duration-1000"
              style={{ 
                borderColor: `${accentColor}40`,
                backgroundColor: `${accentColor}10`
              }}
            >
              <span className="text-white text-sm font-bold tracking-widest uppercase">Contact Us</span>
            </div>
            <div 
              className="h-[3px] w-16 rounded-full transition-all duration-1000"
              style={{ background: `linear-gradient(to left, transparent, ${accentColor}, transparent)` }}
            ></div>
          </div>

          <h1
            id="contact-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight"
          >
            Let's Start a
            <br />
            <span 
              className="transition-all duration-1000 inline-block relative"
              style={{ color: accentColor }}
            >
              Conversation
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: MdPhone,
              title: "Call Us",
              detail: "+1 (234) 567-8900",
              subtitle: "Mon-Sun: 8AM - 10PM",
              href: "tel:+12345678900"
            },
            {
              icon: MdEmail,
              title: "Email Us",
              detail: "hello@dleecious.com",
              subtitle: "24/7 Support",
              href: "mailto:hello@dleecious.com"
            },
            {
              icon: MdLocationOn,
              title: "Visit Us",
              detail: "3 Locations",
              subtitle: "Find nearest store",
              href: "#store"
            },
            {
              icon: MdAccessTime,
              title: "Hours",
              detail: "8:00 AM - 10:00 PM",
              subtitle: "Every Day",
              href: null
            }
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="contact-info-card group relative overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ backgroundColor: `${accentColor}30` }}
                ></div>
                
                <div 
                  className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl"
                  style={{ 
                    borderColor: `${accentColor}30`,
                    boxShadow: `0 10px 40px ${accentColor}15`
                  }}
                >
                  <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p 
                    className="font-semibold text-lg mb-1 transition-colors duration-300"
                    style={{ color: accentColor }}
                  >
                    {item.detail}
                  </p>
                  <p className="text-white/60 text-sm">{item.subtitle}</p>
                  
                  {item.href && (
                    <a
                      href={item.href}
                      className="absolute inset-0 z-10"
                      aria-label={item.title}
                    ></a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Contact Form */}
        <div className="contact-form-container max-w-4xl mx-auto relative">
          {/* Glow effect behind form */}
          <div 
            className="absolute -inset-8 rounded-[4rem] blur-2xl opacity-20 transition-all duration-1000"
            style={{ backgroundColor: accentColor }}
          ></div>
          
          <form 
            onSubmit={handleSubmit} 
            className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 rounded-[3rem] border-2 transition-all duration-1000 shadow-2xl"
            style={{ 
              borderColor: `${accentColor}40`,
            }}
          >
            {/* Form Header */}
            <div className="text-center mb-12">
              <div 
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border mb-4 transition-all duration-1000"
                style={{ 
                  borderColor: `${accentColor}40`,
                  backgroundColor: `${accentColor}15`
                }}
              >
                <MdEdit className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-bold tracking-wider">MESSAGE US</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Drop Us a Line</h2>
              <p className="text-white/70">We'll get back to you within 24 hours</p>
            </div>
            
            <div className="space-y-6">
              {/* Name Input */}
              <div className="group">
                <label htmlFor="name" className="block text-white/90 text-sm font-semibold mb-3 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:bg-white/15 transition-all duration-300 text-lg"
                  style={{ 
                    '--focus-color': accentColor 
                  }}
                  onFocus={(e) => e.target.style.borderColor = `${accentColor}60`}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                  placeholder="John Doe"
                />
              </div>

              {/* Email and Phone Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="email" className="block text-white/90 text-sm font-semibold mb-3 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:bg-white/15 transition-all duration-300 text-lg"
                    onFocus={(e) => e.target.style.borderColor = `${accentColor}60`}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="phone" className="block text-white/90 text-sm font-semibold mb-3 ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:bg-white/15 transition-all duration-300 text-lg"
                    onFocus={(e) => e.target.style.borderColor = `${accentColor}60`}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="group">
                <label htmlFor="subject" className="block text-white/90 text-sm font-semibold mb-3 ml-1">
                  What's this about?
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white focus:outline-none focus:bg-white/15 transition-all duration-300 text-lg appearance-none cursor-pointer"
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em',
                  }}
                  onFocus={(e) => e.target.style.borderColor = `${accentColor}60`}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                >
                  <option value="" style={{ backgroundColor: bgColor }}>Choose a topic...</option>
                  <option value="general" style={{ backgroundColor: bgColor }}>General Question</option>
                  <option value="order" style={{ backgroundColor: bgColor }}>Order Support</option>
                  <option value="feedback" style={{ backgroundColor: bgColor }}>Feedback</option>
                  <option value="partnership" style={{ backgroundColor: bgColor }}>Partnership</option>
                  <option value="other" style={{ backgroundColor: bgColor }}>Something Else</option>
                </select>
              </div>

              {/* Message */}
              <div className="group">
                <label htmlFor="message" className="block text-white/90 text-sm font-semibold mb-3 ml-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:bg-white/15 transition-all duration-300 resize-none text-lg"
                  onFocus={(e) => e.target.style.borderColor = `${accentColor}60`}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="w-full px-8 py-5 font-bold text-lg rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-white relative overflow-hidden group"
                style={{ 
                  backgroundColor: accentColor,
                  boxShadow: `0 20px 60px ${accentColor}40`
                }}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center gap-3">
                  {formStatus === "sending" ? (
                    <>
                      <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : formStatus === "success" ? (
                    <>
                      <MdCheckCircle className="w-6 h-6" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <MdSend className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              {/* Success Message */}
              {formStatus === "success" && (
                <div 
                  className="rounded-2xl p-6 flex items-start gap-4 transition-all duration-1000 animate-fadeInUp border-2"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    borderColor: `${accentColor}50`
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  >
                    <MdCheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-lg font-bold mb-1">Thank You!</p>
                    <p className="text-white/90 text-sm">We've received your message and will get back to you within 24 hours. Check your email for confirmation!</p>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Social Media Section */}
        <div className="text-center mt-20">
          <p className="text-white/70 text-lg mb-6">Or connect with us on social media</p>
          <div className="flex gap-4 justify-center flex-wrap">
            {[
              { name: "Facebook", icon: FaFacebook, href: "https://facebook.com" },
              { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
              { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
            ].map((social, idx) => {
              const SocialIcon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group relative w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    borderColor: `${accentColor}40`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = accentColor;
                    e.currentTarget.style.borderColor = accentColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${accentColor}15`;
                    e.currentTarget.style.borderColor = `${accentColor}40`;
                  }}
                >
                  <SocialIcon className="w-6 h-6 text-white" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
