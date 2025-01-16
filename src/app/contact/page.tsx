import Wrapper from '@/components/elements/Wrappers';
import Layout from '@/components/layout/Layout';
import React from 'react';

import ContactCard from './_section/ContactCard';
import IconCard from '@/components/IconCard';
import { officeDetails, socialMediaIcons } from './data';
const page = () => {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Wrapper
        className="max-w-6xl py-10 lg:py-20 h-[80vh]"
        containerClassName=""
        isTop={true}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.86053520977!2d75.79055784999998!3d26.885210750000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db700664f8bc7%3A0x6286d270307b125b!2sReveal%20You%20Dr.Y.S!5e0!3m2!1sen!2sin!4v1737019644013!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl w-full h-full"
        />
      </Wrapper>

      <Wrapper containerClassName="py-10">
        <div className="xl:grid grid-cols-3 gap-x-5">
          <div className=" col-span-2">
            <div className=" top-32 xl:mt-12 xl:mr-20 flex flex-col p-2 space-y-4">
              <h2 className="bg-images tracking-widest font-medium uppercase">
                Get In Touch
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold">
                Reach Out To Us Anytime
              </h2>

              <p className="text-text-grey">
                Sed ut perspiciatis unde omnis iste natus error sit amet
                voluptatem accusantium doloremque laudantium elit am libero
                tempore, cum soluta nobis est eligendi optio cumque nihilt.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-5 gap-8">
              {officeDetails.map((detail, index) => (
                <div
                  key={index}
                  className="flex  gap-5 rounded-lg border-2 border-gray-500 p-7 shadow-lg hover:-translate-y-4 transition-all duration-300"
                >
                  <IconCard icon={detail.icon} />
                  <div>
                    <h3 className="text-xl font-semibold">{detail.title}</h3>
                    <p className="text-lg text-text-grey">{detail.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-[1px] bg-text-grey my-10"></div>
            <div className="flex flex-col md:flex-row md:items-center  md:justify-between">
              <h6 className="font-semibold text-xl text-start">
                Social Media:
              </h6>
              <div className="space-x-5 flex">
                {' '}
                {socialMediaIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-300 p-3 rounded-lg border-[1px] hover:bg-bg-blue/20"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-12 space-y-12 col-span-1">
            <ContactCard />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default page;
