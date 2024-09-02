"use client";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const sidebar = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (sidebar.current && !sidebar.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  return (
    <>
      {/* hamburger menu */}
      <div className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 cursor-pointer"
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`fixed z-30 bg-primary-foreground w-[60%] h-full top-0 right-0 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="p-4 md:p-8 flex items-center justify-end">
          <div id="mark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 cursor-pointer"
              onClick={handleClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </header>
        <div className="h-full flex flex-col items-center justify-center">
          <ul className="flex items-center justify-center flex-col gap-8 w-full">
            <li className="w-full">
              <Link
                href={"/"}
                onClick={handleClick}
                className="hover:bg-muted p-4 w-full block text-center"
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                href={"/"}
                onClick={handleClick}
                className="hover:bg-muted p-4 w-full block text-center"
              >
                About
              </Link>
            </li>
            <li className="w-full">
              <Link
                href={"/"}
                onClick={handleClick}
                className="hover:bg-muted p-4 w-full block text-center"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
