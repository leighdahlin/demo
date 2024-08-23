import React from 'react';
import GlobalLayout from '@/components/common/GlobalLayout';
import LoadingPage from '@/components/loading/LoadingPage';

export default function Loading() {
  return (
    <GlobalLayout>
      <LoadingPage />
    </GlobalLayout>
  );
}
