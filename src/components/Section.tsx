type SectionPropsType = {
  style?: React.StyleHTMLAttributes<HTMLDivElement>;
  classname?: string;
  children: React.ReactNode;
};

function Element({ classname = "", children, ...style }: SectionPropsType) {
  return (
    <section className={"w-full relative" + " " + classname} {...style}>
      {children}
    </section>
  );
}
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
