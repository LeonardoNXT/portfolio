import { HoverConstructorProps, OnAndOutHover } from "@/types/animation";

export class HoverAnimations {
  private readonly on: (props?: OnAndOutHover, elements?: Element[]) => void;
  private readonly out: (props?: OnAndOutHover, elements?: Element[]) => void;
  private readonly elements?: Element[];

  public constructor({ on, out, elements }: HoverConstructorProps) {
    this.on = on;
    this.out = out;
    this.elements = elements;
  }

  public On(props: OnAndOutHover) {
    this.on(props, this.elements);
  }

  public Out(props: OnAndOutHover) {
    this.out(props, this.elements);
  }
}
