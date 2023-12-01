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
      <button onClick={handlePrevClick} className='bg-white'>Previous</button>
      {visibleItems.map((visibleItem, index) => (
        <GlassmorphismBox key={index} item={visibleItem} isBoxInRange={true} boxGlow={0} />
      ))}
      <button onClick={handleNextClick} className='bg-white'>Next</button>
    </div>
  );
};

export default DoubleLinkedList;
