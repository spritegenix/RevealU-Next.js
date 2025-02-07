import CounterSection from '@/components/CounterSection';
import Button from '@/components/elements/Button';
import Wrapper from '@/components/elements/Wrappers';
import Image from 'next/image';
import Link from 'next/link';
import React, { memo } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { LuMail } from 'react-icons/lu';

const AboutSection = memo(() => {
  return (
    <Wrapper className="pt-20 ">
      <div className="flex justify-start flex-col xl:flex-row">
        <div className="flex-1 order-2 h-[800px]  xl:order-1 xl:w-10/12">
          <Image
            src={'/images/about-1.webp'}
            width={200}
            height={650}
            alt="project-discussion"
            loading="lazy"
            priority={false}
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 order-1 xl:order-2 xl:ml-[35px] mb-10 md:mb-[20px] xl:pt-5">
          <div className="text-start space-y-5">
            <p className="text-lg font-semibold tracking-wider bg-images uppercase">
              About RevealU
            </p>
            <h2 className="w-full text-[42px] md:text-[46px] leading-none xl:text-[56px] font-bold tracking-normal">
              Inspiring You to Reach Your Goals & Dreams
            </h2>
            <p className="font-Mukta font-light text-xl leading-8 text-text-grey tracking-wide mb-4">
              At “RevealU,” we empower individuals to overcome challenges, build
              confidence, and achieve personal and professional growth using
              proven techniques like Fingerprint Analysis, Mindfulness, and
              Genetic Brain Profiling.
            </p>
            <div className="flex flex-col justify-center items-center md:flex-row pb-6 border-b-2 space-y-6 xl:space-y-0">
              <div className="flex-1 h-60">
                <Image
                  src={'/images/group-discussion.jpg'}
                  width={580}
                  height={650}
                  loading="lazy"
                  priority={false}
                  alt="group-discussion"
                  className="rounded-lg h-full object-cover aspect-video object-top"
                />
              </div>

              <div className="flex-1 md:ml-7">
                <h4 className="text-xl font-bold">
                  Benefits of Joining Coaching
                </h4>
                <p className="font-Mukta font-light text-xl leading-8 text-text-grey tracking-wide mb-4">
                  Join a journey of self-discovery and transformation with
                  expert guidance tailored to your needs.
                </p>
                <ul className="flex space-y-4 flex-col">
                  <li className="flex">
                    <div className="w-6 h-6 bg-bg-green rounded-full mr-4 flex justify-center items-center">
                      <BsArrowRightShort color="#ffff" size={24} />
                    </div>
                    Discover Hidden Talents
                  </li>
                  <li className="flex">
                    <div className="w-6 h-6 bg-bg-green rounded-full mr-4 flex justify-center items-center">
                      <BsArrowRightShort color="#ffff" size={24} />
                    </div>
                    Gain Professional Guidance
                  </li>
                  <li className="flex">
                    <div className="w-6 h-6 bg-bg-green rounded-full mr-4 flex justify-center items-center">
                      <BsArrowRightShort color="#ffff" size={24} />
                    </div>
                    Build Resilience and Confidence
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start xl:items-center md:gap-x-8 pt-5 flex-col md:flex-row space-y-5 md:space-y-0">
              <Button
                as={Link}
                href="about"
                variant="scale"
                className="w-1/2 md:w-1/3 h-1/2 text-lg font-bold hover:scale-95 hover:fade-in-15 transition-all hover:-translate-y-3"
              >
                <p className="text-white text-lg">Read More</p>
              </Button>
              <div className="flex gap-x-5 md:justify-center items-center">
                <div className="bg-bg-green rounded-full h-14 w-14 flex justify-center items-center">
                  <LuMail size={35} color="#ffff" />
                </div>
                <div className="py-2">
                  <p className="text-lg text-text-grey">For Consultation</p>
                  <p className="font-semibold">
                    <a href="mailto:info@reveal-you.in">info@reveal-you.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
});

export default AboutSection;
