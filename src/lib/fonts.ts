import localFont from "next/font/local";
import { Ovo } from "next/font/google";

export const century = localFont({
  src: "../../public/fonts/Century.ttf",
  variable: "--font-century",
});

export const bigCaslon = localFont({
  src: "../../public/fonts/BigCaslon.ttf",
  variable: "--font-big-caslon",
});

export const creatorsType = localFont({
  src: "../../public/fonts/creators_wavy.otf",
  variable: "--font-creators-type",
});

export const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
});