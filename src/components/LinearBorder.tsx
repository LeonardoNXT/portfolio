type LinearBorderProps = {
  size?: number;
  className?: string;
};

export function LinearBorder({ className, size = 32 }: LinearBorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path d="M0 0H100L100 100L0 100Z" className={className || ""} />
    </svg>
  );
}
