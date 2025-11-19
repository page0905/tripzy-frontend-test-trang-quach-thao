"use client";

import { useState } from "react";
import CalendarPopup from "./CalendarPopup";

interface Props {
  label: string;
  value: string;
  setValue: (v: string) => void;
}

export default function DateInput({ label, value, setValue }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col w-[235.25px] h-[76px] relative">
      <label className="text-[12px] text-[#65686F] mb-1">{label}</label>

      <div
        className="flex items-center w-full h-[52px] border border-[#E4E6EB] rounded-xl p-3 cursor-pointer"
        onClick={() => setShow(true)}
      >
        <img src="/icons/calendar.svg" className="w-5 h-5 mr-2" />

        <input
          value={value}
          readOnly
          placeholder="DD / MM / YYYY  00:00"
          className="w-full outline-none text-[14px] text-[#0E0E12] placeholder:text-[#CCCFD5]"
        />
      </div>

      {show && (
        <CalendarPopup
          value={value}
          onSelect={(val) => {
            setValue(val);
            setShow(false);
          }}
          onClose={() => setShow(false)}
        />
      )}
    </div>
  );
}
