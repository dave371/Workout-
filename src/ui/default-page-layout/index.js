import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import CartModal from '../cart-modal';
import Footer from '../footer';
import MobileMenu from '../mobile-menu';
import Navbar from '../navbar';

function DefaultPageLayout({ children }) {
  const [toggleCartModal, setToggleCartModal] = useState(false);
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  useEffect(() => {
    // when modal is active, the background cannot scroll
    const setOverflow = () => {
      const body = document.querySelector('body');
      body.style.overflow = toggleCartModal
        ? 'hidden'
        : toggleMobileNav
        ? 'hidden'
        : 'auto';
    };

    setOverflow();
  }, [toggleMobileNav, toggleCartModal]);

  return (
    <div className="flex flex-col min-h-screen gap-5 bg-primary text-secondary">
      <div className="w-full h-[72px]" />
      <Navbar
        setToggleCartModal={setToggleCartModal}
        setToggleMobileNav={setToggleMobileNav}
      />
      <div className="relative flex flex-col flex-grow flex-shrink-0 px-5">
        {children}
      </div>
      <Footer />

      <AnimatePresence>
        {toggleCartModal && <CartModal setIsOpen={setToggleCartModal} />}
      </AnimatePresence>

      <AnimatePresence>
        {toggleMobileNav && (
          <MobileMenu setToggleMobileNav={setToggleMobileNav} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default DefaultPageLayout;
