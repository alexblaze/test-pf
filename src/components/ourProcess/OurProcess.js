import React from "react";
import ProcessCard from "../card/ProcessCard";

const OurProcess = () => {
  const processData = [
    {
      img: "/images/process1.png",
      icon: (
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_214_533)">
            <rect
              x="19.9998"
              y="10"
              width="50"
              height="50"
              rx="15"
              fill="#DAE6FF"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.9998 33.6699C34.9998 28.8817 38.8401 25 43.5774 25C45.8523 25 48.0341 25.9134 49.6427 27.5394C51.2513 29.1653 52.155 31.3705 52.155 33.6699C52.155 38.4582 48.3147 42.3399 43.5774 42.3399C38.8401 42.3399 34.9998 38.4582 34.9998 33.6699ZM52.0131 40.6543L54.5678 42.7164H54.6121C55.129 43.2388 55.129 44.0858 54.6121 44.6082C54.0953 45.1306 53.2573 45.1306 52.7405 44.6082L50.6205 42.1784C50.4201 41.9766 50.3074 41.7023 50.3074 41.4164C50.3074 41.1304 50.4201 40.8561 50.6205 40.6543C51.007 40.2704 51.6266 40.2704 52.0131 40.6543Z"
            fill="#6E9CFD"
          />
          <defs>
            <filter
              id="filter0_d_214_533"
              x="-0.000244141"
              y="0"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.770833 0 0 0 0 0.619075 0 0 0 0 0.56849 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_214_533"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_214_533"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      title: "Business Audit",
      description:
        "  An audit examines your business's financial records to verify the are accurate. This is done through a systematic review of your transactions.",
    },
    {
      icon: (
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_214_445)">
            <rect
              x="19.9998"
              y="10"
              width="50"
              height="50"
              rx="15"
              fill="#E9E6FF"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.4496 27.8802H49.5196C53.2096 27.8802 55.0096 29.8502 54.9996 33.8902V38.7602C54.9996 42.6202 52.6196 45.0002 48.7496 45.0002H41.2396C37.3896 45.0002 34.9996 42.6202 34.9996 38.7502V31.2402C34.9996 27.1002 36.8396 25.0002 40.4696 25.0002H42.0496C42.9806 24.9902 43.8496 25.4202 44.4196 26.1502L45.2996 27.3202C45.5796 27.6702 45.9996 27.8802 46.4496 27.8802ZM40.3697 38.2902H49.6297C50.0397 38.2902 50.3697 37.9502 50.3697 37.5402C50.3697 37.1202 50.0397 36.7902 49.6297 36.7902H40.3697C39.9497 36.7902 39.6197 37.1202 39.6197 37.5402C39.6197 37.9502 39.9497 38.2902 40.3697 38.2902Z"
            fill="#8E7EFC"
          />
          <defs>
            <filter
              id="filter0_d_214_445"
              x="-0.000244141"
              y="0"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.770833 0 0 0 0 0.619075 0 0 0 0 0.56849 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_214_445"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_214_445"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      img: "/images/process2.png",
      title: "Data tracking",
      description:
        "The hardware and software, which when used together allows you to know where something is at any point in time",
    },
    {
      icon: (
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_214_319)">
            <rect x="20" y="10" width="50" height="50" rx="15" fill="#CEEDFF" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.81 25H49.191C52.28 25 54 26.78 54 29.83V40.16C54 43.26 52.28 45 49.191 45H40.81C37.77 45 36 43.26 36 40.16V29.83C36 26.78 37.77 25 40.81 25ZM41.0799 29.6601V29.6501H44.0689C44.4999 29.6501 44.8499 30.0001 44.8499 30.4291C44.8499 30.8701 44.4999 31.2201 44.0689 31.2201H41.0799C40.6489 31.2201 40.2999 30.8701 40.2999 30.4401C40.2999 30.0101 40.6489 29.6601 41.0799 29.6601ZM41.0799 35.7401H48.9199C49.3499 35.7401 49.6999 35.3901 49.6999 34.9601C49.6999 34.5301 49.3499 34.1791 48.9199 34.1791H41.0799C40.6489 34.1791 40.2999 34.5301 40.2999 34.9601C40.2999 35.3901 40.6489 35.7401 41.0799 35.7401ZM41.08 40.31H48.92C49.319 40.27 49.62 39.929 49.62 39.53C49.62 39.12 49.319 38.78 48.92 38.74H41.08C40.78 38.71 40.49 38.85 40.33 39.11C40.17 39.36 40.17 39.69 40.33 39.95C40.49 40.2 40.78 40.35 41.08 40.31Z"
            fill="#4DBCFE"
          />
          <defs>
            <filter
              id="filter0_d_214_319"
              x="0"
              y="0"
              width="90"
              height="90"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.770833 0 0 0 0 0.619075 0 0 0 0 0.56849 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_214_319"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_214_319"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      img: "/images/process3.png",
      title: "Results",
      description:
        "An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. ",
    },
  ];
  return (
    <>
      <div className="text-center text-white flex items-center flex-col  ">
        <p className="sub-title  mb-2 opacity-50">How It Works</p>
        <h1 className="heading">Our Process</h1>
        <p className="sub-heading max-w-[718px] text-center mt-3">
          We know the best solution for all of your business ideas and we can
          help you solve all business problems
        </p>
      </div>
      <div>
        {processData.map((item) => {
          return (
            <ProcessCard
              icon={item?.icon}
              title={item?.title}
              description={item?.description}
              img={item?.img}
            />
          );
        })}
      </div>
    </>
  );
};

export default OurProcess;
