export type TransitionType = "column-shutter" | "diagonal-slices" | "liquid-curtain";

export interface TransitionContextType {
  transitionType: TransitionType;
  setTransitionType: (type: TransitionType) => void;
  isTransitioning: boolean;
  triggerTransition: (href: string) => Promise<void>;
}
