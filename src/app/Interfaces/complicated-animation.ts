export interface ComplicatedAnimation {
  params: { coordinates: number[]; position: string; tip?: string }[];
  componentName: string | string[];
  name?: string;
  highlighted?: string[];
  rotationCamera?: { alpha: number; beta: number };
}
