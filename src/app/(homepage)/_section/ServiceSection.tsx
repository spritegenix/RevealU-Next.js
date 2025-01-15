import { cardsData, clients } from '@/app/page';
import ClientSlider from '@/components/ClientSlider';
import Wrapper from '@/components/elements/Wrappers';
import HomeCard from '@/components/HomeCard';
import React from 'react';

const ServiceSection = () => {
  return (
    <Wrapper
      containerClassName="mx-10 text-center   "
      bgColor="bg-bg-blue/20"
      className="py-20  space-y-10  "
      isTop={false}
    >
      <p className="text-lg font-semibold tracking-wider bg-images mx-auto">
        OUR SERVICES
      </p>
      <h2 className="font-Manrope text-[42px] leading-none  md:text-6xl font-bold">
        Your Key to Unlocking Success
      </h2>
      <p className="text-lg font-light w-full md:w-10/12 lg:w-1/2 md:px-3 mx-auto">
        Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
        accusantium doloremque laudantium elit.
      </p>
      <HomeCard cardsData={cardsData} />
      <div className="border-b-2 border-gray-500"></div>
      <p className="text-lg font-light lg:w-1/2 md:px-3 mx-auto">
        We&apos;ve worked with over{' '}
        <span className="bg-images font-semibold">200K+</span> companies
        globally
      </p>
      <ClientSlider data={clients} sliderSpeed={30} reverseDirection={false} />
    </Wrapper>
  );
};

export default ServiceSection;
