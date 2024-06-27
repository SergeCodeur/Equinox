import { EllipsisIcon } from "@/assets/icons/SvgIcon";
import Logo from "../ui/Logo";
import FavoriteAndDeleteActions from "./FavoriteAndDeleteActions";
import FolderWrapper from "./FolderWrapper";
import SidebarFooter from "./SidebarFooter";

const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div
      className={`max-w-[245px] flex flex-col w-full py-6 px-4 bg-secondary h-screen justify-between ${className}`}
    >
      <div>
        <div className="flex gap-[46px] items-center justify-between mb-[27px]">
          <Logo className="h-[18.1px]" />
          <button className="h-9 w-9 border border-white/10 rounded-md p-[6px] text-white flex justify-center items-center">
            <EllipsisIcon />
          </button>
        </div>
        <FolderWrapper />
        <div className="mt-[27px]">
          <FavoriteAndDeleteActions />
        </div>
      </div>
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
