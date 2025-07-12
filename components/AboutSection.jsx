"use client";

import React from "react";
import Image from "next/image";
import life1 from "@/public/turf.jpg";
import life2 from "@/public/dfir.jpg";
import life3 from "@/public/defcamp.jpg";
import life4 from "@/public/old1.jpg";
import life5 from "@/public/old2.jpg";
import life6 from "@/public/old3.jpg";
import life7 from "@/public/old4.jpg";
import life8 from "@/public/new1.jpg";
import vipin_sir from "@/public/vipin.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AboutSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <section className="relative z-0 bg-gradient-to-b from-[#0f0f0f] via-[#10141c] to-[#0f0f0f] py-20 px-6 text-white overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
          About bi0s 
        </h3>

        <div className="bg-white/5 border border-slate-800 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-lg space-y-6 text-left">
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Team bi0s is a community of passionate college students, striving to
            make the world a safer place through security research and
            excellence in CTF competitions. Areas of focus include web security,
            forensics, reverse engineering, cryptography, hardware, and more.
          </p>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            We're actively involved in international CTFs and real-world
            security research. A strong mentorship structure ensures continuous
            learning and collaboration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-6">
            <div className="order-2 md:order-1">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Founded in 2008 by our mentor{" "}
                <span className="text-white font-semibold">
                  Shri Vipin Pavithran
                </span>
                , bi0s has grown into one of India's leading CTF teams. The team
                thrives under the guidance of senior members, alumni, and
                faculty—all led by student initiative.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-[400px] h-[250px] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={vipin_sir}
                  alt="Vipin Sir - Founder of bi0s"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <h4 className="text-2xl font-bold text-cyan-300 mt-10">What We Do</h4>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mt-2">
            bi0sCTF consistently ranks as the top CTF team in India (CTFtime
            since 2016).{" "}
            <a
              href="https://blog.bi0s.in"
              className="text-blue-400 underline hover:text-blue-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our blog →
            </a>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <div className="space-y-3">
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                Beyond CTFs, our members conduct security research, discovering
                vulnerabilities in virtualization software, CMS platforms, OS
                components and more.
                <a
                  href="https://bi0s.in/research"
                  className="text-blue-400 underline ml-2 hover:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View research →
                </a>
              </p>
            </div>

            <div>
              <Slider {...settings}>
                {[life8, life4, life6, life3].map((img, i) => (
                  <div key={i}>
                    <div className="relative w-full h-[260px] md:h-[300px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={img}
                        alt="Research activity"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

     
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="order-2 md:order-1 space-y-3">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                bi0s is more than just flags. We host alumni meetups, game
                nights, and sports sessions. Even during online semesters, we’ve
                stayed united and active—both socially and technically.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <Slider {...settings}>
                {[life1, life5, life7, life2].map((img, i) => (
                  <div key={i}>
                    <div className="relative w-full h-[260px] md:h-[300px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={img}
                        alt="Fun activity"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
