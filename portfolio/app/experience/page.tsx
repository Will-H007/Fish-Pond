'use client';
import React, { useState } from 'react';
import Player from '@/component/tabs/projects/projects';
import { AnimateNav } from '@/component/navbar/newnav';
import Skill from '@/component/tabs/skill/skill';
import Experience from '@/component/tabs/experience/experience';
import GlassmorphismBox from '@/component/Second_page/glass_box';
const ExperiencePage: React.FC = () => {

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

          <div style={{backgroundImage: backgroundImageUrl,
            backgroundSize: 'cover', // Adjust as needed
            backgroundPosition: 'center', // Adjust as needed
            // Add other styles as needed
            width: '100%',
            height: '100vh',
            opacity:"80%",
            padding:"2em",
            paddingTop:"4em",
          
            }}>
 <div className="h-full w-full flex flex-col gap-x-8  items-center justify-center" style={{zIndex:2}}>
        <div  style={{ height:"90vh", width:"100%" }}>

              <GlassmorphismBox skill={<Skill />} experience={<Experience />} project={<Player/>}/>
          </div>
          </div>
 
       
                 


            </div>
            <AnimateNav/>

    </div>
  );
};

export default ExperiencePage;
