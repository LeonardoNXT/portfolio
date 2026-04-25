"use client";

import { MouseProvider } from "@/context/mouse/mouse.provider";
import Home from "./modules/Home";
import Overlay from "@/components/Overlay";
import Header from "@/components/Header";

export default function App() {
  return (
    <MouseProvider>
      <Overlay.root>
        <Overlay.border />
        <Header.Conteiner>
          <Header.Notch />
          <Header.Nav />
        </Header.Conteiner>
        <main>
          <Home />
        </main>
      </Overlay.root>
    </MouseProvider>
  );
}
