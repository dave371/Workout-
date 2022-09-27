import LinkTemplate from '../link-template';
import { motion } from 'framer-motion';
import { modal, overlay } from './animationVariants';
import ButtonTemplate from '../button-template';
import { XIcon } from '@heroicons/react/outline';

function MobileMenu({ setToggleMobileNav }) {
  const linkDefaultClassName = 'font-semibold text-[1.35rem]';

  return (
    <div className="md:hidden">
      {/* Overlay */}
      <motion.div
        variants={overlay}
        initial="hidden"
        animate="visible"
        transition="animation"
        exit="exit"
        className="absolute inset-0 z-20 bg-black bg-opacity-40"
      />

      {/* Modal */}
      <motion.div
        variants={modal}
        initial="hidden"
        animate="visible"
        transition="animation"
        exit="exit"
        className="fixed inset-y-0 right-0 z-20 p-3 bg-primary w-[85%]"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Menu</h1>
          <ButtonTemplate
            onClick={() => setToggleMobileNav((prev) => !prev)}
            className="outline-transparent"
            label="Exit Navigation Menu"
          >
            <XIcon className="w-8 h-8" />
          </ButtonTemplate>
        </div>

        <nav className="mt-10">
          <ul className="flex flex-col gap-3">
            <li className="">
              <LinkTemplate route="/" className="">
                <div className="w-full py-2">
                  <span className={linkDefaultClassName}>Home</span>
                </div>
              </LinkTemplate>
            </li>

            <li>
              <LinkTemplate route="/shop" className="">
                <div className="w-full py-2">
                  <span className={linkDefaultClassName}>Shop</span>
                </div>
              </LinkTemplate>
            </li>
            <li>
              <LinkTemplate route="/contact" className="">
                <div className="w-full py-2">
                  <span className={linkDefaultClassName}>Contact</span>
                </div>
              </LinkTemplate>
            </li>
            <li>
              <LinkTemplate route="/account" className="">
                <div className="w-full py-2">
                  <span className={linkDefaultClassName}>Account</span>
                </div>
              </LinkTemplate>
            </li>
          </ul>
        </nav>
      </motion.div>
    </div>
  );
}

export default MobileMenu;
