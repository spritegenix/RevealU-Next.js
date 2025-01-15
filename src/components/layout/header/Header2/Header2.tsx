'use client';
import Wrapper from '@/components/elements/Wrappers';
import Logo from '@/components/elements/Logo';
import Menu from '../Menu';
import AuthButton from './AuthButton';
import Button from '@/components/elements/Button';
// import useAuthStore from '@/zustandStore/authStore';
import { useRouter } from 'next/navigation';
import { FaMapLocation } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import MenuMobile from '../MenuMobile';
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
          className=" flex justify-between items-center pt-2"
        >
          <div className="flex gap-3 items-center">
            <FaMapLocation />
            <p>Jl. Raya Kuta Chartered No.70 Street, Denpasar</p>
          </div>
          <div className="flex gap-x-5">
            <div className="flex gap-3 items-center">
              <IoMdMail />
              <p>contact@baliniz.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <FaPhoneAlt />
              <p>(+62) 8896-2220</p>
            </div>
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
        <Button variant="default">Make an Appointment</Button>
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

function LogoutButton() {
  const router = useRouter();
  const { clearFirmTokens } = useAuthStore();
  return (
    <Button
      onClick={() => {
        clearFirmTokens();
        router.push('/listing-login');
      }}
    >
      Logout
    </Button>
  );
}
