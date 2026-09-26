import { forwardRef } from "react";

type Props = {
  size?: number;
  pathclassName?: string;
  className?: string;
};

export const RoundedBorder = forwardRef<SVGSVGElement, Props>(
  ({ pathclassName, className, size = 32 }, ref) => {
    return (
      <svg
        ref={ref}
        className={className}
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          className={pathclassName}
          d="M0 32H32C32 32 21.8712 32 10.9474 22.3158C0.0236033 12.6316 0 -1.12366e-06 0 -1.12366e-06L0 32Z"
        />
      </svg>
    );
  },
);

RoundedBorder.displayName = "RoundedBorder";
