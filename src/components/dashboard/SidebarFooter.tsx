import { StarIcon } from "../../assets/icons/SvgIcon";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

const SidebarFooter = () => {
  return (
    <div className="space-y-4 mt-6">
      <div className="space-y-2 text-start">
        <h3 className="text-white">
          <span className="text-primary text-sm font-bold">40GB</span> sur 50GB
        </h3>
        <Progress className="h-[7px]" />
      </div>
      <div className="space-y-[7px]">
        <Button className="bg-white hover:bg-white text-primary font-semibold text-[15px] rounded-[43px] gap-1 h-[26px]">
          Premium
          <StarIcon />
        </Button>
        <span className="text-xs text-white">Compte Personnel</span>
      </div>
    </div>
  );
};

export default SidebarFooter;
