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






export default function Layout() {
  const handleVisibleItemsChange = (visibleItems: string[]) => {
    console.log('Visible Items:', visibleItems);
  };
  return (
    <div className="h-screen grid grid-rows-6 justify-center items-center ">
            <div className="flex row-span-5 col-span-5 m-2 text-white justify-center">
              <p>asdasdjaskdjhask</p>
            </div>
          <div className="row-start-6 mb-2 ">
            <div className="flex flex-row max-w-screen h-1/2 gap-x-8 p-2 bg-opacity-25 backdrop-blur-lg items-end justify-center">
            <DoubleLinkedList items={initialItems} visibleItemCount={5} onVisibleItemsChange={handleVisibleItemsChange} />
 
            </div>
          </div>
          
  </div>


   
  );
}

