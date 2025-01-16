import React from 'react';
import BlogsCard from './BlogsCard';
import TestimonialCard from './TestimonialCard';
import FounderCard from './FounderCard';
import ServicesCard from '@/app/about/_section/ServicesCard';
const CardSelction = ({ cardType }) => {
  return (
    <>
      {cardType === 'blog' ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-10">
          <BlogsCard />
        </div>
      ) : cardType === 'review' ? (
        <TestimonialCard />
      ) : cardType === 'founder' ? (
        <FounderCard />
      ) : (
        <ServicesCard />
      )}
    </>
  );
};

export default CardSelction;
