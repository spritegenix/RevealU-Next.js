import { people } from '@/app/data';
import Image from 'next/image';
import React from 'react';

const ReviewsCircle = () => {
  return (
    <>
      <div className="flex">
        {people.map((item) => (
          <div className="-mr-4  relative " key={item.name}>
            <Image
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 border-white  relative transition duration-500"
            />
          </div>
        ))}
        <div className="object-cover bg-bg-green  !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500 flex justify-center items-center">
          <p className="font-semibold"> 5K+</p>
        </div>
      </div>
    </>
  );
};

export default ReviewsCircle;
