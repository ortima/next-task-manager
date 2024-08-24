'use client';

import styled from 'styled-components';

import { useGlobalState } from '@/src/utils/context/globalProvider';

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
`;

export const Sidebar = () => {
  const { theme } = useGlobalState();
  console.log(theme);
  return (
    <SidebarStyled theme={theme}>Sidebar</SidebarStyled>
  );
};
