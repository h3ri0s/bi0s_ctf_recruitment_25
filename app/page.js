'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Footer } from "@/components/footer";
import { ResourcesSection } from "@/components/ResourcesSection";
import { AboutSection } from "@/components/AboutSection";

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-07-14T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsActive(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsActive(true);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-mono">
      {/* Hero */}
      <div className="h-[60rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <BackgroundPaths title={["bi0s", "CTF", "Recruitment"]} />
      </div>

      {/* Countdown Section */}
      <section
  className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-16 px-6 text-white text-center"
  id="ctfdetail"
>
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
      Prove Yourself And Grab a Spot Among the Elite
    </h2>

    <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
      All you need to do is prove yourself. Take on the challenges and conquer them all to show us your mettle, and claim your spot among the elite!
    </p>

    <p className="text-sm md:text-base text-red-400 max-w-3xl mx-auto leading-snug">
      <strong>NOTE:</strong> This Recruitment drive is only for upcoming freshers in the Amritapuri campus (’25–’29 batch). We are <u>not</u> recruiting Second years (Sem 3) or Third Years (Sem 5) students.
    </p>

    {isActive ? (
      <div className="mt-10">
        <h3 className="text-2xl md:text-4xl font-bold text-green-400 mb-2 animate-pulse">
          🎉 RECRUITMENT IS NOW ACTIVE! 🎉
        </h3>
        <p className="text-lg md:text-xl text-green-300">
          Active From: July 14th, 2025 Onwards
        </p>
      </div>
    ) : (
      <div className="mt-10">
        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
          Countdown to Recruitment:
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
            const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][i];
            return (
              <div
                key={label}
                className="w-20 sm:w-24 bg-[#1e293b] border border-slate-600 p-4 rounded-xl shadow-inner backdrop-blur-md"
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-300">{value}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">{label}</div>
              </div>
            );
          })}
        </div>
        <p className="text-sm md:text-base text-slate-400 mt-4">
          Active From: July 14th, 2025 Onwards
        </p>
      </div>
    )}

    <div className="mt-10">
      <a
        href="https://recruitment.bi0s.in/login"
        className="inline-block px-6 py-3 rounded-xl bg-blue-400 text-black font-semibold shadow-md hover:scale-105 transition-transform duration-300"
      >
        Go to Recruitment Portal →
      </a>
    </div>
  </div>
</section>


      {/* Resources Section */}
        <div> 

          <ResourcesSection />
        </div>


      {/* About Section */}
      <AboutSection />

      <Footer />
    </main>
  );
}
