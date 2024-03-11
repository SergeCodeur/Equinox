import { Badge } from "../ui/badge";

const SummaryTableContainer = () => {
  return (
    <div className="flex flex-col w-full rounded-lg border border-white/10 bg-secondary shadow-table">
      <div className="flex flex-col items-start py-5 px-6">
        <span className="flex gap-2 items-center ">
          <h3 className="text-white text-base-500 leading-7">Vos synthèses</h3>
          <Badge className="text-violet-500">240 fiches</Badge>
        </span>
        <p className="text-white text-xs leading-[20px]">
          Garder un oeil sur le taux de maîtrise de vos synthèses.
        </p>
      </div>
    </div>
  );
};

export default SummaryTableContainer;
