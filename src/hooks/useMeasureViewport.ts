import throttle from "lodash.throttle";
import { useEffect, useMemo, useState } from "react";

export function useMeasureViewport() {
  const [viewportSize, onViewportSizeChange] = useState<ResizeObserverSize>({
    blockSize: window.innerHeight,
    inlineSize: window.innerWidth,
  });

  const observer = useMemo(() => {
    return new ResizeObserver(
      throttle(
        ([documentBody]: ResizeObserverEntry[]) => {
          onViewportSizeChange(documentBody.borderBoxSize[0]);
        },
        1000 / 60,
        { trailing: true }
      )
    );
  }, []);

  useEffect(() => {
    observer.observe(document.body);

    return () => {
      observer.unobserve(document.body);
      observer.disconnect();
    };
  }, [observer]);

  return viewportSize;
}
