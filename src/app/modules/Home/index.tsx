import Background from "@/components/Background";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import Text from "@/components/Text";

export default function Home() {
  return (
    <Section.Element classname="h-screen relative">
      <Background.Conteiner>
        <Background.Gradient />
        <Grid className="border-(--second-grid-color) opacity-20" />
      </Background.Conteiner>
      <Section.Conteiner classname="h-full mix-blend-soft-light">
        <Text
          font="font-necosmic"
          className="text-[900px] leading-0 absolute top-1/2 left-1/2 -translate-1/2"
        >
          LE
        </Text>
      </Section.Conteiner>
    </Section.Element>
  );
}
