import Divisor from "@/components/Divisor";
import Text from "@/components/Text";
import { listObj } from "./listObj";
import { ChevronRight } from "lucide-react";
import { LinearBorder } from "@/components/LinearBorder";
import { OnHover, OutHover } from "@/types/animation";
import { useEffect, useRef, useState } from "react";
import { HoverAnimations } from "@/animations/hover.animations";
import gsap from "gsap";

type ProjectsListProps = {
  project: Project;
  onHover?: HoverAnimations;
};

type Project = {
  name: string;
  side: string;
  stack: string;
};

function Header() {
  return (
    <div
      className="w-full p-20! py-10! grid border-b border-(--primary-grid-color) "
      style={{
        gridTemplateColumns: "1fr 1fr 2fr",
      }}
    >
      <Text font="font-necosmic" className="text-(--primary-grid-color)">
        PROJECT NAME
      </Text>
      <Text font="font-necosmic" className="text-(--primary-grid-color)">
        SIDE
      </Text>
      <Text
        font="font-necosmic"
        className="relative text-end text-(--primary-grid-color)"
      >
        STACK
      </Text>
    </div>
  );
}

function ListItem({ project, onHover }: ProjectsListProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      ref={itemRef}
      onMouseOver={() => {
        if (!onHover || !itemRef.current) return;

        const rect = itemRef.current.getBoundingClientRect();

        onHover.On({ rect });
      }}
      onMouseOut={() => {
        if (!onHover || !itemRef.current) return;
        onHover.Out({});
      }}
      className="w-full grid"
      style={{ gridTemplateColumns: "1fr 1fr 2.0fr" }}
    >
      <Text className="uppercase" size="small-size">
        {project.name}
      </Text>
      <Text className="uppercase" size="small-size">
        {project.side}
      </Text>
      <Text className="uppercase text-end text-nowrap" size="small-size">
        {project.stack}
      </Text>
    </div>
  );
}

function List() {
  const isSelected = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState<HoverAnimations | null>(null);
  const on: OnHover = (props, element) => {
    if (!element || !props?.rect) return;

    const el = element[0];
    const elementtop = el.getBoundingClientRect().top;
    const currentY = gsap.getProperty(el, "y") as number;
    const PropsTop = props.rect.top;

    const distance = PropsTop - elementtop + currentY; // ← compensa o y já aplicado

    gsap.to(el, {
      y: distance,
      opacity: 1,
      duration: 0.5,
    });
  };
  const out: OutHover = (props, element) => {
    if (!element) return;

    gsap.to(element, {
      opacity: 0,
    });
  };

  useEffect(() => {
    if (!isSelected.current) return;

    const hover = new HoverAnimations({
      on,
      out,
      elements: [isSelected.current],
    });

    setHover(hover);
  }, []);

  return (
    <div className="p-20! flex flex-col gap-8 border-b border-(--primary-grid-color) relative cursor-pointer">
      <div
        className="w-full left-1/2 -translate-x-1/2 h-6 rounded-full z-1 absolute bg-foreground mix-blend-difference pointer-events-none opacity-0"
        ref={isSelected}
      ></div>
      {hover &&
        listObj.map((project, i) => (
          <ListItem key={i} project={project} onHover={hover} />
        ))}
    </div>
  );
}

function Other() {
  return (
    <div className="w-full h-full p-20! py-10! flex items-center gap-5 justify-end cursor-pointer">
      <Text size="normal-size" font="font-necosmic">
        Other Projects
      </Text>
      <div className="w-15 aspect-square bg-white relative flex justify-center items-center overflow-hidden">
        <LinearBorder
          size={25}
          className="absolute right-0 top-0 rotate-90"
          pathclassName="fill-background w-[40px] h-[40px]"
        />
        <ChevronRight color="var(--background)" className="-rotate-45" />
      </div>
    </div>
  );
}

export default function ProjectsList() {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Divisor />
      <Header />
      <List />
      <Divisor />
      <Other />
    </div>
  );
}
