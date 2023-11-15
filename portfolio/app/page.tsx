'use client';
import Image from 'next/image';

export default function Home() {
  return (
   
          <div className="h-screen grid grid-rows-3 gap-5 ml-5 mt-5">
              <div className='row-start-2 row-end-3 col-start-2 col-end-2 flex flex-wrap items-end justify-center mb-10'>
                <p className='text-white'>Hi My name is William.</p>
              </div>
     
              <div className='row-start-2 row-end-2 col-start-3 col-end-3'>
                  <img className="h-auto max-w-sm p-1 rounded-full ring-2 ring-gray-400 dark:ring-gray-300 m-2" src="./photo.jpeg" alt="Bordered avatar" />
              </div>
          </div>
   
  );
}
