import GradientOpacity from "@/components/GradientOpacity";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import ProjectHeader from "./ProjectsHeader";
import Divisor from "@/components/Divisor";
import ProjectsDescription from "./ProjectsDescription";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectsList from "./ProjectsList";
import { useRef } from "react";
import useAnimation from "@/hooks/useAnimation";
import { ProjectsAnimation } from "./animation";

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useAnimation(
    (context) => {
      const Animation = new ProjectsAnimation({
        context,
        ref: sectionRef,
      });

      Animation.Header();
      Animation.Description();
      Animation.Carousel();
    },
    { scope: sectionRef, revertOnUpdate: true },
  );

  return (
    <Section.Element ref={sectionRef}>
      <Grid className="border-(--primary-grid-color)" />
      <GradientOpacity color="background" position="top" className="z-10" />
      <Section.Conteiner>
        <ProjectHeader />
        <Divisor color="primary-grid-color" />
        <ProjectsDescription />
        <Divisor color="primary-grid-color" />
        <ProjectsCarousel />
        <Divisor color="primary-grid-color" />
        <ProjectsList />
      </Section.Conteiner>
    </Section.Element>
  );
}
