import { RefObject } from "react";
import gsap from "@/lib/gsap.config";
import { ConstructorProps } from "@/types/animation";

export class CarouselAnimation {
  private readonly context: gsap.Context;
  private readonly ref: RefObject<HTMLDivElement | null>;

  public constructor({ context, ref }: ConstructorProps) {
    this.context = context;
    this.ref = ref;
  }

  public List() {
    const carousel = this.context.selector?.(".carousel");

    if (!carousel || !this.ref.current) return;

    gsap.to(carousel, {
      yPercent: 40,
      ease: "none",
      scrollTrigger: {
        trigger: this.ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }
}
