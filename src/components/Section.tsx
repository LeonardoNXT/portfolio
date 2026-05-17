import { forwardRef } from "react";

type SectionPropsType = {
  style?: React.StyleHTMLAttributes<HTMLDivElement>;
  classname?: string;
  children: React.ReactNode;
};

const Element = forwardRef<HTMLDivElement, SectionPropsType>(function (
  { classname = "", children, ...style }: SectionPropsType,
  ref,
) {
  return (
    <section
      ref={ref}
      className={"w-full relative" + " " + classname}
      {...style}
    >
      {children}
    </section>
  );
});

Element.displayName = "SectionElement";

function Conteiner({ children, classname, ...style }: SectionPropsType) {
  return (
    <div className={"w-full relative z-10" + " " + classname} {...style}>
      {children}
    </div>
  );
}

const Section = {
  Conteiner: Conteiner,
  Element: Element,
};

export default Section;
