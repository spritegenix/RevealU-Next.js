import Wrapper from '@/components/elements/Wrappers';
import Layout from '@/components/layout/Layout';
import React from 'react';
import { imageSwiperSection } from './data';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <Layout headerStyle={2} footerStyle={1}>
      <Wrapper isTop={true}>
        <div className="gallery-container">
          {imageSwiperSection.map((imageSrc, index) => (
            <div className="gallery-item" key={index}>
              <Image
                src={imageSrc.image}
                width={400}
                height={600}
                alt={`Gallery Image ${imageSrc.id}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </Layout>
  );
};

export default page;
