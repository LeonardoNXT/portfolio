import { RefObject } from "react";

export type MousePosition = {
  mouseX: number;
  mouseY: number;
  scrollY: number;
};

export type MouseContextType = {
  position: RefObject<MousePosition> | null;
};
