import Link from "next/link";
import { BookMarkIcon, TrashIcon } from "../../assets/icons/SvgIcon";

const FavoriteAndDeleteActions = () => {
  return (
    <div className="space-y-2">
      <span className="text-md text-white block w-full items-start uppercase">
        Dossiers intélligents
      </span>
      <div className="space-x-1">
        <Link
          href="#"
          className="flex group text-xs text-stone-300 hover:text-white gap-3 leading-9 rounded-lg border border-transparent hover:border-white/10 hover:bg-slate-800 items-center px-3"
        >
          <BookMarkIcon className="group-hover:stroke-white group-hover:fill-white" />
          <span className="truncate">Favoris</span>
        </Link>
        <Link
          href="#"
          className="flex group text-xs text-stone-300 hover:text-white gap-3 leading-9 rounded-lg border border-transparent hover:border-white/10 hover:bg-slate-800 items-center pl-2 pr-3"
        >
          <TrashIcon className="group-hover:stroke-white group-hover:fill-white" />
          <span className="truncate">Synthèses supprimées</span>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteAndDeleteActions;
