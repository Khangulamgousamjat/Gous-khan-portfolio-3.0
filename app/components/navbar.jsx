// @flow strict
"use client";

import Link from "next/link";
import codeAnimation from "../assets/lottie/code.json";
import AnimationLottie from "./helper/animation-lottie";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-mono font-bold tracking-tight group transition-all duration-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
              <AnimationLottie animationPath={codeAnimation} />
            </div>
            <div className="flex items-center">
              <span className="text-pink-500 transition-transform duration-300 group-hover:-translate-x-1">&lt;</span>
              <span className="text-[#16f2b3]">Gous</span>
              <span className="text-pink-500">.</span>
              <span className="text-white">dev</span>
              <span className="text-pink-500 transition-transform duration-300 group-hover:translate-x-1">{" />"}</span>
              <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 ml-1 bg-[#16f2b3] animate-pulse rounded-xs opacity-90"></span>
            </div>
          </Link>
        </div>

        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#certificates"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CERTIFICATES</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;