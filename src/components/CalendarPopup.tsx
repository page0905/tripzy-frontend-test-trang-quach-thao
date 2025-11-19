"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  onSelect: (val: string) => void;
  onClose: () => void;
}

export default function CalendarPopup({ value, onSelect, onClose }: Props) {
  const popupRef = useRef<HTMLDivElement>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const format = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;

  const daysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevMonth = () => {
    const m = new Date(currentMonth);
    m.setMonth(m.getMonth() - 1);
    setCurrentMonth(m);
  };

  const nextMonth = () => {
    const m = new Date(currentMonth);
    m.setMonth(m.getMonth() + 1);
    setCurrentMonth(m);
  };

  const renderMonth = (date: Date, isRight: boolean) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = daysInMonth(date);

    const firstDay = new Date(year, month, 1).getDay();
    const shift = (firstDay + 6) % 7;

    const prev = new Date(year, month - 1, 1);
    const daysPrev = daysInMonth(prev);

    const cells: { day: number; inMonth: boolean; dateObj: Date }[] = [];

    for (let i = 0; i < shift; i++) {
      const d = daysPrev - shift + i + 1;
      cells.push({
        day: d,
        inMonth: false,
        dateObj: new Date(year, month - 1, d),
      });
    }

    for (let d = 1; d <= days; d++) {
      cells.push({
        day: d,
        inMonth: true,
        dateObj: new Date(year, month, d),
      });
    }

    while (cells.length < 42) {
      const d = cells.length - (shift + days) + 1;
      cells.push({
        day: d,
        inMonth: false,
        dateObj: new Date(year, month + 1, d),
      });
    }

    const title = date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });

    return (
      <div className="w-[284px] h-[384px] p-4">
        <div className="w-[252px] h-[36px] flex items-center mb-3">
          {!isRight && (
            <>
              <button
                onClick={prevMonth}
                className="text-[#8E929A] text-lg mr-4"
              >
                ❮
              </button>

              <span className="text-[16px] font-semibold text-[#121216]">
                {title}
              </span>
            </>
          )}

          {isRight && (
            <div className="flex w-full justify-end items-center">
              <span className="text-[16px] font-semibold text-[#121216] mr-4">
                {title}
              </span>

              <button onClick={nextMonth} className="text-[#8E929A] text-lg">
                ❯
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-7 gap-2 mb-3">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <div
              key={d}
              className="w-9 h-9 flex items-center justify-center
                 text-[#8E929A] text-[16px]"
            >
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          {cells.map((c, idx) => {
            const dateStr = format(c.dateObj);
            const isSelected = dateStr === value;
            const isWeekend =
              c.dateObj.getDay() === 0 || c.dateObj.getDay() === 6;

            return (
              <button
                key={idx}
                onClick={() => onSelect(dateStr)}
                className={`
                  w-9 h-9 flex items-center justify-center rounded-full text-[14px]
                  ${
                    isSelected
                      ? "text-[#19C0FF]"
                      : !c.inMonth
                      ? "text-[#CCCFD5]"
                      : isWeekend
                      ? "text-[#C30808]"
                      : "text-[#121216]"
                  }
                  hover:bg-[#F1F5F9]
                `}
              >
                {c.day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      ref={popupRef}
      className="absolute top-[60px] left-0 flex bg-white rounded-2xl shadow-lg z-50"
    >
      {renderMonth(currentMonth, false)}

      {renderMonth(
        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
        true
      )}
    </div>
  );
}
