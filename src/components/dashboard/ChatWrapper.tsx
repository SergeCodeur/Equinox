"use client";
import { EosIcon, XmarkIcon } from "@/assets/icons/SvgIcon";
import AvatarImg from "@/assets/images/user.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import ChatInputBox from "./ChatInputBox";

interface ChatWrapperProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ChatWrapper = ({ open, setOpen }: ChatWrapperProps) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="bg-gray-900 h-[420px] rounded-none shadow-chat-wrapper border-t border-white/10">
        <DrawerClose className="absolute left-2/4 -top-7 -translate-x-2/4">
          <Button
            onClick={() => setOpen(false)}
            className="w-[132px] !text-xs-500 text-white p-3"
          >
            <XmarkIcon />
            <span>Fermer le chat</span>
          </Button>
        </DrawerClose>
        <div className="h-full overflow-y-auto space-y-6">
          <div className=" bg-secondary py-6">
            <div className="max-w-[759px] mx-auto w-full flex items-start gap-[23px]">
              <Avatar>
                <AvatarImage src={AvatarImg.src} alt="@user" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-left text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                vero eveniet culpa excepturi eligendi enim ratione laboriosam
                hic explicabo?
              </span>
            </div>
          </div>
          <div className="py-6">
            <div className="max-w-[759px] mx-auto w-full flex flex-row-reverse items-start gap-[23px]">
              <span className="flex flex-col justify-center items-center gap-1">
                <EosIcon />
                <span className="text-white text-[8px] font-medium">EOS</span>
              </span>
              <span className="text-left text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis rerum facere officiis mollitia exercitationem
                ratione quo at provident nobis. Fuga, culpa velit illum ad quae
                facere nulla neque, maxime praesentium quaerat laudantium nisi
                pariatur ab nemo delectus fugiat, odio quos. Doloremque, velit!
                Voluptates, nisi? Nulla tempora incidunt corrupti veritatis
                fuga?
              </span>
            </div>
          </div>
          <div className=" bg-secondary py-6">
            <div className="max-w-[759px] mx-auto w-full flex items-start gap-[23px]">
              <Avatar>
                <AvatarImage src={AvatarImg.src} alt="@user" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-left text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                vero eveniet culpa excepturi eligendi enim ratione laboriosam
                hic explicabo?
              </span>
            </div>
          </div>
          <div className="py-6">
            <div className="max-w-[759px] mx-auto w-full flex flex-row-reverse items-start gap-[23px]">
              <span className="flex flex-col justify-center items-center gap-1">
                <EosIcon />
                <span className="text-white text-[8px] font-medium">EOS</span>
              </span>
              <span className="text-left text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis rerum facere officiis mollitia exercitationem
                ratione quo at provident nobis. Fuga, culpa velit illum ad quae
                facere nulla neque, maxime praesentium quaerat laudantium nisi
                pariatur ab nemo delectus fugiat, odio quos. Doloremque, velit!
                Voluptates, nisi? Nulla tempora incidunt corrupti veritatis
                fuga?
              </span>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <ChatInputBox />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
