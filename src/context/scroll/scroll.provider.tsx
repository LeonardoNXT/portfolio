import { useEffect, useRef } from "react";
import { AnimationFunction, Scroll, ScrollSubscriber } from "./scroll.type";
import { ScrollContext } from "./scroll.context";

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const animations = useRef<Set<AnimationFunction>>(new Set());
  const previous = useRef<number>(0);
  const lastType = useRef<Scroll>("down");

  const publisher = () => {
    const current = window.scrollY;

    const notify = (scroll: Scroll) => {
      animations.current.forEach((animation) => {
        animation(scroll);
      });
    };

    if (current > previous.current && lastType.current !== "down") {
      notify("down");
      lastType.current = "down";
    }

    if (current < previous.current && lastType.current !== "up") {
      notify("up");
      lastType.current = "up";
    }

    previous.current = current;
  };

  const subscriber: ScrollSubscriber = (animation: AnimationFunction) => {
    animations.current.add(animation);

    return () => animations.current.delete(animation);
  };

  useEffect(() => {
    window.addEventListener("scroll", publisher);
    return () => window.removeEventListener("scroll", publisher);
  }, []);

  return (
    <ScrollContext.Provider value={subscriber}>
      {children}
    </ScrollContext.Provider>
  );
}
