import Fonctionnality2 from "@/assets/images/fonctionnality-2.svg";
import Fonctionnality3 from "@/assets/images/fonctionnality-3.svg";
import Fonctionnality4 from "@/assets/images/fonctionnality-4.svg";
import Fonctionnality1 from "@/assets/images/icon-percent.svg";
import Image from "next/image";
import MaxWidthContainer from "../MaxWidthContainer";

const FonctionnalitySection = () => {
  return (
    <section className="bg-secondary" id="fonctionnality">
      <MaxWidthContainer className="pt-24">
        <h2 className="max-w-[686px] w-full text-white text-center mx-auto text-4xl-600 leading-[42.5px] tracking-[-0.8px] mb-10">
          Des fonctionnalités dédiées à
          <span className="text-transparent bg-clip-text bg-gradiant-195">
            l&apos;apprentissage rapide
          </span>
        </h2>
        <p className="text-neutral-400 text-center text-xl leading-[34px] max-w-[686px] w-full mx-auto">
          Lorem ipsum dolor sit amet consectetur. Facilisis nunc leo viverra sed
          amet dictum nunc volutpat orci. Fames a nisi nulla elit.
        </p>
        <div className="space-y-7 flex flex-col justify-center items-center mt-[79px]">
          <div className="flex space-x-7">
            <div className="w-[372px] h-[384px] rounded-[14px] border border-white/10 bg-slate-900 flex justify-center items-center hover:bg-violet-950 hover:border-white transition-colors flex-col gap-[52px] px-6 py-6">
              <Image
                src={Fonctionnality1}
                alt=""
                width={146.76}
                height={146.76}
              />
              <div className="text-white">
                <h3 className="text-xl-500 leading-[34px]">
                  Calculateur de maîtrise
                </h3>
                <p className="text-neutral-400 text-sm leading-[21px]">
                  Lorem ipsum dolor sit amet consectetur. Facilisis nunc leo
                  viverra sed amet dictum nunc volutpat orci. Fames a nisi nulla
                  elit.
                </p>
              </div>
            </div>
            <div className="w-[623px] h-[384px] rounded-[14px] border border-white/10 bg-slate-900 hover:bg-violet-950 hover:border-white transition-colors overflow-hidden">
              <div className="relative">
                <Image src={Fonctionnality2} alt="" width={573} height={372} />
              </div>
              <div className="text-white px-6 py-6">
                <h3 className="text-xl-500 leading-[34px]">
                  Quizz d&apos;apprentissage intélligent
                </h3>
                <p className="text-neutral-400 text-sm leading-[21px]">
                  Lorem ipsum dolor sit amet consectetur. Facilisis nunc leo
                  viverra sed amet dictum nunc volutpat orci. Fames a nisi nulla
                  elit.
                </p>
              </div>
            </div>
          </div>
          <div className="flex space-x-7">
            <div className="w-[623px] h-[384px] rounded-[14px] border border-white/10 bg-slate-900 hover:bg-violet-950 hover:border-white transition-colors overflow-hidden">
              <div className="flex justify-end">
                <Image src={Fonctionnality3} alt="" width={580} height={261} />
              </div>
              <div className="text-white px-6 py-6">
                <h3 className="text-xl-500 leading-[34px]">
                  Assistant IA dédié pour vous aider
                </h3>
                <p className="text-neutral-400 text-sm leading-[21px]">
                  Lorem ipsum dolor sit amet consectetur. Facilisis nunc leo
                  viverra sed amet dictum nunc volutpat orci. Fames a nisi nulla
                  elit.
                </p>
              </div>
            </div>
            <div className="w-[372px] h-[384px] rounded-[14px] border border-white/10 bg-slate-900 hover:bg-violet-950 hover:border-white transition-colors overflow-hidden">
              <Image src={Fonctionnality4} alt="" width={370} height={236} />
              <div className="text-white px-6 py-6">
                <h3 className="text-xl-500 leading-[34px]">
                  Création de synthèse
                </h3>
                <p className="text-neutral-400 text-sm leading-[21px]">
                  Lorem ipsum dolor sit amet consectetur. Facilisis nunc leo
                  viverra sed amet dictum nunc volutpat orci. Fames a nisi nulla
                  elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default FonctionnalitySection;
