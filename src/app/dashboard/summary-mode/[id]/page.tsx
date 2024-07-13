"use client";
import { PolygoneRightIcon } from "@/assets/icons/SvgIcon";
import ShowChatWrapperBtn from "@/components/dashboard/ShowChatWrapperBtn";
import Tiptap from "@/components/dashboard/tiptapTextEditor/Tiptap";
import Logo from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SummaryModeProps = {
  params: {
    id: string;
  };
};

const SummaryMode = ({ params: { id } }: SummaryModeProps) => {
  const [content, setContent] = useState<string>("");
  const handleContentChange = (reason: any) => {
    setContent(reason);
  };
  const pathname = usePathname();
  return (
    <div className="relative">
      <div className="w-full bg-secondary flex justify-between items-center py-[10px] h-[55px] px-[61px]">
        <Logo />
        <Button size="sm" disabled className="text-[12px] text-white uppercase">
          Valider
        </Button>
      </div>
      <div className="w-full relative">
        <Tiptap
          content={content}
          onChange={(newContent: string) => handleContentChange(newContent)}
        />
      </div>
      <div className="w-full bg-secondary fixed bottom-0 py-5 2xl:py-7 border-t border-white/10 flex justify-center items-center">
        <ShowChatWrapperBtn />
      </div>
      <span className="bg-secondary border border-white/10 h-[283px] flex flex-col justify-center items-center fixed z-10 left-0 top-2/4 -translate-y-2/4 2xl:space-x-1 w-[150px] 2xl:h-[383px] rounded-tr-[21px] rounded-br-[21px]">
        <span className="text-white text-[30px] leading-[30px] font-bold 2xl:text-3xl-700 block uppercase text-center">
          Mode
        </span>
        <span className="text-white text-base font-bold 2xl:text-xl block uppercase leading-4 text-center">
          Synthèse
        </span>
      </span>
      <Link
        href={pathname + "/quizz-mode"}
        className="bg-primary flex justify-center items-center fixed z-10 right-0 top-2/4 -translate-y-2/4 2xl:space-x-1 w-[150px] h-28 2xl:h-[140px] rounded-tl-[21px] rounded-bl-[21px]"
      >
        <span className="text-white text-xl-500 font-bold 2xl:text-lg-700 block w-[82.51px] uppercase leading-[23px]">
          Mode quizz
        </span>
        <span>
          <PolygoneRightIcon />
        </span>
      </Link>
    </div>
  );
};

export default SummaryMode;
