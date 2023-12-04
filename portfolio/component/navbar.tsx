// NavBar.tsx
import React, { ReactNode } from 'react';

const initialItems = [
    "#907CAD",
    "#ADA87C",
    "#7CAD90",
    "#7C9AAD",
  ];


const NavBar: React.FC<{}> = () => (
<nav className='h-14'>
  <ul className='flex flex-row h-full'>
    <li className='flex w-full justify-center items-center bg-[#5f6497] rounded-tl-lg'>
      🏡 Home
    </li>
    <li className='flex w-full justify-center items-center bg-[#ADA87C]'>
      🍔 Burger
    </li>
    <li className='flex w-full justify-center items-center bg-[#7CAD90]'>
      🍕 Pizza
    </li>
    <li className='flex w-full justify-center items-center bg-[#7C9AAD] rounded-tr-lg'>
      🍦 Ice Cream
    </li>
  </ul>
</nav>

);

export default NavBar;
