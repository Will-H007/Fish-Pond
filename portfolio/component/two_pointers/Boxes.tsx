import React, { useState } from 'react';

import ColorCircle from '../Second_page/color_circle';
interface DoubleLinkedListProps {
  items: string[]; // Change the type according to your item type
  visibleItemCount: number; // Number of items to display at a time
  onVisibleItemsChange?: (items: string[]) => void;
}

const DoubleLinkedList: React.FC<DoubleLinkedListProps> = ({ items, visibleItemCount ,  onVisibleItemsChange}) => {
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
  if (typeof onVisibleItemsChange === 'function') {
    onVisibleItemsChange(visibleItems);
  }
  const size = "30"

  return (
<div className="flex flex-row gap-x-8 items-center">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      onClick={handlePrevClick}
      width={size} // Set the width to your desired size
      height={size} // Set the height to your desired size
      className='text-white'
    >
      <path
        fillRule="evenodd"
        d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
        clipRule="evenodd"
      />
    </svg>




  {visibleItems.map((visibleItem, index) => (
    <ColorCircle key={index} color={visibleItem}/>
  ))}



<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="text-white"
  onClick={handleNextClick}
  width={size} // Set the width to your desired size
  height={size} // Set the height to your desired size
>
  <path
    fillRule="evenodd"
    d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
    clipRule="evenodd"
  />
</svg>




</div>

  );
};

export default DoubleLinkedList;

