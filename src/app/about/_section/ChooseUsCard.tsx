import { IconCardProps } from '@/components/IconCard';
import React from 'react';

const ChooseUsCard = ({
  title,
  description,
  icons,
}: {
  title: string;
  description: string;
  icons: IconCardProps;
}) => {
  return (
    <div className="flex bg-white gap-5 rounded-lg border-2 border-gray-500 p-7 shadow-lg hover:-translate-y-4 transition-all duration-300">
      <div className="relative">
        <span className="relative z-10">{icons}</span>
        <div className="w-10 h-10 absolute -left-4 -top-2 rounded-md  bg-bg-blue/40"></div>
      </div>
      <div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChooseUsCard;
