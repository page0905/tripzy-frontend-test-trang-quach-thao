interface Props {
  activeTab: "bus" | "hotel" | "flight";
  onChange: (t: "bus" | "hotel" | "flight") => void;
}

export default function Tabs({ activeTab, onChange }: Props) {
  return (
    <div
      className="flex items-center bg-white rounded-xl mb-6 
shadow-[0_4px_12px_rgba(32,80,118,0.12)] p-3 w-full"
    >
      <button
        onClick={() => onChange("bus")}
        className={`w-[382px] h-[72px] shrink-0 flex items-center gap-4 p-3 rounded-xl transition
          ${activeTab === "bus" ? "bg-[#EBF9FF]" : ""}
        `}
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#D3F3FF]">
          <img src="/icons/bus.svg" className="w-[28px] h-[28px]" />
        </div>

        <span className="text-[18px] font-semibold text-black">
          Bus & Shuttle
        </span>
      </button>

      <button
        onClick={() => onChange("hotel")}
        className={`w-[382px] h-[72px] shrink-0 flex items-center gap-4 p-3 rounded-xl transition
          ${activeTab === "hotel" ? "bg-[#F4FFEB]" : ""}
        `}
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E8FBCC]">
          <img src="/icons/hotel.svg" className="w-[28px] h-[28px]" />
        </div>

        <span className="text-[18px] font-semibold text-black">
          Hotel & Accommodation
        </span>
      </button>

      <button
        onClick={() => onChange("flight")}
        className={`w-[382px] h-[72px] shrink-0 flex items-center gap-4 p-3 rounded-xl transition
          ${activeTab === "flight" ? "bg-[#EBF4FF]" : ""}
        `}
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E1EDFE]">
          <img src="/icons/flight.svg" className="w-[28px] h-[28px]" />
        </div>

        <span className="text-[18px] font-semibold text-black">Flight</span>
      </button>
    </div>
  );
}
