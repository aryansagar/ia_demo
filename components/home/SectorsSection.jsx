import Image from "next/image";

const sectors = [
    { id: 1, name: "Automotive", icon: "/sectors/Automotive.jpeg" },
    { id: 2, name: "Retail", icon: "/sectors/Retail.jpeg" },
    { id: 3, name: "Pharmaceutical", icon: "/sectors/Pharmaceutical.jpeg" },
    { id: 4, name: "Mining", icon: "/sectors/Mining.jpeg" },
    { id: 5, name: "Games & Entertainment", icon: "/sectors/Games.jpeg" },
    { id: 6, name: "Sports & Fitness", icon: "/sectors/Sports.jpeg" },
    { id: 7, name: "Fashion", icon: "/sectors/Fashion.jpeg" },
    { id: 8, name: "Manufacturing", icon: "/sectors/Manufacturing.jpeg" },
    { id: 9, name: "Oil & Gas", icon: "/sectors/Oil.jpeg" },
    { id: 10, name: "Ecommerce", icon: "/sectors/Ecomm.jpeg" },
    { id: 11, name: "Heritage", icon: "/sectors/Heritage.jpeg" },
    { id: 12, name: "Dental", icon: "/sectors/Dental.jpeg" },
  ];
  
export default function SectorsSection() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Sector We Serve
        </h2>

        <p className="text-[#545454] max-w-3xl mx-auto mb-14 text-lg leading-relaxed font-freesans">
          We are proud to provide our services across various sectors,
          delivering tailored solutions to meet the specific needs of our clients.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="flex flex-col items-center">
              <div
                className="w-28 h-28 rounded-full border border-gray-300 
                           flex items-center justify-center
                           overflow-hidden"
              >
                {sector.icon.startsWith("/") ? (
                  <Image
                    src={sector.icon}
                    alt={sector.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-4xl">{sector.icon}</span>
                )}
              </div>

              <p className="mt-5 font-semibold text-gray-800 text-center text-base font-freesans">
                {sector.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
