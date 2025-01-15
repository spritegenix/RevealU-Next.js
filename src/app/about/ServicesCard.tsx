import React from 'react';
import { steps } from './Data';
const ServicesCard = () => {
  return (
    <div className="flex flex-col gap-10">
      {steps.map((step, index) => (
        <div className="flex gap-10 items-start" key={index}>
          <div className="w-6 ">
            <div
              className={`border w-5 h-5 relative bg-bg-green rounded-full ${
                index % 2 === 0 ? 'bg-bg-green' : 'bg-white'
              }`}
            >
              {index !== steps.length - 1 && (
                <span className="absolute left-[45%] top-full h-52 md:h-32 xl:h-40 w-[2px] bg-gray-300"></span>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="text-xl font-semibold">{step.title}</h4>
            <p className="">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
