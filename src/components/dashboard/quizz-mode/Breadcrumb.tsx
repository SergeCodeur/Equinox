import { FolderIcon } from "@/assets/icons/SvgIcon";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Breadcrumb = () => {
  // const style =
  return (
    <div className="flex items-center mt-[45px] pl-2">
      <Link href="" className="flex items-center gap-2 text-stone-300">
        <span>
          <FolderIcon />
        </span>
        Droit constitutionnel
      </Link>
      <span className="text-primary">
        <ChevronRight />
      </span>
      <Link href="" className="uppercase text-primary text-sm-500">
        Synthèse: Introduction au droit pénal
      </Link>
    </div>
  );
};

export default Breadcrumb;
