"use client";

interface Props {
  value: number;
  setValue: (v: number) => void;
}

export default function PassengerInput({ value, setValue }: Props) {
  const increase = () => {
    if (value < 10) setValue(value + 1);
  };

  const decrease = () => {
    if (value > 1) setValue(value - 1);
  };

  return (
    <div className="flex flex-col w-[149px] h-[76px]">
      <label className="text-[12px] text-[#65686F] mb-1">
        NO. OF PASSENGER
      </label>

      <div className="relative flex items-center w-full h-[52px] border border-[#E4E6EB] rounded-xl p-3 bg-white">
        <img src="/icons/user.svg" className="w-[20px] h-[20px]" />

        <span className="ml-2 text-[16px] font-semibold text-black select-none">
          {value}
        </span>

        <div className="absolute right-0 top-0 bottom-0 w-[32px] flex flex-col border-l border-[#E4E6EB]">
          <button
            onClick={increase}
            disabled={value === 10}
            className={`flex-1 flex items-center justify-center border-b border-[#E4E6EB]
              ${
                value === 10
                  ? "opacity-30 cursor-not-allowed"
                  : "cursor-pointer"
              }
            `}
          >
            <img src="/icons/arrow-up.svg" className="w-3 h-3" />
          </button>

          <button
            onClick={decrease}
            disabled={value === 1}
            className={`flex-1 flex items-center justify-center
              ${
                value === 1 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
              }
            `}
          >
            <img src="/icons/arrow-down.svg" className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
