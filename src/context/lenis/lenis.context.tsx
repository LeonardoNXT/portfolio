import { createContext } from "react";
import { LenisContextType } from "./lenis.type";

export const LenisContext = createContext<LenisContextType>({
  lenis: null,
});
