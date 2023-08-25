import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="flex items-stretch p-4 ">
      <div className="shadow-md bg-white min-h-[329px] rounded-[15px] flex flex-col gap-2 p-4 hover:scale-105 transition-transform duration-300">
        {props?.icon}
        <div className="pl-2">
          <h3 className="card-title text-textDark">{props?.title}</h3>
          <p className="card-description text-textGrey">{props?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
