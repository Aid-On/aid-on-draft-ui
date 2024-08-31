"use client";
import React, { useEffect } from 'react';
import styles from '../dist/styles.css';

interface AidOnDraftUIProviderProps {
  children: React.ReactNode;
}

export const AidOnDraftUIProvider: React.FC<AidOnDraftUIProviderProps> = ({ children }) => {
  useEffect(() => {
    // ビルドされたCSSを動的に追加
    const style = document.createElement('style');
    style.textContent = styles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
};