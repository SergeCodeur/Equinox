import { ScrollArea } from "../ui/scroll-area";
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
  {
    folderId: 6,
    folderName: "Procédure administrative",
  },
];

const FolderWrapper = () => {
  // const [folders, setFolders] = useState(Folders);
  // const lastFolder = folders[folders.length - 1];

  // const handleDelete = ({ folderId }: { folderId: number }) => {
  //   if (folders.length > 1) {
  //     setFolders(folders.filter((folder) => folder.folderId !== folderId));
  //   } else {
  //     alert("Vous ne pouvez pas supprimer le dernier dossier.");
  //   }
  // };
  return (
    <div className="space-y-2">
      <span className="text-md text-white block w-full items-start uppercase">
        Mes dossiers
      </span>
      <ul>
        {Folders.length > 5 ? (
          <ScrollArea className="h-[193px]" aria-orientation="vertical">
            {Folders.map((folder) => (
              <FolderRow
                key={folder.folderId}
                folderId={folder.folderId}
                folderName={folder.folderName}
              />
            ))}
          </ScrollArea>
        ) : (
          Folders.map((folder) => (
            <FolderRow
              key={folder.folderId}
              folderId={folder.folderId}
              folderName={folder.folderName}
            />
          ))
        )}
      </ul>
      <AddNewFolderBtn />
    </div>
  );
};

export default FolderWrapper;
