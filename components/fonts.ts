import { Lora, Montserrat } from "next/font/google";

const lora = Lora({ subsets: ["latin", "latin-ext"], variable: "--lora" });
const montserrat = Montserrat({ subsets: ["latin", "latin-ext"], variable: "--montserrat" });

export { montserrat, lora };
