import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import OurProcess from "@/components/ourProcess/OurProcess";
import Services from "@/components/services/Services";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-hero-bg bg-cover bg-no-repeat bg-center h-[1000px]">
        <Header />
        <div className="container mx-auto lg:px-[5%]">
          <Hero />
        </div>
      </div>
      <div className="mb-32">
        <div className="mt-96 bg-service-bg bg-cover bg-no-repeat bg-center ">
          <div className="container mx-auto xl:px-[15%] ">
            <Services />
          </div>
        </div>
      </div>
      <div className="bg-process-bg bg-cover bg-no-repeat bg-center h-[1639px] py-48">
        <div className="container mx-auto lg:px-[5%]">
          <OurProcess />
        </div>
      </div>
    </>
  );
};

export default Home;
