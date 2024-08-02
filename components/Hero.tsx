"use client";
import Image from "next/image";
import React from "react";
import bgImage from "../public/Images/Default_convert_the_picture_to_a_pixar_the_boy_is_african_cart_0.jpg";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function Hero() {
    return (
        <section className="h-screen flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between mx-2 sm:mx-20">
            <div className="sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left">
                {/* Hero Heading */}
                <h3 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                    👋{" "}
                    <span className="text-transparent bg-clip-text custom-gradient">
            Heita !, I&apos;m Itumeleng Seema
          </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            "<🧑‍💻 Software Dev/>",
                            2000,
                            "< Code Enthusiast/>",
                            2000,
                            "< Recent Graduate/>",
                            2000,
                        ]}
                        wrapper="span"
                        speed={10}
                        repeat={Infinity}
                    />
                </h3>
                {/* Hero Subheading */}
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                    Solving Real Life Problems With Tech Solutions One Project At A Time.
                </p>
                {/* Buttons - Hidden on mobile */}
                <div className="hidden sm:flex space-x-4">
                    {/* <Link
            href="/#contact"
            className="px-6 py-3 rounded bg-gradient-to-br from-[#F1563c] via-purple-500 to-[#00b3c1] text-white"
          >
            Hire Me
          </Link>
          <Link
            href="/"
            className="px-1 py-1 rounded bg-gradient-to-br from-blue-500 to-purple-500 text-white"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded px-5 py-2">
              Download CV
            </span>
          </Link> */}
                </div>
            </div>

            {/* Hero Image */}
            <div className="sm:w-1/2 flex justify-center sm:justify-end mb-10 sm:mb-0">
                <div className="bg-[#181818] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] relative overflow-hidden rounded-full">
                    <Image
                        src={bgImage}
                        alt="hero image"
                        className="object-cover w-full h-full"
                        layout="fill"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
