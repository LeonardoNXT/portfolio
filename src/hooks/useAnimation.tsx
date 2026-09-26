import { ContextSafeFunc, useGSAP, useGSAPConfig } from "@gsap/react";

type AnimationFunction = (
  context: gsap.Context,
  contextSafe?: gsap.ContextSafeFunc,
) => void;

export default function useAnimation(
  func: AnimationFunction,
  config?: useGSAPConfig,
) {
  useGSAP((context, contextSafe) => {
    func(context, contextSafe);
  }, config);
}
