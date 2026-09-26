import { ScrollContext } from "@/context/scroll/scroll.context";
import { AnimationFunction, Scroll } from "@/context/scroll/scroll.type";
import { useContext, useEffect } from "react";

export function useScroll(animation: AnimationFunction) {
  const subscribe = useContext(ScrollContext);

  useEffect(() => {
    const unsubscribe = subscribe && subscribe(animation);

    return () => {
      if (unsubscribe) return unsubscribe();
    };
  }, []);
}
