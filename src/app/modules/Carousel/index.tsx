import GradientOpacity from "@/components/GradientOpacity";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import Text from "@/components/Text";

function CarouselItems() {
  return (
    <>
      <Text size="hero-size">System Architecture</Text>
      <Text size="hero-size">Scalable Systems</Text>
      <Text size="hero-size">Distributed Systems</Text>
      <Text size="hero-size">Backend Engineering</Text>
      <Text size="hero-size">Performance Engineering</Text>
      <Text size="hero-size">Software Architecture</Text>
      <Text size="hero-size">Event-Driven Systems</Text>
      <Text size="hero-size">Engineering & UX</Text>
      <Text size="hero-size">Architecture & Interaction</Text>
      <Text size="hero-size">Resilient Systems</Text>
      <Text size="hero-size">System & Experience</Text>
    </>
  );
}

export default function Carousel() {
  return (
    <Section.Element>
      <Grid className="border-(--primary-grid-color)" />
      <GradientOpacity position="top" className="z-20" />
      <GradientOpacity position="bottom" className="z-20" />
      <Section.Conteiner classname="h-screen overflow-hidden">
        <Text className="absolute top-10 left-10">AREAS I FOCUS ON</Text>
        <div className="w-full h-full flex flex-col items-center">
          <CarouselItems />
        </div>
      </Section.Conteiner>
    </Section.Element>
  );
}
