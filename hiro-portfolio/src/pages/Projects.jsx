import React from 'react'
import CardProjeto from '../components/CardProjeto';
import data from '../data.json'

export default function Project() {
    return(
        <>
            <section className='min-h-screen min-w-full bg-gradient-to-b from-[#030027] to-[#0B008D]'>
                <div className=' flex justify-center font-bold text-[40px] gap-3 p-5 pt-[20%] md:pt-[10%]'>
                    <h1 className='text-white'>My recents</h1>
                    <h1 className='text-[#3523FF]'>Projects</h1>
                </div>
                <div className='flex flex-wrap justify-center gap-5 p-4'>
                        {data.map((projeto) => (
                            <CardProjeto key={projeto.id} projeto={projeto} />
                            ))}

                </div>
                
            </section>
        </>
    );
};