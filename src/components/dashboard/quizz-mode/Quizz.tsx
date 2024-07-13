import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// fake data
const questions = [
  {
    question:
      "Quelle est la date de promulgation de l'article 135-5 du Code Civil ?",
    answer:
      "L'article 135-5 du Code civil français a été introduit par l'ordonnance n° 2016-131 du 10 février 2016 portant réforme du droit des contrats, du régime général et de la preuve des obligations. Cette ordonnance est entrée en vigueur le 1er octobre 2016.",
  },
  {
    question:
      "Quel est le nom du fonds de garde pour le projet de loi de 2016-135 ?",
    answer:
      "Le fonds de garde pour le projet de loi de 2016-135 est le fonds de garde du projet de loi de 2016-135.",
  },
  {
    question:
      "Quelle est la date de l'ordonnance n° 2016-131 du 10février 2016 ?",
    answer:
      "L'ordonnance n° 2016-131 du 10 sélection 2016 portant la réforme du droit des contrats, du droit des garanties et de la preuve des obligations est entrée en vigueur le 1er octobre 2016.",
  },
  {
    question: "Quelle est la date de l'article 135-5 du Code Civil ?",
    answer:
      "L'article 135-5 du Code civil est le 1er article du Code civil de 2016 portant la réforme du droit des contrats, du droit des garanties et de la preuve des obligations.",
  },
  {
    question: "Quelle est la date de la loi n° 2016-135 du 1er octobre 2016 ?",
    answer:
      "La loi n° 2016-135 du 1er octobre 2016 est la loi de 2016-135 du 1er octobre 2016.",
  },
];

const StepBullet = ({ children, className }: Props) => (
  <span
    className={cn(
      `w-10 h-10 flex justify-center items-center rounded-full bg-secondary text-xsl-500 text-gray-500 relative z-[1] ${className}`
    )}
  >
    {children}
  </span>
);

const ShowResultButton = ({ children, className, onClick }: Props) => (
  <Button
    onClick={onClick}
    className={cn(
      `w-full max-w-[665px] h-[67px] flex justify-center items-center rounded-lg border border-white/10 bg-secondary text-xsl-500 text-gray-500 hover:bg-secondary hover:border-white hover:text-white ${className}`
    )}
  >
    {children}
  </Button>
);

const Quizz = () => {
  const [isShowResult, setIsShowResult] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleShowResult = () => {
    setIsShowResult((prev) => !prev);
  };

  const handleNextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setIsShowResult(false); // Reset to show question for the next step
    }
  };

  return (
    <div className="mt-[17px]">
      <div className="flex items-center gap-[49px] w-fit relative mb-[55px]">
        <span className="h-[1px] bg-gray-500 w-full absolute"></span>
        {questions.map((_, index) => (
          <StepBullet
            key={index}
            className={
              index <= currentStep ? "bg-primary text-white" : "text-gray-500"
            }
          >
            {index + 1}
          </StepBullet>
        ))}
      </div>
      <div className="relative mb-10 max-w-[650.37px] max-h-295.42px]">
        <span className="max-w-[650.37px] h-[269.67px] absolute bottom-0 left-2/4 -translate-x-[50%] w-full bg-secondary border border-white/10 rounded-3xl -translate-y-[11%] -rotate-[4deg] shadow-text-editor"></span>
        <div className="group perspective-1000 bg-transparent -translate-y-[11%]">
          <div
            className={`transform-style-preserve-3d transition-transform duration-[0.8s] ${
              isShowResult ? "rotateY-180" : ""
            } relative max-w-[623px] min-h-[295.42px]`}
          >
            {/* Front flip card "Question" */}
            <div className="w-full flex items-center justify-center h-full p-4 m-4 outline-none bg-[#04081A] rounded-3xl text-white border border-white/10 mt-[30px] z-10 absolute backfaceHidden">
              <div className="flex flex-col max-w-[506px] items-center justify-center">
                <h1 className="text-4xl text-white">
                  Question de connaissance
                </h1>
                <p className="text-xl text-neutral-400 text-center">
                  {questions[currentStep]?.question}
                </p>
              </div>
            </div>
            {/* Back flip card "Answer" */}
            <div className="w-full flex items-center justify-center h-full p-4 m-4 outline-none bg-[#04081A] rounded-3xl text-white border border-white/10 mt-[30px] z-10 absolute rotateY-180 backfaceHidden">
              <div className="flex flex-col max-w-[506px] items-center justify-center">
                <p className="text-xl text-neutral-400 text-center">
                  {questions[currentStep]?.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ShowResultButton onClick={handleShowResult}>
          {isShowResult ? "Voir la Question" : "Voir le Résultat"}
        </ShowResultButton>
        <div className="grid grid-cols-4 gap-11 max-w-[665px] mt-[30px]">
          {["Facile", "Moyen", "Difficile", "Je ne sais pas"].map(
            (label, index) => (
              <Button
                key={label}
                onClick={handleNextStep}
                className={cn(
                  "text-sm rounded-lg hover:border-none border-none",
                  index === 1 && "bg-gray-500 hover:bg-gray-500",
                  index === 2 && "bg-yellow-600 hover:bg-yellow-600",
                  index === 3 && "bg-red-700 hover:bg-red-700"
                )}
              >
                {label}
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Quizz;
