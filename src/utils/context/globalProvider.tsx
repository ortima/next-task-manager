'use client';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

import type { Theme } from '../constants/themes';
import { themes } from '../constants/themes';

interface GlobalContextType {
  theme: Theme;
  selectedTheme: string;
}

interface GlobalUpdateContextType {
  updateTheme: (newTheme: string) => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
export const GlobalUpdateContext = createContext<GlobalUpdateContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('light');

  const theme = themes[selectedTheme] || themes.light;

  const updateTheme = useCallback((newTheme: string) => {
    if (themes[newTheme]) {
      setSelectedTheme(newTheme);
    }
  }, []);

  const globalContextValue = useMemo(() => ({
    theme,
    selectedTheme
  }), [theme, selectedTheme]);

  console.log('globalContextValue', globalContextValue);

  const globalUpdateContextValue = useMemo(() => ({
    updateTheme
  }), [updateTheme]);

  console.log('globalContextValue', globalContextValue);
  return (
    <GlobalContext.Provider value={globalContextValue}>
      <GlobalUpdateContext.Provider value={globalUpdateContextValue}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};

console.log('useGlobalState', useGlobalState);

export const useGlobalUpdate = () => {
  const context = useContext(GlobalUpdateContext);
  if (!context) {
    throw new Error('useGlobalUpdate must be used within a GlobalProvider');
  }
  return context;
};

console.log('useGlobalUpdate', useGlobalUpdate);
