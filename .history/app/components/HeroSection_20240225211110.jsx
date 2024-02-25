"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition
        
        className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600 ">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Divyanshi",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          ;
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
            Im a JavaScript developer with with 5+ years of experience in both
            frontend development . My strength lies in using my tech skills to
            help businesses grow. I have learned a lot over the years and enjoy
            working with others to make great digital products.
          </p>
          <div>
            <Link
              href={
                "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=divyanshi.rastogi105@gmail.com"
              }
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                Hire Me{" "}
              </button>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1MSO8mZSGPyJm-AXqfUJlZW7qvAMLTtAP/view?usp=sharing"
              }
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  {" "}
                  Download CV{" "}
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              className="absolute transform -translate-x-1/2  -translate-y-1/2 top-1/2 left-1/2"
              alt="hero-image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
