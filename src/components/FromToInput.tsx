"use client";

import { useState, useEffect, useRef } from "react";
import { locations } from "@/data/locations";

export default function FromToInput({ from, to, setFrom, setTo }: any) {
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);

  const [fromQuery, setFromQuery] = useState("");
  const [toQuery, setToQuery] = useState("");

  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  const filter = (query: string) => {
    const q = query.trim().toLowerCase();
    if (!q) return locations;
    return locations.filter(
      (loc) =>
        loc.english_name.toLowerCase().includes(q) ||
        loc.short_code.toLowerCase().includes(q)
    );
  };

  const filteredFrom = filter(fromQuery);
  const filteredTo = filter(toQuery);

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        fromRef.current &&
        !fromRef.current.contains(e.target as Node) &&
        toRef.current &&
        !toRef.current.contains(e.target as Node)
      ) {
        setFromOpen(false);
        setToOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col w-[207.25px] relative" ref={fromRef}>
        <label className="text-[12px] text-[#65686F] mb-1">FROM</label>

        <div
          className="flex items-center w-full h-[52px] border border-[#E4E6EB] rounded-xl p-3 cursor-text"
          onClick={() => {
            setFromOpen(true);
            setToOpen(false);
            setFromQuery("");
          }}
        >
          <img src="/icons/bus-black.svg" className="w-5 h-5 mr-2" />

          <input
            value={from}
            onChange={(e) => {
              const val = e.target.value;
              setFrom(val);
              setFromQuery(val);
              setFromOpen(true);
              setToOpen(false);
            }}
            placeholder="Enter city, terminal..."
            className="w-full outline-none text-[14px] text-[#0E0E12] placeholder:text-[#CCCFD5]"
          />
        </div>

        {fromOpen && (
          <div className="absolute top-[80px] bg-white shadow-lg rounded-xl w-full z-40 max-h-[220px] overflow-y-auto">
            {filteredFrom.map((loc) => (
              <div
                key={loc.short_code}
                className="p-3 hover:bg-[#F5F8FF] cursor-pointer rounded-xl"
                onMouseDown={() => {
                  setFrom(`${loc.short_code} - ${loc.english_name}`);
                  setFromQuery("");
                  setFromOpen(false);
                }}
              >
                <p className="text-[14px] font-semibold text-[#0E0E12]">
                  {loc.short_code} - {loc.english_name}
                </p>
                <p className="text-[12px] text-[#65686F]">{loc.code_state}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        onClick={handleSwap}
        className="
          flex items-center justify-center w-[48px] h-[48px] mt-6 rounded-full 
          bg-white cursor-pointer
          shadow-[0px_1px_3px_rgba(0,0,0,0.06),0px_1px_2px_rgba(0,0,0,0.12)]
        "
      >
        <img src="/icons/swap.svg" className="w-6 h-6" />
      </div>

      <div className="flex flex-col w-[207.25px] relative" ref={toRef}>
        <label className="text-[12px] text-[#65686F] mb-1">TO</label>

        <div
          className="flex items-center w-full h-[52px] border border-[#E4E6EB] rounded-xl p-3 cursor-text"
          onClick={() => {
            setToOpen(true);
            setFromOpen(false);
            setToQuery("");
          }}
        >
          <img src="/icons/bus-black.svg" className="w-5 h-5 mr-2" />

          <input
            value={to}
            onChange={(e) => {
              const val = e.target.value;
              setTo(val);
              setToQuery(val);
              setToOpen(true);
              setFromOpen(false);
            }}
            placeholder="Enter city, terminal..."
            className="w-full outline-none text-[14px] text-[#0E0E12] placeholder:text-[#CCCFD5]"
          />
        </div>

        {toOpen && (
          <div className="absolute top-[80px] bg-white shadow-lg rounded-xl w-full z-40 max-h-[220px] overflow-y-auto">
            {filteredTo.map((loc) => (
              <div
                key={loc.short_code}
                className="p-3 hover:bg-[#F5F8FF] cursor-pointer rounded-xl"
                onMouseDown={() => {
                  setTo(`${loc.short_code} - ${loc.english_name}`);
                  setToQuery("");
                  setToOpen(false);
                }}
              >
                <p className="text-[14px] font-semibold text-[#0E0E12]">
                  {loc.short_code} - {loc.english_name}
                </p>
                <p className="text-[12px] text-[#65686F]">{loc.code_state}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
