import { PlusIcon } from "../../assets/icons/SvgIcon";

const AddNewFolderBtn = () => {
  return (
    <button className="gap-2.5 bg-transparent hover:bg-transparent flex items-center px-3 leading-[31px]">
      <span className="w-6 flex justify-center items-center">
        <PlusIcon width={16} height={16} />
      </span>
      <span className="text-xs text-stone-300">Ajouter un dossier</span>
    </button>
  );
};

export default AddNewFolderBtn;
