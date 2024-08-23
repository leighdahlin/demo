import React from 'react';
import GlobalLayout from '@/components/common/GlobalLayout';
import Home from '@/components/home/Homepage';
import Script from 'next/script';
import Link from 'next/link';

export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  return {
    title: 'Leigh Dahlin - Innovative Frontend Development & Design',
    description:
      'Creating high-quality, innovative, and visually appealing websites tailored to your needs.',
    openGraph: {
      title: 'Leigh Dahlin - Innovative Frontend Development & Design',
      description:
        'Creating high-quality, innovative, and visually appealing websites tailored to your needs.',
      url: '/',
      siteName: 'Leigh Dahlin',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/images/link-preview.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function Homepage() {
  return (
    <>
      <GlobalLayout>
        <Link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
        <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></Script>
        <Home />
      </GlobalLayout>
    </>
  );
}
