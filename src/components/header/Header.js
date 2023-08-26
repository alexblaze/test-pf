"use client";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="px-4 py-3 md:px-6 md:py-4 flex justify-between items-center sticky top-0 z-50 bg-transparent">
      {" "}
      <div>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={90}
            height={15}
            layout="responsive"
          />
        </Link>
      </div>
      <nav
        className={`md:flex md:gap-[32px] text-white ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="md:flex gap-[32px] text-white">
          <li>
            <Link
              className="nav-links hover:text-gray-800 transition duration-300"
              href="/"
            >
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-links hover:text-gray-800 transition duration-300"
              href="/your-benefits"
            >
              {" "}
              Your benefits
            </Link>
          </li>

          <li>
            <Link
              className="nav-links hover:text-gray-800 transition duration-300"
              href="/our-process"
            >
              {" "}
              Our process
            </Link>
          </li>
          <li>
            <Link
              className="nav-links hover:text-gray-800 transition duration-300"
              href="/our-works"
            >
              {" "}
              Our works
            </Link>
          </li>
          <li>
            <Link
              className="nav-links hover:text-gray-800 transition duration-300"
              href="/testimonials"
            >
              Testimonials
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className="nav-links hover:text-gray-800 transition duration-300"
              href="/start-project"
            >
              Start a project
            </Link>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <button className="hidden md:block call-to-action px-4 py-2 md:px-6 md:py-3 rounded-full text-primary bg-white hover:bg-primary hover:text-white transition duration-300">
        {" "}
        Get Started
      </button>
    </header>
  );
};

export default Header;
