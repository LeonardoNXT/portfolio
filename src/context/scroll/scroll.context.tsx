import { createContext } from "react";
import { ScrollSubscriber } from "./scroll.type";

export const ScrollContext = createContext<ScrollSubscriber>(null);
