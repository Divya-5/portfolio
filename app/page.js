import Image from "next/image";
import HeroSection from "./compoents/HeroSection";
import Navbar from "./compoents/Navbar";
import AboutSection from "./compoents/AboutSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
