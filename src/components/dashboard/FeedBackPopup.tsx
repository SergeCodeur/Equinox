import { ThumbsDownIcon, ThumbsUpIcon } from "@/assets/icons/SvgIcon";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import FeedBackForm from "./FeedBackForm";

const FeedBackPopup = () => {
  return (
    <Dialog>
      <DialogContent className="sm:max-w-[568px] border-none">
        <span className="flex items-center justify-center gap-4">
          <Button size="icon" className="w-[74px] h-[56px] rounded-[60px]">
            <ThumbsUpIcon />
          </Button>
          <Button size="icon" className="w-[74px] h-[56px] rounded-[60px]">
            <ThumbsDownIcon />
          </Button>
        </span>
        <span className="text-white text-lg-500 text-center block w-full mt-4 mb-[33px]">
          Comment avez-vous trouvé ce quizz ?
        </span>
        <FeedBackForm />
      </DialogContent>
    </Dialog>
  );
};

export default FeedBackPopup;
