import Section from "@/components/Section";
import Text from "@/components/Text";
import useAnimation from "@/hooks/useAnimation";
import { useRef } from "react";
import { PhilosophyAnimation } from "./animation";

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useAnimation(
    (context) => {
      const Animation = new PhilosophyAnimation({ context, ref: sectionRef });
      Animation.Title();
      Animation.Paragraphs();
    },
    {
      revertOnUpdate: true,
      scope: sectionRef,
    },
  );

  return (
    <Section.Element ref={sectionRef}>
      <Section.Conteiner classname="p-10! py-12 bg-background flex flex-col md:flex-row md:justify-between gap-5 md:gap-56">
        <Text
          font="font-aeonik"
          size="mid-size"
          className="w-full md:w-1/2 title text-justify md:text-left"
        >
          I focus on structure, not shortcuts — building systems that are clear,
          maintainable, and designed to evolve.
        </Text>
        <div className="w-1/2 flex flex-col md:flex-row gap-5 justify-between">
          <Text
            size="normal-size"
            font="font-aeonik"
            className="max-w-[200] paragraph1"
          >
            Behind every interface, there is a system.
          </Text>
          <Text
            size="normal-size"
            font="font-aeonik"
            className="max-w-[200] paragraph2"
          >
            What scales is not just code, but structure.
          </Text>
          <Text
            size="normal-size"
            font="font-aeonik"
            className="max-w-[200] paragraph3"
          >
            What performs is not just speed, but intention.
          </Text>
        </div>
      </Section.Conteiner>
    </Section.Element>
  );
}
