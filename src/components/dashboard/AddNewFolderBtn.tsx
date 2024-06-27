"use client";
import { useState } from "react";
import { PlusIcon } from "../../assets/icons/SvgIcon";
import CreateFolderPopup from "./CreateFolderPopup";

const AddNewFolderBtn = () => {
  const [showAddEditNoteDialog, setShowAddEditNoteDialog] = useState(false);
  return (
    <>
      <button
        className="gap-2.5 bg-transparent hover:bg-transparent flex items-center px-3 leading-[31px]"
        onClick={() => setShowAddEditNoteDialog(true)}
      >
        <span className="w-6 flex justify-center items-center">
          <PlusIcon width={16} height={16} />
        </span>
        <span className="text-xs text-stone-300">Ajouter un dossier</span>
      </button>
      <CreateFolderPopup
        open={showAddEditNoteDialog}
        setOpen={setShowAddEditNoteDialog}
      />
    </>
  );
};

export default AddNewFolderBtn;
