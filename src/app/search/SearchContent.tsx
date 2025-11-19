"use client";

import { useSearchParams } from "next/navigation";

export default function SearchContent() {
  const params = useSearchParams();

  return (
    <div className="flex flex-col gap-[54px] text-[24px] text-[#121216] font-semibold leading-[34px]">
      <p>From: {params.get("from") || "-"}</p>
      <p>To: {params.get("to") || "-"}</p>
      <p>Departure date: {params.get("dep") || "-"}</p>
      <p>Return date: {params.get("ret") || "-"}</p>
      <p>No. of passenger: {params.get("pax") || "-"}</p>
    </div>
  );
}
