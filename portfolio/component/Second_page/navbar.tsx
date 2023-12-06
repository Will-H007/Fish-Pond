// NavBar.tsx
import React, { useState } from 'react';

const initialItems = [

  { id: 'about me', color: 'transparent', label: '🚀 Drawing'  },

  { id: 'experience', color: '#7075a7', label: '🌟 Experience' },

  { id: 'skill', color: '#5f6497', label: '💼 Skill' },


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
      height: "7%",
      display: 'flex',
      flexDirection: 'row',
    }}>
      {initialItems.map((item, index) => (
        <div
          key={item.id}
          style={{
            color:"black",
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
