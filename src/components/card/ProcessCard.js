import Image from "next/image";
import React from "react";

const ProcessCard = (props) => {
  return (
    <div className="p-[32px] mt-[32px] bg-white shadow-md rounded-2xl grid grid-cols-8 gap-[32px] items-center">
      <div className="col-span-4">
        <Image src={props?.img} width={500} height={280} layout="responsive" />
      </div>
      <div className="col-span-4 flex flex-col">
        {props?.icon}
        <div className="pl-[24px] flex flex-col gap-[12px]">
          <h3 className="card-title text-textDark">{props?.title}</h3>
          <p className="card-description text-textGrey">{props?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
