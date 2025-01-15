import React from 'react';
import BlogsCard from './BlogsCard';
import TestimonialCard from './TestimonialCard';
import FounderCard from './FounderCard';
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
        ''
      )}
    </>
  );
};

export default CardSelction;
