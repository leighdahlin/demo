import React from 'react';
import ThreeDButtonLink from '../common/buttons/ThreeDButtonLink';
import { getAssetPath } from '@/utils/assetPath';

export default function PageNotFound() {
  return (
    <div className="relative bg-off-white dark:bg-soft-black flex flex-col gap-[2rem] items-center justify-center h-full">
      <img
          src={getAssetPath('/images/not-found/oops-bg.png')}
          alt="overlapping abstract pattern"
        width={2050}
        height={1010}
        className="max-h-[calc(100vh-96px)] w-auto"
      />
      <div className="absolute flex flex-col gap-[0.5rem] sm:gap-[1rem] lg:gap-[2rem] justify-center items-center">
        <img
          src={getAssetPath('/images/not-found/oops-text.png')}
          alt="Oops!"
          width={305}
          height={75}
          className="w-[125px] md:w-[200px] lg:w-[305px]"
        />
        <p className="text-black dark:text-off-white">
          There isn&apos;t a page here.
        </p>
        <ThreeDButtonLink text="Let's Go Home" link="/" />
      </div>
    </div>
  );
}
