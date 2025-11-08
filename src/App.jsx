import { useState } from "react"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Store from "./components/Store"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ShoppingCart from "./components/ShoppingCart"
import { CartProvider } from "./context/CartContext"
import { heroFlavors } from "./data"

function App() {
  const [currentFlavor, setCurrentFlavor] = useState(heroFlavors[0])

  return (
    <CartProvider>
      <style>
        {`
          /* Dynamic Scrollbar Styling */
          ::-webkit-scrollbar {
            width: 12px;
            height: 12px;
          }
          
          ::-webkit-scrollbar-track {
            background: ${currentFlavor.bgColor}80;
            border-radius: 10px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, ${currentFlavor.accentColor} 0%, ${currentFlavor.accentColor}CC 100%);
            border-radius: 10px;
            border: 2px solid ${currentFlavor.bgColor}80;
            transition: all 0.3s ease;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, ${currentFlavor.accentColor}EE 0%, ${currentFlavor.accentColor}AA 100%);
            border-color: ${currentFlavor.accentColor}40;
          }
          
          /* Firefox Scrollbar */
          * {
            scrollbar-width: thin;
            scrollbar-color: ${currentFlavor.accentColor} ${currentFlavor.bgColor}80;
          }
        `}
      </style>
      <main 
        className="main-container transition-colors duration-1000 ease-in-out"
        style={{ backgroundColor: currentFlavor.bgColor }}
      >
        <Navbar currentColor={currentFlavor.accentColor} />
        <Hero currentFlavor={currentFlavor} setCurrentFlavor={setCurrentFlavor} />
        <Highlights/>
        <Products/>
        <Store/>
        <Contact currentFlavor={currentFlavor} />
        <Footer/>
        <ShoppingCart currentFlavor={currentFlavor} />
      </main>
    </CartProvider>
  )
}

export default App
