import BlogsCard from '@/components/BlogsCard';
import Wrapper from '@/components/elements/Wrappers';
import Layout from '@/components/layout/Layout';
import React from 'react';

const page = () => {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Wrapper isTop={true} className="pt-10 md:pt-8 lg:pt-20 xl:pb-20">
        <div className="w-full xl:w-8/12 mx-auto text-center bg-bg-blue/20 rounded-lg py-12 px-1 md:py-20 md:px-12">
          <p>
            {' '}
            HOME <span>{'>'}</span> <span className="bg-images">Blogs</span>
          </p>
          <h1 className="font-bold text-7xl">Blogs</h1>
        </div>
      </Wrapper>
      <Wrapper className="py-10">
        <div className="space-y-10">
          <div className="flex justify-center items-center text-center">
            <div className=" top-32 xl:mt-12 flex flex-col p-2 space-y-4 text-center justify-center items-center">
              <h2 className="bg-images tracking-widest font-medium uppercase">
                Latest Blog
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold">
                Explore Our Insights and Expertise
              </h2>
              <p className="font-Mukta text-text-grey text-lg">
                Discover valuable tips, strategies, and expert insights on
                personal growth, mindfulness, career planning, and more in our
                latest blog posts.
              </p>
            </div>
          </div>

          <div className={`grid md:grid-cols-2 gap-8`}>
            <BlogsCard />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default page;
