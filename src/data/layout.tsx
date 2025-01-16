import { FaPhoneAlt } from 'react-icons/fa';
import { GoCodeReview } from 'react-icons/go';
import { LiaBullhornSolid } from 'react-icons/lia';
import { MdOutlineAutoGraph } from 'react-icons/md';

export const header = {
  upperNav: [
    {
      id: 1,
      icon: '',
      label: 'Home',
      href: '/',
      subNav: [],
    },
    {
      id: 2,
      icon: '',
      label: 'About',
      href: '/about',
      subNav: [],
    },
    {
      id: 3,
      icon: '',
      label: 'Services',
      href: '/services',
      subNav: [
        {
          id: 11,
          label: 'Finance Fraud',
          href: '/services/financial-fraud',
        },
        {
          id: 12,
          label: 'Corporate Fraud',
          href: '/services/corporate-fraud',
        },
      ],
    },
    {
      id: 4,
      icon: '',
      label: 'Blogs',
      href: '/Blogs',
      subNav: [],
    },
    {
      id: 5,
      icon: '',
      label: 'Contact',
      href: '/contact',
      subNav: [],
    },
  ],
  lowerNav: [
    {
      id: 1,
      label: 'Finance & Corp Fraud',
      href: '#',
      subNav: [
        {
          id: 11,
          label: 'Finance Fraud',
          href: '/services/financial-fraud',
        },
        {
          id: 12,
          label: 'Corporate Fraud',
          href: '/services/corporate-fraud',
        },
        {
          id: 13,
          label: 'Tax Fraud',
          href: '/services/tax-fraud',
        },
        {
          id: 14,
          label: 'Insurance Fraud',
          href: '/services/insurance-fraud',
        },
      ],
    },
    {
      id: 2,
      label: 'Cyber & Digital Fraud',
      href: '#',
      subNav: [
        {
          id: 21,
          label: 'Cyber Fraud',
          href: '/services/cyber-fraud',
        },
        {
          id: 22,
          label: 'Social Media Fraud',
          href: '/services/social-media-fraud',
        },
        {
          id: 23,
          label: 'Digital Forensic Services',
          href: '/services/digital-forensic',
        },
        {
          id: 24,
          label: 'Intellectual Property Fraud',
          href: '/services/intellectual-property-fraud',
        },
      ],
    },
    {
      id: 3,
      label: 'Criminal & Org',
      href: '#',
      subNav: [
        {
          id: 31,
          label: 'Organized Fraud',
          href: '/services/organized-fraud',
        },
        {
          id: 32,
          label: 'Blackmailing & Extortion',
          href: '/services/blackmailing',
        },
        {
          id: 33,
          label: 'Employee Fraud & Theft',
          href: '/services/employee-fraud',
        },
      ],
    },
    {
      id: 4,
      label: 'Wildlife & Env Forensics',
      href: '#',
      subNav: [
        {
          id: 41,
          label: 'Wildlife Forensics',
          href: '/services/wildlife-forensic',
        },
      ],
    },
    {
      id: 5,
      label: 'Legal & Forensic',
      href: '#',
      subNav: [
        {
          id: 51,
          label: 'Legal Consultancy',
          href: '/services/legal-consultancy',
        },
        {
          id: 52,
          label: 'Due Diligence Investigations',
          href: '/services/due-diligence',
        },
      ],
    },
    {
      id: 6,
      label: 'On-Site',
      href: '#',
      subNav: [
        {
          id: 61,
          label: 'Physical Surveillance',
          href: '/services/physical-surveillance',
        },
      ],
    },
  ],
};
export const header2 = {
  upperNav: [
    {
      id: 1,
      icon: '',
      label: 'Home',
      href: '/',
      iconStyle: 'trin-trin',
      subNav: [],
    },
    {
      id: 2,
      icon: '',
      label: 'About',
      href: '/about',
      subNav: [],
    },
    {
      id: 3,
      icon: '',
      label: 'Services',
      href: '/services',
      iconStyle: '',
      subNav: [],
    },
    {
      id: 4,
      icon: '',
      label: 'Blogs',
      href: '/blogs',
      iconStyle: '',
      subNav: [],
    },
    {
      id: 5,
      icon: '',
      label: 'Contact',
      href: '/contact',
      iconStyle: '',
      subNav: [],
    },
  ],
};
export const footer = {
  text: 'Empowering individuals and organizations through expert coaching, mindset transformation, and tailored strategies for personal and professional growth.',
  contactDetails: {
    contactNo: '(+91) 9602264303',
    email: 'info@reveal-you.in',
    location: 'Jaipur, Rajasthan 302004',
  },
  socials: {
    facebook: 'https://www.facebook.com/RevealYou',
    twitter: 'https://twitter.com/RevealYou',
    instagram: 'https://www.instagram.com/RevealYou/',
    linkedin: 'https://www.linkedin.com/company/RevealYou/',
    youtube: 'https://www.youtube.com/c/RevealYou',
  },
  copyrightText: 'Copyrights © 2024 Reveal You. All rights reserved.',
  list1: {
    title: 'Quick Links',
    links: [
      {
        id: 1,
        label: 'About Us',
        href: '/about',
      },
      {
        id: 2,
        label: 'Services',
        href: '/services',
      },
      {
        id: 3,
        label: 'Blogs',
        href: '/blogs',
      },
      {
        id: 4,
        label: 'Contact',
        href: '/contact',
      },
    ],
  },
  list2: {
    title: 'Programs',
    links: [
      {
        id: 11,
        label: 'Mindset Coaching',
        href: '#',
      },
      {
        id: 12,
        label: 'Parenting Guidance',
        href: '#',
      },
      {
        id: 13,
        label: 'Career Counseling',
        href: '#',
      },
      {
        id: 14,
        label: 'Soft Skills Training',
        href: '#',
      },
    ],
  },
  list3: {
    title: 'Resources',
    links: [
      {
        id: 1,
        label: 'Blog',
        href: '/blog',
      },
      {
        id: 2,
        label: 'Workshops',
        href: '/workshops',
      },
      {
        id: 3,
        label: 'FAQ',
        href: '/faq',
      },
      {
        id: 4,
        label: 'Downloads',
        href: '/downloads',
      },
    ],
  },
};
