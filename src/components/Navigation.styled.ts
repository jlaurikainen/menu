import styled, { css } from "styled-components";
import { VIEWPORT_BREAKPOINT } from "../constants";

export const MainNavigation = styled.nav<{ $isExpanded: boolean }>(
  ({ $isExpanded }) => css`
    --main-nav-inline-padding: 8px;
    --main-nav-container-width: 256px;
    --main-nav-content-width: calc(
      var(--main-nav-container-width) - var(--main-nav-inline-padding) * 2
    );

    box-sizing: border-box;
    display: grid;
    grid-template-columns: ${$isExpanded
      ? "var(--main-nav-content-width)"
      : "48px"};
    position: fixed;
    inset-block: 0;
    left: 0;
    padding-block: 16px;
    padding-inline: var(--main-nav-inline-padding);
    background-color: white;
    color: #333333;
    border-right: 1px solid lightgray;
    overflow: hidden;
    transition: grid-template-columns 200ms;

    @media (min-width: ${VIEWPORT_BREAKPOINT}px) {
      position: static;
      transition: none;
    }
  `
);
