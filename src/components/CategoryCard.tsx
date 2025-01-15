import Image from 'next/image';
import React from 'react';
import Button from './elements/Button';

const CategoryCard = () => {
  return (
    <div className="bg-white flex p-10 rounded-md">
      <div className="w-1/4">
        <Image
          src={'/images/rear-view.jpg'}
          alt="category"
          width={250}
          height={165}
        />
      </div>

      <div className="border-x-2 pl-5 pr-12 mr-3  flex-1 text-start">
        <h1>Denfest Life Mastery Summit</h1>{' '}
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit
        </p>{' '}
        <p>
          <span></span>
          9:00 am - 4:00 pm, Jun 09, 2024
        </p>
        <p>
          <span></span>
          Convention Hall 1 - Nusa Dua
        </p>
      </div>
      <div className="w-1/4 flex justify-center items-center">
        <Button variant="base" className="py-4 px-7 ">
          Get Tickets
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
