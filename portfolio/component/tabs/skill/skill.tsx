import React, { useState } from "react";
import ProgressBar from "./progressbar";
import Card from "@/component/Second_page/card";
import Example from "./graphs/example";
import DoubleLinkedList from "@/component/two_pointers/Boxes";

const Skill: React.FC = () => {
  const initialItems = ["#ADA87C", "#7CAD90", "#7C9AAD"];

  // State to store visible items
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  // Callback function to handle visible items change
  const handleVisibleItemsChange = (items: string[]) => {
    setVisibleItems(items);
  };

  // Determine which component to render based on the center visible item
  const renderCenterComponent = () => {
    if (visibleItems.length > 0) {
      const centerItem = visibleItems[Math.floor(visibleItems.length / 2)];

      // Conditionally render Example component based on the center item
      if (centerItem === "#7CAD90") {
        return <Example />;
      } else {
        // Replace this with the component you want to render for other cases
        return <div>Other Component</div>;
      }
    }

    // Default rendering when there are no visible items
    return <div>In the future</div>;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Card />
 
      <div
        style={{
          width: "90%",
          height: "100%",
          marginTop: "30px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{height:"80%",width:"100%", display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",}}>
         {renderCenterComponent()}

         </div>
        <div className="flex flex-row gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg justify-center items-center my-5">
          <DoubleLinkedList
            items={initialItems}
            visibleItemCount={1}
            onVisibleItemsChange={handleVisibleItemsChange}
          />

        </div>
      </div>
    </div>
  );
};

export default Skill;
