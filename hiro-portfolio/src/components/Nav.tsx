import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X} from 'lucide-react';

const Navlinks = () => {
    return(
        <>
            <ul className='flex md:flex-row md:gap-9 flex-col gap-4 font-semibold text-[24px]'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Contact'>Contacts</NavLink>
            <NavLink to='/Projects'>Projects</NavLink>
            </ul>
        </>
    );
};

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className='flex justify-end'>
                <div className='hidden md:flex just'>
                    <Navlinks />
                </div> 
                <div className='md:hidden'>
                    <button onClick={toggleNavbar}>{isOpen ? <X />: <Menu />}</button>
                </div>
            </nav>
            {isOpen && (
                <div>
                    <Navlinks /> 
                </div>
            )}
        </>
    );
};

export default Nav;