type GradientOpacityPropsType = {
  position?: "top" | "bottom";
  color?: "primary-color" | "background" | "foreground";
  style?: React.CSSProperties;
  className?: string;
};

const gradientStyles = {
  top: {
    "primary-color": "bg-linear-to-b from-(--primary-color) to-transparent",
    background: "bg-linear-to-b from-(--background) to-transparent",
    foreground: "bg-linear-to-b from-(--foreground) to-transparent",
  },
  bottom: {
    "primary-color": "bg-linear-to-t from-(--primary-color) to-transparent",
    background: "bg-linear-to-t from-(--background) to-transparent",
    foreground: "bg-linear-to-t from-(--foreground) to-transparent",
  },
};

export default function GradientOpacity({
  position = "top",
  color = "background",
  style,
  className = "",
}: GradientOpacityPropsType) {
  const gradientClass = gradientStyles[position][color];

  return (
    <div
      className={`absolute w-full h-[40%] pointer-events-none ${gradientClass} ${position === "top" ? "top-0" : "bottom-0"} ${className}`}
      style={style}
    ></div>
  );
}
