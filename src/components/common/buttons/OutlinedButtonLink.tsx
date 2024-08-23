import React from 'react';
import { ButtonProps } from './ThreeDButtonLink';
import { useRouter } from 'next/navigation';

interface OutlinedButtonProps extends ButtonProps {
  additionalFunction?: () => void;
  className?: string;
}

export default function OutlinedButtonLink({
  text,
  link,
  additionalFunction,
  className,
}: OutlinedButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (additionalFunction) {
      additionalFunction();
    }
    router.push(link);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} w-fit p-[0.75rem] bg-off-white hover:bg-bluegray hover:border-bluegray text-center text-sm md:text-base rounded-[.25rem] text-darkGreen hover:text-off-white border border-darkGreen min-w-[175px] flex items-center justify-center`}
    >
      {text}
    </button>
  );
}
