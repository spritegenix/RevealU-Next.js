import React from 'react';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';

const HomeCard = ({ cardsData }) => {
  // Chunking the array into two items per chunk
  const chunkedCards = [];
  for (let i = 0; i < cardsData.length; i += 2) {
    chunkedCards.push(cardsData.slice(i, i + 2));
  }

  return (
    <div className="grid grid-cols-1     md:grid-cols-2 lg:grid-cols-3">
      {chunkedCards.map((chunk, chunkIndex) => (
        <div className="w-full flex flex-col  gap-5 mb-5" key={chunkIndex}>
          {chunk.map((item, index) => (
            <div
              key={index}
              className="md:mx-5 group p-7  flex gap-x-3 shadow-md bg-white rounded-xl "
            >
              <div className="relative">
                <span className="relative z-10">{item.icon}</span>
                <div className="w-10 h-10 absolute -left-4 -top-2 rounded-md  bg-bg-blue/40"></div>
              </div>
              <div className="text-start">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p>{item.description}</p>
                <p className="  relative top-3  transition-all duration-500 ease-in-out bg-images flex gap-x-3 px-2 items-center">
                  {/* <span>
                    <FaArrowRight />
                  </span>
                  <span className="font-semibold">Read More</span> */}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
