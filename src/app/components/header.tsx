'use client';
import React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname();

    return (

        <header className="text-white py-3 px-24 flex mt-10 justify-between items-center p-4 bg-black-rgba text-white"
        >
            <div className="flex items-center">
                <NextLink href="/" passHref>
                    <img
                        src="/hackjklu-logo.png"
                        alt="Logo"
                        className="h-16"
                    />
                </NextLink>
                <NextLink href="/" passHref>
                    <img
                        src="/hackjklu-text.png"
                        alt="Text"
                        className="h-12 ml-2 mt-2"
                    />
                </NextLink>
            </div>


            <nav className="flex items-center space-x-[5.5rem]">
                <NextLink href="/" passHref>
                    <div className={`cursor-pointer ${pathname === '/' ? 'underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2' : 'hover:underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-5'}`}>Home</div>
                </NextLink>
                <NextLink href="/challenges" passHref>
                    <span className={`cursor-pointer ${pathname === '/challenges' ? 'underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2' : 'hover:underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2'}`}>Challenges</span>
                </NextLink>
                <NextLink href="/team" passHref>
                    <span className={`cursor-pointer ${pathname === '/team' ? 'underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2' : 'hover:underline decoration-[#A9A9A9] underline-offset-[2.2rem] decoration-2'}`}>Team</span>
                </NextLink>
            </nav>
        </header>
    );
};

export default Header;
