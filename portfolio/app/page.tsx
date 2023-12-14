'use client';
import React, { useState,useEffect } from 'react';
import AnimatedTextComponent from '@/component/textanimation';
import { motion } from 'framer-motion';
import { AnimateNav } from '@/component/navbar/newnav';
import Ripple from '@/component/ripple';

const HomePage: React.FC = () => {

  // State to store the selected tab
  const [selectedTab, setSelectedTab] = useState<string | null>('transparent');

  // Function to render content based on the selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case '#7075a7':
        return <div>asdasdasdasd</div>;
      case '#5f6497':
        return <div>asd</div>;
      case 'transparent':
        return <div>asdasdas</div>;
      default:
        return null;
    }
  };


  const backgroundImageUrl = 'url("/images/image6.png")';

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const [ripplePositions, setRipplePositions] = useState<Array<{ top: number; left: number }>>(
    Array.from({ length: 1 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }))
  );
  



  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <div
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh',
          opacity: "95%",
          padding: "2em",
          paddingTop: "4em",
          position: 'relative', // Add this to position the ripples relative to the background
        }}
      >
        {/* Render Ripples with Dynamic Positions */}
        <div style={{ position: 'absolute', height:"100%", width:"100%" }}>
          {ripplePositions.map((position, index) => (
           <Ripple
           key={index}
           size={80 * (index + 1)}
           animationDuration={5}
           animationEase="easeIn"
           initialDelay={index%2}
           position={position}
         />
          ))}
        </div>
     
<div style={{  
  display: 'flex',
      justifyContent: 'center',
      height:"100%",
      alignItems:"center",
      marginLeft:"15em",
      paddingBottom:"7em"
      }}>

        <AnimatedTextComponent/>
        </div>

      </div>
      <AnimateNav />
    </div>
  );
};

export default HomePage;