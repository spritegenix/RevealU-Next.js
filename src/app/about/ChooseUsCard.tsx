import React from 'react';
import { FaHandshake } from 'react-icons/fa6';

const ChooseUsCard = () => {
  return (
    <div className="flex bg-bg-green/20 gap-5 rounded-lg border-2 border-gray-500 p-7 shadow-lg hover:-translate-y-4 transition-all duration-300">
      <div className="relative">
        <FaHandshake size={30} />

        <div className="w-7 h-7 absolute -z-10 -left-2 rounded-sm inset-0  bg-bg-green"></div>
      </div>
      <div>
        <h3>Commitment</h3>
        <p>
          We are always committed to improving the quality that can bring
          success and satisfaction to your business.
        </p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
