import SvgOrange from "@/assets/SvgBgOrange";
import DashboardUi from "@/assets/images/dashboard-ui-design.svg";
import Profile from "@/assets/images/user.png";
import SignUpForm from "@/components/authentification/SignUpForm";
import Logo from "@/components/ui/Logo";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex h-screen bg-gray-900 overflow-hidden relative">
      <div className="w-[450px] 2xl:w-[575px]  bg-secondary flex flex-col items-start relative">
        <div className="bg-secondary w-[577px] 2xl:w-[702px] h-[1110px] rounded-tr-[30%50%] 2xl:rounded-tr-[30%60%] 2xl:rounded-br-[30%60%] rounded-br-[30%50%] top-2/4 -translate-y-2/4 -right-[75px] absolute z-10"></div>
        <Logo className="h-7 mt-7 ml-6 relative z-[11]" />
        <div className="flex flex-col justify-between relative z-[11] h-full">
          <div className="mt-[30px] 2xl:mt-[125px] ml-[90px] 2xl:ml-[125px] max-w-[320px] w-full">
            <h2 className="mb-2 text-[32px] font-semibold text-white">
              S&apos;inscrire
            </h2>
            <h3 className="text-white text-sm">Commencez dès maintenant.</h3>
            <SignUpForm className="mt-6 mb-6" />
            <span className="text-gray-500 text-xs-500">
              Vous possédez déjà un compte ?{" "}
              <Link href="/sign-in" className="text-primary">
                Connectez-vous ici !
              </Link>
            </span>
          </div>
          <div className="flex justify-between items-center w-full text-gray-500 text-xs mb-4 pl-1">
            <span>www.equinoxai.com</span>
            <span>support@equinoxai.com</span>
          </div>
        </div>
        <SvgOrange className="absolute 2xl:-right-[75%] -right-[90%] top-2/4 -translate-y-2/4 z-[9]" />
      </div>
      <div className="flex-1 mt-[52px] pl-[209px] relative z-20">
        <h1 className="italic text-white text-3xl-400 max-w-[525px] w-full leading-[40px] mb-6">
          Equinox.AI est la nouvelle façon d&apos;apprendre rapidement et
          facilement avec l&apos;IA.
        </h1>
        <div className="flex items-center gap-[9px]">
          <Image
            className="w-[49px] h-[49px] rounded-full"
            src={Profile.src}
            alt=""
            width={42}
            height={42}
          />
          <span className="flex flex-col items-start">
            <span className="text-base-600 text-white">Zeilani Halilou</span>
            <span className="text-sm text-white">fondateur de Equinox.AI</span>
          </span>
        </div>
        <div className="flex items-end justify-end mt-[42px]">
          <Image
            src={DashboardUi}
            alt=""
            height={586}
            width={502}
            className="w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
