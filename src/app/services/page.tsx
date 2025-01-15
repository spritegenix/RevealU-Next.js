import Wrapper from '@/components/elements/Wrappers';
import Layout from '@/components/layout/Layout';
import React from 'react';
import ServiceSection from '../(homepage)/_section/ServiceSection';
import StickySection from '@/components/StickySection';

const page = () => {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Wrapper isTop={true} className="pt-10 md:pt-8 lg:pt-20 xl:pb-20">
        <div className="w-full xl:w-8/12 mx-auto text-center bg-bg-blue/20 rounded-lg py-12 px-1 md:py-20 md:px-12">
          <p>
            {' '}
            HOME <span>{'>'}</span>{' '}
            <span className="bg-images uppercase">services</span>
          </p>
          <h1 className="font-bold text-7xl ">Services</h1>
        </div>
      </Wrapper>
      <ServiceSection bgColor="bg-transparent" />
      <Wrapper containerClassName="py-10" bgColor="bg-bg-blue/20">
        <StickySection
          table1Order={'order-1'}
          table2Order={'order-2'}
          title="How Get Our Services"
          heading="Four Steps to Your Success"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod diti tempor incididunt labore."
          buttonContent={'Contact Us'}
          cardType={''} // blog , review or founder
        />
      </Wrapper>
      <Wrapper containerClassName="py-10">
        <StickySection
          table1Order={'order-2'}
          table2Order={'order-1'}
          title="LATEST BLOG"
          heading="Take a Look Our Latest Blog"
          paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                      eiusmod diti tempor incididunt labore."
          buttonContent={' View All Blogs'}
          cardType={'review'} // blog , review or founder
        />
      </Wrapper>
    </Layout>
  );
};

export default page;
