import { useState } from 'react';
import { MenuIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline';
import ButtonTemplate from '../button-template';
import MobileMenu from '../mobile-menu';

function Navbar({ setToggleCartModal, setToggleMobileNav }) {
  return (
    <div className="fixed top-0 left-0 z-10 w-full">
      <div className="flex items-center justify-between p-5 bg-primary">
        <h1 className="text-2xl font-bold ">Workout+</h1>
        <div className="flex items-center gap-2 md:hidden">
          <ButtonTemplate
            onClick={() => setToggleCartModal((prev) => !prev)}
            className="border-transparent"
            label="Cart Menu Button"
          >
            <ShoppingBagIcon className="text-white w-7 h-7 hover:text-gray-500" />
          </ButtonTemplate>

          <ButtonTemplate
            onClick={() => {
              setToggleMobileNav((prev) => !prev);
            }}
            className="outline-transparent"
            label="Navigation Menu Button"
          >
            <MenuIcon className="text-white w-7 h-7 hover:text-gray-500" />
          </ButtonTemplate>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
