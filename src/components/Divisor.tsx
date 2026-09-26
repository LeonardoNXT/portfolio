type DivisorPropsType = {
  style?: React.CSSProperties;
  className?: string;
  color?: "primary-color" | "background" | "foreground" | "primary-grid-color";
};

const colorOptions = {
  background: "border-background",
  foreground: "border-foreground",
  "primary-color": "border-[var(--primary-color)]",
  "primary-grid-color": "border-[var(--primary-grid-color)]",
};

export default function Divisor({
  className = "",
  style,
  color = "background",
}: DivisorPropsType) {
  return (
    <div
      className={`${className} w-full border-b ${colorOptions[color]}`}
      style={{ ...style }}
    ></div>
  );
}
