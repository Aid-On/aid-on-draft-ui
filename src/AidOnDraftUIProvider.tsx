"use client";

import React, { useEffect } from 'react';

interface AidOnDraftUIProviderProps {
  children: React.ReactNode;
}

export const AidOnDraftUIProvider: React.FC<AidOnDraftUIProviderProps> = ({ children }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `/* Tailwindのスタイルがここにインライン化されます */`;
    document.head.appendChild(style);

    return () => {
      // クリーンアップ関数：コンポーネントがアンマウントされたときにスタイルを削除します
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
};
