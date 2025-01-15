import React from 'react';
import Button from './elements/Button';
import BlogsCard from '@/components/BlogsCard';
import CardSelction from '@/components/CardSelction';
const StickySection = ({
  table1Order,
  table2Order,
  title,
  heading,
  paragraph,
  buttonContent,
  cardType,
}) => {
  return (
    <div className="xl:grid grid-cols-2 gap-x-5">
      <div className={`${table1Order}`}>
        <div className="sticky top-32 xl:mt-12 xl:mr-20 flex flex-col p-2 space-y-4">
          <h2 className="bg-images tracking-widest font-medium uppercase">
            {title}
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold">{heading}</h2>
          <p>{paragraph}</p>
          <Button className="w-1/2 md:w-1/3" variant="scale">
            {buttonContent}
          </Button>
        </div>
      </div>

      <div className={`flex flex-col mt-12 ${table2Order}`}>
        <CardSelction cardType={cardType} />
      </div>
    </div>
  );
};

export default StickySection;
