"use client";
import { ExitIcon } from "@/assets/icons/SvgIcon";
import FeedBackPopup from "@/components/dashboard/FeedBackPopup";
import Breadcrumb from "@/components/dashboard/quizz-mode/Breadcrumb";
import Quizz from "@/components/dashboard/quizz-mode/Quizz";
import QuizzSideBar from "@/components/dashboard/quizz-mode/QuizzSideBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SummaryMode = () => {
  const pathname = usePathname();
  const redirection = pathname.replace("/quizz-mode", "");
  return (
    <div className="w-full h-full flex">
      <QuizzSideBar />
      <section className="flex-1 overflow-y-scroll h-full pt-7 pr-10 pl-[122px] relative">
        <div className="flex justify-end">
          <Link
            href={redirection}
            className="uppercase text-white text-md flex items-center gap-2"
          >
            Revenir au mode Synthèse
            <span>
              <ExitIcon />
            </span>
          </Link>
        </div>
        <div className="absolute 2xl:left-2/4 2xl:-translate-x-2/4 pb-[57px] ">
          <Breadcrumb />
          <Quizz />
          <FeedBackPopup />
        </div>
      </section>
    </div>
  );
};

export default SummaryMode;
