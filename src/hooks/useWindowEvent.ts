import { useEffect } from "react";

export function useWindowEvent<K extends keyof WindowEventMap>(
  event: K,
  listener: (this: Window, event: WindowEventMap[K]) => void
) {
  useEffect(() => {
    window.addEventListener(event, listener);

    return () => {
      window.removeEventListener(event, listener);
    };
  }, [event, listener]);
}
