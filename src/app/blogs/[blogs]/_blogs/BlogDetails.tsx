'use client';
import React from 'react';
import { blogs } from '../page';
import Wrapper from '@/components/elements/Wrappers';

import { usePathname } from 'next/navigation';
const BlogDetails = () => {
  const pathname = usePathname();
  const filteredBlogs = blogs.filter((blog) => blog.link === pathname);
  return (
    <Wrapper isTop={true}>
      <div className="blog-list">
        {filteredBlogs.map((blog, index) => (
          <div key={index} className="blog-item my-10">
            <h2 className="text-3xl font-bold mb-5 mx-auto text-center">
              {blog.title}
            </h2>
            <div className="image-container md:w-10/12 xl:w-9/12 h-[500px] mx-auto mb-5">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full rounded-lg shadow-md object-cover "
              />
            </div>
            <div className="blog-content space-y-4 md:w-9/12 mx-auto">
              {blog.content}
            </div>
            <hr className="mt-8 border-gray-300" />
            {/* Tags Section */}
            <div className="tags-container md:w-9/12 mx-auto mt-6">
              <h3 className="text-xl font-semibold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-lg shadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <hr className="mt-8 border-gray-300" />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default BlogDetails;
