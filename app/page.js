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
      <div className="h-[60rem] relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
        <BackgroundPaths title={["bi0s", "CTF", "Recruitment"]} />
      </div>

      {/* Countdown Section */}
      <section className="bg-gray-700 text-center py-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-500 mb-4" id="ctfdetail">
          Prove Yourself And Grab a Spot Among the Elite
        </h2>

        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-6">
          All you need to do is prove yourself. Take on the challenges and conquer them all to show us your mettle, and claim your spot among the elite!
        </p>

        <p className="text-sm md:text-base text-red-400 max-w-3xl mx-auto">
          <strong>NOTE:</strong> This Recruitment drive is only for upcoming freshers in the Amritapuri campus ('25-'29 batch). We are <u>not</u> recruiting Second years (Sem 3) or Third Years (Sem 5) students.
        </p>

        {isActive ? (
          <div className="text-center mt-10">
            <h1 className="text-2xl md:text-4xl font-bold text-green-400 mb-2">
              🎉 RECRUITMENT IS NOW ACTIVE! 🎉
            </h1>
            <p className="text-lg md:text-xl text-green-300">
              Active From: July 14th, 2025 Onwards
            </p>
          </div>
        ) : (
          <div className="text-center mt-10">
            <h1 className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
              Countdown to Recruitment:
            </h1>
            <div className="flex justify-center items-center space-x-4 md:space-x-8">
              {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
                const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][index];
                return (
                  <div key={label} className="bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl md:text-4xl font-bold text-blue-400">{value}</div>
                    <div className="text-sm md:text-base text-gray-300">{label}</div>
                  </div>
                );
              })}
            </div>
            <p className="text-sm md:text-base text-gray-400 mt-4">
              Active From: July 14th, 2025 Onwards
            </p>
          </div>
        )}

        {/* Recruitment Portal Link */}
        <div className="mt-8">
          <a
            href="https://recruitment.bi0s.in/login"
            className="inline-block bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl transition"
          >
            Go to Recruitment Portal →
          </a>
        </div>
      </section>

      {/* Resources Section */}
      <section className="text-center py-24 px-6">
        <div className="mb-8">
          <ResourcesSection />
        </div>
        <a
          href="https://wiki.bi0s.in/"
          className="bg-blue-500 hover:bg-blue-600 text-black font-semibold px-6 py-3 rounded-xl transition"
        >
          For More Information →
        </a>
      </section>

      {/* About Section */}
      <AboutSection />

      <Footer />
    </main>
  );
}
