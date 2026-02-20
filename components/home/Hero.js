import { fetchVideo } from "../../lib/api";

export default  async function Hero() {
  const bannerVideo = await fetchVideo("banners");
  console.log("Fetched Banner Video URL:", bannerVideo);
  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src={bannerVideo}
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-4xl px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Democratizing Immersive Technologies
          <br /> through Digital Twin
        </h1>

        <p className="mt-6 text-lg text-gray-200 font-freesans">

          IAVerse transforms manufacturing and education with digital twins, AI,
          and immersive tech, enabling smarter operations, real-time insights,
          virtual training, data preservation, and improved productivity.
        </p>

        <p className="mt-4 text-lg">
          Certified by{" "}
          <span className="text-orange-400 font-semibold">#startupindia</span>
        </p>

        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-sm font-semibold">
            Highlights
          </button>

          <button className="px-6 py-3 bg-[#5A30D7] hover:bg-[#5A30D7] rounded-sm font-semibold">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
