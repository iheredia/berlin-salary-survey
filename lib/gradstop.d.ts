declare module "gradstop" {
  export default function gradStop(props: {
    stops: number;
    inputFormat: string;
    colorArray: string[];
  }): string[];
}
