"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "@/components/MenuOverlay";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Logo from '../public/Images/itumeleng_logo.svg';

interface NavLinkProps {
  title: string;
  path: string;
}

const navLinks: NavLinkProps[] = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Skills", path: "#skills" },
  { title: "Contact", path: "#contact" },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
      <nav className="fixed top-0 left-0 right-0  bg-opacity-70 backdrop-blur-md bg-[#121212]   z-20">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-1">
          <Link href="/" className="text-1xl md:text-4xl text-white font-semibold">
            <Image
                width={190}
                height={200}
                src={Logo}
                alt="logo"
            />
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
                <button
                    onClick={() => setNavbarOpen(true)}
                    className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-white hover:border-white"
                >
                  <Bars2Icon className="h-7 w-7" />
                </button>
            ) : (
                <button
                    onClick={() => setNavbarOpen(false)}
                    className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
                >
                  <XMarkIcon className="h-7 w-7" />
                </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
              {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                  </li>
              ))}
              <li className="flex items-center space-x-4">
                <SocialIcon
                    url="https://www.linkedin.com/in/itumeleng-seema-7b1b3b1b1/"
                    bgColor="transparent"
                    fgColor="#fff"
                    style={{ height: 50, width: 50 }}
                />
                <SocialIcon
                    url="https://github.com/itumelengseema"
                    bgColor="transparent"
                    fgColor="#fff"
                    style={{ height: 50, width: 50 }}
                />
              </li>
            </ul>
          </div>
        </div>
        {navbarOpen ? (
            <MenuOverlay
                links={navLinks.map((link) => ({
                  href: link.path,
                  title: link.title,
                }))}
            />
        ) : null}
      </nav>
  );
};

export default Navbar;
