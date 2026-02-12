import { Agdasima } from "next/font/google";
import localFont from "next/font/local";

export const agdasima = Agdasima({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-agdasima",
});

export const freeSans = localFont({
  src: "../public/fonts/FreeSans.ttf",
  variable: "--font-freesans",
});
