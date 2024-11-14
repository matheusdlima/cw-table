"use client"

import { useEffect } from "react";
import { Columns, columns } from "./columns"
import { DataTable } from "./data-table"
import React from "react";
import "@tago-io/custom-widget";
import "@tago-io/custom-widget/dist/custom-widget.css";

function getData(): Columns[] {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      data: "2024-11-06T16:40:00",
      placa: "ABC-1234",
      carga: "1000kg",
      temperatura: "25°C",
      formula: "Formula X",
      cliente: "Cliente Y"
  },
  {
      id: "728ed",
      data: "2024-11-06T16:41:00",
      placa: "DEF-5678",
      carga: "1500kg",
      temperatura: "26°C",
      formula: "Formula Y",
      cliente: "Cliente Z"
  },
  {
      id: "72852f",
      data: "2024-11-06T16:42:00",
      placa: "GHI-9012",
      carga: "2000kg",
      temperatura: "27°C",
      formula: "Formula Z",
      cliente: "Cliente A"
  },
  {
      id: "728ed52s",
      data: "2024-11-06T16:43:00",
      placa: "JKL-3456",
      carga: "1200kg",
      temperatura: "28°C",
      formula: "Formula W",
      cliente: "Cliente B"
  },
  {
      id: "7ed52f",
      data: "2024-11-06T16:44:00",
      placa: "MNO-7890",
      carga: "1100kg",
      temperatura: "29°C",
      formula: "Formula V",
      cliente: "Cliente C"
  },
  {
      id: "ed52f",
      data: "2024-11-06T16:45:00",
      placa: "PQR-2345",
      carga: "1300kg",
      temperatura: "30°C",
      formula: "Formula U",
      cliente: "Cliente D"
  },
  {
      id: "sad52f",
      data: "2024-11-06T16:46:00",
      placa: "STU-6789",
      carga: "1400kg",
      temperatura: "31°C",
      formula: "Formula T",
      cliente: "Cliente E"
  },
  {
      id: "sss8ed52f",
      data: "2024-11-06T16:47:00",
      placa: "VWX-0123",
      carga: "1600kg",
      temperatura: "32°C",
      formula: "Formula S",
      cliente: "Cliente F"
  },
  {
      id: "sss8ed52f",
      data: "2024-11-06T16:48:00",
      placa: "YZA-4567",
      carga: "1700kg",
      temperatura: "33°C",
      formula: "Formula R",
      cliente: "Cliente G"
  },
  {
      id: "sss8ed52f",
      data: "2024-11-06T16:49:00",
      placa: "BCD-8901",
      carga: "1800kg",
      temperatura: "34°C",
      formula: "Formula Q",
      cliente: "Cliente H"
  },
  {
      id: "sss8ed52f",
      data: "2024-11-06T16:50:00",
      placa: "EFG-2345",
      carga: "1900kg",
      temperatura: "35°C",
      formula: "Formula P",
      cliente: "Cliente I"
  },
  {
      id: "sss8ed52f",
      data: "2024-11-06T16:51:00",
      placa: "HIJ-6789",
      carga: "2000kg",
      temperatura: "36°C",
      formula: "Formula O",
      cliente: "Cliente J"
  },
  {
      id: "sss8ed52f",
      data: "2024-11-06T16:52:00",
      placa: "KLM-0123",
      carga: "2100kg",
      temperatura: "37°C",
      formula: "Formula N",
      cliente: "Cliente K"
  }
  ]
}

interface ITagoIO {
  ready: () => void;
  onStart: (callbackFn: (widget: any) => void) => void;
  onRealtime: (callbackFn: (data: any) => void) => void;
  sendData: (payload: any, callbackFn: (response: any) => void) => void;
  onSyncUserInformation: (callbackFn: (user: any) => void) => void;
  runAnalysis: (scope: any) => void;
}

declare global {
  interface Window {
      TagoIO: ITagoIO;
  }
}

export default function DemoPage() {
  const data = getData()

  useEffect(() => {
    // Start communication with TagoIO Admin/RUN.
    window.TagoIO.ready();
  });

  return (
    <div className="container mx-auto ">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
