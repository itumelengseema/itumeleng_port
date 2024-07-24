import React from 'react';
import Logo from '../public/Images/itumeleng_logo.svg';
import Image from 'next/image';

function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className=" bg-opacity-70 backdrop-blur-md bg-[#121212] text-gray-900 z-10">
            <div className="container p-5 py-6 flex justify-between items-center mx-auto">
                <span>
                    <Image
                        width={100}
                        height={50}
                        className="invert"
                        src={Logo}
                        alt="Itumeleng Seema Logo"
                    />
                </span>
                <p className="text-slate-600">
                    &#9426; All rights reserved {date}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
