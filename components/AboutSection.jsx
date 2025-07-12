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
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-gray-900 py-12 px-4 sm:py-16 md:py-20 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-8">
          About the bi0sCTF Team
        </h3>

        <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-justify">
          Team bi0s is a community of passionate college students, who have come together for the cause of making the world a safer place by contributing to the security community while achieving excellence in security research. The team focuses on various areas including but not limited to web application security, computer forensics, binary exploitation, reverse engineering, hardware security, cryptography, and Android security.
        </p>

        <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-justify">
          bi0s is largely a CTF team actively taking part in the international CTFs around the year besides carrying out research on security issues in the real world. The team operates on a principle where the senior members of the club individually mentor the junior members.
        </p>

        {/* Vipin Sir Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center my-10">
          {/* Text */}
          <div className="text-justify order-2 md:order-1">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Founded in 2008 by our mentor Shri Vipin Pavithran, over the years bi0s has been renowned as one of the leading CTF teams in India, with about 30 active members. The club is run by the students themselves, with the help of research scholars, alumni, and faculty.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[200px] sm:h-[230px] md:h-[250px]">
              <Image
                src={vipin_sir}
                alt="Vipin Sir - Founder of bi0s"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <h4 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4 mt-6">
          🔍 What We Do
        </h4>
        <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-justify">
          Team bi0s primarily participates in Capture The Flag (CTF) competitions and has been consistently ranked the number one team in India since 2016 according to CTFtime.{' '}
          <a href="https://blog.bi0s.in " target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Check out our blog here!
          </a>
        </p>

        {/* Research Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start mb-10">
          <div>
            <Slider {...settings}>
              <div>
                <div className="relative rounded-xl overflow-hidden w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[220px] sm:h-[250px] md:h-[300px] mx-auto">
                  <Image
                    src={life8}
                    alt="bi0s research activity"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-xl overflow-hidden w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[220px] sm:h-[250px] md:h-[300px] mx-auto">
                  <Image
                    src={life4}
                    alt="bi0s research activity"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-xl overflow-hidden w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[220px] sm:h-[250px] md:h-[300px] mx-auto">
                  <Image
                    src={life6}
                    alt="bi0s research activity"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-xl overflow-hidden w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[220px] sm:h-[250px] md:h-[300px] mx-auto">
                  <Image
                    src={life3}
                    alt="bi0s research activity"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Slider>
          </div>

          <div className="space-y-4 text-left">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Our team members also actively engage in security research. We've discovered security issues in various software including Virtualization Software, CMSs, Forums, and OS-level components.{' '}
              <a href="https://bi0s.in/research " target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                Explore some of our research here!
              </a>
            </p>
          </div>
        </div>

        {/* Fun Activities Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start mb-10">
          <div className="space-y-4 text-left order-2 md:order-1">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Fun doesn’t end at flags! We regularly host meetups with alumni filled with music, games, football and badminton matches, and occasional game nights to unwind.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Though online classes mellowed some energy, we continue to stay close-knit and active, both technically and socially.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <Slider {...settings}>
              <div>
                <div className="relative rounded-xl overflow-hidden w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[220px] sm:h-[250px] md:h-[300px] mx-auto">
                  <Image
                    src={life1}
                    alt="bi0s fun activities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-xl overflow-hidden w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[220px] sm:h-[250px] md:h-[300px] mx-auto">
                  <Image
                    src={life5}
                    alt="bi0s research activity"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-xl overflow-hidden w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[220px] sm:h-[250px] md:h-[300px] mx-auto">
                  <Image
                    src={life7}
                    alt="bi0s research activity"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-xl overflow-hidden w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-[220px] sm:h-[250px] md:h-[300px] mx-auto">
                  <Image
                    src={life2}
                    alt="bi0s fun activities"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};