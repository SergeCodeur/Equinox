import { NoteIcon } from "@/assets/icons/SvgIcon";
import SummaryTableContainer from "@/components/dashboard/SummaryTableContainer";
import UploadForm from "@/components/dashboard/UploadForm";
import SearchInput from "@/components/ui/SearchInput";
import { Button } from "@/components/ui/button";

export type FolderContentProps = {
  params: {
    id: string;
  };
};

const FolderContent = ({ params: { id } }: FolderContentProps) => {
  return (
    <div className="pt-[35px] pb-[37px] px-[37px] space-y-[29px]">
      <div className="space-y-6">
        <SearchInput />
        <div className="flex justify-between py-6 border-b border-b-white/10">
          <div>
            <h1 className="text-3xl-500 text-white">Bonjour ...</h1>
            <p className="text-sm text-white">
              Vous trouverez ici tout les documents et synthèses liées à votre
              compte
            </p>
          </div>
          <div className="flex items-end">
            <Button className="h-10 max-w-[195px] text-xs leading-5 gap-2">
              <span>
                <NoteIcon />
              </span>
              <span>Ajouter une note</span>
            </Button>
          </div>
        </div>
        <div>
          <UploadForm />
        </div>
      </div>
      <div>
        <SummaryTableContainer />
      </div>
    </div>
  );
};

export default FolderContent;
