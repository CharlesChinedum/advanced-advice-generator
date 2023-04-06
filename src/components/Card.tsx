import Image from "next/image";
import dice from "../assets/icon-dice.svg";
import desktopDivider from "../assets/pattern-divider-desktop.svg";
// import mobileDivider from "../assets/pattern-divider-mobile.svg";

import styles from "@/styles/Card.module.css";

interface Props {
  id: number;
  advice: string;
  getAdvice: () => void;
}

const Card = ({ id, advice, getAdvice }: Props) => {
  return (
    <div className="relative md:px-0">
      <div className="px-5">
        <div className={styles.card}>
          <div className="w-full">
            <p
              className={`${styles.title} text-center text-xs md:text-[10px] tracking-wider`}
            >
              ADVICE #{id}
            </p>
            <p
              className={`${styles.advice} text-center py-3 tracking-wide`}
            >{`"${advice}"`}</p>
          </div>
          <div className="my-5 md:my-3">
            <Image src={desktopDivider} alt="" />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center absolute -bottom-8 md:-bottom-5">
        <div
          className={`${styles.neonBg} p-5 md:p-3 rounded-full hover:cursor-pointer`}
          onClick={getAdvice}
        >
          <Image src={dice} alt="" className="w-6 md:w-4" />
        </div>
      </div>
    </div>
  );
};

export default Card;
