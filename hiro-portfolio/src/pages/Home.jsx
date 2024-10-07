import { useState } from 'react';
import {GitButton, InstButton, LinkButton} from '../components/linksButton';
import Izaoimg from '../components/Idegrade';
import Skills from '../components/Skills';

export default function Home(){

    const[lightMode, setLightMode] = useState(false);

    return(
        <section className={lightMode ? 'light' : ''}>
            <div className="min-h-screen min-w-full bg-gradient-to-b from-[#030027] to-[#0B008D] pb-4 light:bg-white">
            <section className="text-white flex flex-row items-center p-14 pt-36 md:pt-9 lg:pl-32 leading-tight">
                    <div className='flex'>
                        <Izaoimg />
                    </div>
                <div className=''>
                    <div className='flex flex-col md:items-center md:flex-row md:gap-2 gap-0'>
                        <h1 className="font-bold lg:text-[100px] md:text-[75px] text-[50px]">Hi! I'm</h1>
                        <h1 className="text-[#3523FF] font-bold lg:text-[100px] text-[80px]">Hiroshi</h1>
                    </div>
                    <h3 className="font-semibold lg:text-[28px] text-[18px]">&lt;&gt;Full-stack Developer&lt;/&gt;</h3>
                    <ul className="flex md:gap-10 gap-4 md:pl-[30px] pt-8"> 
                        <GitButton />
                        <LinkButton />
                        <InstButton /> 
                    </ul>
                </div>

            </section>
            <section className='text-white flex flex-col p-16 pt-[500px] gap-2 lg:m-12 leading-loose'>
                <h1 className='font-bold text-[30px]'>
                    About me</h1>
                <p className='text-[20px] text-[#CDCDCD]'>
                    I've always been interested in technology. I am currently a Software Engineering student at FIAP and hope to graduate in 2027. I enjoy experiencing new things and my dream is to travel the world. I've never had trouble socializing and have always liked challenges to continuously improve myself.</p>
            </section>
            <section className='text-white flex flex-col p-16 gap-2 lg:m-12 leading-loose'>
                <h1 className='font-bold text-[30px]'>
                    Skills</h1>
                <p className='text-[20px] text-[#CDCDCD]'>
                        I have experience with:</p>
                <Skills />
            </section>
            </div>
        </section>
    );
};
