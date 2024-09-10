import React from "react";
import HeroImg from "../public/images/hero-img.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="container mx-auto py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
      <div id="hero-text" className="w-full md:w-1/2 space-y-6">
        <div>
          <h3>Hello I'm</h3>
          <h1>Amrit Ghimire</h1>
        </div>

        <p className="leading-7 [&:not(:first-child)]:mt-2">
          Dedicated to pushing the boundaries of electrical engineering, I
          specialize in designing innovative solutions that blend technology
          with practicality. My expertise in Electrical AutoCAD, PLC and HMI
          design, and Ignition Vision empowers me to create systems that are
          both efficient and reliable. Let's collaborate to bring ideas to life
          and drive progress.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href={"/resume.pdf"} target="_blank">
            <Button className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
              Resume
            </Button>
          </Link>
          <Button variant="secondary" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            About me
          </Button>
        </div>
      </div>

      <div
        id="hero-img"
        className="w-full md:w-1/2 flex justify-center md:justify-end"
      >
        <Image
          src={HeroImg}
          alt="Hero Image"
          className="rounded-lg shadow-xl max-w-full h-auto"
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
    </div>
  );
}