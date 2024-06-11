export interface AnimationParams {
  from: number;
  to: number;
  componentName: string | string[];
  position: string;
  name?: string;
  tip?: string;
  highlighted?: string[];
  rotationCamera?: { alpha: number; beta: number };
}
