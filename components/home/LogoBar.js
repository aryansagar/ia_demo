"use client";

import Image from "next/image";

const logos = [

    {
    src: "/images/logos/ncsm.png",
    alt: "ncsm",
    width: 85,
    height: 20,
    adjust: ""
  },

  {
    src: "/images/logos/saintGobain.jpeg",
    alt: "ncsm",
    width: 85,
    height: 20,
    adjust: ""
  },
  {
    src: "/images/logos/cadabams.png",
    alt: "cadabams",
    width: 80,
    height: 20,
    adjust: "mt-3"
  },
 {
    src: "/images/logos/exide.png",
    alt: "Exide",
    width: 92,
    height: 30,
    adjust: ""
  },
  {
    src: "/images/logos/moe.png",
    alt: "Exide",
    width: 92,
    height: 30,
    adjust: ""
  }
];

export default function ClientLogoBar() {
  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-8xl mx-12 flex justify-evenly items-center gap-14 px-4">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={`object-contain block ${logo.adjust}`}
          />
        ))}
      </div>
    </div>
  );
}
