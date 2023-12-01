import React, { useState } from 'react';
import GlassmorphismBox from '../Second_page/glass_box';
interface DoubleLinkedListProps {
  items: string[]; // Change the type according to your item type
  visibleItemCount: number; // Number of items to display at a time
}

const DoubleLinkedList: React.FC<DoubleLinkedListProps> = ({ items, visibleItemCount }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex + visibleItemCount < items.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleItems = items.slice(startIndex, startIndex + visibleItemCount);

  return (
<div className="flex flex-row gap-x-8">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-white"
    onClick={handlePrevClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  

  {visibleItems.map((visibleItem, index) => (
    <GlassmorphismBox key={index} item={visibleItem} isBoxInRange={true} boxGlow={0} />
  ))}



  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-white"
    onClick={handleNextClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>






</div>

  );
};

export default DoubleLinkedList;

