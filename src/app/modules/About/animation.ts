import { ConstructorProps } from "@/types/animation";
import { RefObject } from "react";
import gsap from "@/lib/gsap.config";
import { TextAnimation } from "@/animations/text.animations";

export class AboutAnimation {
  private readonly context: gsap.Context;
  private readonly ref: RefObject<HTMLDivElement | null>;

  public constructor({ context, ref }: ConstructorProps) {
    this.context = context;
    this.ref = ref;
  }

  public Conteiner() {
    const conteiner = this.context.selector?.(".conteiner");

    if (!this.ref.current || !conteiner) return;

    gsap.set(conteiner, {
      opacity: 0,
    });
    gsap.to(conteiner, {
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: this.ref.current,
        start: "top bottom",
        end: "+=200 bottom",
        scrub: 1,
      },
    });
  }

  public Header() {
    const header = this.context.selector?.(".header");
    const number = this.context.selector?.(".number");
    const about = this.context.selector?.(".about");
    const aboutText = this.context.selector?.(".about-text");
    const mywords1 = this.context.selector?.(".my-words-1");
    const mywords2 = this.context.selector?.(".my-words-2");

    if (
      !header ||
      !number ||
      !about ||
      !aboutText ||
      !mywords1 ||
      !mywords2 ||
      !this.ref.current
    )
      return;

    TextAnimation.Scroll({
      element: number,
      trigger: header,
    }).ProgressiveLooking({});

    TextAnimation.Scroll({
      element: aboutText,
      trigger: header,
    }).ProgressiveOpacity({
      end: "+=500 bottom",
    });

    TextAnimation.Scroll({
      element: [mywords1, mywords2],
      trigger: header,
    }).ProgressiveLooking({
      end: "+=500 bottom",
    });
    TextAnimation.Scroll({
      element: about,
      trigger: header,
    }).ProgressiveOpacity({
      end: "+=500 bottom",
    });
  }

  public FirstTopic() {
    const resume = this.context.selector?.(".first-resume");
    const subTitle = this.context.selector?.(".first-subTitle");
    const title = this.context.selector?.(".first-title");

    if (!resume || !subTitle || !title || !this.ref.current) return;

    TextAnimation.Scroll({
      element: resume,
      trigger: resume,
    }).ProgressiveLooking({ scrub: 1, end: "+=500 bottom" });

    TextAnimation.Scroll({
      element: title,
      trigger: title,
      type: "normal",
    }).ProgressiveOpacity({ scrub: 1, end: "+=500 bottom" });

    TextAnimation.Scroll({
      element: subTitle,
      trigger: subTitle,
    }).ProgressiveLooking({ scrub: 1, end: "+=500 bottom" });
  }
  public SecondTopic() {
    const resume = this.context.selector?.(".second-resume");
    const subTitle = this.context.selector?.(".second-subTitle");
    const title = this.context.selector?.(".second-title");

    if (!resume || !subTitle || !title || !this.ref.current) return;

    TextAnimation.Scroll({
      element: title,
      trigger: title,
      type: "normal",
    }).ProgressiveOpacity({ scrub: 1, end: "+=500 bottom" });

    TextAnimation.Scroll({
      element: resume,
      trigger: resume,
    }).ProgressiveLooking({ scrub: 1, end: "+=500 bottom" });
    TextAnimation.Scroll({
      element: subTitle,
      trigger: subTitle,
    }).ProgressiveLooking({ scrub: 1, end: "+=500 bottom" });
  }

  public ThirdTopic() {
    const resume = this.context.selector?.(".third-resume");
    const subTitle = this.context.selector?.(".third-subTitle");
    const title = this.context.selector?.(".third-title");

    if (!resume || !subTitle || !title || !this.ref.current) return;

    TextAnimation.Scroll({
      element: resume,
      trigger: resume,
    }).ProgressiveLooking({ scrub: 1, end: "+=500 bottom" });

    TextAnimation.Scroll({
      element: title,
      trigger: title,
      type: "normal",
    }).ProgressiveOpacity({ scrub: 1, end: "+=500 bottom" });

    TextAnimation.Scroll({
      element: subTitle,
      trigger: subTitle,
    }).ProgressiveLooking({ scrub: 1, end: "+=500 bottom" });
  }
}
