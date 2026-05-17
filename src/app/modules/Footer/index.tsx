import Grid from "@/components/Grid";
import Section from "@/components/Section";
import KnowMoreAbout from "./KnowMoreAbout";
import Divisor from "@/components/Divisor";
import Contacts from "./Contacts";
import End from "./End";

export default function Footer() {
  return (
    <Section.Element classname="bg-(--primary-color)">
      <Grid className="border-(--primary-grid-color) opacity-20" />
      <Section.Conteiner>
        <KnowMoreAbout />
        <Divisor className="h-2.5 bg-background" />
        <Contacts />
        <Divisor className="h-2.5 bg-background" />
        <End />
      </Section.Conteiner>
    </Section.Element>
  );
}
