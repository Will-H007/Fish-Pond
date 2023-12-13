"use client"
import React, { useState } from 'react';
import Card from '@/component/main/card';
import { AnimateNav } from '@/component/navbar/newnav';
import Gameboard from '@/component/maze/dashboard/gameboard';
const ExperiencePage: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState(true);

  const handleToggleCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <div style={{ overflow: 'auto',     width: '100%',
    height: '100vh', backgroundColor: '#759f7e'}}>
      
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'start', alignItems: 'center', zIndex:-1}}>

          <button
            onClick={handleToggleCard}
            style={{
              position: 'absolute',
              left: '1em',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 4,
              height: '20vmin',
              width: '3vmin',
              backgroundColor: '#cae3c9',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
              borderRadius:"1em"
            }}
          ></button>

       
      
      <div style={{ zIndex: isCardOpen?2:3}}>
 
              <Card onMenuButtonClick={handleToggleCard} isMenuOpen={isCardOpen} />
            </div> 
         

          <div
            style={{
       
              height: '100%',
              width: '100vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems:"center",
              
              flexWrap:"wrap",
              
        
              borderRadius: '0.5em',
        
              zIndex: 1,
              
      
            }}
          >
            <Gameboard/>
    {/* <div style={{backgroundColor:"transparent", height: '94vmin',
             width:"25vw", marginRight:"3vmin", padding:"2vmin", borderRadius:"1vmin", marginTop:'1vmin'}}>
                  <div style={{backgroundColor:"#cae3c9", height:"100%", width:"100%",borderRadius:"1vmin",display:"flex", justifyContent:"center",
             alignItems:"center",  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)'}}>
            

             </div>
       
              </div>
     */}
     
        

  
          </div>
        </div>
      


      <AnimateNav/>

    </div>
  );
};

export default ExperiencePage;
