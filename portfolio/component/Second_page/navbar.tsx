// NavBar.tsx
import React, { useState } from 'react';

const initialItems = [

  { id: 'about me', color: 'transparent', label: '🖼️ Gallery'  },

  { id: 'skill', color: '#5f6497', label: '💼 Skill' },

  { id: 'experience', color: '#7075a7', label: '🌟 Experience'},
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
      height: "2em",
      display: 'flex',
      flexDirection: 'row',
      width:"100%",
   
      paddingRight:"50em"
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
