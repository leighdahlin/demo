import React from 'react';
import { nunito } from '@/app/fonts';

import Navbar from './nav/Navbar';
import Footer from './nav/Footer';

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={nunito.className}>
        <div className="flex flex-col justify-between min-h-screen bg-off-white">
          <Navbar />
          <main className="block min-h-[100vh - 291px] w-full flex items-center justify-center">
            <div className="flex flex-col justify-center w-full max-w-[85.75rem] mx-[0.625rem] md:mx-[1.5625rem]">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
