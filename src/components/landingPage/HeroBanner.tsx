import SvgOrange from "@/assets/SvgBgOrange";
import MaxWidthContainer from "../MaxWidthContainer";
import { Button } from "../ui/button";

const HeroBanner = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden relative pt-20">
        <div className="bg-secondary h-full w-[1500px] xl:w-[2200px] xl:rounded-tl-[50%70%] xl:rounded-tr-[50%70%] 2xl:w-[2500px] 2xl:rounded-tl-[50%35%] 2xl:rounded-tr-[50%35%] rounded-tl-[50%35%] rounded-tr-[50%40%] absolute left-2/4 -translate-x-2/4 z-10"></div>
        <MaxWidthContainer className="z-30 relative pt-[70px]">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="space-y-4">
              <h2 className="text-5xl-700 text-white text-center tracking-[-0.96px]">
                Equinox.AI
              </h2>
              <h1 className="text-6xl-600 text-white text-center leading-[106.25%] tracking-[-1.28px] max-w-[922px] mx-auto">
                Vous êtes à l&apos;aube d&apos;une{" "}
                <span className="text-transparent bg-clip-text bg-gradiant-195">
                  nouvelle manière d&apos;apprendre
                </span>
              </h1>
            </div>
            <p className="text-[#98999B] text-xl text-center mt-10 mx-auto max-w-[740px]">
              Lorem ipsum dolor sit amet consectetur. Facilisis nunc leo viverra
              sed amet dictum nunc volutpat orci. Fames a nisi nulla elit.
            </p>
            <div className="flex gap-8 justify-center items-start w-full mt-8">
              <Button
                variant="outline"
                className="!text-xl-500 text-white leading-[27px] border-[1.37px] border-white/10 py-[20.5px] px-[6.83px] w-[267px] h-[69px] rounded-xl"
              >
                En savoir plus
              </Button>
              <div className="flex flex-col items-center space-y-2.5">
                <Button className="!text-xl-500 text-white leading-[27px] border-[1.37px] border-white/10 py-[20.5px] px-[6.83px] w-[267px] h-[69px] rounded-xl">
                  Commencer
                </Button>
                <span className="text-[#98999B] text-sm">
                  7 jours d&apos;essai gratuit
                </span>
              </div>
            </div>
          </div>
        </MaxWidthContainer>
      </div>
      <SvgOrange className="absolute -top-[40%] left-2/4 -translate-x-2/4 z-[9]" />
    </div>
  );
};

export default HeroBanner;
