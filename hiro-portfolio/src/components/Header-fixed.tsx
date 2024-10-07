import React, { useState, useEffect} from 'react';
import Nav from './Nav';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const[lightMode, setLightMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
            scrollPosition > 50 ? 'bg-black/70' : 'bg-transparent'
          }`}
        >
            <section className='text-white flex items-center justify-between p-9 md:px-32'>
                <h1 className={`font-bold text-[24px] transition-all duration-300 z-50 ${scrollPosition > 50 ? 'text-[#3523FF]' : 'text-white'}`}>Hiro I Soft Engineer</h1>
                <div className='flex md:flex-col'>
                    <Nav/>
                </div>
            </section>
        </header>
    )
}

export default Header;