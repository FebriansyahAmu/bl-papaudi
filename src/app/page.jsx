import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="absolute top-0 -z-10 size-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 size-[500px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
      <Navbar />
    </main>
  );
}
