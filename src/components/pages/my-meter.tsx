import { Pie } from "..";

export const MyMeter = () => {
  return (
    <section className="bg-white drop-shadow-xl p-8 w-1/3 rounded-lg">
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
          <span className="text-[#7467F0]">120kw</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#7467F0]">12890kw</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[#7467F0]">3550kw</span>
        </div>
      </div>
    </section>
  );
};
