import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import DriverApp from "./components/DriverApp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080a] text-white selection:bg-[#E50914] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <DriverApp />
      <Contact />
      <Footer />
    </div>
  );
}
