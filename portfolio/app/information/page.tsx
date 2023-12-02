'use client';
import DoubleLinkedList from "@/component/two_pointers/Boxes";

const initialItems = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#800000", // Maroon
  "#008000", // Olive
  "#000080", // Navy
  "#808000", // Olive Green
  "#800080", // Purple
  "#008080", // Teal
  "#A52A2A", // Brown
  "#FFA500", // Orange
  "#ADD8E6", // Light Blue
  "#20B2AA", // Light Sea Green
  "#8A2BE2", // Blue Violet
  "#FA8072", // Salmon
  "#2E8B57", // Sea Green
  "#696969"  // Dim Gray
];






export default function App() {
  const handleVisibleItemsChange = (visibleItems: string[]) => {
    console.log('Visible Items:', visibleItems);
    // Do something with the visible items
  };
  return (
    <div className="h-screen grid grid-rows-4 justify-center items-center ">
 
          <div className="row-start-4 mb-2 ">
            <div className="flex flex-row max-w-screen h-1/2 gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg items-end justify-center">
            <DoubleLinkedList items={initialItems} visibleItemCount={5} onVisibleItemsChange={handleVisibleItemsChange} />
 
            </div>
          </div>

          {/* <div>
            <p className="text-white text-center my-1">Vegetables</p>
            <div className="flex flex-row max-w-3xl h-1/2 gap-x-8 p-4 bg-opacity-25 backdrop-blur-lg items-end justify-center overflow-auto">
            <DoubleLinkedList items={initialItems} visibleItemCount={3} />
            </div>
          </div>

          <div>
            <p className="text-white text-center my-1">Vegetables</p>
            <div className="flex flex-row max-w-3xl h-1/2 gap-x-8 p-4 bg-opacity-25 backdrop-blur-lg items-end justify-center overflow-auto">
            <DoubleLinkedList items={initialItems} visibleItemCount={3} />
            </div>
          </div> */}
          
          </div>


   
  );
}

