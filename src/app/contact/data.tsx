import { AiOutlineMail } from 'react-icons/ai';
import { CiMap } from 'react-icons/ci';
import { PiClock, PiPhone } from 'react-icons/pi';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const officeDetails = [
  {
    title: 'Office',
    content: 'Jl. Raya Kuta Cartered No.70',
    icon: <CiMap size={35} />,
  },
  {
    title: 'Work Hours',
    content: 'Everyday 09 am - 07 pm',
    icon: <PiClock size={35} />,
  },
  {
    title: 'Phone',
    content: '(+62) 8896-2220',
    icon: <PiPhone size={35} />,
  },
  {
    title: 'Email',
    content: 'contact@baliniz.com',
    icon: <AiOutlineMail size={35} />,
  },
];
export const socialMediaIcons = [
  {
    name: 'Facebook',
    icon: <FaFacebookF size={24} />,
    link: 'https://www.facebook.com',
  },
  {
    name: 'X (Twitter)',
    icon: <FaXTwitter size={24} />,
    link: 'https://www.twitter.com',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn size={24} />,
    link: 'https://www.linkedin.com',
  },
  {
    name: 'YouTube',
    icon: <FaYoutube size={24} />,
    link: 'https://www.youtube.com',
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp size={24} />,
    link: 'https://www.whatsapp.com',
  },
];
