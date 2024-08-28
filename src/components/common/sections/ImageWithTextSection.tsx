'use client';

import React, { useMemo } from 'react';
import ThreeDButtonLink from '../buttons/ThreeDButtonLink';
import Image, {StaticImageData} from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

interface ImageWithTextSectionProps {
  designSide: 'right' | 'left';
  topTitle: string | null;
  title: string;
  paragraph: string;
  buttonText: string | null;
  buttonLink: string | null;
  imageSrc: StaticImageData;
  imageSrcMobile: StaticImageData | null;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageClass: string | null;
  priority: boolean;
}

export default function ImageWithTextSection({
  designSide,
  topTitle,
  title,
  paragraph,
  buttonText,
  imageSrc,
  imageSrcMobile,
  imageAlt,
  imageWidth,
  imageHeight,
  imageClass,
  buttonLink,
  priority
}: ImageWithTextSectionProps) {
  const isMobile = useIsMobile(1024);
  const image = useMemo(() => {
    return !!imageSrcMobile && isMobile ? imageSrcMobile : imageSrc;
  }, [imageSrc, imageSrcMobile, isMobile]);
  const includeButton = buttonLink && buttonText;

  return (
    <section
      className={`w-full pt-[2rem] lg:pt-0 pb-[2rem] flex ${designSide === 'left' ? 'flex-col-reverse' : 'flex-col justify-between'} lg:flex-row items-center gap-[1rem]`}
    >
      <Image
        priority={priority}
        src={image}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className={`${designSide === 'left' ? 'order-first' : 'order-last'} ${imageClass} sm:max-w-[500px] lg:max-w-[55%]`}
      />
      <div
        className={`flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-[8px] ${designSide === 'left' ? 'mx-auto' : ''}`}
      >
        <h2 className="uppercase">{topTitle}</h2>
        <h1 className="sm:max-w-[500px]">{title}</h1>
        <p className="pb-[15px] max-w-[500px]">{paragraph}</p>
        {includeButton && (
          <ThreeDButtonLink text={buttonText} link={buttonLink} />
        )}
      </div>
    </section>
  );
}
