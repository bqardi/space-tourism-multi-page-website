import { RefObject, useEffect } from "react";
type Handler = (event: MouseEvent | TouchEvent) => void;

function useClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T>[],
  handler: Handler
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      for (let i = 0; i < refs.length; i++) {
        const ref = refs[i];
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}

export default useClickOutside;
