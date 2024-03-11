import Link from "next/link";
import MaxWidthContainer from "./MaxWidthContainer";
import Logo from "./ui/Logo";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <MaxWidthContainer>
      <nav className="w-full flex items-center justify-evenly py-6">
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
          <Button>Commencer</Button>
        </div>
      </nav>
    </MaxWidthContainer>
  );
};

export default Navbar;
