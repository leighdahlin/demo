import React from 'react';
import { getAssetPath } from '@/utils/assetPath';

export default function LoadingPage() {
  return (
    <div className="relative bg-off-white dark-bg-dark-blue flex items-center justify-center h-full p-[25px]">
      <img
        src={getAssetPath('/images/loading/loading-background.png')}
        className="w-[221px] animate-pulse-slow"
        width={443}
        height={416}
        alt="abstract blobs"
      />
      <img
        src={getAssetPath('/images/loading/loading-text.png')}
        className="w-[150px] absolute top-[37%]"
        width={305}
        height={75}
        alt="Loading..."
      />
    </div>
  );
}
