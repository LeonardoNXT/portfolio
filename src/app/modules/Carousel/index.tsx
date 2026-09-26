import GradientOpacity from "@/components/GradientOpacity";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import Text from "@/components/Text";
import useAnimation from "@/hooks/useAnimation";
import { useRef } from "react";
import { CarouselAnimation } from "./animation";

function CarouselItems() {
  return (
    <>
      <Text size="hero-size" className="focus-carousel-item">System Architecture</Text>
      <Text size="hero-size" className="focus-carousel-item">Scalable Systems</Text>
      <Text size="hero-size" className="focus-carousel-item">Distributed Systems</Text>
      <Text size="hero-size" className="focus-carousel-item">Backend Engineering</Text>
      <Text size="hero-size" className="focus-carousel-item">Performance Engineering</Text>
      <Text size="hero-size" className="focus-carousel-item">Software Architecture</Text>
      <Text size="hero-size" className="focus-carousel-item">Event-Driven Systems</Text>
      <Text size="hero-size" className="focus-carousel-item">Engineering & UX</Text>
      <Text size="hero-size" className="focus-carousel-item">Architecture & Interaction</Text>
      <Text size="hero-size" className="focus-carousel-item">Resilient Systems</Text>
      <Text size="hero-size" className="focus-carousel-item">System & Experience</Text>
    </>
  );
}

export default function Carousel() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useAnimation(
    (context) => {
      const Animation = new CarouselAnimation({
        context: context,
        ref: sectionRef,
      });
      Animation.List();
    },
    {
      scope: sectionRef,
      revertOnUpdate: true,
    },
  );

  return (
    <Section.Element ref={sectionRef} classname="focus-carousel-section">
      <Grid className="border-(--primary-grid-color)" />
      <GradientOpacity position="top" className="z-20" />
      <GradientOpacity position="bottom" className="z-20" />
      <Section.Conteiner classname="h-screen overflow-hidden relative focus-carousel-container">
        <Text className="absolute top-10 left-10">AREAS I FOCUS ON</Text>
        <div className="w-full h-max flex flex-col items-center absolute bottom-0 carousel focus-carousel">
          <CarouselItems />
        </div>
      </Section.Conteiner>
    </Section.Element>
  );
}
