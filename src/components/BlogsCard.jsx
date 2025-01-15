import React from 'react';
import Button from './elements/Button';

import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
const BlogsCard = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <div
          className="flex flex-col xl:flex-row border-[0.2px] border-gray-500 mb-5 rounded-lg"
          key={index}
        >
          <div className="flex-1 w-[350px] lg:w-[470px] h-[250px]">
            <Image
              src={'/images/angryMen.png'}
              width={200}
              height={200}
              alt="man"
              className="w-full h-full aspect-video object-cover object-top"
            />
          </div>
          <div className="space-y-4 py-4 px-5 flex-1">
            <Button variant="default">STRATEGY</Button>
            <h2 className="text-lg font-bold">Take a Look Our Latest Blog</h2>
            <p className=" bg-images flex gap-x-3 px-2 items-center">
              <span>
                <FaArrowRight />
              </span>
              <span className="font-semibold"> Read More</span>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogsCard;
