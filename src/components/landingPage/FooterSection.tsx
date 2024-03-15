import Link from "next/link";
import MaxWidthContainer from "../MaxWidthContainer";
import Logo from "../ui/Logo";
import { Button } from "../ui/button";

const FooterSection = () => {
  return (
    <footer className="bg-secondary py-[42px]">
      <MaxWidthContainer>
        <nav className="w-full flex items-center justify-between">
          <Logo />
          <ul className="flex items-center justify-center gap-6 text-stone-300">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="#fonctionnality">Fonctionnalité</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#testimonials">Témoignage</Link>
            </li>
          </ul>
          <div>
            <Button className="mx-auto py-[20.8px] px-[56.8px] text-xl-500 leading-[27px] text-white">
              Commencer vos 7 jours d&apos;éssai
            </Button>
          </div>
        </nav>
      </MaxWidthContainer>
    </footer>
  );
};

export default FooterSection;
