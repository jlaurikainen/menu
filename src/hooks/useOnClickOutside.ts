import { RefObject } from "react";
import { useWindowEvent } from "./useWindowEvent";

export function useOnClickOutside(
  refs: RefObject<HTMLElement>[],
  callback: () => void
) {
  function handler(event: PointerEvent) {
    if (!refs.some((ref) => ref.current?.contains(event.target as Node))) {
      callback();
    }
  }

  useWindowEvent("pointerdown", handler);
}
