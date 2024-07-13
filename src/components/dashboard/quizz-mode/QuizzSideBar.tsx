import SvgBlueOverlay from "@/assets/SvgBlueOverlay";
import Logo from "@/components/ui/Logo";

const QuizzSideBar = () => {
  return (
    <div className="bg-secondary w-[361px] h-full pl-[37px] pt-6 pr-[50px]">
      <Logo className="w-[113px]" />
      <div className="space-y-9 mt-[160px]">
        <span className="relative block w-fit">
          <span className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white text-[32px] font-medium">
            15%
          </span>
          <SvgBlueOverlay />
        </span>
        <div>
          <h2 className="text-lg-500 text-white">Vous êtes bien partie !</h2>
          <h3 className="text-white text-sm">
            Vous avez actuellement{" "}
            <span className="font-bold">
              une connaissance de base de votre synthèse.
            </span>{" "}
            Vous n&apos;êtes pas encore prêt pour l&apos;examen.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default QuizzSideBar;
