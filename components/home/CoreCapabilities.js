import React from "react";

const capabilities = [
  {
    number: "01",
    title: "Asset Condition<br/>Monitoring",
    image: "/images/capabilities/01.jpeg",
  },
  {
    number: "02",
    title: "Remote Observation and Control Of Assets",
    image: "/images/capabilities/02.jpeg",
  },
  {
    number: "03",
    title: "Remote Observation and Control Of Assets",
    image: "/images/capabilities/03.jpeg",
  },
  {
    number: "04",
    title: "Early Detection and Preventive Maintenance",
    image: "/images/capabilities/04.jpeg",
  },
  {
    number: "05",
    title: "OT report and Real time Alert System",
    image: "/images/capabilities/05.jpeg",
  },
  {
    number: "06",
    title: "OT report and Real time Alert System",
    image: "/images/capabilities/06.jpeg",
  },
];

const DigitalTwinGrid = () => {
  return (
    <div className="py-10 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Core Capabilities of Digital Twin
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {capabilities.map((item) => (
            <div className="relative w-[350px] h-[360px]">
              <div className="absolute inset-0 bg-[#5A30D7] rounded-sm translate-x-3 translate-y-3 z-0" />

              {/* White Card */}
              <div className="relative bg-white border-2 border-black rounded-sm w-full h-full flex flex-col z-10">
                <div className="flex-grow flex items-center justify-center p-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[180px] h-[180px] object-contain translate-x-10"
                  />
                </div>

                <div className="relative mt-[-4px] p-4">
                  <span className="absolute -top-14 left-4 text-6xl font-bold text-[#5A30D7] leading-none z-20">
                    {item.number}
                  </span>

                  <div className="bg-[#1A1140] p-5 rounded-md min-h-[80px] flex items-center">
                    <p
                      className="text-white text-[28px] font-bold leading-tight"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalTwinGrid;
