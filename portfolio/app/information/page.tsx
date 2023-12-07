'use client';
import React, { useState } from 'react';
import GlassmorphismBox from '@/component/Second_page/glass_box';
import Player from '@/component/tabs/projects/projects';
import { AnimateNav } from '@/component/navbar/newnav';
import Skill from '@/component/tabs/skill/skill';
import Experience from '@/component/tabs/experience/experience';

const DoubleLinkedListLayout: React.FC = () => {

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




  return (
    
  <div>
 

   

      
      <div className="h-full w-full flex flex-col gap-x-8  items-center justify-center">
        <div  style={{ height:"90vh", width:"100%" }}>
          {/* {renderContent()} */}
              <GlassmorphismBox skill={<Skill />} experience={<Experience />} project={<Player/>}/>
          </div>
          </div>
          <AnimateNav/>

    </div>
  );
};

export default DoubleLinkedListLayout;
