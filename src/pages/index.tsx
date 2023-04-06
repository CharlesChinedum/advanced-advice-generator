import HeadComponent from "@/components/HeadComponent";
import { Inter } from "next/font/google";
import Card from "@/components/Card";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  initalId: number;
  initialAdvice: string;
}

export default function Home({ initalId, initialAdvice }: Props) {
  const [id, setId] = useState(initalId);
  const [advice, setAdvice] = useState(initialAdvice);

  async function fetchAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    setId(data.slip.id);
    setAdvice(data.slip.advice);
  }

  const getAdvice = () => {
    fetchAdvice();
  };

  return (
    <>
      <HeadComponent title="Home" />
      <div className="w-full h-screen flex justify-center items-center">
        <Card id={id} advice={advice} getAdvice={getAdvice} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  return {
    props: {
      initalId: data.slip.id,
      initialAdvice: data.slip.advice,
    },
  };
}
