'use client';
import React, { useState } from 'react';
import Project from '@/component/tabs/projects/projects';
import { AnimateNav } from '@/component/navbar/newnav';
import Skill from '@/component/tabs/skill/skill';
import Experience from '@/component/tabs/experience/experience';

const Gallery: React.FC = () => {

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

  return (
    
  <div style={{ overflow: "hidden", height:"100vh" }}>

          <div style={{
            width: '100%',
            height: '100vh',

            padding:"2em",
            paddingTop:"4em",
          
            }}>

 
                    <div style={{ height:"100%",width:"95%",display:"flex",alignItems:"center", backgroundColor:"#6791a5", borderRadius:"1em", overflow:"auto", marginLeft:"2em"}}>

                    <Project/>
                    
                    </div>
                 


            </div>
            <AnimateNav/>

    </div>
  );
};

export default Gallery;
