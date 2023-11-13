'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
        <div className ="flex flex-row">

        <div className="container mx-auto px-2 basis-1/2">
          <div className="h-screen box-border w-30 p-4 border-2 border-gray-300 mx-auto hover:border-gray-400 transition">

            <img className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="./photo.jpeg" alt="Bordered avatar"/>


            <p className="text-white">William Ho</p>
     
          </div>
        </div>


          <div className="container mx-auto px-2 basis-1/2">
              <div className="h-screen box-border w-30 p-4 border-2 border-gray-300 mx-auto hover:border-gray-400 transition">
                <p className="text-white">sdadasds</p>
              </div>
          </div>

  


  

        </div>
</div>
   
  );
}
