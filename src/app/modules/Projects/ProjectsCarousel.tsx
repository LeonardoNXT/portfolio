import { HoverAnimations } from "@/animations/hover.animations";
import Card from "@/components/Card";
import GradientOpacity from "@/components/GradientOpacity";
import { OnHover } from "@/types/animation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CardsContent = [
  {
    name: "WebGL Mode",
    description:
      "I developed the Mountain project to deepen my knowledge of WebGL experiences.",
    href: "/", // deve mudar com a rota projects
    image: "/assets/img/mountain-project.png",
    svg: "/assets/svg/shape.svg",
  },
  {
    name: "Experience Mode",
    description:
      "The Experience Mode served as a tool to deepen my knowledge of WebGL, R3F and other animation libraries like GSAP and Framer.",
    href: "/", // deve mudar com a rota projects
    image: "/assets/img/experience-project.png",
    svg: "/assets/svg/shape2.svg",
  },
  {
    name: "Newarch Project",
    description:
      "NewArch was my first major project. It was a zero-budget system built with Node and Express that still runs perfectly to this day.",
    href: "/", // deve mudar com a rota projects
    image: "/assets/img/newarch-project.png", // PNG provisório para implementação de webp
    svg: "/assets/svg/shape3.svg",
  },
];

export default function ProjectsCarousel() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const carousel = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState<HoverAnimations | null>(null);
  const [image, setImage] = useState<string>(
    "/assets/img/mountain-project.png",
  );

  const on: OnHover = (props, element) => {
    if (!props || !props.image || !element) return;

    gsap.to(element[0], {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (!props.image) return;
        setImage(props.image);

        gsap.to(element, {
          opacity: 1,
          duration: 0.5,
        });
      },
    });

    const cards = Array.from(element[1].querySelectorAll(".card-component"));
    const filtered = cards.filter((card) => !card.classList.contains("active"));

    gsap.to(filtered, {
      opacity: 0,
      duration: 0.5,
    });
  };
  const out: OnHover = (props, element) => {
    if (!element) return;
    gsap.to(element[0], {
      opacity: 0,
    });

    const cards = Array.from(element[1].querySelectorAll(".card-component"));
    const filtered = cards.filter((card) => !card.classList.contains("active"));

    gsap.to(filtered, {
      opacity: 1,
      duration: 0.5,
    });
  };

  useEffect(() => {
    if (!imageRef.current || !carousel.current) return;

    const hover = new HoverAnimations({
      on,
      out,
      elements: [imageRef.current, carousel.current],
    });

    setHover(hover);
  }, []);

  const router = useRouter();
  return (
    <div
      className="w-screen py-25! h-screen overflow-x-hidden relative"
      ref={carousel}
    >
      <div className="w-full absolute top-0 left-0 h-screen">
        <GradientOpacity color="background" position="top" className="z-10" />
        <Image
          fill
          src={image}
          alt="background"
          className="saturate-0 opacity-0"
          ref={imageRef}
        />
        <GradientOpacity
          color="background"
          position="bottom"
          className="z-10"
        />
      </div>
      <div
        className="w-auto absolute top-1/2 place-items-center left-0 carousel -translate-y-1/2 h-full grid gap-2.5 "
        style={{
          gridTemplateColumns: "repeat(9, 700px)",
        }}
      >
        {hover !== null &&
          CardsContent.map((content, i) => (
            <Card
              key={i}
              onHover={hover}
              name={content.name}
              description={content.description}
              href={content.href}
              svg={content.svg}
              image={content.image}
              router={router}
              index={i as 0 | 1 | 2}
            />
          ))}
        {hover !== null &&
          CardsContent.map((content, i) => (
            <Card
              key={i}
              onHover={hover}
              name={content.name}
              description={content.description}
              href={content.href}
              svg={content.svg}
              image={content.image}
              router={router}
              index={i as 0 | 1 | 2}
            />
          ))}
      </div>
    </div>
  );
}
