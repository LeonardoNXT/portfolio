import { RefObject } from "react";

// default animation constructor class

export type ConstructorProps = {
  context: gsap.Context;
  ref: RefObject<HTMLDivElement | null>;
};

// customized constructor

export type OnAndOutHover = {
  svg?: string;
  image?: string;
  rect?: DOMRect;
};

export type OnHover = (props?: OnAndOutHover, element?: Element[]) => void;
export type OutHover = (
  props?: {
    svg?: string;
    image?: string;
  },
  element?: Element[],
) => void;

export type HoverConstructorProps = {
  on: OnHover;
  out: OutHover;
  elements?: Element[];
};
