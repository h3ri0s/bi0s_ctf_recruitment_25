"use client";
import React, { useState } from "react";

export const ResourcesSection = () => {
  const [bgClass, setBgClass] = useState(
    "from-[#0f0f0f]/80 via-[#10141c]/80 to-[#0f0f0f]/80"
  );

  const handleEnter = (gradient) => () => setBgClass(gradient);
  const handleLeave = () =>
    setBgClass("from-[#0f0f0f]/80 via-[#10141c]/80 to-[#0f0f0f]/80");

  return (
    <section
      className={`transition-colors duration-500 bg-gradient-to-b ${bgClass} text-white py-24 px-6 w-full`}
    >
      <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-20 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
        Resources
      </h2>

      <div className="w-full max-w-6xl mx-auto grid gap-16 text-base md:text-lg leading-relaxed">

        <ResourceBlock
          title="$ > Linux Setup"
          onEnter={handleEnter("from-blue-900/60 via-blue-800/60 to-slate-900/60")}
          onLeave={handleLeave}
          hoverTitleColor="text-blue-300"
        >
          <p className="text-slate-300 mb-4">Setting up your system — you have 3 options:</p>
          <ul className="space-y-4">
            <ListItem
              title="WSL (Windows Subsystem for Linux)"
              description="Just a Linux terminal inside Windows."
              links={[{ label: "Tutorial", href: "https://www.howtogeek.com/744328/how-to-install-the-windows-subsystem-for-linux-on-windows-11/" }]}
              note="Depending on your domain, dual boot may be needed later."
            />
            <ListItem
              title="Dual Boot"
              description="Boot into Linux or Windows with full GUI."
              links={[
                { label: "Tutorial", href: "https://opensource.com/article/18/5/dual-boot-linux" },
                { label: "Video", href: "https://www.youtube.com/watch?v=mXyN1aJYefc" },
              ]}
            />
            <ListItem
              title="Virtual Machine (VM)"
              description="Run full Linux inside Windows."
              links={[{ label: "Tutorial", href: "https://www.codecademy.com/article/installing-linux-using-a-vm" }]}
            />
          </ul>
        </ResourceBlock>


        <ResourceBlock
          title="$ > Mac Setup"
          onEnter={handleEnter("from-pink-900/60 via-fuchsia-800/60 to-slate-900/60")}
          onLeave={handleLeave}
          hoverTitleColor="text-pink-300"
        >
          <p className="text-slate-300 mb-2">
            No need to install Linux. Just install <span className="text-white font-medium">Homebrew</span>.
          </p>
          <ExternalLink href="https://www.youtube.com/watch?v=flQxyoyBX5M">Homebrew Setup Video</ExternalLink>
        </ResourceBlock>


        <ResourceBlock
          title="$ > Linux Command Line"
          onEnter={handleEnter("from-indigo-900/60 via-purple-800/60 to-slate-900/60")}
          onLeave={handleLeave}
          hoverTitleColor="text-purple-300"
        >
          <ul className="space-y-3 list-disc list-inside">
            {[
              ["Ubuntu CLI Tutorial", "https://ubuntu.com/tutorials/command-line-for-beginners#3-opening-a-terminal"],
              ["Ubuntu Terminal Guide", "https://medium.com/@AlexanderObregon/mastering-the-basics-of-the-ubuntu-terminal-a-beginners-guide-a9c361d0560f"],
              ["Linux Journey", "https://linuxjourney.com/"],
              ["60 Linux Commands", "https://www.hostinger.com/in/tutorials/linux-commands"],
              ["NetworkChuck Video", "https://www.youtube.com/watch?v=gd7BXuUQ91w"],
            ].map(([label, href]) => (
              <li key={label}><ExternalLink href={href}>{label}</ExternalLink></li>
            ))}
          </ul>
        </ResourceBlock>


        <ResourceBlock
          title="$ > Installing Packages"
          onEnter={handleEnter("from-yellow-900/60 via-orange-800/60 to-yellow-300/60")}
          onLeave={handleLeave}
          hoverTitleColor="text-yellow-300"
        >
          <p className="text-slate-300 mb-2">
            Each distro uses different package managers. Learn the differences here:
          </p>
          <ExternalLink href="https://www.youtube.com/watch?v=vX3krP6JmOY&t=143s">Package Manager Comparison Video</ExternalLink>
        </ResourceBlock>


        <ResourceBlock
          title="$ > Practice Challenges"
          onEnter={handleEnter("from-cyan-900/60 via-sky-800/60 to-slate-900/60")}
          onLeave={handleLeave}
          hoverTitleColor="text-cyan-300"
        >
          <ExternalLink href="https://cmdchallenge.com">https://cmdchallenge.com</ExternalLink>
        </ResourceBlock>

        <ResourceBlock
          title="$ > Programming Languages"
          onEnter={handleEnter("from-emerald-900/60 via-green-800/60 to-slate-900/60")}
          onLeave={handleLeave}
          hoverTitleColor="text-emerald-300"
        >
          <div className="mb-4">
            <h4 className="font-semibold text-white">Python</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><ExternalLink href="https://www.youtube.com/watch?v=kqtD5dpn9C8">YouTube Tutorial</ExternalLink></li>
              <li><ExternalLink href="https://www.w3schools.com/python/python_intro.asp">W3Schools Guide</ExternalLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">C</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><ExternalLink href="https://www.youtube.com/watch?app=desktop&v=lA5x1xJtYT8">YouTube Tutorial</ExternalLink></li>
              <li><ExternalLink href="https://computer.howstuffworks.com/c.htm">How C Works</ExternalLink></li>
            </ul>
          </div>
        </ResourceBlock>

       
        <ResourceBlock
          title="$ > Practice CTFs"
          onEnter={handleEnter("from-red-900/60 via-rose-800/60 to-slate-900/60")}
          onLeave={handleLeave}
          hoverTitleColor="text-rose-300"
        >
          <ul className="space-y-2 list-disc list-inside">
            <li><ExternalLink href="https://dev.to/atan/what-is-ctf-and-how-to-get-started-3f04">What is CTF?</ExternalLink></li>
            <li><ExternalLink href="https://www.youtube.com/watch?v=Lus7aNf2xDg&t=253s">CTF Intro Video</ExternalLink></li>
            <li><ExternalLink href="https://play.picoctf.org/login">PicoCTF – Beginner Challenges</ExternalLink></li>
            <li>Search for writeups if you're stuck.</li>
          </ul>
        </ResourceBlock>
      </div>
    </section>
  );
};

