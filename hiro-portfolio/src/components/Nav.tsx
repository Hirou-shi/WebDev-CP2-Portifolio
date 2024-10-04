import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X} from 'lucide-react';


function App() {
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        if (theme === 'light') {
            document.documentElement.classList.add("light");
        } else {
            document.documentElement.classList.remove("light");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
}
const Navlinks = () => {
    return(
        <>
            <ul className='md:flex md:gap-4 grid-rows-5 grid-flow-col gap-8'>
            <button className='rounded-3xl'>Light</button>
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