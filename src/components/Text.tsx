import {
  CSSProperties,
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
  Ref,
} from "react";

type Size =
  | "small-size"
  | "normal-size"
  | "mid-size"
  | "large-size"
  | "extra-large-size"
  | "hero-size"
  | "fifty-size";

type Font =
  | "font-aeonik"
  | "font-necosmic"
  | "font-migra"
  | "font-grifinito"
  | "font-canopee";

const sizeClasses: Record<Size, string> = {
  "small-size": "text-[length:var(--small-size)]",
  "normal-size": "text-[length:var(--normal-size)]",
  "mid-size": "text-[length:var(--mid-size)]",
  "large-size": "text-[length:var(--large-size)]",
  "extra-large-size": "text-[length:var(--extra-large-size)]",
  "hero-size": "text-[length:var(--hero-size)]",
  "fifty-size": "text-[length:var(--fifty-size)]",
};

type TextProps<T extends ElementType> = {
  type?: T;
  size?: Size;
  font?: Font;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  titleRef?: Ref<HTMLParagraphElement>;
} & Omit<
  ComponentPropsWithoutRef<T>,
  "as" | "className" | "style" | "children"
>;

export default function Text<T extends ElementType = "p">({
  type,
  size = "normal-size",
  font = "font-aeonik",
  className = "",
  style,
  children,
  titleRef,
  ...rest
}: TextProps<T>) {
  const Component = type || "p";

  const combinedClasses = `${font} ${sizeClasses[size]} ${className}`.trim();

  return (
    <Component
      ref={titleRef}
      style={style}
      className={combinedClasses}
      {...rest}
    >
      {children}
    </Component>
  );
}
