import { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-white font-[Nunito_Sans] relative">
      <div className="w-full h-[495px] bg-gradient-to-b from-[#F5F8FF] to-[#DBF5FF] relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[1124px]">
          <div className="flex items-center">
            <img src="/icons/star.svg" className="w-[40px] h-[40px]" />
            <span className="ml-2 text-[28px] font-semibold text-[#19C0FF]">
              Tripzy
            </span>
          </div>
        </div>

        <div
          className="
            absolute left-1/2 -translate-x-1/2 
            top-[160px] w-[1124px] h-[872px] bg-white 
            rounded-2xl shadow-lg p-20
          "
        >
          <Suspense fallback={<div>Loading...</div>}>
            <SearchContent />
          </Suspense>
        </div>
      </div>

      <div className="w-full h-[600px] bg-white"></div>
    </main>
  );
}
