'use client';
import Wrapper from '@/components/elements/Wrappers';
import Logo from '@/components/elements/Logo';
import Menu from '../Menu';
import Button from '@/components/elements/Button';
// import useAuthStore from '@/zustandStore/authStore';
import { useRouter } from 'next/navigation';
import { FaMapLocation } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import MenuMobile from '../MenuMobile';
import Link from 'next/link';
export default function Header2({
  show,
  handleMobileMenu,
  isMobileMenuOpen,
  upperNavItems,
  activeItemId,
  handleNavItemClick,
  handleSearchModal,
}: any) {
  // const isLogin = useAuthStore((state) => state?.firmToken);
  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-gray-300 bg-white transition-transform duration-300 ${show}`}
    >
      <div className="hidden bg-bg-lapiz h-11 lg:flex">
        <Wrapper
          containerClassName="mx-10 w-full"
          className=" flex justify-between items-center pt-2  text-white"
        >
          <a
            className="flex gap-3 items-center"
            href="https://maps.app.goo.gl/4J7nhZFEQVo95tdQ7"
            target="_blank"
          >
            <FaMapLocation />
            <p className="text-white">Jaipur Rajasthan 302004.</p>
          </a>
          <div className="flex gap-x-5">
            <a
              className="flex gap-3 items-center"
              href="mailto:info@reveal-you.in"
            >
              <IoMdMail />
              <p className="text-white">info@reveal-you.in</p>
            </a>
            <a className="flex gap-1 items-center" href="tel:+919602264303">
              <FaPhoneAlt className="text-white" />
              <p className="text-white">(+91) 9602264303</p>
            </a>
          </div>
        </Wrapper>
      </div>
      {/* Desktop Section */}
      {/* Upper Nav  */}
      <Wrapper
        containerClassName="mx-10 py-5 hidden lg:flex"
        className="flex w-full items-center justify-between mx-auto max-md:hidden"
      >
        {/* Logo with Link */}
        <Logo />
        <div className="flex items-center gap-3 md:gap-4">
          <ul className="hidden items-center gap-x-16 font-medium text-blue-900 md:flex">
            <Menu
              navItemsArray={upperNavItems}
              activeItemId={activeItemId}
              onItemClick={handleNavItemClick}
            />
          </ul>
          {/* <AuthButton />
          {isLogin && <LogoutButton />} */}
        </div>
        <Button
          as={Link}
          href="https://revealyoubydryogitasharma.zohobookings.in/#/revealyoubydryogitasharma"
          target="_blank"
          variant="scale"
        >
          Make an Appointment
        </Button>
      </Wrapper>

      {/* -------------------------------------  */}
      {/* Mobile Section */}
      <Wrapper
        containerClassName=""
        className="flex w-full h-[60px] items-center justify-between gap-1 py-2 lg:hidden"
      >
        {/* Logo with Link */}
        <Logo />
        <div className="flex items-center gap-x-2">
          {/* Search Icon  */}

          {/* <AuthButton handleSidebar={handleSidebar} /> */}
          {/* HamMenu Icon  */}
          <HamIcon
            isMobileMenuOpen={isMobileMenuOpen}
            handleMobileMenu={handleMobileMenu}
          />
        </div>
      </Wrapper>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-15 w-full lg:hidden">
          <MenuMobile
            navItemsArray={upperNavItems}
            setIsMobileMenuOpen={handleMobileMenu}
            activeItemId={activeItemId}
          />
        </div>
      )}
    </header>
  );
}

function HamIcon({ isMobileMenuOpen, handleMobileMenu }: any) {
  return (
    <button
      className={`navbar-toggle-btn ${isMobileMenuOpen ? 'open' : ''}`}
      type="button"
      onClick={handleMobileMenu}
    >
      <span />
      <span />
      <span />
      <span />
    </button>
  );
}

// function LogoutButton() {
//   const router = useRouter();
//   const { clearFirmTokens } = useAuthStore();
//   return (
//     <Button
//       onClick={() => {
//         clearFirmTokens();
//         router.push('/listing-login');
//       }}
//     >
//       Logout
//     </Button>
//   );
// }
