"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Columns = {
  id: string
  data: string
  placa: string
  carga: string
  temperatura: string
  formula: string
  cliente: string
}

export const columns: ColumnDef<Columns>[] = [
  {
    accessorKey: "data",
    header: ({ column }) => {
      return (
        <div className="text-center font-bold">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="font-bold"
          >
            Data
            <ArrowUpDown className="w-2 h-4 font-bold" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      return <div className="text-center font-bold">{new Date(row.getValue("data")).toLocaleString()}</div>
    },
    filterFn: (row, columnId, filterValue) => {
      const [start, end] = filterValue;
      const rowDate = new Date(row.getValue(columnId));
      const startDate = start ? new Date(start) : null;
      const endDate = end ? new Date(end) : null;

      return (
        (!startDate || rowDate >= startDate) &&
        (!endDate || rowDate <= endDate)
      );
    },
  },
  {
    accessorKey: "placa",
    header: () => <div className="text-center font-bold">Placa</div>,
    cell: ({ row }) => {
      return <div className="text-center font-bold">{row.getValue("placa")}</div>
    },
  },
  {
    accessorKey: "carga",
    header: () => <div className="text-center font-bold">Carga</div>,
    cell: ({ row }) => {
      return <div className="text-center font-bold">{row.getValue("carga")}</div>
    },
  },
  {
    accessorKey: "temperatura",
    header: () => <div className="text-center font-bold">Temperatura da Massa</div>,
    cell: ({ row }) => {
      return <div className="text-center font-bold">{row.getValue("temperatura")}</div>
    },
  },
  {
    accessorKey: "formula",
    header: () => <div className="text-center font-bold">Fórmula</div>,
    cell: ({ row }) => {
      return <div className="text-center font-bold">{row.getValue("formula")}</div>
    },
  },
  {
    accessorKey: "cliente",
    header: () => <div className="text-center font-bold">Cliente</div>,
    cell: ({ row }) => {
      return <div className="text-center font-bold">{row.getValue("cliente")}</div>
    },
  },
]
