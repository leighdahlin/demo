import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  text: string;
  link: string;
  className?: string;
}

export default function ThreeDButtonLink({
  text,
  link,
  className,
}: ButtonProps) {
  return (
    <div
      className={`${className} text-sm w-content min-w-[175px] group relative transition duration-300 before:bg-darkGreen before:rounded-[12px] before:h-[calc(100%+3px)] hover:before:h-[calc(100%+5px)] before:w-[calc(100%+3.5px)] hover:before:w-[calc(100%+5.5px)] before:absolute before:left-0 before:top-0 before:transition before:transform before:translate-x-[2px] before:translate-y-[2px] before:ease-in-out`}
    >
      <Link
        href={link}
        className={`bg-off-white text-center text-darkGreen font-medium py-[10px] px-[20px] rounded-[12px] border-[3px] border-darkGreen relative z-10 block group-hover:transform group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]`}
      >
        {text}
      </Link>
    </div>
  );
}
