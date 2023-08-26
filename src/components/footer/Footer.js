import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0 md:mr-8">
          <Image src="/images/footerLogo.svg" width={176} height={41} />
        </div>
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-white opacity-80">
          <li>
            <Link
              className="nav-links hover:text-primary transition duration-300"
              href="/"
            >
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-links hover:text-primary transition duration-300"
              href="/your-benefits"
            >
              {" "}
              Your benefits
            </Link>
          </li>

          <li>
            <Link
              className="nav-links hover:text-primary transition duration-300"
              href="/our-process"
            >
              {" "}
              Our process
            </Link>
          </li>
          <li>
            <Link
              className="nav-links hover:text-primary transition duration-300"
              href="/our-works"
            >
              {" "}
              Our works
            </Link>
          </li>
          <li>
            <Link
              className="nav-links hover:text-primary transition duration-300"
              href="/testimonials"
            >
              Testimonials
            </Link>
          </li>
          <li>
            {" "}
            <Link
              className="nav-links hover:text-primary transition duration-300"
              href="/start-project"
            >
              Start a project
            </Link>
          </li>
        </ul>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Link href="#">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H10V12.4706H7V9.64706H10V8.13082C10 5.26024 11.4897 4 13.925 4C15.0684 4 15.6836 4.08142 15.9825 4.12097L16 4.12329V6.82353H14.339C13.3053 6.82353 13 7.35812 13 8.44047V9.64706H15.9741L15.5629 12.4706H13V20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0Z"
                fill="white"
                fill-opacity="0.8"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 0H14C17.3137 0 20 2.68629 20 6V14C20 17.3137 17.3137 20 14 20H6C2.68629 20 0 17.3137 0 14V6C0 2.68629 2.68629 0 6 0ZM16 3C16.5 3 17 3.5 17 4C17 4.5 16.5 5 16 5C15.5 5 15 4.5 15 4C15 3.5 15.5 3 16 3ZM15 10C15 7.2425 12.7575 5 10 5C7.2425 5 5 7.2425 5 10C5 12.7575 7.2425 15 10 15C12.7575 15 15 12.7575 15 10ZM10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7Z"
                fill="white"
                fill-opacity="0.8"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H18C19.1046 20 20 19.1046 20 18V2C20 0.89543 19.1046 0 18 0ZM15.3502 6.23936C15.9312 6.1722 16.4847 6.02331 17 5.80205C16.615 6.35858 16.1277 6.84744 15.5661 7.23946C15.5715 7.35868 15.5742 7.47842 15.5742 7.59868C15.5742 11.2685 12.686 15.5 7.40283 15.5C5.78051 15.5 4.27126 15.0403 3 14.2526C3.22507 14.2786 3.45391 14.2917 3.68544 14.2917C5.03154 14.2917 6.26995 13.8476 7.25261 13.1026C5.99588 13.0802 4.93516 12.2769 4.56956 11.1737C4.74455 11.2055 4.92493 11.2232 5.10961 11.2232C5.37183 11.2232 5.62598 11.1893 5.86666 11.1258C4.55232 10.8712 3.56267 9.74881 3.56267 8.40302V8.36814C3.94981 8.57587 4.39295 8.70081 4.86354 8.71539C4.09303 8.21769 3.58636 7.36753 3.58636 6.4044C3.58636 5.89472 3.72797 5.41784 3.97458 5.0076C5.39175 6.68813 7.50783 7.79391 9.89474 7.90948C9.84628 7.70697 9.82043 7.49456 9.82043 7.27694C9.82043 5.74374 11.1062 4.5 12.6925 4.5C13.5184 4.5 14.2647 4.83736 14.7886 5.37723C15.4434 5.25228 16.0583 5.02113 16.6129 4.70304C16.3986 5.35172 15.9436 5.89576 15.3502 6.23936Z"
                fill="white"
                fill-opacity="0.8"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="mt-6 pt-4 md:mt-8 flex flex-col md:flex-row justify-between border-t border-white opacity-35">
        <p className="text-sm text-white opacity-80 mb-2 md:mb-0">
          &copy; 2021 Company
        </p>
        <div className="flex gap-2 text-sm text-white opacity-80">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
