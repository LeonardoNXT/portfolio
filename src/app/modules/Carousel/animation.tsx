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

    const section = this.ref.current;
    const list = carousel[0] as HTMLElement;
    const media = gsap.matchMedia();

    media.add("(max-width: 1100px)", () => {
      const container = section.querySelector<HTMLElement>(".focus-carousel-container");
      if (!container) return;

      gsap.fromTo(list, { y: 0, yPercent: 0 }, {
        y: () => -Math.max(0, list.offsetHeight - container.clientHeight + 224),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          end: "bottom 25%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    media.add("(min-width: 1101px)", () => {
      gsap.to(list, {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
  }
}
