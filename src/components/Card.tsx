import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { LinearBorder } from "./LinearBorder";
import Image from "next/image";
import Text from "./Text";
import { HoverAnimations } from "@/animations/hover.animations";
import { useRef } from "react";

type CardPropTypes = {
  name: string;
  description: string;
  svg: string;
  href: string;
  image: string;
  router: AppRouterInstance;
  onHover?: HoverAnimations;
  index: 0 | 1 | 2;
};

export default function Card({
  name,
  svg,
  description,
  href,
  image,
  router,
  index,
  onHover,
}: CardPropTypes) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={cardRef}
      className="w-full h-full max-h-[800] relative bg-white overflow-hidden mask-center mask-clip-fill card-component"
      style={{
        maskImage: `url("${svg}")`,
      }}
      onMouseOver={() => {
        if (!onHover || !cardRef.current) return;
        cardRef.current.classList.add("active");
        onHover.On({ image });
      }}
      onMouseOut={() => {
        if (!onHover || !cardRef.current) return;

        onHover.Out({});
        cardRef.current.classList.remove("active");
      }}
    >
      <Image
        alt="Ilustrative image about project"
        loading="eager"
        src={image}
        width={1920}
        height={1080}
        className={
          "card-images " +
          `absolute left-0 h-full w-auto max-w-none object-cover ${
            index === 0 && "saturate-0 contrast-120 brightness-70"
          }`
        }
      />

      <Text
        font="font-necosmic"
        size="mid-size"
        className="mix-blend-difference absolute top-1/2 left-1/2 -translate-1/2 text-nowrap"
      >
        {name}
      </Text>
    </div>
  );
}
