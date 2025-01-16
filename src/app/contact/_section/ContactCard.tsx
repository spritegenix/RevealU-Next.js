import Button from '@/components/elements/Button';
import React from 'react';

const ContactCard = () => {
  return (
    <div className="border-[2px] rounded-lg p-6 shadow-lg">
      <h6 className="font-semibold text-xl">Let us know how we can help </h6>
      <div className=" space-y-10 mt-10">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="bg-text-grey/20 py-4 px-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              className="bg-text-grey/20 py-4 px-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="font-semibold">
            Subject
          </label>
          <input
            type="subject"
            id="subject"
            placeholder="Your Subject"
            className="bg-text-grey/20 py-4 px-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="bg-text-grey/20 py-4 px-2 rounded-md"
          />
        </div>
        <div className="mx-auto flex justify-center">
          <Button variant="scale">Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
