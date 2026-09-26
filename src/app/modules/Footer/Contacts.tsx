import ImageTrail from "@/components/ImageTrail";
import { LinearBorder } from "@/components/LinearBorder";
import Text from "@/components/Text";
import { useRef } from "react";

const items = [
  "/assets/img/experience-project.png",
  "/assets/img/mountain-project.png",
  "/assets/img/newarch-project.png",
  "/assets/img/experience-project.png",
  "/assets/img/mountain-project.png",
  "/assets/img/newarch-project.png",
  "/assets/img/experience-project.png",
  "/assets/img/mountain-project.png",
  "/assets/img/newarch-project.png",
];

export default function Contacts() {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div
      className="h-screen w-full flex justify-center items-center relative"
      ref={ref}
    >
      <ImageTrail parentRef={ref} items={items} />
      <LinearBorder
        size={50}
        className="absolute left-2.5 top-0 "
        pathclassName="fill-background"
      />

      <LinearBorder
        size={50}
        className="absolute right-2.5 top-0 -rotate-270"
        pathclassName="fill-background"
      />

      <div className="w-full flex justify-center p-10! items-center relative">
        <div className="w-full h-px bg-background absolute top-0 left-0 opacity-29"></div>
        <Text font="font-necosmic" size="mid-size" className="text-background">
          Contacts
        </Text>
        <div className="w-full h-px bg-background absolute bottom-0 left-0 opacity-29"></div>
      </div>

      <LinearBorder
        size={50}
        className="absolute left-2.5 bottom-0 -rotate-90"
        pathclassName="fill-background"
      />

      <LinearBorder
        size={50}
        className="absolute right-2.5 bottom-0 rotate-180"
        pathclassName="fill-background"
      />
    </div>
  );
}
