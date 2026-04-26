import Background from "@/components/Background";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import Text from "@/components/Text";

export default function Home() {
  return (
    <Section.Element classname="h-screen rounded-[60] overflow-hidden">
      <Background.Conteiner>
        <Background.Gradient />
        <Grid className="border-(--second-grid-color) opacity-20" />
      </Background.Conteiner>
      <Section.Conteiner classname="h-full mix-blend-exclusion">
        <Text
          font="font-necosmic"
          className="text-[50px]! text-nowrap leading-40 absolute top-1/2 left-1/2 -translate-1/2 pointer-events-none"
        >
          Welcome to my portfolio
        </Text>
        <div className="flex gap-5 items-center absolute bottom-8 right-8">
          <Text size="small-size" className="w-[200]">
            DESIGN FOR SCALE AND EVOLUTION
          </Text>
          <Text size="small-size" className="w-[250]">
            ENGINEERED FOR PERFORMANCE AND RESILIENCE
          </Text>
        </div>
        <div className="flex gap-5 items-center absolute bottom-8 left-8">
          <Text size="small-size" className="w-[200]">
            CLARITY THROUGH SYSTEM DESIGN
          </Text>
          <Text size="small-size" className="w-[200] uppercase">
            Bridging systems and user experience
          </Text>
        </div>
      </Section.Conteiner>
    </Section.Element>
  );
}
