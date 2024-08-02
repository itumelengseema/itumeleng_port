import React from 'react';
import Logo from '../public/Images/itumeleng_logo.svg';
import Image from 'next/image';

function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className="bg-opacity-70 backdrop-blur-md bg-[#121212] text-gray-900 z-10 py-8 mt-auto">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <span className="mb-2 md:mb-0">
                    <Image
                        width={100}
                        height={50}
                        className="invert"
                        src={Logo}
                        alt="Itumeleng Seema Logo"
                    />
                </span>
                <p className="text-slate-600 text-center md:text-left">
                    &#9426; All rights reserved {date}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
