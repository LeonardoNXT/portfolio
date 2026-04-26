"use client";

import About from "./modules/About";
import Carousel from "./modules/Carousel";
import Home from "./modules/Home";
import Philosophy from "./modules/Philosophy";
import AppProvider from "@/context/app/app.provider";
import Projects from "./modules/Projects";

export default function App() {
  return (
    <AppProvider>
      <main>
        <Home />
        <Philosophy />
        <Carousel />
        <About />
        <Projects />
      </main>
    </AppProvider>
  );
}
