import { Pie } from "..";

export const MyMeter = () => {
  return (
    <section className="grid grid-cols-2 w-full pr-8 gap-4">
      <section className="bg-white drop-shadow-xl p-8 rounded-lg">
        <Pie colour="#7467F0" percentage={60} />
        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-gray-400">Current Usage</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">Last Month</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">Last Year</span>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-[#7467F0]">1020kw</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#7467F0]">12890kw</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#7467F0]">3550kw</span>
          </div>
        </div>
      </section>
      <section className="flex bg-teal-100 flex-col place-items-center justify-center rounded-lg drop-shadow-lg min-h-[420px]">
        <div className="flex flex-col">
          <span className="text-black font-bold">Electricity Usage Goal</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#7467F0] text-xl">130Kw</span>
        </div>
      </section>
    </section>
  );
};
