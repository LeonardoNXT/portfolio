import Divisor from "@/components/Divisor";
import { LinearBorder } from "@/components/LinearBorder";
import Section from "@/components/Section";
import FirstTopic from "./FirstTopic";
import SecondTopic from "./SecondTopic";
import AboutHeader from "./AboutHeader";
import ThirdTopic from "./ThirdTopic";

export default function About() {
  return (
    <Section.Element classname="pt-10!">
      <div className="absolute z-20">
        <LinearBorder
          size={200}
          pathclassName="absolute top-20 fill-background"
        />
      </div>

      <Section.Conteiner>
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
