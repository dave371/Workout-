import { XIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import ButtonTemplate from '../button-template';
import { modal, overlay } from './animationVariants';

function CartModal({ setIsOpen }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={overlay}
        initial="hidden"
        animate="visible"
        transition="animation"
        exit="exit"
        className="absolute inset-0 z-20 bg-black bg-opacity-40"
      />
      <motion.div
        variants={modal}
        initial="hidden"
        animate="visible"
        transition="animation"
        exit="exit"
        className="fixed inset-y-0 right-0 z-20 p-3 bg-primary w-[85%] overflow-y-auto flex flex-col"
      >
        {/* Heading of the modal */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Cart Menu</h1>
          <ButtonTemplate
            onClick={() => setIsOpen((prev) => !prev)}
            className="outline-transparent"
          >
            <XIcon className="w-8 h-8" />
          </ButtonTemplate>
        </div>

        {/* Content of the modal */}
        <div className="flex-1"></div>

        <button className="w-full px-1 py-2 mt-2 text-lg font-medium bg-white rounded text-accent-two">
          Checkout
        </button>
      </motion.div>
    </div>
  );
}

export default CartModal;
