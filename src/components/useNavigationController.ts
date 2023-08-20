import { FocusEvent, useState } from "react";
import { z } from "zod";
import { useMeasureViewport } from "../hooks/useMeasureViewport";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { useWindowEvent } from "../hooks/useWindowEvent";

const LARGE_MENU_STATE_KEY = "nvc-large-menu-expanded";
const MENU_STATE_SCHEMA = z.boolean();

export function useMainMenuController(breakPoint = 1260) {
  const { getItem } = useSessionStorage();
  const [isLargeMenuExpanded, onLargeMenuExpandedChange] = useState(
    getItem(LARGE_MENU_STATE_KEY, MENU_STATE_SCHEMA) ?? true
  );
  const [isSmallMenuExpanded, onSmallMenuExpandedChange] = useState(false);
  const [navigationRef, setNavigationRef] = useState<HTMLElement | null>(null);
  const { inlineSize } = useMeasureViewport();

  const isPastBreakpoint = inlineSize >= breakPoint;
  const isExpanded = isPastBreakpoint
    ? isLargeMenuExpanded
    : isSmallMenuExpanded;

  function onBlur(event: FocusEvent<HTMLElement>) {
    if (!navigationRef?.contains(event.relatedTarget)) {
      onCollapseSmallMenu();
    }
  }

  function onCollapseSmallMenu() {
    if (isPastBreakpoint || !isExpanded) return;

    onSmallMenuExpandedChange(false);
  }

  function onExpandedChange() {
    const callback = isPastBreakpoint
      ? onLargeMenuExpandedChange
      : onSmallMenuExpandedChange;

    callback((prev) => {
      if (isPastBreakpoint) {
        sessionStorage.setItem(LARGE_MENU_STATE_KEY, JSON.stringify(!prev));
      }

      return !prev;
    });
  }

  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") onCollapseSmallMenu();
  }

  useOnClickOutside([{ current: navigationRef }], onCollapseSmallMenu);

  useWindowEvent("keydown", onKeyDown);

  return {
    childItemProps: { onCollapseSmallMenu, onExpandedChange },
    navigationProps: {
      $isExpanded: isExpanded,
      onBlur,
      ref: setNavigationRef,
      /**
       * tabIndex is required for onBlur. Without it
       * relatedTarget and currentTarget read as null.
       */
      tabIndex: -1,
    },
  };
}
