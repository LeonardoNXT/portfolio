import Overlay from "@/components/Overlay";
import LenisProvider from "../lenis/lenis.provider";
import { MouseProvider } from "../mouse/mouse.provider";
import Header from "@/components/Header";
import ScrollProvider from "../scroll/scroll.provider";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
  }, []);

  return (
    <MouseProvider>
      <ScrollProvider>
        <LenisProvider>
          <Overlay.root>
            <Overlay.border />
            <Header.Conteiner>
              <Header.Notch />
              <Header.Nav />
            </Header.Conteiner>
            {children}
          </Overlay.root>
        </LenisProvider>
      </ScrollProvider>
    </MouseProvider>
  );
}
