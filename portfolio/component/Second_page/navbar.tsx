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
    <nav style={{
      height: "50px",
      display: 'flex',
      flexDirection: 'row',
    }}>
      {initialItems.map((item, index) => (
        <div
          key={item.id}
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: item.color,
            ...(index === 0 && { borderTopLeftRadius: '8px' }),
            ...(index === initialItems.length - 1 && { borderTopRightRadius: '8px' }),
          }}
          onClick={() => handleTabClick(item.color)}
        >
          {item.label}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
