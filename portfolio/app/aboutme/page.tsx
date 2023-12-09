"use client"
import React, { useState } from 'react';
import Card from '@/component/main/card';
import { AnimateNav } from '@/component/navbar/newnav';
import Dashboard from '@/component/dashboard/dashboard';

const ExperiencePage: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState(true);

  const handleToggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div style={{ overflow: 'hidden', height: '100%' }}>
      

      <div
  style={{
    boxSizing: 'border-box',

    width: '100%',
    height: '100vh',

    padding: '2em',
    paddingTop: '4em',

  }}
>   



        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', padding: '1em',zIndex:-1, marginLeft:"1em" }}>

          <button
            onClick={handleToggleCard}
            style={{
              position: 'absolute',
              left: '4em',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 4,
              height: '10em',
              width: '2em',
              backgroundColor: '#cae3c9',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
              borderRadius:"1em"
            }}
          ></button>

       
      
            <div style={{ position: 'fixed', zIndex: isCardOpen?2:3, marginTop: '20em', marginLeft:"1em" , height:'100%'}}>
 
              <Card onMenuButtonClick={handleToggleCard} isMenuOpen={isCardOpen} />
            </div>
         

          <div
            style={{
              backgroundColor: '#759f7e',
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems:"center",
              marginLeft: '1em',
              marginBottom: '0.25em',
              borderRadius: '0.5em',
  
              padding: '1em',
  
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
              zIndex: 1,
            }}
          >
            <Dashboard/>
          </div>
        </div>
      
      </div>

      <AnimateNav/>

    </div>
  );
};

export default ExperiencePage;
