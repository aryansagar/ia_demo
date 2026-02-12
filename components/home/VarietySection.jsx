import VarietyCard from "./VarietyCard";

export default function VarietySection({ videoUrl }) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-16">Variety</h2>

        {/* Cards */}
        <div className="flex flex-col  md:flex-row gap-12 justify-center items-center mb-20">
          <VarietyCard
            image="/images/variety/iTwinity.jpg"
            title="iTwinity"
            subtitle="Industrial Digital Twin"
            size="w-[200px] h-[200px]"
          />
          <VarietyCard
            image="/images/variety/iSimulo.jpg"
            title="iSimulo"
            subtitle="Simulative Digital Twin"
            size="w-[300px] h-[300px]"
          />
        </div>

        {/* Detail Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-[#5A30D7] mb-4">iTwinity</h3>

            <p className="text-gray-700 leading-relaxed mb-6 font-freesans">
              An industrial digital twin is a virtual replica of machines,
              processes, or production systems, using real-time data to monitor,
              simulate, predict, and optimize performance.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 font-freesans">
                <span className="text-[#5A30D7] font-bold">•</span>
                Real-time data integration from IoT
              </li>
              <li className="flex items-start gap-2 font-freesans">
                <span className="text-[#5A30D7] font-bold ">•</span>
                Simulation and modeling
              </li>
              <li className="flex items-start gap-2 font-freesans">
                <span className="text-[#5A30D7] font-bold">•</span>
                Predictive analytics
              </li>
              <li className="flex items-start gap-2 font-freesans">
                <span className="text-[#5A30D7] font-bold">•</span>
                Lifecycle management
              </li>
            </ul>

            <button className="bg-[#5A30D7] text-white px-6 py-2 rounded-sm font-freesans">
              Know more
            </button>
          </div>

          {/* Right Image */}
          {/* <div>
            <video
              // src={videoUrl}
              src="/images/solutions/iTwinity.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
            />
          </div> */}

          {/* Right Video */}
          <div className="aspect-video bg-black">
            <video
              src="/images/solutions/iTwinity.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
