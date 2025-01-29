import type { Metadata } from 'next';
import { Manrope, Mukta } from 'next/font/google';
import './globals.css';

const mukta = Mukta({
  subsets: ['latin'],
  weight: ['300', '400'],
});
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'RevealU - Empower Your Potential',
  description:
    'Unlock your true potential with RevealU. Discover personalized coaching, mindset transformation, fingerprint analysis, and tools to achieve your dreams.',
};

export default function RootLayout({
  children,
  authModal,
}: Readonly<{
  authModal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${mukta.className} antialiased`}>
        {authModal ? authModal : 'null'}
        {children}
        <div id="modal-portal"></div>
      </body>
    </html>
  );
}
