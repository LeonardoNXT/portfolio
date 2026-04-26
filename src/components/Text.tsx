type TextPropsType = {
  size?:
    | "small-size"
    | "normal-size"
    | "mid-size"
    | "large-size"
    | "extra-large-size"
    | "hero-size";
  className?: string;
  style?: React.CSSProperties;
  type?: "h1" | "p" | "span";
  font?:
    | "font-aeonik"
    | "font-necosmic"
    | "font-migra"
    | "font-grifinito"
    | "font-canopee";
  children: React.ReactNode;
};

const sizeClasses = {
  "small-size": "text-[length:var(--small-size)]",
  "normal-size": "text-[length:var(--normal-size)]",
  "mid-size": "text-[length:var(--mid-size)]",
  "large-size": "text-[length:var(--large-size)]",
  "extra-large-size": "text-[length:var(--extra-large-size)]",
  "hero-size": "text-[length:var(--hero-size)]",
};

export default function Text({
  size = "normal-size",
  className = "",
  style,
  font = "font-aeonik",
  type = "p",
  children,
}: TextPropsType) {
  const combinedClasses = `${font} ${sizeClasses[size]} ${className}`.trim();

  switch (type) {
    case "span":
      return (
        <span style={style} className={combinedClasses}>
          {children}
        </span>
      );
    case "h1":
      return (
        <h1 style={style} className={combinedClasses}>
          {children}
        </h1>
      );
    default:
      return (
        <p style={style} className={combinedClasses}>
          {children}
        </p>
      );
  }
}
