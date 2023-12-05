'use client';
import React, { useState } from 'react';
import GlassmorphismBox from '@/component/Second_page/glass_box';
import Example from '@/component/tabs/skill/graphs/example';
import { useAnimate, stagger } from "framer-motion";
import Card from '@/component/Second_page/card';
import Skill from '@/component/tabs/skill/skill';
import Experience from '@/component/tabs/experience/experience';

const DoubleLinkedListLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-full flex flex-row gap-x-8 w-max-xl grid grid-rows-6 grid-cols-10 m-5 justify-center">
      {/* Hamburger menu button */}
      <div className="absolute top-6 left-4" style={{
        height:"30px",
        width:"30px",
        zIndex: 2, // Higher zIndex for the menu button
      }}>
        {/* <button onClick={handleToggleMenu} className="bg-[#5f6497] p-2 rounded h-full w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path d="M2 12h12M2 6h12M2 1h12"></path>
          </svg>
        </button> */}
      </div>

      {isMenuOpen && (
        <div className="col-start-1 col-end-3 row-start-1 row-end-4" style={{ zIndex: 1 }}>
          <Card/>
        </div>
      )}

      <div className="col-span-full row-span-full h-[700px] w-full">
        <GlassmorphismBox skill={<Skill/>} experience={<Experience />} />
      </div>
    </div>
  );
};

export default DoubleLinkedListLayout;
