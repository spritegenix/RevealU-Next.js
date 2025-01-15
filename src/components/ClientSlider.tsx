'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export interface Data {
  text?: string;
  image?: string;
  href?: string;
  type: 'image' | 'text' | 'both';
}

const ClientSlider = ({
  data,
  sliderSpeed = 30,
  reverseDirection = false,
  repeatCount = 5,
  outerContainerClass = 'overflow-hidden relative  max-w-screen w-full md:-left-3  py-10 origin-center  z-0 top-0  rotate-0',
  innerContainerClass = 'w-32 h-32 flex-shrink-0 flex items-center justify-center md:mx-10 ',
  textStyle = 'text-center text-3xl font-semibold hover:text-yellow-500 text-gray-700 transition-all duration-300',
  imageStyle = 'object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-300',
  combinedImageStyle = 'object-cover w-full h-full ',
  combinedTextStyle = 'text-center text-3xl font-semibold group-hover:text-yellow-500 text-gray-700 transition-all duration-300',
  combinedContainerClass = 'grayscale hover:grayscale-0  transition-all duration-300 group mx-auto group',
}: {
  data: Data[];
  sliderSpeed?: number;
  reverseDirection?: boolean;
  repeatCount?: number;
  outerContainerClass?: string;
  innerContainerClass?: string;
  textStyle?: string;
  imageStyle?: string;
  combinedImageStyle?: string;
  combinedTextStyle?: string;
  combinedContainerClass?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  // Dynamically create the repeated array based on `repeatCount`
  const infiniteClients = Array(repeatCount).fill(data).flat();

  return (
    <div className={`${outerContainerClass} `}>
      <div className="flex justify-center">
        <div className=" w-full relative ">
          {/* Slider Container */}
          <div
            className={`flex gap-6`}
            style={{
              animation: `${
                reverseDirection ? 'reverse' : 'normal'
              } ${sliderSpeed}s ${
                hovered ? 'paused' : ``
              } infinite linear infiniteSlider`,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {infiniteClients.map((client, index) => (
              <div key={index} className={`${innerContainerClass}`}>
                <Link href={client.href || '#'}>
                  {client.type === 'image' ? (
                    <Image
                      src={client.image || ''}
                      alt={`Client ${index + 1}`}
                      width={300}
                      height={50}
                      className={`${imageStyle}`}
                    />
                  ) : client.type === 'text' ? (
                    <div className={`${textStyle}`}>
                      {client.text?.toUpperCase()}
                    </div>
                  ) : (
                    client.type === 'both' && (
                      <div className={`${combinedContainerClass}`}>
                        <Image
                          src={client.image || ''}
                          alt={`Client ${index + 1}`}
                          width={300}
                          height={50}
                          className={`${combinedImageStyle}`}
                        />
                        <div className={`${combinedTextStyle}`}>
                          {client.text?.toUpperCase()}
                        </div>
                      </div>
                    )
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Define Tailwind styles */}
      <style jsx global>{`
        @keyframes infiniteSlider {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(-250px * 5)
            ); /* Adjust based on item size */
          }
        }

        .animation-paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default ClientSlider;
