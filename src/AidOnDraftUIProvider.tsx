"use client";
import React, { useEffect } from 'react';

interface AidOnDraftUIProviderProps {
  children: React.ReactNode;
}

export const AidOnDraftUIProvider: React.FC<AidOnDraftUIProviderProps> = ({ children }) => {
  useEffect(() => {
    // CSSを動的に読み込む
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/styles.css';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return <>{children}</>;
};
