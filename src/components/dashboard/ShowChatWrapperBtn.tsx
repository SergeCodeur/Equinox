"use client";
import { CircleBlueIcon } from "@/assets/icons/SvgIcon";
import { useState } from "react";
import { ChatWrapper } from "./ChatWrapper";

const ShowChatWrapperBtn = () => {
  const [showChat, setShowChat] = useState(false);
  return (
    <>
      <button
        className="max-w-[237px] cursor-pointer flex justify-center items-center gap-5"
        onClick={() => setShowChat(true)}
      >
        <CircleBlueIcon width={58} height={58} />
        <span className="text-[18px] max-2xl:text-lg-700 leading-7 text-white uppercase font-bold w-[127px]">
          Ouvrir le chat EOS
        </span>
      </button>
      <ChatWrapper open={showChat} setOpen={setShowChat} />
    </>
  );
};

export default ShowChatWrapperBtn;
