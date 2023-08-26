import Patners from "@/components/patners/Patners";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import OurProcess from "@/components/ourProcess/OurProcess";
import Services from "@/components/services/Services";
import StartWorking from "@/components/working/StartWorking";
import React from "react";
import Footer from "@/components/footer/Footer";

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
      <div className="bg-process-bg bg-cover bg-no-repeat bg-center   pt-32 pb-48">
        <div className="container mx-auto xl:px-[15%]">
          <OurProcess />
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto lg:px-[5%] py-40">
          <Patners />
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#35D3FF] to-[#A963FB]">
        <div className="container mx-auto py-[114px] xl:px-[15%]">
          <StartWorking />
        </div>
      </div>
      <div className="bg-footerBlack pt-12 pb-6">
        <div className="container mx-auto xl:px-[15%]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
