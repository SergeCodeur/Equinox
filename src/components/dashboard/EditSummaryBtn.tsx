import { PenIcon } from "@/assets/icons/SvgIcon";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type EditSummaryBtnProps = {
  id: string;
};

const EditSummaryBtn = ({ id }: EditSummaryBtnProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard/summary-mode/" + id);
  };
  return (
    <Button
      className="p-2.5 bg-transparent border-none hover:bg-transparent"
      onClick={handleClick}
    >
      <PenIcon />
    </Button>
  );
};

export default EditSummaryBtn;
