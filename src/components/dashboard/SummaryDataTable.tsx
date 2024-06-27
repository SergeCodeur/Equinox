import {
  SummaryProps,
  columns,
} from "@/app/dashboard/(dashboard-first-layout)/[id]/columns";
import { FolderDataTable } from "@/app/dashboard/(dashboard-first-layout)/[id]/folder-data-table";

async function getData(): Promise<SummaryProps[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      summaryName: "Droit constitutionnel_Chapitre 5",
      createDate: "2024-02-06T02:27:52.358283Z",
      masteryRateScore: 60,
    },
    {
      id: "728ed52f",
      summaryName: "Droit pénale - Chapitre 1",
      createDate: "2024-02-06T02:27:52.358283Z",
      masteryRateScore: 60,
    },
    {
      id: "728ed52f",
      summaryName: "Droit pénale - Chapitre 5",
      createDate: "2024-02-06T02:27:52.358283Z",
      masteryRateScore: 60,
    },
    {
      id: "728ed52f",
      summaryName: "Droit pénale - Chapitre 2",
      createDate: "2024-02-06T02:27:52.358283Z",
      masteryRateScore: 60,
    },
    {
      id: "728ed52f",
      summaryName: "Droit pénale - Chapitre 2",
      createDate: "2024-02-06T02:27:52.358283Z",
      masteryRateScore: 60,
    },
    {
      id: "728ed52f",
      summaryName: "Droit pénale - Chapitre 2",
      createDate: "2024-02-06T02:27:52.358283Z",
      masteryRateScore: 60,
    },
    {
      id: "728ed52f",
      summaryName: "Droit pénale - Chapitre 2",
      createDate: "2024-02-06T02:27:52.358283Z",
      masteryRateScore: 60,
    },
    {
      id: "728ed52f",
      summaryName: "Droit pénale - Chapitre 2",
      createDate: "2024-02-06T02:27:52.358283Z",
      masteryRateScore: 60,
    },
    {
      id: "728ed52f",
      summaryName: "Droit pénale - Chapitre 2",
      createDate: "2024-02-06T02:27:52.358283Z",
      masteryRateScore: 60,
    },
    // ...
  ];
}
export default async function SummaryDataTable() {
  const data = await getData();
  return <FolderDataTable columns={columns} data={data} />;
}
