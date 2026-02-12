export default function SolutionSection({ videoUrl }) {
  return (
    <section className="px-6 py-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Solution</h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <video
            // src={videoUrl}
            src="/images/solutions/solution.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-sm"
          />
        </div>

        <div className="-mt-1">
          <p className="text-lg leading-relaxed text-gray-700 font-freesans">
            Digital twin technology is a virtual replica of physical systems
            that integrates real-time data, enabling monitoring, simulation,
            prediction, and optimization of performance across industries like
            manufacturing, healthcare, transportation, and smart cities.
          </p>
        </div>
      </div>
    </section>
  );
}
