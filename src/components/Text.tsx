type TextPropsType = {
  size?:
    | "small-size"
    | "normal-size"
    | "mid-size"
    | "large-size"
    | "extra-large-size"
    | "hero-size";
  className?: string;
  style?: React.StyleHTMLAttributes<HTMLParagraphElement>;
  type?: "h1" | "p" | "span";
  font?:
    | "font-aeonik"
    | "font-necosmic"
    | "font-migra"
    | "font-grifinito"
    | "font-canopee";
  children: string;
};

export default function Text({
  size = "normal-size",
  className,
  style,
  font = "font-aeonik",
  type = "p",
  children,
}: TextPropsType) {
  switch (type) {
    case "p":
      return (
        <p {...style} className={`${font} text-(--${size}) ${className}`}>
          {children}
        </p>
      );
    case "span":
      return (
        <span {...style} className={`${font} text-(--${size}) ${className}`}>
          {children}
        </span>
      );
    case "h1":
      <h1 {...style} className={`${font} text-(--${size}) ${className}`}>
        {children}
      </h1>;
  }
}
