"use client";

import { FaCircle } from "react-icons/fa";

const problems = [
  {
    title: "Lack of visibility into complex assets",
    desc: "Creating a digital replica allows industries to visualize and understand machines or systems in detail from anywhere. This improves accessibility, enhances training, and supports better decision-making without needing to be physically present."
  },
  {
    title: "Difficulty in monitoring performance and detecting issues on time",
    desc: "By using IoT and sensors, digital twins continuously track asset performance and health. This helps in detecting issues early, reducing downtime, and ensuring optimal operation of equipment."
  },
  {
    title: "Scattered and uncoordinated processes in large systems",
    desc: "Digital twins bring together multiple processing units of large or complex machines into one centralized platform. This simplifies management, improves coordination, and provides a unified view of operations."
  },
  {
    title: "Unexpected failures and inefficient maintenance",
    desc: "With AI and machine learning, digital twins analyze performance data to predict failures, maintenance needs, or efficiency gaps. This proactive approach minimizes unexpected breakdowns and boosts productivity."
  }
];

export default function KeyProblems() {
  return (
    <section className="py-5">
      <h2 className="text-center text-4xl font-bold mb-12">Key Problems</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {problems.map((p, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 p-6 rounded-sm shadow-[8px_8px_0_#5A30D7]"
          >
            {/* Icon + Title */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-6 h-6 rounded-full bg-[#5A30D7] flex items-center justify-center">
                <FaCircle className="text-white text-[8px]" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 font-helvetica">{p.title}</h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed font-freesans">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
