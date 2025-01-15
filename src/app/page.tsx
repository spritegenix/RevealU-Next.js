import Wrapper from '@/components/elements/Wrappers';
import Layout from '@/components/layout/Layout';
import { Data } from '@/components/ClientSlider';
import StickySection from '@/components/StickySection';
import HeroSection from '@/app/(homepage)/_section/HeroSection';
// import CategoryCard from '@/components/CategoryCard';
import Accordion1 from '@/components/elements/Accordions/Accordion1';
import ServiceSection from './(homepage)/_section/ServiceSection';
import AboutSection from './(homepage)/_section/AboutSection';
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
      <ServiceSection bgColor="bg-bg-blue/20" />
      <AboutSection />
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
