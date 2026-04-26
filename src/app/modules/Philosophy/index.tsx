import Section from "@/components/Section";
import Text from "@/components/Text";

export default function Philosophy() {
  return (
    <Section.Element>
      <Section.Conteiner classname="p-10! py-12 bg-background flex justify-between gap-56">
        <Text font="font-aeonik" size="mid-size" className="w-1/2">
          I focus on structure, not shortcuts — building systems that are clear,
          maintainable, and designed to evolve.
        </Text>
        <div className="w-1/2 flex justify-between">
          <Text size="normal-size" font="font-aeonik" className="max-w-[200]">
            Behind every interface, there is a system.
          </Text>
          <Text size="normal-size" font="font-aeonik" className="max-w-[200]">
            What scales is not just code, but structure.
          </Text>
          <Text size="normal-size" font="font-aeonik" className="max-w-[200]">
            What performs is not just speed, but intention.
          </Text>
        </div>
      </Section.Conteiner>
    </Section.Element>
  );
}
