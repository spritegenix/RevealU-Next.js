import Wrapper from '@/components/elements/Wrappers';
import Layout from '@/components/layout/Layout';
import HomeCard from '@/components/HomeCard';
import ClientSlider, { Data } from '@/components/ClientSlider';
import CounterSection from '@/components/CounterSection';
import StickySection from '@/components/StickySection';
import HeroSection from '@/app/(homepage)/_section/HeroSection';
import Image from 'next/image';
import { BsArrowRightShort } from 'react-icons/bs';
import Button from '@/components/elements/Button';
import { LuMail } from 'react-icons/lu';
// import CategoryCard from '@/components/CategoryCard';
import Accordion1 from '@/components/elements/Accordions/Accordion1';
import ServiceSection from './(homepage)/_section/ServiceSection';
export const cardsData = [
  {
    title: 'Personal Growth',
    description:
      'At vero eos et accusamus et iustomen odio dignissimos ducimus quised blanditis praesentium.',
  },
  {
    title: 'Anger Management',
    description:
      'At vero eos et accusamus et iustomen odio dignissimos ducimus quised blanditis praesentium.',
  },
  {
    title: 'Leadership Skills',
    description:
      'At vero eos et accusamus et iustomen odio dignissimos ducimus quised blanditis praesentium.',
  },
  {
    title: 'Memory & Attention',
    description:
      'At vero eos et accusamus et iustomen odio dignissimos ducimus quised blanditis praesentium.',
  },
  {
    title: 'Private Coaching',
    description:
      'At vero eos et accusamus et iustomen odio dignissimos ducimus quised blanditis praesentium.',
  },
  {
    title: 'Mindfulness Training',
    description:
      'At vero eos et accusamus et iustomen odio dignissimos ducimus quised blanditis praesentium.',
  },
];
export const clients: Data[] = [
  {
    text: 'Rolls Royce',
    image: '/images/angryMen.png',
    href: '/',
    type: 'image',
  },
  {
    text: 'BMW',
    image: '/images/angryMen.png',
    href: '/',
    type: 'image',
  },
  {
    text: 'TATA',
    image: '/images/angryMen.png',
    href: '/',
    type: 'both',
  },
  {
    text: 'Mahindra',
    image: '/images/angryMen.png',
    href: '/',
    type: 'text',
  },
];

export const faqData = [
  {
    question: 'What qualifications do life coaches typically have?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'What should I expect during a life coaching session?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'How much does life coaching cost?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'How do I find a qualified life coach?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'How does life coaching differ from therapy?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'What kinds of issues can a life coach help with?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function Home() {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <HeroSection />
      <ServiceSection />
      <Wrapper className="py-20 ">
        <div className="flex justify-start flex-col xl:flex-row">
          <div className="flex-1 order-2 xl:order-1 xl:w-10/12">
            <Image
              src={'/images/project-discussion.jpg'}
              width={580}
              height={650}
              alt="project-discussion"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex-1  order-1 xl:order-2 xl:ml-[35px] mb-10 md:mb-[20px] xl:pt-5">
            <div className="text-start space-y-5">
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
              <div className="flex flex-col md:flex-row pb-6 border-b-2 space-y-6">
                <div className="flex-1 h-56">
                  <Image
                    src={'/images/group-discussion.jpg'}
                    width={580}
                    height={650}
                    alt="group-discussion"
                    className="rounded-lg h-full object-cover aspect-video  object-top"
                  />
                </div>

                <div className="flex-1 md:ml-7 ">
                  <h4 className="text-xl font-bold">Benefits Join Coaching</h4>
                  <p className="font-Mukta font-light text-xl leading-8 text-text-grey tracking-wide mb-4">
                    Nam libero tempore, cum solutanis nobis est eligendi optio.
                  </p>
                  <ul className="flex space-y-4 flex-col">
                    <li className="flex">
                      <div className="w-6 h-6 bg-bg-green rounded-full mr-4 flex justify-center items-center">
                        <BsArrowRightShort color="#ffff" size={24} />
                      </div>
                      Get Networking
                    </li>
                    <li className="flex">
                      <div className="w-6 h-6 bg-bg-green rounded-full mr-4 flex justify-center items-center">
                        <BsArrowRightShort color="#ffff" size={24} />
                      </div>
                      Professional Coaching
                    </li>
                    <li className="flex">
                      <div className="w-6 h-6 bg-bg-green rounded-full mr-4 flex justify-center items-center">
                        <BsArrowRightShort color="#ffff" size={24} />
                      </div>
                      Positive Insight
                    </li>
                  </ul>
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
      {/* <Wrapper
        bgColor="bg-bg-blue/20 "
        containerClassName="mx-10 text-center "
        className="py-20 px-4 space-y-10 "
        isTop={false}
      >
        <p className="text-lg font-semibold tracking-wider uppercase bg-images mx-auto">
          Inspiring Seminars
        </p>
        <h2 className="font-Manrope text-6xl font-bold">
          Elevate Your Life with Our Seminars
        </h2>
        <p className="text-lg font-light w-1/2 px-3 mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem
          accusantium doloremque laudantium elit.
        </p>
        <div className="flex justify-center space-x-5">
          <Button className="border-2 py-3 px-6 hover:bg-bg-blue/80 bg-bg-blue active:bg-bg-green shadow-md">
            <span className="font-semibold text-black text-base">Densper</span>
          </Button>
          <Button className="border-2 py-3 px-6 hover:bg-bg-blue/80 bg-bg-blue active:bg-bg-green shadow-md">
            <span className="font-semibold text-black text-base">Jakarta</span>
          </Button>
          <Button className="border-2 py-3 px-6 hover:bg-bg-blue/80 bg-bg-blue active:bg-bg-green shadow-md">
            <span className="font-semibold text-black text-base">Bandung</span>
          </Button>
        </div>
        <div>
          <CategoryCard />
        </div>
      </Wrapper> */}
      <Wrapper containerClassName="py-10" bgColor="bg-bg-blue/20">
        <StickySection
          table1Order={'order-1'}
          table2Order={'order-2'}
          title="LATEST BLOG"
          heading="Take a Look Our Latest Blog"
          paragraph=" Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                      eiusmod diti tempor incididunt labore."
          buttonContent={' View All Blogs'}
          cardType={'blog'} // blog , review or founder
        />
      </Wrapper>

      <Wrapper containerClassName="py-10">
        <StickySection
          table1Order={'order-2'}
          table2Order={'order-1'}
          title="TESTIMONIALS"
          heading="Positive Review From Our Customers"
          paragraph="Sed ut perspiciatis unde omnis iste natus error sit amet voluptatem accusantium doloremque laudantium elit."
          buttonContent={'Write your review'}
          cardType={'review'}
        />
      </Wrapper>

      {/* faq */}
      <Wrapper
        containerClassName="mx-10 text-center   "
        bgColor="bg-bg-blue/20"
        className="py-20  space-y-10 "
        isMaxWidthChangeRequired="max-w-4xl"
        isTop={false}
      >
        <p className="text-lg font-semibold uppercase tracking-wider bg-images mx-auto ">
          Find Your Answer
        </p>
        <h2 className="font-Manrope text-4xl md:text-5xl lg:text-6xl font-bold">
          Frequently Asked Question
        </h2>
        <div className="border-2 rounded-3xl border-gray-500">
          <Accordion1 data={faqData} />
        </div>
      </Wrapper>
    </Layout>
  );
}
