import { Inter } from "@next/font/google";
import { CharacterCounter } from "../components/CharacterCounter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CharacterCounter />
    </>
  );
}
