"use client";

import About from "./modules/About";
import Carousel from "./modules/Carousel";
import Home from "./modules/Home";
import Philosophy from "./modules/Philosophy";
import AppProvider from "@/context/app/app.provider";
import Projects from "./modules/Projects";
import Footer from "./modules/Footer";

export default function App() {
  return (
    <AppProvider>
      <main className="max-w-[100vw] overflow-hidden">
        <Home />
        <Philosophy />
        <Carousel />
        <About />
        <Projects />
        <Footer />
      </main>
    </AppProvider>
  );
}
