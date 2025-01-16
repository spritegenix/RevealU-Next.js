import CounterSection from '@/components/CounterSection';
import Button from '@/components/elements/Button';
import Wrapper from '@/components/elements/Wrappers';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import React from 'react';
import { FaBrain, FaCrosshairs, FaHeart, FaUserTie } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { LuMail } from 'react-icons/lu';
import SkillBar from './_section/Skill';
import ChooseUsCard from './_section/ChooseUsCard';
import StickySection from '@/components/StickySection';
import { skills } from './data';
const page = () => {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Wrapper isTop={true} className="pt-10 md:pt-8 lg:pt-20 xl:pb-20">
        <div className="w-full xl:w-8/12 mx-auto text-center bg-bg-blue/20 rounded-lg py-12 px-1 md:py-20 md:px-12">
          <p>
            {' '}
            HOME <span>{'>'}</span> <span className="bg-images">ABOUT</span>
          </p>
          <h1 className="font-bold text-7xl">About</h1>
        </div>
      </Wrapper>

      <Wrapper className="py-20 ">
        <div className="flex justify-start flex-col xl:flex-row gap-5">
          <div className="flex-1 order-2 xl:order-1">
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
          <div className="flex-1 order-1 xl:order-2 xl:ml-[35px] mb-10 md:mb-[20px] xl:pt-8">
            <div className="text-start space-y-7">
              <p className="text-lg font-semibold tracking-wider bg-images uppercase">
                About RevealU
              </p>
              <h2 className="w-full text-[42px] md:text-[46px] leading-none xl:text-[56px] font-bold tracking-normal">
                Empowering You to Achieve Your Dreams
              </h2>
              <p className="font-Mukta font-light text-xl leading-8 text-text-grey tracking-wide mb-4">
                At &quot;RevealU,&quot; we believe in unlocking the true
                potential within you. Through proven techniques like Fingerprint
                Analysis, Mindset Coaching, and NLP, we guide you to achieve
                your personal and professional goals.
              </p>
              <div className="flex flex-col md:flex-row pb-6 border-b-2">
                <div className="flex-1 space-y-4 mb-4">
                  <p className="text-xl font-bold flex gap-3 items-center">
                    <span className="bg-bg-blue rounded-full p-2">
                      <FaCrosshairs size={20} />
                    </span>
                    Vision
                  </p>
                  <p className="font-Mukta font-light text-base md:text-xl leading-8 text-text-grey tracking-wide">
                    To inspire individuals to unlock their potential and lead
                    fulfilling lives.
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
                    To empower people with tools and guidance for personal and
                    professional growth.
                  </p>
                </div>
              </div>
              <div className="flex items-start xl:items-center md:gap-x-8 pt-5 flex-col md:flex-row space-y-5 md:space-y-0">
                <Button
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
        <CounterSection />
      </Wrapper>

      <Wrapper bgColor="bg-bg-blue/20" containerClassName="py-10">
        <div className="xl:grid grid-cols-2 gap-x-5">
          <div className="">
            <div className="sticky top-32 xl:mt-12 xl:mr-20 flex flex-col p-2 space-y-4">
              <h2 className="bg-images tracking-widest font-medium uppercase">
                Why Choose Us
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold">
                Empower Your Mind, Body, and Soul
              </h2>
              <p className="text-lg font-semibold">
                Achieve personal growth and lasting success with our expert
                guidance.
              </p>
              <p>
                We specialize in providing personalized coaching to help
                individuals unlock their full potential. From mindset mastery to
                emotional resilience, we equip you with the tools needed for a
                fulfilling life.
              </p>

              <div className="p-4">
                {skills.map(({ skill, percentage }, index) => (
                  <SkillBar key={index} skill={skill} percentage={percentage} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-12 space-y-12">
            <ChooseUsCard
              title="Personalized Coaching"
              description="Our personalized coaching focuses on understanding your unique strengths, challenges, and goals. With tailored strategies, we guide you toward unlocking your full potential and creating a roadmap for lasting success."
              icons={<FaUserTie size={30} />}
            />
            <ChooseUsCard
              title="Proven Techniques"
              description="We use scientifically-backed methods such as Fingerprint Analysis, NLP, and Genetic Brain Profiling to help you uncover your true capabilities, break through mental barriers, and achieve remarkable transformation."
              icons={<FaBrain size={30} />}
            />
            <ChooseUsCard
              title="Holistic Approach"
              description="Our holistic approach integrates the mind, body, and soul, fostering sustainable growth and emotional well-being. Through mindfulness practices and customized techniques, we help you achieve a harmonious and fulfilling life."
              icons={<FaHeart size={30} />}
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper containerClassName="py-10">
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

      <Wrapper
        containerClassName="mx-10 text-center"
        bgColor="bg-bg-blue/20"
        className="py-20 space-y-10"
        isTop={false}
      >
        <p className="text-lg font-semibold tracking-wider bg-images mx-auto">
          Get In Touch
        </p>
        <h2 className="font-Manrope text-[42px] leading-none md:text-6xl font-bold">
          Start Your Journey Toward Growth and Success
        </h2>
        <p className="text-lg font-light w-full md:w-10/12 lg:w-1/2 md:px-3 mx-auto">
          Take the first step toward unlocking your potential with expert
          coaching tailored to your needs. Begin transforming your life today!
        </p>
        <Button variant="scale" size="md" className="mx-auto">
          Start Consultation
        </Button>
      </Wrapper>
    </Layout>
  );
};

export default page;
