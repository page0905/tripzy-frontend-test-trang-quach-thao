"use client";

import { useState } from "react";
import Tabs from "@/components/Tabs";
import SearchForm from "@/components/SearchForm";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"bus" | "hotel" | "flight">("bus");

  return (
    <main className="min-h-screen bg-white font-[Nunito_Sans] relative">
      <div className="w-full h-[495px] bg-gradient-to-b from-[#F5F8FF] to-[#DBF5FF] relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-[40px] w-[1170px]">
          <div className="flex items-center">
            <img src="/icons/star.svg" className="w-[40px] h-[40px]" />
            <span className="ml-2 text-[28px] font-semibold text-[#19C0FF]">
              Tripzy
            </span>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[200px] w-[655px] text-center">
          <h1 className="text-[40px] font-semibold leading-[55px] text-[#121216]">
            Travel Smarter, Not Harder
          </h1>

          <p className="text-[18px] leading-[25px] text-[#767689] mt-2">
            Make every trip effortless. Tripzy lets you book rides and plan
            journeys with ease
          </p>
        </div>

        <div
          className="
            absolute left-1/2 -translate-x-1/2 
            top-[320px] w-[1170px] bg-white 
            rounded-2xl shadow-lg
          "
        >
          <Tabs activeTab={activeTab} onChange={setActiveTab} />

          {activeTab === "bus" && <SearchForm />}
          {activeTab === "hotel" && (
            <div className="text-center text-[#767689] py-14 text-lg">
              No data
            </div>
          )}
          {activeTab === "flight" && (
            <div className="text-center text-[#767689] py-14 text-lg">
              No data
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
