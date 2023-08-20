import styled from "styled-components";

export const NavigationItemContainer = styled.div`
  width: var(--main-nav-content-width);
`;

export const NavigationItemList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const ToggleButton = styled.button`
  padding: 0;
  height: 48px;
  aspect-ratio: 1;
  background-color: transparent;
  color: inherit;
  border: 0;
  border-radius: 16px;
  outline-color: royalblue;
  transition: background-color 50ms ease;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #e8e8e8;
  }
`;
