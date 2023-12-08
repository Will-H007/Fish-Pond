'use client';
import React, { useState } from 'react';
import Player from '@/component/tabs/projects/projects';
import { AnimateNav } from '@/component/navbar/newnav';
import Skill from '@/component/tabs/skill/skill';
import Card from '@/component/Second_page/card';
import GlassmorphismBox from '@/component/Second_page/glass_box';
import ChartContainer from '@/component/tabs/skill/graphs/example';

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

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


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

 
       <div style={{width:"100%", height:"100%"}}>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', height:"45em",width:"75%", display:"flex", justifyContent:"center", flexWrap:"wrap",marginLeft:"2em", 
            marginTop:"0.25em", borderRadius:"0.5em",gap:"2.5em",
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',  backdropFilter: 'blur(5px)',}}>
                <ChartContainer/>
                <ChartContainer/>
                <ChartContainer/>   
                <ChartContainer/>   
                <ChartContainer/> 
                <ChartContainer/> 
            </div>
                <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"end"}}>
                <Card onMenuButtonClick={handleToggleMenu} isMenuOpen={isMenuOpen} />
                </div>
        </div>
            </div>
            <AnimateNav/>

    </div>
  );
};

export default ExperiencePage;
