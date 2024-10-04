import React from 'react';
import Nav from './Nav'

export default function Header(){
    return(
    <>
        <header>
            <section className='text-white flex items-center justify-between p-12 md:px-32'>
                <h1>Hiro</h1>
                <div className='flex'>
                    <Nav/>
                </div>
            
            </section>
            
        </header>
    </>
    );
};
