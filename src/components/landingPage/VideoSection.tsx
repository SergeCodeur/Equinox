import SvgOrange from "@/assets/SvgBgOrange";
import { PlayIcon } from "@/assets/icons/SvgIcon";
import MaxWidthContainer from "../MaxWidthContainer";

const VideoSection = () => {
  return (
    <div className="relative z-20">
      <section className="bg-secondary">
        <MaxWidthContainer className="pt-[134px] relative">
          <div className="relative bg-video-image h-[656px] bg-no-repeat bg-contain bg-center z-[11]">
            <button className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-transparent">
              <PlayIcon />
            </button>
            <div className="h-[399px] bg-bleu-gradiant absolute bottom-0 z-20 w-full"></div>
          </div>
        </MaxWidthContainer>
      </section>
      <SvgOrange className="absolute -top-[20%] left-2/4 -translate-x-2/4 z-[10]" />
    </div>
  );
};

export default VideoSection;
