import { MouseContext } from "@/context/mouse/mouse.context";
import { useContext } from "react";

export default function useMouse() {
  const mouse = useContext(MouseContext);

  return { positionRef: mouse.position };
}
