import gsap from "gsap";
import { SplitText } from "gsap/all";

export class HomeAnimation {
  public static title() {
    const welcome = SplitText.create(".welcome-to", { type: "chars" });
    const le = SplitText.create(".le", { type: "chars" });

    const tl = gsap.timeline({
      repeat: -1,
    });

    if (!welcome || !le) return;

    welcome.chars.forEach((char) => {
      char.classList.add("char");
    });

    le.chars.forEach((char) => {
      char.classList.add("char");
    });

    tl.from(welcome.chars, {
      opacity: 0,

      filter: "blur(2px)",
      stagger: 0.05,

      ease: "power3.inOut",
      duration: 0.5,
    })

      .to(welcome.chars, {
        filter: "blur(0px)",

        duration: 0.5,

        opacity: 1,
        stagger: 0.05,
        ease: "power3.inOut",
      })
      .to(welcome.chars, {
        stagger: 0.05,
        opacity: 0,
        filter: "blur(2px)",
        duration: 0.5,
        ease: "power3.inOut",
      })
      .from(le.chars[0], {
        yPercent: -100,
        opacity: 0,
        filter: "blur(2px)",
        rotate: -45,
        ease: "power3.inOut",
        duration: 3,
      })
      .from(
        le.chars[1],
        {
          yPercent: 100,
          opacity: 0,
          filter: "blur(2px)",
          rotate: 45,
          ease: "power3.inOut",
          duration: 3,
        },
        "<",
      )
      .to(le.chars, {
        filter: "blur(0px)",
        yPercent: 0,
        duration: 2.5,
        opacity: 1,
        rotate: 0,
        stagger: 0.05,
        ease: "power1.inOut",
      })
      .to(le.chars[0], {
        yPercent: 100,
        opacity: 0,
        filter: "blur(2px)",
        rotate: 45,
        ease: "power3.inOut",
        duration: 3,
      })
      .to(
        le.chars[1],
        {
          yPercent: -100,
          opacity: 0,
          filter: "blur(2px)",
          rotate: -45,
          ease: "power3.inOut",
          duration: 3,
        },
        "<",
      );
  }
}
