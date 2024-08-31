"use client";
import React, { useEffect } from 'react';

interface AidOnDraftUIProviderProps {
  children: React.ReactNode;
}

export const AidOnDraftUIProvider: React.FC<AidOnDraftUIProviderProps> = ({ children }) => {
  useEffect(() => {
    // Tailwind CSS CDNスクリプトを追加
    const script = document.createElement('script');
    script.src = 'https://cdn.tailwindcss.com';
    script.async = true;
    document.head.appendChild(script);

    // カスタム設定を適用
    const configScript = document.createElement('script');
    configScript.textContent = `
      tailwind.config = {
        theme: {
          extend: {
            // ここにカスタムテーマの設定を追加
          }
        }
      }
    `;
    document.head.appendChild(configScript);

    return () => {
      // クリーンアップ: スクリプトを削除
      document.head.removeChild(script);
      document.head.removeChild(configScript);
    };
  }, []);

  return <>{children}</>;
};