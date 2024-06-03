import Image from "next/image";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Demo from "./components/Demo";
import Imagenes from "./components/Imagenes";
import Talk from "./components/Talk";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
    <Header />
      <Hero />
      <Banner />
      <Demo />
      <Imagenes />
  
     <Talk /> 
     <Footer />
      
      
    </main>
  );
}
