"use client";
import Image from "next/image";
import React from "react";
import bgImage from "../public/Images/Default_convert_the_picture_to_a_pixar_the_boy_is_african_cart_0.jpg";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 h-screen">
      <motion.div
        className="col-span-7 place-self-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white mb-4 text-3xl sm:text-1xl lg:text-6xl lg:leading-normal font-extrabold">
          👋
          <span className="text-transparent bg-clip-text custom-gradient">
            Heita !, I&apos;m Itumeleng Seema
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "<🧑‍💻 Software Dev/>",
              2000,
              "<Code Enthusiast/>",
              2000,
              "<Recent Graduate/>",
              2000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
          Debugging is the game, and code is the name. Let’s link up, grab a
          cold drink, and create something epic together. Coding is life, Ntja
          ka!🚀
        </p>
        <div className="hidden sm:block">
          <Link
            href="/#contact"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded mr-4 bg-gradient-to-br from-[#F1563c] via-purple-500 to-[#00b3c1] hover:bg-slate-200 text-white"
          >
            Hire Me
          </Link>
          <Link
            href="/"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded bg-gradient-to-br from-blue-500 to-purple-500 hover:bg-slate-800 text-white mt-3"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded px-5 py-2">
              Download CV
            </span>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="col-span-5 place-self-center mt-4 mb-6 lg:mt-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden rounded-full">
          <Image
            src={bgImage}
            alt="hero image"
            className="object-cover w-full h-full"
            layout="fill"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}
export default Hero;
