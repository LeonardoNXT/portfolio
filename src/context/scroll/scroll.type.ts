export type Scroll = "up" | "down";
export type AnimationFunction = (scroll: Scroll) => void;

export type ScrollSubscriber = ((func: AnimationFunction) => () => void) | null;
