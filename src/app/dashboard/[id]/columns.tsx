"use client";

import { PenIcon, TrashIcon } from "@/assets/icons/SvgIcon";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  summaryName: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "summaryName",
    header: "Nom de la synthèses",
  },
  {
    id: "mastery_rate",
    header: "Taux de maitrise",
  },
  {
    id: "keywords",
    header: "Mots-clé",
    // cell: ({ row }) => {
    // 	const keywords = row.original;
    // 	return (
    // 		<div>
    // 			{keywords.map((keyword, index) => (

    // 			))}
    // 		</div>
    // 	);
    // }
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
          <Button
            className="p-2.5 bg-transparent border-none hover:bg-transparent"
            onClick={() => {
              console.log(`Opening conversation: ${actions.id}`);
            }}
          >
            <PenIcon />
          </Button>
        </div>
      );
    },
  },
];
