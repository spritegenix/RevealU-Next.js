import CounterSection from '@/components/CounterSection';
import Button from '@/components/elements/Button';
import Wrapper from '@/components/elements/Wrappers';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import React from 'react';
import { FaCrosshairs } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { LuMail } from 'react-icons/lu';
import SkillBar from './Skill';
import ChooseUsCard from './ChooseUsCard';

const page = () => {
  const skills = [
    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 80 },
    { skill: 'JavaScript', percentage: 70 },
    { skill: 'React', percentage: 85 },
  ];
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Wrapper isTop={true} className="pt-10 md:pt-8 lg:pt-20 xl:pb-20">
        <div className="w-full xl:w-10/12 mx-auto text-center bg-bg-blue/20 rounded-lg py-12 px-1 md:py-20 md:px-12">
          <p>
            {' '}
            HOME <span>{'>'}</span> <span className="bg-images">ABOUT</span>
          </p>
          <h1 className="font-bold text-7xl">About</h1>
        </div>
      </Wrapper>

      <Wrapper className="py-20 ">
        <div className="flex justify-start flex-col xl:flex-row gap-5">
          <div className="flex-1 order-2 xl:order-1 ">
            <div className="xl:w-11/12">
              <Image
                src={'/images/project-discussion.jpg'}
                width={400}
                height={400}
                alt="project-discussion"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex-1  order-1 xl:order-2 xl:ml-[35px] mb-10 md:mb-[20px] xl:pt-8">
            <div className="text-start space-y-7">
              <p className="text-lg font-semibold tracking-wider bg-images  uppercase">
                About Lifect
              </p>
              <h2 className=" w-full text-[42px] md:text-[46px] leading-none  xl:text-[56px] font-bold tracking-normal ">
                Inspiring You to Reach Your Goals & Dreams
              </h2>
              <p className="font-Mukta font-light text-xl leading-8 text-text-grey tracking-wide mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod diti tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex flex-col md:flex-row pb-6 border-b-2 ">
                <div className="flex-1 md:ml-7 space-y-4 mb-4">
                  <p className="text-xl font-bold flex gap-3 items-center">
                    <span className="bg-bg-blue rounded-full p-2">
                      <FaCrosshairs size={20} />
                    </span>
                    Vision
                  </p>
                  <p className="font-Mukta font-light text-base md:text-xl leading-8 text-text-grey tracking-wide ">
                    Duis aute irure dolor in reprehen derit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="flex-1 md:ml-7 space-y-4 mb-4">
                  <p className="text-xl font-bold flex gap-3 items-center">
                    <span className="bg-bg-blue rounded-full p-2">
                      <FaGear size={20} />
                    </span>
                    Mission
                  </p>

                  <p className="font-Mukta font-light text-base md:text-xl leading-8 text-text-grey tracking-wide mb-4">
                    Nam libero tempore, cum solutanis nobis est eligendi optio.
                  </p>
                </div>
              </div>
              <div className="flex items-start xl:items-center md:gap-x-8 pt-5 flex-col md:flex-row space-y-5 md:space-y-0">
                <Button
                  variant="scale"
                  className="w-1/2 md:w-1/3 h-1/2  text-lg font-bold  hover:scale-95 hover:fade-in-15 transition-all hover:-translate-y-3  "
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
                      <a href="mailto:contact@baliniz.com">
                        contact@baliniz.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CounterSection />
      </Wrapper>

      <Wrapper bgColor="bg-bg-blue/20">
        <div className="xl:grid grid-cols-2 gap-x-5">
          <div>
            <div className=" top-32 xl:mt-12 xl:mr-20 flex flex-col p-2 space-y-4">
              <h2 className="bg-images tracking-widest font-medium uppercase">
                Why Choose Us
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold">
                Help Nourishing Your Whole Self
              </h2>
              <p className="text-lg font-semibold">
                Unlock your life potential with us
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
                utenim ad minim veniam.
              </p>
            </div>

            <div className="p-4">
              {skills.map(({ skill, percentage }, index) => (
                <SkillBar key={index} skill={skill} percentage={percentage} />
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-12 space-y-12">
            <ChooseUsCard />
            <ChooseUsCard />
            <ChooseUsCard />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default page;
