'use client';

import { GlobalProvider } from '../utils/context/globalProvider';

interface ContextProviderProps {
  children: React.ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  return (
    <GlobalProvider>{children}</GlobalProvider>
  );
};
