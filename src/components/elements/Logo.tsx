// import { logo } from "@/assets";
// import Image from "next/image";
import Link from 'next/link';
import React from 'react';

export default function Logo({ header = true }) {
  return (
    <>
      {header ? (
        <Link href="/" className="flex cursor-pointer items-center gap-2">
          {/* <Image
     src={logo}
     alt="logo"
     height={100}
     width={100}
     className="h-16 max-h-16 w-min object-contain md:h-20"
   /> */}
          <p className="cursor-pointer text-4xl font-medium md:text-3xl bg-images">
            RevealU
          </p>
        </Link>
      ) : (
        <Link href="/" className="flex cursor-pointer items-center gap-2">
          {/* <Image
   src={logo}
   alt="logo"
   height={100}
   width={100}
   className="h-16 max-h-16 w-min object-contain md:h-20"
 /> */}
          <p
            className="cursor-pointer font-extrabold text-5xl bg-images"
            style={{
              textShadow:
                '2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black',
            }}
          >
            RevealU
          </p>
        </Link>
      )}
    </>
  );
}
