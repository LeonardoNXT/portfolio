type LinearBorderProps = {
  size?: number;
  pathclassName?: string;
  className?: string;
};

export function RoundedBorder({
  pathclassName,
  className,
  size,
}: LinearBorderProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        className={pathclassName}
        d="M0 32H32C32 32 21.8712 32 10.9474 22.3158C0.0236033 12.6316 0 -1.12366e-06 0 -1.12366e-06L0 32Z"
      />
    </svg>
  );
}
