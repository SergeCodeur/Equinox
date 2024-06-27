"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface FolderDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function FolderDataTable<TData, TValue>({
  columns,
  data,
}: FolderDataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  const showPagination =
    (table.getRowModel().rows?.length >= 5 &&
      table.getState().pagination.pageIndex === 0) ||
    table.getState().pagination.pageIndex > 0;

  return (
    <div className="rounded-none flex flex-col justify-between h-full min-h-[532px]">
      <Table className="border-[#EAECF0]/10 [&_tr:last-child]:border-y">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="!border-0">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-white border-x-[#EAECF0]/10 border-x-[1px] bg-[#EAECF0]/10 h-11 px-6 py-3"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="border-0">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="border-x-0 border-[#EAECF0]/10"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="text-white border-0 py-4 px-6"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="!border-0">
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-base-500 text-white"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {showPagination && (
        <div className="flex items-center justify-between pt-3 pb-4 px-6">
          <span>
            <span className="text-gray-500 text-sm-500">
              Page {table.getState().pagination.pageIndex + 1} sur{" "}
              {table.getPageCount()}
            </span>
          </span>
          <div className="flex items-center gap-3">
            <Button
              className="bg-gray-900 border border-[#EAECF0]/10 py-2 px-[14px] !text-sm-500 text-white"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Précédent
            </Button>
            <Button
              className="bg-gray-900 border border-[#EAECF0]/10 py-2 px-[14px] !text-sm-500 text-white hover:bg-gray-900"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Suivant
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
