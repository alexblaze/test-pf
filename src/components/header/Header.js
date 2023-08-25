import Image from "next/image";
import Link from "next/link";

import React from "react";

const Header = () => {
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
      <nav>
        <ul className="flex gap-[32px] text-white">
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
      <button className="call-to-action px-4 py-2 md:px-6 md:py-3 rounded-full text-primary bg-white hover:bg-primary hover:text-white transition duration-300">
        Get Started
      </button>
    </header>
  );
};

export default Header;
