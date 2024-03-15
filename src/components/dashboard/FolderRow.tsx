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
      className={`flex group text-xs text-stone-300 hover:text-white gap-3 leading-9 rounded-lg border border-transparent hover:border-white/10 hover:bg-slate-800 items-center px-3 ${
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

// /* Property 1=Variant2 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 0px;

// width: 177px;
// height: 36px;

// background: #1B1C3D;
// border: 1px solid rgba(255, 255, 255, 0.1);
// border-radius: 8px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

export default FolderRow;
