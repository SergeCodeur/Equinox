import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "/public/logo-equinox.svg";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn(`block ${className}`)}>
      <Image
        src={LogoImg}
        className="w-full h-full"
        width={140.21}
        height={32.76}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
