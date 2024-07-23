import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Store from "./components/Store"
import Contact from "./components/Contact"

function App() {
  return (
    <main className="main-container bg-brown">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Products/>
      <Store/>
      <Contact/>
    </main>
  )
}

export default App
