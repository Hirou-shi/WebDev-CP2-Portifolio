import React from 'react';
import { NavLink } from 'react-router-dom';
import { InstButton, GitButton, LinkButton } from './linksButton';

export default function Footer() {
    return(
    <>
        <footer className='bg-[#171717] p-5 flex flex-col sm:flex-row sm:justify-around gap-2'>
            <NavLink to='/Contact' className={'bg-[#3523FF] self-center content-around drop-shadow p-3 font-semibold text-[18px] rounded h-20'}>Contact me here</NavLink>

            <p className='self-center text-[#CDCDCD] font-medium '>
                This site was developed by Hiroshi Watanabe in 2024 </p>
            <div>
                <h3 className='font-semibold text-[22px]'>My social medias</h3>
                <InstButton />
                <GitButton />
                <LinkButton />
            </div>
        </footer>
    </>
    );
};


