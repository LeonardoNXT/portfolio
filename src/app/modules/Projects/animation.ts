import { TextAnimation } from "@/animations/text.animations";
import { ConstructorProps } from "@/types/animation";
import { RefObject } from "react";
import gsap from "@/lib/gsap.config";

export class ProjectsAnimation {
  private readonly context: gsap.Context;
  private readonly ref: RefObject<HTMLDivElement | null>;

  public constructor({ context, ref }: ConstructorProps) {
    this.context = context;
    this.ref = ref;
  }

  public Header() {
    const title = this.context.selector?.(".title");
    const resume = this.context.selector?.(".resume");
    const shape = this.context.selector?.(".shape-1");

    if (!title || !resume || !this.ref.current) return;

    TextAnimation.Scroll({
      element: title,
      trigger: title,
    }).ProgressiveLooking({ scrub: 1, end: "+=500 bottom" });

    TextAnimation.Scroll({
      element: resume,
      trigger: resume,
    }).ProgressiveOpacity({ scrub: 1, end: "+=500 bottom" });

    gsap.to(shape, {
      xPercent: -50,
      scrollTrigger: {
        trigger: shape,
        start: "top bottom",
        end: "+500 bottom",
        scrub: true,
      },
    });
  }

  public Description() {
    const description = this.context.selector?.(".description");

    if (!description || !this.ref.current) return;

    TextAnimation.Scroll({
      element: description,
      trigger: description,
    }).ProgressiveLooking({ end: "+=500 bottom", scrub: 1 });
  }

  public Carousel() {
    setTimeout(() => {
      const carousel = this.context.selector?.(".carousel");
      const cardImages = this.context.selector?.(".card-images");

      if (!carousel || !cardImages || !this.ref.current) return;

      const element = this.ref.current.querySelector(".carousel");
      const width = element?.getBoundingClientRect().width;

      if (!width) return;
      console.log(carousel, cardImages);

      gsap.to(carousel, {
        left: -width / 2 - window.screenX,
        ease: "none",
        scrollTrigger: {
          trigger: carousel,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(cardImages, {
        xPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: carousel,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, 1000);
  }
}
