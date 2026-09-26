import { RoundedBorder } from "./RoundedBorder";
import Text from "./Text";
import { useScroll } from "@/hooks/useScroll";
import gsap from "gsap";
import { useRef } from "react";
import SiteNavigation from "./SiteNavigation";

type ConteinerPropsType = {
  children: React.ReactNode;
};

function Conteiner({ children }: ConteinerPropsType) {
  return (
    <header className="w-full h-auto px-2.5 fixed top-0 left-0 z-50">
      {children}
    </header>
  );
}

function Notch() {
  const notchRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const roundedLeftRef = useRef<SVGSVGElement | null>(null);
  const roundedRightRef = useRef<SVGSVGElement | null>(null);

  useScroll((direction) => {
    const validation =
      direction === "down" &&
      notchRef.current &&
      titleRef.current &&
      roundedLeftRef.current &&
      roundedRightRef.current;

    if (validation) {
      gsap.to(notchRef.current, {
        width: 0,
        height: 0,
        duration: 1,
        ease: "expo.inOut",
      });
      gsap.to(titleRef.current, {
        opacity: 0,
        yPercent: -100,
        duration: 1,
        ease: "expo.inOut",
      });
      gsap.to(roundedLeftRef.current, {
        height: 0,
        width: 0,
        duration: 1,
        ease: "expo.inOut",
      });
      gsap.to(roundedRightRef.current, {
        height: 0,
        width: 0,
        duration: 1,
        ease: "expo.inOut",
      });
    } else {
      gsap.to(notchRef.current, {
        width: 250,
        height: 30,
        duration: 1,
        ease: "expo.inOut",
      });
      gsap.to(titleRef.current, {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "expo.inOut",
      });
      gsap.to(roundedLeftRef.current, {
        height: 15,
        width: 15,
        duration: 1,
        ease: "expo.inOut",
      });
      gsap.to(roundedRightRef.current, {
        height: 15,
        width: 15,
        duration: 1,
        ease: "expo.inOut",
      });
    }
  });

  return (
    <div
      ref={notchRef}
      className="w-50 md:w-62.5 h-[30] absolute top-2.5 left-1/2 translate-x-[-50%] bg-background rounded-b-[15]"
    >
      <RoundedBorder
        size={15}
        className="absolute -translate-x-full fill-background rotate-180"
        ref={roundedLeftRef}
      />
      <div className="flex justify-center items-center relative w-full h-[30] overflow-hidden">
        <Text
          font="font-necosmic"
          size="small-size"
          className="absolute text-nowrap -translate-x-1/2 left-1/2 opacity-50 mb-2!"
          titleRef={titleRef}
        >
          Leonardo Leal
        </Text>
      </div>
      <RoundedBorder
        size={15}
        className="absolute top-0 right-0 translate-x-full fill-background rotate-90"
        ref={roundedRightRef}
      />
    </div>
  );
}

const Header = {
  Notch: Notch,
  Nav: SiteNavigation,
  Conteiner: Conteiner,
};

export default Header;