const ResourceBlock = ({
  title,
  children,
  onEnter,
  onLeave,
  hoverTitleColor = "text-blue-400",
  hoverBgColor = "bg-black/80",
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    onEnter?.();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    onLeave?.();
  };

  return (
    <div className="relative w-full">
  
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full z-10"
      ></div>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative z-20 rounded-xl transition-all duration-300 ${
          hovered ? "scale-[1.05]" : "scale-100"
        }`}
      >
        <div
          className={`rounded-xl p-6 md:p-8 shadow-md backdrop-blur-md transition-colors duration-300 ${
            hovered ? hoverBgColor : "bg-black/70"
          }`}
        >
          <h3
            className={`text-3xl font-bold mb-8 tracking-tight transition-colors duration-300 ${
              hovered ? hoverTitleColor : "text-white"
            }`}
          >
            {title}
          </h3>
          {children}
        </div>
      </div>
    </div>
  );
};




const ListItem = ({ title, description, links, note }) => (
  <li>
    <p className="font-semibold text-white">{title}</p>
    <p className="text-slate-300">{description}</p>
    <div className="flex flex-wrap gap-3 mt-2">
      {links.map((l) => (
        <ExternalLink key={l.href} href={l.href}>
          {l.label}
        </ExternalLink>
      ))}
    </div>
    {note && <p className="text-yellow-300 mt-2">{note}</p>}
  </li>
);

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition"
  >
    {children}
  </a>
);
