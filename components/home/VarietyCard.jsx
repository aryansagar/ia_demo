export default function VarietyCard({ image, title, subtitle, size}) {
  return (
    <div className="relative bg-white w-[320px] h-[340px] border p-6 flex flex-col items-center justify-center text-center">
      {/* Purple Shadow Effect */}
      <div className="absolute bottom-[-12px] right-[-12px] w-full h-full bg-[#5A30D7] -z-10"></div>

      {/* Image Wrapper */}
      <div className={`${size} flex items-center justify-center mb-6 bg-transparent`}>
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <h3 className="text-[#5A30D7] font-bold text-2xl">{title}</h3>
      <p className="text-black text-2xl font-bold mt-1">{subtitle}</p>
    </div>
  );
}
