import Divisor from "@/components/Divisor";
import { LinearBorder } from "@/components/LinearBorder";
import Section from "@/components/Section";
import FirstTopic from "./FirstTopic";
import SecondTopic from "./SecondTopic";
import AboutHeader from "./AboutHeader";
import ThirdTopic from "./ThirdTopic";
import { useRef } from "react";
import useAnimation from "@/hooks/useAnimation";
import { AboutAnimation } from "./animation";

export default function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useAnimation(
    (context) => {
      const Animation = new AboutAnimation({ context, ref: sectionRef });
      Animation.Conteiner();
      Animation.Header();
      Animation.FirstTopic();
      Animation.SecondTopic();
      Animation.ThirdTopic();
    },
    { scope: sectionRef },
  );
  return (
    <Section.Element classname="pt-10!" ref={sectionRef}>
      <div className="absolute z-20">
        <LinearBorder
          size={200}
          pathclassName="absolute top-20 fill-background"
        />
      </div>

      <Section.Conteiner classname="conteiner">
        <div className="w-full pt-25! p-10! bg-(--primary-color)">
          <AboutHeader />
          <FirstTopic />
          <Divisor />
          <SecondTopic />
          <Divisor />
          <ThirdTopic />
        </div>
      </Section.Conteiner>

      <div className="absolute bottom-0 rotate-180 right-0 z-20">
        <LinearBorder size={200} pathclassName="absolute fill-background" />
      </div>
    </Section.Element>
  );
}
