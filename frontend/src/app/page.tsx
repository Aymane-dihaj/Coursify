import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white max-h-screen w-screen">
      <Navbar/>
      <Hero/>
    </div>
  );
}
