'use client';
import React, { useState } from 'react';
import GlassmorphismBox from '@/component/Second_page/glass_box';
import Example from '@/component/graphs/example';
import { useAnimate, stagger } from "framer-motion";



const DoubleLinkedListLayout: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-screen flex flex-row gap-x-8 w-max-xl grid grid-rows-6 grid-cols-10 m-6 justify-center items-center relative">

      {isMenuOpen && (
        <div className="col-start-1 col-end-8 row-start-1 row-end-4 mt-20">
          <GlassmorphismBox children={<Example />} />
        </div>
      )}

      {/* Hamburger menu button */}
      <div className="absolute top-4 left-4" style={{
        height:"30px",
        width:"30px",
      }}>
        <button onClick={handleToggleMenu} className="bg-[#5f6497] p-2 rounded h-full w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path d="M2 12h12M2 6h12M2 1h12"></path>
          </svg>
        </button>
      </div>




    </div>
  );
};

export default DoubleLinkedListLayout;
