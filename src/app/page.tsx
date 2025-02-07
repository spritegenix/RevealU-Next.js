import Wrapper from '@/components/elements/Wrappers';
import Layout from '@/components/layout/Layout';
import StickySection from '@/components/StickySection';
import HeroSection from '@/app/(homepage)/_section/HeroSection';
// import CategoryCard from '@/components/CategoryCard';
import Accordion1 from '@/components/elements/Accordions/Accordion1';
import ServiceSection from './(homepage)/_section/ServiceSection';
import AboutSection from './(homepage)/_section/AboutSection';
import { faqData } from './data';
import {
  FaUserAlt,
  FaAngry,
  FaCrown,
  FaBrain,
  FaChalkboardTeacher,
  FaRegSmileBeam,
} from 'react-icons/fa';
import CounterSection from '@/components/CounterSection';

export const cardsData = [
  {
    title: 'Personal Growth',
    description:
      'Unlock your potential and transform your life with personalized guidance for success in all areas.',
    icon: <FaUserAlt size={24} />,
  },
  {
    title: 'Anger Management',
    description:
      'Learn techniques to control anger, reduce stress, and build emotional resilience effectively.',
    icon: <FaAngry size={24} />,
  },
  {
    title: 'Leadership Skills',
    description:
      'Develop leadership qualities like communication, emotional intelligence, and problem-solving.',
    icon: <FaCrown size={24} />,
  },
  {
    title: 'Memory & Attention',
    description:
      'Boost focus, memory, and cognitive skills with proven techniques for mental clarity.',
    icon: <FaBrain size={24} />,
  },
  {
    title: 'Private Coaching',
    description:
      'Experience personalized coaching tailored to your unique strengths and growth areas.',
    icon: <FaChalkboardTeacher size={24} />,
  },
  {
    title: 'Mindfulness Training',
    description:
      'Adopt mindfulness techniques to build resilience, positivity, and a balanced mindset.',
    icon: <FaRegSmileBeam size={24} />,
  },
];

export default function Home() {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <HeroSection />

      <ServiceSection bgColor="bg-bg-blue/20" />
      <AboutSection />
      <Wrapper containerClassName="pb-10">
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
          heading="Explore Our Insights and Expertise"
          paragraph="Discover valuable tips, strategies, and expert insights on personal growth, mindfulness, career planning, and more in our latest blog posts."
          buttonContent={'View All Blogs'}
          variant={'scale'}
          linkTo="blogs"
          cardType={'blog'} // blog , review or founder
        />
      </Wrapper>

      <Wrapper containerClassName="py-10" className="pb-20">
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
