import SvgOrange from "@/assets/SvgBgOrange";
import { CheckCircleIcon } from "@/assets/icons/SvgIcon";
import MaxWidthContainer from "../MaxWidthContainer";
import { Button } from "../ui/button";

const PriceAdvantage = [
  {
    icon: <CheckCircleIcon />,
    description: "Assistant IA entièrement dédié",
  },
  {
    icon: <CheckCircleIcon />,
    description: "Calculateur de maîtrise",
  },
  {
    icon: <CheckCircleIcon />,
    description: "Quizz d'apprentissage intélligent",
  },
  {
    icon: <CheckCircleIcon />,
    description: "Assistant IA entièrement dédié",
  },
  {
    icon: <CheckCircleIcon />,
    description: "Assistant IA entièrement dédié",
  },
  {
    icon: <CheckCircleIcon />,
    description: "Assistant IA entièrement dédié",
  },
];

const PricingSection = () => {
  return (
    <div className="relative">
      <section className="relative overflow-hidden pb-[90px]" id="pricing">
        <div className="bg-secondary h-full w-[1500px] xl:w-[2200px] xl:rounded-bl-[50%70%] xl:rounded-br-[50%70%] 2xl:w-[2500px] 2xl:rounded-bl-[50%35%] 2xl:rounded-br-[50%35%] rounded-bl-[50%35%] rounded-br-[50%40%] absolute left-2/4 -translate-x-2/4 z-10"></div>
        <MaxWidthContainer className="pt-[77px] text-center space-y-12 relative z-[11]">
          <div className="flex flex-col items-center gap-[34px]">
            <h2 className="max-w-[612px] text-4xl-600 leading-[42.5px] tracking-[-0.8px] text-white mx-auto text-center">
              Commencer l&apos;aventure{" "}
              <span className="text-transparent bg-clip-text bg-gradiant-195">
                Equinox.AI dès maintenant
              </span>
            </h2>
            <span className="flex gap-4">
              <span className="text-[148px] leading-[157px] tracking-[-2.96px] font-semibold text-transparent bg-clip-text bg-gradiant-195">
                10€
              </span>
              <span className="flex flex-col justify-end items-start mb-7 text-neutral-400 text-sm leading-[21px]">
                <span>/mois</span>
                <span>facturé annuellement</span>
              </span>
            </span>
          </div>
          <ul className="grid grid-cols-2 gap-8 items-center w-[740px] mx-auto">
            {PriceAdvantage.map((advantage, index) => (
              <ol
                key={index}
                className="flex items-center gap-4 text-neutral-400 text-xl leading-[30px]"
              >
                {advantage.icon}
                <span>{advantage.description}</span>
              </ol>
            ))}
          </ul>
          <Button className="mx-auto py-[20.8px] px-[56.8px] text-xl-500 leading-[27px] text-white">
            Commencer vos 7 jours d&apos;éssai
          </Button>
        </MaxWidthContainer>
      </section>
      <SvgOrange className="absolute top-[-10%] left-2/4 -translate-x-2/4 z-[9]" />
    </div>
  );
};

export default PricingSection;
