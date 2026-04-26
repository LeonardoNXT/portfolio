import Overlay from "@/components/Overlay";
import LenisProvider from "../lenis/lenis.provider";
import { MouseProvider } from "../mouse/mouse.provider";
import Header from "@/components/Header";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MouseProvider>
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
    </MouseProvider>
  );
}
