import React from 'react';
import { FaHtml5, FaCss3, FaGitAlt, FaReact, FaPython} from "react-icons/fa";
import { SiCplusplusbuilder,  } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { VscTerminalCmd } from "react-icons/vsc";

const Skills = () => {
    return (
        <div className='bg-black/60 drop-shadow-lg text-[28px] max-w-lg rounded-md'>
            <div className='bg-black/60 p-2 flex items-center gap-2'>
            <VscTerminalCmd className='text-white text-xl' />
            <p className='text-[20px] font-mono'>Command Prompt</p>
            </div>
            
            <div className='grid md:grid-cols-3 gap-4 md:gap-14 p-5'>
                <div className='flex items-center gap-3'>
                    <FaHtml5 className='text-orange-500 text-3xl'/>
                    <h2>HTML</h2>
                </div>
                <div className='flex items-center gap-3'>
                    <FaGitAlt className='text-red-500 text-3xl'/>
                    <h2>Git</h2>
                </div>
                <div className='flex items-center gap-3'>
                    <FaPython className='text-yellow-400 text-3xl'/>
                    <h2>Python</h2>
                </div>
                <div className='flex items-center gap-3'>
                    <SiCplusplusbuilder className='text-blue-600 text-3xl'/>
                    <h2>C++</h2>
                </div>

                <div className='flex items-center gap-3'>
                    <FaCss3 className='text-blue-500 text-3xl' />
                    <h2>CSS</h2>
                </div>
                <div className='flex items-center gap-3'>
                    <FaReact className='text-blue-400 text-3xl' />
                    <h2>React</h2>
                </div>
                <div className='flex items-center gap-3'>
                    <IoLogoJavascript className='text-yellow-300 text-3xl' />
                    <h2>JavaS</h2>
                </div>
            </div>
        </div>
    );
};

export default Skills;