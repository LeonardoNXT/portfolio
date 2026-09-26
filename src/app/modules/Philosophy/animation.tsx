import { TextAnimation } from "@/animations/text.animations";
import { RefObject } from "react";

type ConstructorProps = {
  context: gsap.Context;
  ref: RefObject<HTMLDivElement | null>;
};

export class PhilosophyAnimation {
  private readonly context: gsap.Context;
  private readonly ref: RefObject<HTMLDivElement | null>;

  public constructor({ context, ref }: ConstructorProps) {
    this.context = context;
    this.ref = ref;
  }

  public Title() {
    const title = this.context.selector?.(".title");

    if (!title || !this.ref.current) return;

    TextAnimation.Scroll({
      element: title,
      trigger: this.ref.current,
      type: "chars",
    }).ProgressiveLooking({ scrub: 1, end: "+=500 bottom" });
  }

  public Paragraphs() {
    const paragraph1 = this.context.selector?.(".paragraph1");
    const paragraph2 = this.context.selector?.(".paragraph2");
    const paragraph3 = this.context.selector?.(".paragraph3");

    if (!paragraph1 || !paragraph2 || !paragraph2 || !this.ref.current) return;

    TextAnimation.Scroll({
      element: [paragraph1, paragraph2, paragraph3],
      trigger: this.ref.current,
      type: "chars",
    }).ProgressiveOpacity({ end: "+=500 bottom" });
  }
}
