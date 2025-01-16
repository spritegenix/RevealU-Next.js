import React from 'react';
import Button from '@/components/elements/Button';
import Wrapper from '@/components/elements/Wrappers';
import Image from 'next/image';
import ReviewsCircle from '@/components/ReviewsCircle';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <Wrapper
      containerClassName="mx-10"
      className="py-20 md:py-10 lg:py-28 "
      isTop={true}
    >
      <div className="space-y-10 md:space-y-0">
        <p className="text-lg font-semibold uppercase leading-7 tracking-wide bg-images">
          Embrace Your Journey
        </p>
        <h1 className="lg:w-10/12 xl:w-full text-5xl md:text-[80px] leading-none xl:text-[90px] font-bold tracking-normal">
          Discover Your Hidden Potential and Live Your Best Life
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row pt-10 lg:pt-16">
        <div className="mt-5 pt-5 w-full md:w-8/12 lg:w-1/2 flex mx-auto justify-center items-center bg-gradient-to-t xl:w-auto from-bg-green/40 to-white rounded-lg order-2 xl:order-1">
          <Image
            src="/images/angryMen.png"
            width={600}
            height={430}
            alt="man"
            className="xl:h-[500px] w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col flex-1 xl:pl-14 content-center items-start justify-between lg:py-10 order-1 xl:order-2">
          <div className="flex justify-between flex-col">
            <div className="mb-5">
              <h5 className="text-xl font-semibold mb-2">Our Short Story</h5>
              <p className="font-Mukta font-light text-xl leading-8 text-text-grey tracking-wide mb-4">
                Dr. Yogita Sharma, a certified mindset coach and motivational
                speaker, empowers individuals through tools like Fingerprint
                Analysis and Mindfulness Coaching. She inspires growth and
                resilience for both teens and women.
              </p>
              <p className="font-Mukta font-light text-xl leading-8 text-text-grey tracking-wide mb-4">
                Her unique approach integrates mindset mastery, personal
                development, and brain profiling techniques, aligning mind,
                body, and soul to achieve true potential.
              </p>
            </div>
            <div className="flex">
              <Button className="" as={Link} href="services" variant="scale">
                Get Started
              </Button>
              <Button className="px-7 py-5 !text-black text-lg font-bold hover:scale-95 hover:fade-in-15 transition-all hover:-translate-y-3">
                <p className="bg-images">Watch Video</p>
              </Button>
            </div>
          </div>

          <div className="py-5 pt-12 mt-5 border-t-2 border-gray-500 flex flex-col md:flex-row gap-10 md:gap-16 w-full">
            <ReviewsCircle />
            <div>
              <p className="text-yellow-500"> ★★★★★</p>
              Total Reviews <span className="font-semibold">(4.8 of 5)</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
