"use client";

import { useState } from "react";
import CalendarPopup from "./CalendarPopup";

interface Props {
  enabled: boolean;
  value: string;
  setValue: (v: string) => void;
}

export default function ReturnDateInput({ enabled, value, setValue }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col w-[235.25px] h-[76px]">
      <div
        onClick={() => enabled && setOpen(true)}
        className={`flex items-center w-full h-[52px] border border-[#E4E6EB] rounded-xl p-3 
          ${
            enabled
              ? "cursor-pointer"
              : "bg-[rgba(36,38,40,0.1)] cursor-not-allowed"
          }
        `}
      >
        <img
          src="/icons/calendar.svg"
          className={`w-[20px] h-[20px] mr-2 ${enabled ? "" : "opacity-50"}`}
        />

        <input
          readOnly
          disabled={!enabled}
          value={value}
          placeholder="DD / MM / YYYY   00:00"
          className="w-full outline-none bg-transparent placeholder:text-[#CCCFD5] text-[14px]"
        />
      </div>

      {open && enabled && (
        <CalendarPopup
          value={value}
          onSelect={(d) => {
            setValue(d);
            setOpen(false);
          }}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
