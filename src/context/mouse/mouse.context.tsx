import { createContext } from "react";
import { MouseContextType } from "./mouse.type";

export const MouseContext = createContext<MouseContextType>({
  position: null,
});
