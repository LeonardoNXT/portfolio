type LinearBorderProps = {
  size?: number;
  pathclassName?: string;
  className?: string;
};

export function LinearBorder({
  className = "",
  pathclassName = "",
  size = 32,
}: LinearBorderProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      viewBox="0 0 200 200"
      fill="none"
    >
      <path d="M0 0H200L102 97L0 200V0Z" className={pathclassName} />
    </svg>
  );
}
