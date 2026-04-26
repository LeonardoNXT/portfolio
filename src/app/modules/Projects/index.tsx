import Background from "@/components/Background";
import GradientOpacity from "@/components/GradientOpacity";
import Grid from "@/components/Grid";
import { RoundedBorder } from "@/components/RoundedBorder";
import Section from "@/components/Section";
import Text from "@/components/Text";
import ProjectHeader from "./ProjectHeader";
import Divisor from "@/components/Divisor";

export default function Projects() {
  return (
    <Section.Element>
      <Grid className="border-(--primary-grid-color)" />
      <GradientOpacity color="background" position="top" className="z-10" />
      <Section.Conteiner>
        <ProjectHeader />
        <Divisor color="primary-grid-color" />
        <div className="p-15! w-1/2">
          <Text size="fifty-size" font="font-aeonik">
            A scalable platform for real-time emotional insights.
          </Text>
        </div>
        <Divisor color="primary-grid-color" />
      </Section.Conteiner>
    </Section.Element>
  );
}
