"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FolderIcon } from "../../assets/icons/SvgIcon";

type FolderRowsProps = {
  folderName: string;
  folderId: string | number;
};

const FolderRow = ({ folderName, folderId }: FolderRowsProps) => {
  const pathname = usePathname();
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(folderId.toString()));
  }, [pathname, folderId]);
  return (
    <Link
      href={`/dashboard/${folderId}`}
      className={`flex group text-xs text-stone-300 hover:text-white gap-3 leading-9 rounded-lg border border-transparent hover:border-white/10 hover:bg-slate-800 items-center px-3 relative ${
        active ? "text-white border-white/10 bg-slate-800" : ""
      }`}
    >
      <FolderIcon
        className={`group-hover:stroke-white group-hover:fill-white ${
          active ? "stroke-white fill-white" : ""
        }`}
      />
      <span className="truncate">{folderName}</span>
    </Link>
  );
};

export default FolderRow;
