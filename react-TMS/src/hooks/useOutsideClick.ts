import { useEffect, type RefObject } from "react";

export const useOnClickOutside = (ref: RefObject<HTMLDivElement | null>, handler: (event: MouseEvent) => void) => {
  useEffect(() => {
    const listener = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler(e as MouseEvent);
      }
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};