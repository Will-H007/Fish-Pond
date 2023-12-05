import React ,{useState}from "react";
import ProgressBar from "./progressbar";
import Card from "@/component/Second_page/card";
import Example from "../graphs/example";
import DoubleLinkedList from "@/component/two_pointers/Boxes";
const Experience: React.FC = () => {
   
    const initialItems = [
        "#ADA87C",
        "#7CAD90",
        "#7C9AAD",
      ];
    // State to store visible items
    const [visibleItems, setVisibleItems] = useState<string[]>([]);
  
    // Callback function to handle visible items change
    const handleVisibleItemsChange = (items: string[]) => {
      setVisibleItems(items);
    };
      
      return (
        <div style={{display:"flex",
        flexDirection:"row",
        height:"100%",
        alignItems:"center",
        gap:"20px"}}>
            <Card/>
          <div style={{
            width:"90%",
            height:"100%",
            marginTop:"30px",
            margin:"auto",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center"
          }}>
            <Example/>
                <div className="flex flex-row gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg justify-center items-center mt-10">
                  <DoubleLinkedList items={initialItems} visibleItemCount={1} onVisibleItemsChange={handleVisibleItemsChange} />
                </div>
          </div>
     
        </div>
       
      );
};

export default Experience;
