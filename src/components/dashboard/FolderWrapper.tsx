import AddNewFolderBtn from "./AddNewFolderBtn";
import FolderRow from "./FolderRow";

const Folders = [
  {
    folderId: 1,
    folderName: "Dossiers de base",
  },
  {
    folderId: 2,
    folderName: "Droit constitutionnel",
  },
  {
    folderId: 3,
    folderName: "Droit pénal",
  },
  {
    folderId: 4,
    folderName: "Droit administratif",
  },
  {
    folderId: 5,
    folderName: "Procédure pénale",
  },
];

const FolderWrapper = () => {
  return (
    <div className="space-y-2">
      <span className="text-md text-white block w-full items-start uppercase">
        Mes dossiers
      </span>
      <ul className="space-y-1">
        {Folders.map((folder) => (
          <FolderRow
            key={folder.folderId}
            folderId={folder.folderId}
            folderName={folder.folderName}
          />
        ))}
      </ul>
      <AddNewFolderBtn />
    </div>
  );
};

export default FolderWrapper;
