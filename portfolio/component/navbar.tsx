// NavBar.tsx
import React, { useState } from 'react';

const initialItems = [
  { id: 'home', color: '#5f6497', label: '🏡 Home' },
  { id: 'burger', color: '#ADA87C', label: '🍔 Burger' },
  { id: 'pizza', color: '#7CAD90', label: '🍕 Pizza' },
  { id: 'iceCream', color: '#7C9AAD', label: '🍦 Ice Cream' },
];

interface NavBarProps {
  onTabClick: (tabId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onTabClick }) => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
    onTabClick(tabId); // Notify the parent component about the selected tab
  };

  return (
    <nav className='h-14'>
      <ul className='flex flex-row h-full'>
        {initialItems.map((item) => (
          <li
            key={item.id}
            className={`flex w-full justify-center items-center bg-[${item.color}]`}
            onClick={() => handleTabClick(item.color)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;