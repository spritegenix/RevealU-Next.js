'use client';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import TextWithLineBreak from '@/utils/TextWithLineBreak';

export default function Accordion1({ data, className = '' }: any) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id: any) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {data?.map((faq: any, index: number) => (
        <div
          key={index}
          className="mb-4  rounded-3xl border-gray-500 border-t-2 rounded-t-3xl pb-0 first:border-none p-3"
        >
          {faq?.question && (
            <button
              onClick={() => toggleFaq(index)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-medium">{faq?.question}</span>
              <IoIosArrowDown
                className={`transform text-xl transition-transform ${
                  openFaq === index || (index === 0 && openFaq === null)
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </button>
          )}
          {faq?.answer && (
            <div
              className={`mt-2 transition-all duration-300 ease-in ${
                openFaq === index || (index === 0 && openFaq === null)
                  ? 'max-h-96'
                  : 'max-h-0 overflow-hidden'
              }`}
            >
              <p className="text-justify text-zinc-500">
                <TextWithLineBreak text={faq?.answer} />
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
