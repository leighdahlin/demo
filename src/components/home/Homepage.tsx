import React from 'react';
import ImageWithTextSection from '../common/sections/ImageWithTextSection';
import HowItWorks from './HowItWorks';
import { getAssetPath } from '@/utils/assetPath';

export default function Home() {
  return (
    <div className="block w-full bg-off-white">
      <ImageWithTextSection
        designSide="right"
        topTitle="Leigh Dahlin"
        title="Welcome to Your Demo Environment"
        paragraph="Explore your preview of how a Content Management System (CMS) can simplify and enhance your website management experience. This demo environment gives you hands-on access to the tools you'll use to manage your site."
        buttonText="Get Started"
        imageSrc={getAssetPath('/images/homepage/demo-homepage.png')}
        imageSrcMobile={getAssetPath('/images/homepage/demo-hompage-mobile.png')}
        imageAlt="Pencil, pen, eraser and sharpener floating around"
        imageWidth={1350}
        imageHeight={932}
        imageClass={null}
        buttonLink="/get-started"
      />
      <HowItWorks/>
    </div>
  );
}