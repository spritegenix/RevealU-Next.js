import { AiOutlineMail } from 'react-icons/ai';
import { CiMap } from 'react-icons/ci';
import { PiClock, PiPhone } from 'react-icons/pi';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';

export const officeDetails = [
  {
    title: 'Office',
    content: 'Jaipur, Rajasthan 302004',
    icon: <CiMap size={35} />,
  },
  {
    title: 'Work Hours',
    content: 'Everyday 09 am - 07 pm',
    icon: <PiClock size={35} />,
  },
  {
    title: 'Phone',
    content: '(+91) 9602264303',
    icon: <PiPhone size={35} />,
  },
  {
    title: 'Email',
    content: 'info@reveal-you.in',
    icon: <AiOutlineMail size={35} />,
  },
];
export const socialMediaIcons = [
  {
    name: 'Facebook',
    icon: <FaFacebookF size={24} />,
    link: 'https://www.facebook.com/yogita.sharma3',
  },
  {
    name: 'X (Twitter)',
    icon: <FaInstagram size={24} />,
    link: 'https://www.instagram.com/dr.yogita_sharma',
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedinIn size={24} />,
    link: 'https://www.linkedin.com/in/dr-yogita-sharma-c-25011a1a1/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    name: 'YouTube',
    icon: <FaYoutube size={24} />,
    link: 'https://youtube.com/@dr.yogitasharma6346?si=ybAuVs1f-UNgSey7',
  },
  {
    name: 'WhatsApp',
    icon: <FaWhatsapp size={24} />,
    link: 'https://whatsapp.com/channel/0029Va5gOSFDZ4LZsMfj1w3Y',
  },
];
