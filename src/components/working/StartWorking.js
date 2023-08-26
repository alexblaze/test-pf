import Image from "next/image";
import React from "react";

const StartWorking = () => {
  return (
    <div className="grid grid-cols-8 gap-[32px]">
      <div className="col-span-3 flex gap-8 flex-col">
        <p className="sub-title  mb-2 text-white opacity-80">start with us</p>
        <h1 className="heading text-white">Start working faster today</h1>
        <p className="card-description text-white">
          We know the best solution for all of your business ideas and we can
          help you solve all business problems
        </p>
        <button className="call-to-action w-fit px-4 py-2 md:px-6 md:py-3 rounded-full text-primary bg-white hover:bg-primary hover:text-white transition duration-300">
          Get Started
        </button>
      </div>
      <div className="col-span-1"></div>

      <div className="col-span-4">
        <Image src="/images/work-side.png" width={698} height={560} />
      </div>
    </div>
  );
};

export default StartWorking;
