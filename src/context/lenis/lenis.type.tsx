import { LenisRef } from "lenis/react";
import { RefObject } from "react";

export type LenisContextType = {
  lenis: RefObject<LenisRef | null> | null;
};
