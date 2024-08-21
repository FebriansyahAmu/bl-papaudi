import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/whatsappbtn";

export default function Home() {
  return (
    <main className="relative w-full h-full bg-white">
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] -z-10" />
      <WhatsAppButton />
      <Navbar />
      <Header />
      <About />
      <Service />
      <Contact />
      <Footer />
    </main>
  );
}
