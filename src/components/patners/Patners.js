import Image from "next/image";
import React from "react";

const Patners = () => {
  const brandsLogo = [
    "/images/brand1.png",
    "/images/brand2.png",
    "/images/brand3.png",
    "/images/brand4.png",
    "/images/brand5.png",
    "/images/brand6.png",
    "/images/brand7.png",
    "/images/brand8.png",
    "/images/brand9.png",
    "/images/brand10.png",
  ];
  return (
    <>
      <div className="text-center text-black flex items-center flex-col  ">
        <p className="sub-title text-[#00A077]  mb-2 opacity-50">BRANDS</p>
        <h1 className="heading max-w-[897px]">
          We work with thousands of the world’s leading brands
        </h1>
      </div>
      <div className="flex flex-wrap  justify-center mt-4">
        {brandsLogo.map((item, index) => {
          return (
            <div
              key={index}
              className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 mb-4 flex justify-center items-center"
            >
              <Image src={item} width={100} height={90} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-2">
        <p className="card-description text-center max-w-[381px]  text-textGrey">
          You're going to be in good company. We work with world's leading
          brands.
        </p>
      </div>
    </>
  );
};

export default Patners;
