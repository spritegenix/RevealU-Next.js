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
      <Wrapper containerClassName="py-10 " bgColor="bg-bg-blue/20">
        <StickySection
          table1Order={'order-1'}
          table2Order={'order-2'}
          title="How to Get Started"
          heading="Four Steps to Unlock Your Potential"
          paragraph="Achieve your personal and professional goals with our guided coaching process. Start your journey towards growth and success in just four simple steps."
          buttonContent={'Contact Us'}
          variant={'scale'}
          linkTo="contact"
          cardType={''} // blog, review, or founder
        />
      </Wrapper>
      <Wrapper containerClassName="py-10">
        <StickySection
          table1Order={'order-2'}
          table2Order={'order-1'}
          title="TESTIMONIALS"
          heading="What Our Clients Say About Us"
          paragraph="Hear from our satisfied clients who have experienced personal growth, career clarity, and positive transformations through our coaching and guidance."
          buttonContent={''}
          cardType={'review'}
          variant={'none'}
        />
      </Wrapper>
    </Layout>
  );
};

export default page;
