import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Products from "./components/Products"

function App() {
  return (
    <main className="main-container bg-brown">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Products/>
    </main>
  )
}

export default App
