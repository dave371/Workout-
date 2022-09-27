import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import CartModal from '../cart-modal';
import Footer from '../footer';
import Navbar from '../navbar';

function DefaultPageLayout({ children }) {
  const [toggleCartModal, setToggleCartModal] = useState(false);

  useEffect(() => {
    // when modal is active, the background cannot scroll
    const setOverflow = () => {
      const body = document.querySelector('body');
      body.style.overflow = toggleCartModal ? 'hidden' : 'auto';
    };

    setOverflow();
  }, [toggleCartModal]);

  return (
    <div className="relative min-h-screen p-5 bg-primary text-secondary">
      <Navbar setToggleCartModal={setToggleCartModal} />
      <div className="py-20">{children}</div>
      <Footer />

      <AnimatePresence>
        {toggleCartModal && <CartModal setIsOpen={setToggleCartModal} />}
      </AnimatePresence>
    </div>
  );
}

export default DefaultPageLayout;
