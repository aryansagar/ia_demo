import Image from "next/image";

export default function ClientsSection() {
  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold mb-24 text-gray-800">Our Clients</h2>

        {/* ================= CONTAINER ================= */}
        <div className="relative w-full max-w-[750px] aspect-[9/7] mx-auto">
          {/* ================= SVG BACKGROUND ================= */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 900 700"
            fill="none"
          >
            {/* Lines from hexagon corners */}
            <g stroke="#CBD5E1" strokeWidth="2">
              <line x1="450" y1="260" x2="450" y2="20" />
              <line x1="535" y1="310" x2="850" y2="130" />
              <line x1="535" y1="390" x2="850" y2="570" />
              <line x1="450" y1="440" x2="450" y2="680" />
              <line x1="365" y1="390" x2="50" y2="570" />
              <line x1="365" y1="310" x2="50" y2="130" />
            </g>

            {/* Hexagon */}
            <path
              d="M450 260 L535 310 V390 L450 440 L365 390 V310 Z"
              fill="white"
              stroke="#1E3A8A"
              strokeWidth="10"
              strokeLinejoin="round"
            />
          </svg>

          {/* ================= CENTER LOGO ================= */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              src="/images/logos/iaverse.png"
              alt="iAverse"
              width={130}
              height={60}
              priority
            />
          </div>

          {/* ================= TOP LEFT ================= */}
          <div
            className="absolute top-1/2 left-1/2 
                          -translate-x-[260px] 
                          -translate-y-[240px]
                          w-[220px] 
                          flex flex-wrap 
                          justify-center gap-6"
          >
            <Image
              src="/images/clients/top/t01.png"
              width={80}
              height={40}
              alt=""
            />
            <Image
              src="/images/clients/top/t02.png"
              width={80}
              height={40}
              alt=""
            />
            <Image
              src="/images/clients/top/t03.png"
              width={80}
              height={40}
              alt=""
            />
          </div>

          {/* ================= TOP RIGHT ================= */}
          <div
            className="absolute top-1/2 left-1/2 
                          -translate-x-[7px] 
                          -translate-y-[250px]
                          w-[240px] 
                           flex flex-wrap 
                          justify-center
                        "
          >
            <div className="relative w-[150px] h-[50px]">
              <Image
                src="/images/clients/topRight/tr01.jpeg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative w-[150px] h-[50px]">
              <Image
                src="/images/clients/topRight/tr02.jpeg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* ================= RIGHT SIDE ================= */}
          <div
            className="absolute top-1/2 left-1/2 
           translate-x-[160px] 
           -translate-y-[200px]
           flex flex-col gap-6"
          >
            {/* Row 1 */}
            <div className="ml-[40px]">
              <Image
                src="/images/clients/right/r01.jpeg"
                width={100}
                height={42}
                alt=""
              />
            </div>

            {/* Row 2 */}
            <div className="flex gap-4 ml-[25px]">
              <Image
                src="/images/clients/right/r02.jpeg"
                width={85}
                height={42}
                alt=""
              />
              <Image
                src="/images/clients/right/r03.jpeg"
                width={85}
                height={42}
                alt=""
              />
            </div>

            {/* Row 3 */}
            <div className="flex gap-4 ml-[10px]">
              <Image
                src="/images/clients/right/r04.jpeg"
                width={80}
                height={40}
                alt=""
              />
              <Image
                src="/images/clients/right/r05.jpeg"
                width={80}
                height={40}
                alt=""
              />
              <Image
                src="/images/clients/right/r06.jpeg"
                width={80}
                height={40}
                alt=""
              />
            </div>

            {/* Row 4 */}
            <div className="flex gap-4">
              <Image
                src="/images/clients/right/r07.jpeg"
                width={85}
                height={42}
                alt=""
              />
              <Image
                src="/images/clients/right/r08.jpeg"
                width={85}
                height={42}
                alt=""
              />
            </div>
          </div>

          {/* ================= LEFT SIDE ================= */}
          <div
            className="absolute top-1/2 left-1/2 
                          -translate-x-[550px] 
                          -translate-y-1/2
                          flex flex-wrap 
                          justify-center gap-6
                          "
          >
            <Image
              src="/images/clients/left/01.jpeg"
              width={100}
              height={45}
              alt=""
            />
            <Image
              src="/images/clients/left/02.jpeg"
              width={100}
              height={45}
              alt=""
            />
            <Image
              src="/images/clients/left/03.jpeg"
              width={100}
              height={45}
              alt=""
            />
            <Image
              src="/images/clients/left/04.jpeg"
              width={100}
              height={45}
              alt=""
            />
            <Image
              src="/images/clients/left/05.jpeg"
              width={100}
              height={45}
              alt=""
            />
            <Image
              src="/images/clients/left/06.jpeg"
              width={100}
              height={45}
              alt=""
            />
          </div>

          {/* ================= BOTTOM LEFT ================= */}
          <div
            className="absolute top-1/2 left-1/2 
             -translate-x-[260px] 
             translate-y-[140px]
             w-[220px]
             flex flex-wrap
             justify-center
             gap-6"
          >
            <Image
              src="/images/clients/left/05.jpeg"
              width={90}
              height={45}
              alt=""
            />
            <Image
              src="/images/clients/bottom/b01.jpeg"
              width={100}
              height={50}
              alt=""
            />
            <Image
              src="/images/clients/bottom/b02.jpeg"
              width={100}
              height={50}
              alt=""
            />
          </div>

          {/* ================= BOTTOM RIGHT ================= */}
          <div
            className="absolute top-1/2 left-1/2 
             translate-x-[50px] 
             translate-y-[100px]
             w-[215px]
             flex flex-wrap
             justify-center
             gap-6"
          >
            <Image
              src="/images/clients/bottom/b03.jpeg"
              width={100}
              height={45}
              alt=""
            />
            <Image
              src="/images/clients/bottomRight/br01.jpeg"
              width={100}
              height={45}
              alt=""
            />
            <Image
              src="/images/clients/bottomRight/br02.jpeg"
              width={90}
              height={60}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
