import { useEffect, useRef } from "react";
import { MouseContext } from "./mouse.context";
import { MousePosition } from "./mouse.type";

export function MouseProvider({ children }: { children: React.ReactNode }) {
  const position = useRef<MousePosition>({ mouseX: 0, mouseY: 0, scrollY: 0 });

  const getMousePosition = (e: MouseEvent): void => {
    position.current.mouseX = e.clientX;
    position.current.mouseY = e.clientY;
  };
  const getScrollPosition = (): void => {
    position.current.scrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("mousemove", getMousePosition);
    window.addEventListener("scroll", getScrollPosition);

    return () => {
      window.removeEventListener("mousemove", getMousePosition);
    };
  }, []);

  return (
    <MouseContext.Provider
      value={{
        position,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
}
