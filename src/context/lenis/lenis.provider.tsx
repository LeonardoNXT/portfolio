import { LenisContext } from "./lenis.context";
import { useEffect, useRef } from "react";
import ReactLenis, { LenisRef } from "lenis/react";
import gsap from "gsap";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef }}>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      {children}
    </LenisContext.Provider>
  );
}
