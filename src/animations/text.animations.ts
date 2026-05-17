import { SplitText } from "gsap/all";
import gsap from "@/lib/gsap.config";

type Scroll = {
  element: Element[];
  type?: "chars" | "words" | "lines" | "normal";
  trigger:
    | HTMLParagraphElement
    | HTMLSpanElement
    | HTMLHeadingElement
    | HTMLDivElement;
  makers?: boolean;
};

type ProgressiveOpacityProps = {
  scrub?: 1 | 0;
  start?: string;
  end?: string;
  stagger?: number;
  ease?: gsap.EaseString;
};

type ProgressiveLooking = {
  scrub?: 1 | 0;
  start?: string;
  end?: string;
  stagger?: number;
  ease?: gsap.EaseString;
};

type SetClassProps = {
  element: Element[];
  name: "chars" | "words" | "lines";
};
type TransformTextProps = {
  element: Element[];
  type: "chars" | "words" | "lines" | "normal";
};

export class TextAnimation {
  public static Scroll({
    element,
    trigger,
    type = "chars",
    makers = false,
  }: Scroll) {
    const text = this.tranformText({ element, type });

    const ProgressiveOpacity = ({
      scrub = 0,
      stagger = 0.05,
      start = "top bottom",
      end = "bottom bottom",
      ease = "power3.inOut",
    }: ProgressiveOpacityProps) => {
      gsap.set(text, {
        opacity: 0,
      });
      gsap.to(text, {
        opacity: 1,
        stagger: stagger,
        ease: ease,
        scrollTrigger: {
          trigger: trigger,
          start: start,
          end: end,
          scrub: scrub,
          markers: makers,
        },
      });
    };

    const ProgressiveLooking = ({
      scrub = 0,
      stagger = 0.05,
      start = "top bottom",
      end = "+=500 bottom",
      ease = "power3.inOut",
    }: ProgressiveLooking) => {
      gsap.set(text, {
        opacity: 0,
        rotate: -45,
        yPercent: -100,
      });

      gsap.to(text, {
        opacity: 1,
        rotate: 0,
        yPercent: 0,
        stagger: stagger,
        ease: ease,
        scrollTrigger: {
          trigger: trigger,
          start: start,
          end: end,
          scrub: scrub,
          markers: makers,
        },
      });
    };

    return {
      ProgressiveOpacity,
      ProgressiveLooking,
    };
  }

  public static tranformText({ element, type }: TransformTextProps): Element[] {
    let text = element;

    console.log(text);

    if (type !== "normal" && Array.isArray(text) && text.length === 1) {
      const { words, lines, chars } = SplitText.create(element, {
        type: `lines, words, ${type}`,
      });

      this.setClass({
        element: lines,
        name: "lines",
      });

      this.setClass({
        element: words,
        name: "words",
      });

      console.log(words);

      switch (type) {
        case "lines":
          text = lines;
        case "words":
          text = words;
        default:
          text = chars;
      }

      this.setClass({
        element: text,
        name: type,
      });
    }

    if (type !== "normal" && Array.isArray(text) && text.length > 1) {
      let index = 0;
      for (const part of text) {
        const { words, lines, chars } = SplitText.create(part, {
          type: `lines,words,${type}`,
        });

        let releaseText: null | Element[] = null;

        switch (type) {
          case "lines":
            releaseText = lines;
          case "words":
            releaseText = words;
          default:
            releaseText = chars;
        }

        this.setClass({
          element: releaseText,
          name: type,
        });

        if (index === 0) {
          text = releaseText;
        } else {
          text = [...text, ...releaseText];
        }
        index++;
      }
    }
    return text;
  }

  public static setClass({ element, name }: SetClassProps) {
    element.forEach((element) => {
      element.classList.add(name);
    });
  }
}
