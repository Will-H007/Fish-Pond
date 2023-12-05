// NavBar.tsx
import React, { useState } from 'react';

const initialItems = [
  { id: 'skill', color: '#5f6497', label: '💼 Skill' },
  { id: 'experience', color: '#7075a7', label: '🌟 Experience' },

  { id: 'hobbies', color: '#9197c6', label: '🎮 Hobbies' },
  // { id: 'projects', color: '#9197c6', label: '🚀 Projects' },
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
