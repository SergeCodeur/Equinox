"use client";

import { TrashIcon } from "@/assets/icons/SvgIcon";
import EditSummaryBtn from "@/components/dashboard/EditSummaryBtn";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ColumnDef } from "@tanstack/react-table";

export type SummaryProps = {
  id: string;
  summaryName: string;
  createDate: string;
  masteryRateScore: number;
};

export const columns: ColumnDef<SummaryProps>[] = [
  {
    accessorKey: "summaryName",
    header: "Nom de la synthèses",
    cell: ({ row }) => {
      const sumaryContent = row.original;
      const date = new Date(row.original.createDate);
      const formatted = date.toLocaleDateString();
      return (
        <div>
          <h2 className="text-white text-sm-500 leading-5">
            {sumaryContent.summaryName}
          </h2>
          <span className="text-gray-500 text-sm leading-5">
            Dernière modification : {formatted}
          </span>
        </div>
      );
    },
  },
  {
    id: "mastery_rate",
    header: "Taux de maitrise",
    cell: ({ row }) => {
      const masteryRateScore = row.original.masteryRateScore;
      return (
        <div className="flex items-center justify-start gap-3">
          <Progress value={masteryRateScore} className="h-[7px]" />
          <span className="text-sm-500 text-white leading-5">
            {masteryRateScore}
          </span>
        </div>
      );
    },
  },
  {
    id: "action",
    cell: ({ row }) => {
      const actions = row.original;
      return (
        <div className="space-x-1">
          <Button
            className="p-2.5 bg-transparent border-none hover:bg-transparent"
            onClick={() => {
              console.log(`Opening conversation: ${actions.id}`);
            }}
          >
            <TrashIcon />
          </Button>
          <EditSummaryBtn id={actions.id} />
        </div>
      );
    },
  },
];
