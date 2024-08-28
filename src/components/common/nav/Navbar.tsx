'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import OutlinedButtonLink from '../buttons/OutlinedButtonLink';
import useIsMobile from '@/hooks/useIsMobile';
import Link from 'next/link';
import logoTextImg from "./img/logo-text.png";
import logoImg from "./img/logo.png"

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const isMobile = useIsMobile(768);
  const [mounted, setMounted] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const links = [
    {
      displayName: 'Get Started',
      link: '/get-started',
    },
    {
      displayName: 'CMS Experience',
      link: '/cms-experience',
    },
    {
      displayName: 'Interactive Features',
      link: '/interactive-features',
    },
  ];

  useEffect(() => {
    if (navOpen && !isMobile) {
      setNavOpen(false);
      setShouldAnimate(false);
    }
  }, [isMobile, navOpen, shouldAnimate]);

  useEffect(() => {
    setMounted(true); // Set mounted to true after component mounts
  }, []);

  useEffect(() => {
    // Check local storage for user preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    // Update local storage when dark mode changes
    if (mounted) {
      localStorage.setItem('darkMode', darkMode.toString());
      // Apply or remove 'dark' class from <body> based on darkMode state
      document.body.classList.toggle('dark', darkMode);
    }
  }, [darkMode, mounted]);

  useEffect(() => {
    //prevent scrolling behind the nav on mobile
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navOpen]);

  useEffect(() => {
    // Setting shouldAnimate to true after the component has mounted
    if (navOpen) {
      const timeout = setTimeout(() => {
        setShouldAnimate(true);
      }, 300); // Adjust the delay time as needed

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeout);
    }
  }, [navOpen]); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <header className="sticky top-0 z-40 shadow-lg bg-white flex justify-center drop-shadow-xl">
      <div className="flex flex-row justify-between w-full max-w-[85.75rem] items-center relative h-[6rem] mx-[0.625rem] md:mx-[1.5625rem]">
        <Link href="/">
          <Image
            src={logoTextImg}
            alt="logo"
            height={400}
            width={500}
            className="w-[100px]"
          />
        </Link>

        <nav className="flex flex-row space-x-8 items-center">
          {mounted &&
            (!isMobile ? (
              <ul className="hidden sm:flex justify-center items-center list-none gap-[35px] text-dark-blue">
                {links.map((l) => (
                  <li key={l.displayName} className="group relative">
                    <Link
                      href={l.link}
                      className="uppercase font-semibold tracking-[.05rem]"
                    >
                      {l.displayName}
                    </Link>
                    <div className="h-[.25rem] transition-[width] duration-250 ease-in-out w-0 bg-customGrey absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-[1.5rem] group-hover:right-[auto]" />
                  </li>
                ))}
                {/* <li>
                  <div
                    data-id="dark mode toggle"
                    className="flex justify-center items-center gap-[1rem]"
                  >
                    <label
                      id="switch"
                      className="relative inline-block w-[60px] h-[34px]"
                    >
                      <input
                        type="checkbox"
                        onChange={() => {
                          setDarkMode(!darkMode);
                        }}
                        className="h-[0px] w-[0px]"
                      />
                      <span
                        id="slider round"
                        className={`absolute cursor-pointer rounded-[34px] top-0 left-0 right-0 bottom-0 transition before:absolute before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:transition-all before:rounded-[50%] ${
                          darkMode
                            ? 'bg-off-white before:bg-golden before:translate-x-[26px]'
                            : 'bg-customGrey before:bg-off-white'
                        }`}
                      ></span>
                    </label>
                    <p className="text-black dark:text-off-white">Dark Mode</p>
                  </div>
                </li> */}
                <li>
                  <OutlinedButtonLink text="Login" link="/admin" />
                </li>
              </ul>
            ) : (
              <button
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="flex flex-col items-center justify-between w-[35px] h-[25px] p-0"
              >
                <div className="bg-dark-blue h-[2px] w-full " />
                <div className="bg-dark-blue h-[2px] w-full " />
                <div className="bg-dark-blue h-[2px] w-full " />
              </button>
            ))}
        </nav>
      </div>
      {mounted && navOpen && (
        <div
          id="mobile-nav"
          className={`fixed top-0 left-0 right-0 bottom-0 z-[105] flex flex-col transition-transform duration-300 ease-in-out bg-off-white ${
            shouldAnimate ? 'translate-x-0' : 'translate-x-full'
          } `}
        >
          <div className="flex flex-row justify-between w-full max-w-[85.75rem] items-center relative min-h-[3.125rem] mx-auto px-[0.875rem] md:px-[1.5625rem]">
            <Link
              href="/"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <Image
                src={logoImg}                
                alt="logo"
                height={400}
                width={500}
                className="w-[50px]"
              />
            </Link>
            <button
              onClick={() => {
                setShouldAnimate(false);
                const timeout = setTimeout(() => {
                  setNavOpen(!navOpen);
                }, 300); // Adjust the delay time as needed

                // Clear the timeout when the component unmounts
                return () => clearTimeout(timeout);
              }}
              className="flex flex-col items-center justify-between w-[27px] h-[27px] p-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-15 w-15 text-dark-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>{' '}
            </button>
          </div>
          <div className={`flex flex-col h-screen bg-off-white`}>
            <div className="h-screen border-t-[0.5px] border-customGrey">
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.displayName}
                    href={l.link}
                    className="p-[1rem] text-dark-blue border-b border-customGrey"
                  >
                    {l.displayName}
                  </a>
                ))}
                {/* <div
                  data-id="dark mode toggle"
                  className="flex justify-center items-center gap-[1rem] p-[1rem]"
                >
                  <label
                    id="switch"
                    className="relative inline-block w-[60px] h-[34px]"
                  >
                    <input
                      type="checkbox"
                      onChange={() => {
                        setDarkMode(!darkMode);
                      }}
                      className="h-[0px] w-[0px]"
                    />
                    <span
                      id="slider round"
                      className={`absolute cursor-pointer rounded-[34px] top-0 left-0 right-0 bottom-0 transition before:absolute before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:transition-all before:rounded-[50%] ${
                        darkMode
                          ? 'bg-off-white before:bg-golden before:translate-x-[26px]'
                          : 'bg-customGrey before:bg-off-white'
                      }`}
                    ></span>
                  </label>
                  <p className="text-black">Dark Mode</p>
                </div> */}
                <div className="my-[0.5rem] mx-[0.35rem]">
                  <OutlinedButtonLink
                    text="Contact"
                    link="/contact"
                    additionalFunction={() => {
                      setNavOpen(false);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
