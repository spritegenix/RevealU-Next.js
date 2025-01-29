import { clients } from '@/app/data';
import { cardsData } from '@/app/page';
import ClientSlider from '@/components/ClientSlider';
import Wrapper from '@/components/elements/Wrappers';
import HomeCard from '@/components/HomeCard';
import React, { Suspense } from 'react';
interface ServiceSectionProps {
  bgColor: string;
}
const ServiceSection: React.FC<ServiceSectionProps> = ({ bgColor }) => {
  return (
    <Wrapper
      containerClassName="mx-10 text-center"
      bgColor={`${bgColor}`}
      className="py-20 space-y-10"
      isTop={false}
    >
      <p className="text-lg font-semibold tracking-wider bg-images mx-auto">
        OUR SERVICES
      </p>
      <h2 className="font-Manrope text-[42px] leading-none md:text-6xl font-bold">
        Transform Your Life with Our Expertise
      </h2>
      <p className="text-lg font-light w-full md:w-10/12 lg:w-8/12 md:px-3 mx-auto">
        Our services are designed to empower individuals to achieve personal and
        professional success. From mindset coaching to career counseling, we
        provide tailored strategies to unlock your true potential.
      </p>
      <HomeCard cardsData={cardsData} />
      <div className="border-b-2 border-gray-500"></div>
      <p className="text-lg font-light lg:w-1/2 md:px-3 mx-auto">
        We&apos;ve empowered over{' '}
        <span className="bg-images font-semibold">2000+</span> individuals and
        companies globally to achieve their goals and unlock new opportunities.
      </p>
      <Suspense>
        {' '}
        <ClientSlider
          data={clients}
          sliderSpeed={30}
          reverseDirection={false}
          innerContainerClass={
            'w-32 md:w-fit md:h-fit flex-shrink-0 flex items-center justify-center mx-24 md:mx-10'
          }
        />
      </Suspense>
    </Wrapper>
  );
};

export default ServiceSection;
