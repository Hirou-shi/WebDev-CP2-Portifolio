import React from 'react'
import Cards from '../components/Card';

export default function Project() {
    return(
        <>
            <body className='min-h-screen min-w-full bg-gradient-to-b from-[#030027] to-[#0B008D]'>
                <div className=' flex justify-center font-bold text-[40px] gap-3 p-5 pt-[8%]'>
                    <h1 className='text-white'>My recents</h1>
                    <h1 className='text-[#3523FF]'>Projects</h1>
                </div>
                <div className='pb-[25%]'>
                <   Cards />
                </div>
                
            </body>
        </>
    );
};