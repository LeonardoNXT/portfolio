"use client";

import Carousel from "./modules/Carousel";
import Home from "./modules/Home";
import Philosophy from "./modules/Philosophy";
import AppProvider from "@/context/app/app.provider";

export default function App() {
  return (
    <AppProvider>
      <main>
        <Home />
        <Philosophy />
        <Carousel />
      </main>
    </AppProvider>
  );
}
