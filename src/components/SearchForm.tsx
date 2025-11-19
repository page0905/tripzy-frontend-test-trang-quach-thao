"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import FromToInput from "./FromToInput";
import DateInput from "./DateInput";
import ReturnDateInput from "./ReturnDateInput";
import PassengerInput from "./PassengerInput";

export default function SearchForm() {
  const router = useRouter();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [roundTrip, setRoundTrip] = useState(false);
  const [passenger, setPassenger] = useState(1);

  const handleSearch = () => {
    if (!from || !to || !departure) {
      alert("Please fill required fields");
      return;
    }

    const url = `/search?from=${encodeURIComponent(
      from
    )}&to=${encodeURIComponent(to)}&dep=${encodeURIComponent(
      departure
    )}&ret=${encodeURIComponent(returnDate)}&pax=${passenger}&round=${
      roundTrip ? 1 : 0
    }`;

    router.push(url);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-start gap-4 px-4 py-4">
        <FromToInput from={from} setFrom={setFrom} to={to} setTo={setTo} />

        <DateInput
          label="DEPARTURE DATE"
          value={departure}
          setValue={setDeparture}
        />

        <div className="flex flex-col w-[235.25px] h-[76px]">
          <label className="flex items-center gap-2 text-[12px] text-[#65686F] mb-1">
            <input
              type="checkbox"
              checked={roundTrip}
              onChange={(e) => setRoundTrip(e.target.checked)}
              className="accent-[#19C0FF]"
            />
            Round Trip?
          </label>

          <ReturnDateInput
            enabled={roundTrip}
            value={returnDate}
            setValue={setReturnDate}
          />
        </div>

        <PassengerInput value={passenger} setValue={setPassenger} />
      </div>

      <div className="flex justify-center pb-6">
        <button
          onClick={handleSearch}
          className="w-[266px] h-[52px] rounded-full bg-[#19C0FF] flex items-center justify-center gap-2 text-white"
        >
          <img src="/icons/search.svg" className="w-5 h-5" />
          <span className="text-[14px] font-semibold">SEARCH</span>
        </button>
      </div>
    </div>
  );
}
