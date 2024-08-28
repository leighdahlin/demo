import React from 'react';
import Image from 'next/image';
import loadingBgImg from "./img/loading-background.png";
import loadingTextImg from "./img/loading-text.png"

export default function LoadingPage() {
  return (
    <div className="relative bg-off-white dark-bg-dark-blue flex items-center justify-center h-full p-[25px]">
      <Image
        src={loadingBgImg}
        className="w-[221px] animate-pulse-slow"
        width={443}
        height={416}
        alt="abstract blobs"
      />
      <Image
        src={loadingTextImg}
        className="w-[150px] absolute top-[37%]"
        width={305}
        height={75}
        alt="Loading..."
      />
    </div>
  );
}
