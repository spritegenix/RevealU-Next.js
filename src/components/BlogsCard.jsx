import React from 'react';
import Button from './elements/Button';
import { blogs } from '@/app/blogs/[blogs]/page';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
const BlogsCard = () => {
  return (
    <>
      {blogs.map((blog, index) => (
        <div
          className="flex flex-col xl:flex-row border-[0.2px] border-gray-500 mb-5 rounded-lg overflow-hidden"
          key={index}
        >
          <div className="flex-1 w-[350px] lg:w-[470px] h-[250px]">
            <Image
              src={blog.image}
              width={200}
              height={200}
              alt="man"
              className="w-full h-full aspect-video object-cover object-top"
            />
          </div>
          <div className="py-4 px-5 flex-1 flex flex-col justify-around">
            <div className="space-y-4 ">
              <div className="bg-black text-white px-4 py-2 gap-x-1 text-sm w-fit rounded-md">
                STRATEGY
              </div>
              <h2 className="text-lg font-bold">{blog.title}</h2>
            </div>
            <Link
              href={blog.link}
              className=" bg-images flex gap-x-3 px-2 items-center"
            >
              <span>
                <FaArrowRight />
              </span>
              <p className="font-semibold ">Read More</p>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogsCard;
