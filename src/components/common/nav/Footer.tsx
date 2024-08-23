'use client';
import Link from 'next/link';
import OutlinedButtonLink from '../buttons/OutlinedButtonLink';
import { getAssetPath } from '@/utils/assetPath';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-soft-black mx-[auto] w-full shadow-custom-light-separation">
      <div className="h-[1px] bg-gradient-to-r from-bluegray to-golden w-ful hidden dark:block" />
      <div className="flex items-center justify-center">
        <div className="flex flex-col-reverse sm:flex-row items-center md:items-stretch justify-around gap-[2rem] md:gap-[0rem] md:justify-stretch w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem] py-[4rem]">
          <div className="md:w-[25%]">
            <img
              src={getAssetPath('/images/common/logo-text.png')}
              height={400}
              width={500}
              alt="logo"
              className="w-[200px]"
            />
          </div>
          <div className="flex flex-col-reverse gap-[2rem] md:gap-[0rem] md:w-[75%] md:flex-row">
            <div className="flex flex-col items-center md:w-2/3">
              <h2 className='text-dark-blue uppercase font-semibold tracking-[.05rem] pb-[0.5rem]'>Interested In Trying It Out?</h2>
              <OutlinedButtonLink text="Request Access" link="/request-access" />
              <div className="flex justify-center items-center gap-10 pt-[2rem]">
                <a
                  href="https://www.linkedin.com/in/leighdahlin/"
                  target="_blank"
                >
                  <img
                    src={getAssetPath('/images/common/footer-linkedin.png')}
                    height={30}
                    width={30}
                    alt="LinkenIn icon"
                    className="hover:transition-transform hover:scale-105"
                  />
                </a>
                <a href="https://github.com/leighdahlin" target="_blank">
                  <img
                    src={getAssetPath('/images/common/footer-github.png')}
                    height={35}
                    width={35}
                    alt="Logo"
                    className="hover:transition-transform hover:scale-105"
                  />
                </a>
                <a href="mailto:leigh.dahlin@gmail.com">
                  <img
                    src={getAssetPath('/images/common/footer-mail.png')}
                    height={35}
                    width={35}
                    alt="Mail icon"
                    className="hover:transition-transform hover:scale-105"
                  />
                </a>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start md:justify-end font-semibold md:w-1/3 gap-[2rem] text-dark-blue dark:text-off-white">
              <ul className="flex flex-col flex-wrap items-center sm:items-start gap-[1rem]">
                <li className="group relative w-fit">
                  <Link href="/get-started">Get Started</Link>
                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-customGrey absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
                <li className="group relative w-fit">
                  <Link href="/cms-experience">CMS Experience</Link>
                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-customGrey absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
                <li className="group relative w-fit">
                  <Link href="/interactive-features">Interative Features</Link>
                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-customGrey absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
                <li className="group relative w-fit">
                  <Link href="/admin">Login</Link>

                  <div className="h-[.15rem] transition-[width] duration-250 ease-in-out w-0 bg-customGrey absolute block right-auto bottom-[-.3125rem] top-[auto] group-hover:w-full group-hover:right-[auto]" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
