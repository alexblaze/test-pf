import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col gap-[32px] justify-center">
      <div className="text-center text-white pt-[64px]">
        <h1 className="display-heading ">A Digital Product Design Agency</h1>
        <p className="sub-heading pt-1">
          We are Creative and Professional Digital Agency
        </p>
      </div>
      <div className="flex justify-center">
        <button className="call-to-action px-[50px] py-[20px] rounded-[60px] text-primary bg-white hover:bg-primary hover:text-white transition duration-300 w-fit">
          Get Started
        </button>
      </div>
      <div className="flex justify-center overflow-y-visible mt-1">
        <Image
          width={1235.54}
          height={786}
          src="/images/hero-img.png"
          alt="bg"
        />
      </div>
    </section>
  );
};

export default Hero;
