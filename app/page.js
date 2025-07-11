import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths"
import { Footer } from "@/components/footer";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">

      
      <div className="h-[60rem] relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
 
      
      <BackgroundPaths title={["bi0s", "CTF Team"]} />
  

      {/* <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        CTF bi0s
      </h1> */}
    </div>


      <section className="bg-gray-700 text-center py-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-500 mb-4" id="ctfdetail">
          CTF Details 
        </h2>
        <h1>asdasdasdasd</h1>
      </section>

      <section className="text-center py-24 px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-blue-400 mb-6 ">
          Resources
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-8">
          
        </p>
        <a
          href="https://wiki.bi0s.in/"
          className="bg-blue-500 hover:bg-blue-600 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          Lets hack →
        </a>
      </section>

      <section className="bg-gray-900 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-blue-400 mb-6">About the bi0sCTF Team </h3>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
         
          TO DOOOO !!!


       </p>
      </section>


      <Footer />
    </main>
  );
}
