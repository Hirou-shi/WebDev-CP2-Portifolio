import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const GitButton = () => {
    const handleClick = () => {
        window.open('https://github.com/Hirou-shi', '_blank');
    };

    return (
        <button 
        onClick={ handleClick }
        className=''
        >
            <Github className="md:size-16 size-12"/>
        </button>
    );
};

const InstButton = () => {
    const handleClick = () => {
        window.open('https://instagram.com/hirou_shi', '_blank');
    };

    return (
        <button
        onClick={handleClick}
        className=''
        >
            <Instagram className="md:size-16 size-12"/>
        </button>
    );
};

const LinkButton = () => {
    const handleClick = () => {
        window.open('https://br.linkedin.com/in/rodrigo-hiroshi-watanabe-b015002b7','_blank')
    };

    return(
        <button
        onClick={handleClick}
        className=''
        >
            < Linkedin className="md:size-16 size-12"/>
        </button>
    )
}

export { GitButton, InstButton, LinkButton };