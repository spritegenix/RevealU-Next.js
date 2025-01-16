import React from 'react';
export interface IconCardProps {
  icon: React.ReactElement;
}
const IconCard: React.FC<IconCardProps> = ({ icon }) => {
  return (
    <div className="relative">
      {icon}

      <div className="w-10 h-10 absolute -z-10 -left-3 -top-1 rounded-md inset-0  bg-bg-blue/40"></div>
    </div>
  );
};

export default IconCard;
