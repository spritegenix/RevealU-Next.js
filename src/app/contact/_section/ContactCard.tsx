import Button from '@/components/elements/Button';
import { Mail } from 'lucide-react';
import React from 'react';

const ContactCard = () => {
  return (
    <div className="border-[2px] rounded-lg p-6 shadow-lg">
      <h6 className="font-semibold text-xl">Let us know how we can help</h6>
      <form
        className="space-y-10 mt-10"
        action="mail.php"
        method="POST"
        encType="multipart/form-data"
      >
        {/* Name and Email */}
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="bg-text-grey/20 py-4 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-bg-blue"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-text-grey/20 py-4 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-bg-blue"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col">
          <label htmlFor="subject" className="font-semibold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Your Subject"
            className="bg-text-grey/20 py-4 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-bg-blue"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="bg-text-grey/20 py-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-bg-blue"
          />
        </div>

        {/* Submit Button */}
        <div className="mx-auto flex justify-center">
          <Button variant="scale">
            <Mail className="inline-block mr-2" /> Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactCard;
