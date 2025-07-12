"use client";

import React from "react";

export const ResourcesSection = () => {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <h2 className="text-4xl md:text-6xl font-bold text-blue-400 text-center mb-16">
        Resources
      </h2>

      <div className="w-full max-w-6xl mx-auto space-y-16 text-lg leading-relaxed">
        {/* Linux Setup */}
        <div>
          <h3 className="text-2xl font-bold text-blue-300 mb-4">🖥️ Linux Setup</h3>
          <p className="mb-3">Setting up your system — you have 3 options:</p>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold text-white">WSL – Windows Subsystem for Linux</span>: Just a Linux terminal inside Windows.
              <br />
              <a href="https://www.howtogeek.com/744328/how-to-install-the-windows-subsystem-for-linux-on-windows-11/" className="text-blue-400 underline">Tutorial</a>
              <br />
              <span className="text-yellow-300">Note:</span> Depending on the domain you choose, dual boot may be required later.
            </li>
            <li>
              <span className="font-semibold text-white">Dual Boot</span>: Boot into Linux or Windows with full GUI.
              <br />
              <a href="https://opensource.com/article/18/5/dual-boot-linux" className="text-blue-400 underline">Tutorial</a> |
              <a href="https://www.youtube.com/watch?v=mXyN1aJYefc" className="text-blue-400 underline ml-2">Video</a>
            </li>
            <li>
              <span className="font-semibold text-white">VM – Virtual Machine</span>: Run full Linux inside Windows.
              <br />
              <a href="https://www.codecademy.com/article/installing-linux-using-a-vm" className="text-blue-400 underline">Tutorial</a>
            </li>
          </ul>
        </div>

        {/* Mac Setup */}
        <div>
          <h3 className="text-2xl font-bold text-blue-300 mb-4">🍎 Mac Setup</h3>
          <p className="mb-2">
            No need to install Linux. Just install <span className="font-semibold text-white">Homebrew</span>.
          </p>
          <a href="https://www.youtube.com/watch?v=flQxyoyBX5M" className="text-blue-400 underline">Homebrew Setup Video</a>
        </div>

        {/* Linux CLI */}
        <div>
          <h3 className="text-2xl font-bold text-blue-300 mb-4">💻 Linux Command Line</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li><a href="https://ubuntu.com/tutorials/command-line-for-beginners#3-opening-a-terminal" className="text-blue-400 underline">Ubuntu CLI Tutorial</a></li>
            <li><a href="https://medium.com/@AlexanderObregon/mastering-the-basics-of-the-ubuntu-terminal-a-beginners-guide-a9c361d0560f" className="text-blue-400 underline">Ubuntu Terminal Guide</a></li>
            <li><a href="https://linuxjourney.com/" className="text-blue-400 underline">Linux Journey</a></li>
            <li><a href="https://www.hostinger.com/in/tutorials/linux-commands" className="text-blue-400 underline">60 Linux Commands</a></li>
            <li><a href="https://www.youtube.com/watch?v=gd7BXuUQ91w" className="text-blue-400 underline">Video (NetworkChuck)</a></li>
          </ul>
        </div>

        {/* Package Managers */}
        <div>
          <h3 className="text-2xl font-bold text-blue-300 mb-4">📦 Installing Packages</h3>
          <p className="mb-2">Each distro uses different package managers. Learn the differences here:</p>
          <a href="https://www.youtube.com/watch?v=vX3krP6JmOY&t=143s" className="text-blue-400 underline">Package Manager Comparison Video</a>
        </div>

        {/* CLI Challenges */}
        <div>
          <h3 className="text-2xl font-bold text-blue-300 mb-4">🎯 Practice Challenges</h3>
          <a href="https://cmdchallenge.com" className="text-blue-400 underline">https://cmdchallenge.com</a>
        </div>

        {/* Programming */}
        <div>
          <h3 className="text-2xl font-bold text-blue-300 mb-4">🧠 Programming Languages</h3>

          <div className="mb-4">
            <h4 className="font-semibold text-white">Python</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><a href="https://www.youtube.com/watch?v=kqtD5dpn9C8" className="text-blue-400 underline">YouTube Tutorial</a></li>
              <li><a href="https://www.w3schools.com/python/python_intro.asp" className="text-blue-400 underline">W3Schools Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">C</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><a href="https://www.youtube.com/watch?app=desktop&v=lA5x1xJtYT8" className="text-blue-400 underline">YouTube Tutorial</a></li>
              <li><a href="https://computer.howstuffworks.com/c.htm" className="text-blue-400 underline">How C Works</a></li>
            </ul>
          </div>
        </div>

        {/* CTFs */}
        <div>
          <h3 className="text-2xl font-bold text-blue-300 mb-4">🚩 Practice CTFs</h3>
          <ul className="space-y-2 list-disc list-inside">
            <li><a href="https://dev.to/atan/what-is-ctf-and-how-to-get-started-3f04" className="text-blue-400 underline">What is CTF?</a></li>
            <li><a href="https://www.youtube.com/watch?v=Lus7aNf2xDg&t=253s" className="text-blue-400 underline">CTF Intro Video</a></li>
            <li><a href="https://play.picoctf.org/login" className="text-blue-400 underline">Login to PicoCTF</a> and solve beginner challenges.</li>
            <li>If stuck, search for writeups/solutions online.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
