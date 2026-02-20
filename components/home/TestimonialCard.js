import Image from "next/image";

function extractRichText(content) {
  if (!Array.isArray(content)) return content || "";

  return content
    .map((block) =>
      block?.children
        ?.map((child) => child?.text || "")
        .join("")
    )
    .join(" ");
}

export default function TestimonialCard({ data }) {
  if (!data) return null;

  const { name, designation, company, content } = data;

  const textContent = extractRichText(content);

  return (
    <div className="relative w-[200px]">
      
      {/* Purple shadow layer */}
      <div className="absolute top-2 left-2 w-full h-full bg-[#5A30D7] rounded-sm"></div>

      {/* Main card */}
      <div className="relative bg-white border border-black rounded-sm p-8">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold">
            {name?.charAt(0)}
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">
              {designation} of {company}
            </h4>
          </div>
        </div>

        {/* Content */}
        <p className="text-sm text-gray-700 leading-relaxed">
          {textContent}
        </p>
      </div>
    </div>
  );
}
