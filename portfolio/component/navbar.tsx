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
    #5f6497
    </li>
    <li className='flex w-full justify-center items-center bg-[#ADA87C]'>
    #ADA87C
    </li>
    <li className='flex w-full justify-center items-center bg-[#7CAD90]'>
    #7CAD90
    </li>
    <li className='flex w-full justify-center items-center bg-[#7C9AAD] rounded-tr-lg'>
    "7C9AAD"
    </li>
  </ul>
</nav>
);

export default NavBar;
