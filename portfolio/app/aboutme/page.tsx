"use client"
import React, { useState } from 'react';
import Card from '@/component/main/card';
import { AnimateNav } from '@/component/navbar/newnav';
import Maze from '@/component/maze/dashboard/mazegenerator';
const ExperiencePage: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState(true);

  const handleToggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div style={{ overflow: 'hidden',     width: '100%',
    height: '100vh', backgroundColor: '#759f7e', overflowY:"auto"}}>
      





        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', zIndex:-1, overflowY:"auto" }}>

          <button
            onClick={handleToggleCard}
            style={{
              position: 'absolute',
              left: '1em',
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

       
      
            <div style={{ position: 'fixed', zIndex: isCardOpen?2:3, marginTop: '23em', marginLeft:"1em" , height:'100%'}}>
 
              <Card onMenuButtonClick={handleToggleCard} isMenuOpen={isCardOpen} />
            </div>
         

          <div
            style={{
       
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems:"center",
   
     
        
              borderRadius: '0.5em',
        
              padding: '1em',

              // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
              zIndex: 1,
              
      
              gap:"1em"
            }}
          >
      
            <Maze startAnimation={true}/>
  
          </div>
        </div>
      


      <AnimateNav/>

    </div>
  );
};

export default ExperiencePage;
