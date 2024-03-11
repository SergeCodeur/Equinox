import { ArrowLeftIcon } from "@/assets/icons/SvgIcon";

const Dashboard = () => {
  return (
    <div className="pt-[35px] pb-[37px] px-[37px] h-full space-y-[29px] flex justify-center items-center">
      <div className="flex gap-4 items-center text-white text-xsl-500">
        <ArrowLeftIcon className="animate-bounce-left" />
        <h2>Selectionner un dossier</h2>
      </div>
    </div>
  );
};

export default Dashboard;
