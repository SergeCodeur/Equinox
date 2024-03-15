import Fonctionnality1 from "@/assets/images/fonctionnality-1.png";
import Fonctionnality2 from "@/assets/images/fonctionnality-2.png";
import Fonctionnality3 from "@/assets/images/fonctionnality-3.png";
import Fonctionnality4 from "@/assets/images/fonctionnality-4.png";
import Image from "next/image";
import MaxWidthContainer from "../MaxWidthContainer";

const FonctionnalitySection = () => {
  return (
    <section className="bg-secondary" id="fonctionnality">
      <MaxWidthContainer className="pt-24">
        <h2 className="max-w-[686px] w-full text-white text-center mx-auto text-4xl-600 leading-[42.5px] tracking-[-0.8px] mb-10">
          Des fonctionnalités dédiées à{" "}
          <span className="text-transparent bg-clip-text bg-gradiant-195">
            l&apos;apprentissage rapide
          </span>
        </h2>
        <p className="text-neutral-400 text-center text-xl leading-[34px] max-w-[686px] w-full mx-auto">
          Lorem ipsum dolor sit amet consectetur. Facilisis nunc leo viverra sed
          amet dictum nunc volutpat orci. Fames a nisi nulla elit.{" "}
        </p>
        <div className="space-y-7 flex flex-col justify-center items-center mt-[79px]">
          <div className="flex space-x-7">
            <Image src={Fonctionnality1} alt="" width={372} height={384} />
            <Image src={Fonctionnality2} alt="" width={632} height={384} />
          </div>
          <div className="flex space-x-7">
            <Image src={Fonctionnality3} alt="" width={632} height={384} />
            <Image src={Fonctionnality4} alt="" width={372} height={384} />
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default FonctionnalitySection;
