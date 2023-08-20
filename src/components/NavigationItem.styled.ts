import styled from "styled-components";

export const NavigationListItem = styled.li`
  button {
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    gap: 20px;
    padding-block: 0;
    padding-inline: 12px;
    height: 48px;
    width: 100%;
    background-color: transparent;
    color: inherit;
    font-size: inherit;
    text-align: left;
    border: 0;
    border-radius: 16px;
    outline-color: royalblue;
    transition: background-color 50ms ease;
  }

  :hover {
    background-color: #f2f2f2;
  }

  :active {
    background-color: #e8e8e8;
  }

  & + & {
    margin-top: 8px;
  }
`;
