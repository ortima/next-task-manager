"use client";

import styled from "styled-components";

interface GlobalStyleProviderProps {
  children: React.ReactNode;
}

const GlobalStyles = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;
`;

export const GlobalStyleProvider = ({ children }: GlobalStyleProviderProps) => {
  return <GlobalStyles>{children}</GlobalStyles>;
};
