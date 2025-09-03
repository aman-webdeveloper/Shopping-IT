interface Peripheral {
  id: number;
  name: string;
  specs: string[];
  image: string;
}

const peripherals: Record<string, Peripheral[]> = {
  Keyboards: [
    {
      id: 1,
      name: "Logitech K380 Multi-Device",
      specs: ["Wireless", "Bluetooth", "Compact Design", "Multi-Device Support"],
      image: "/Computer Peripherals/Peripherals1.jpg",
    },
    {
      id: 2,
      name: "Dell KB216 Wired",
      specs: ["Wired USB", "Full-Size Layout", "Spill-Resistant"],
      image: "/Computer Peripherals/Peripherals2.jpg",
    },
    {
      id: 3,
      name: "HP 230 Wireless Keyboard",
      specs: ["Wireless 2.4GHz", "Numeric Keypad", "Long Battery Life"],
      image: "/Computer Peripherals/Peripherals3.jpg",
    },
    {
      id: 4,
      name: "Mechanical Gaming Keyboard (RGB)",
      specs: ["Mechanical Keys", "RGB Lighting", "Anti-Ghosting", "USB Wired"],
      image: "/Computer Peripherals/Peripherals4.jpg",
    },
  ],

  Mice: [
    {
      id: 5,
      name: "Logitech MX Master 3S",
      specs: ["Ergonomic", "Wireless", "Customizable Buttons", "USB-C Rechargeable"],
      image:  "/Computer Peripherals/Peripherals5.jpg",
    },
    {
      id: 6,
      name: "Dell MS116",
      specs: ["Wired USB", "Optical Sensor", "Comfort Grip"],
      image:  "/Computer Peripherals/Peripherals6.jpg",
    },
    {
      id: 7,
      name: "HP 150 Wireless Mouse",
      specs: ["Wireless 2.4GHz", "Silent Click", "1200 DPI"],
      image: "/Computer Peripherals/Peripherals7.jpg",
    },
    {
      id: 8,
      name: "Gaming Mouse (RGB, 6 Buttons)",
      specs: ["Wired USB", "RGB Lighting", "Adjustable DPI", "Ergonomic Design"],
      image: "/Computer Peripherals/Peripherals8.jpg",
    },
  ],

  "Cables & Adapters": [
    {
      id: 9,
      name: "USB-C to USB-A Cable (1m)",
      specs: ["Fast Charging", "Data Sync", "Durable Nylon Braided"],
      image: "/Computer Peripherals/Peripherals9.jpg",
    },
    {
      id: 10,
      name: "HDMI Cable 4K (2m)",
      specs: ["Supports 4K UHD", "Gold-Plated Connectors", "High Speed"],
      image: "/Computer Peripherals/Peripherals10.jpg",
    },
    {
      id: 11,
      name: "USB-C to HDMI Adapter",
      specs: ["4K Output", "Plug & Play", "Compatible with Laptops & Mobiles"],
      image: "/Computer Peripherals/Peripherals11.jpg",
    },
    {
      id: 12,
      name: "3-in-1 Multi-Charging Cable",
      specs: ["Lightning + Type-C + Micro USB", "Fast Charging", "Tangle-Free"],
      image: "/Computer Peripherals/Peripherals12.jpg",
    },
  ],
};

export default function Peripherals() {
  const whatsappNumber = "918448870418";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Computer Peripherals
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Keyboards, Mice, Cables, Adapters & more essentials ⚡
      </p>

      {Object.keys(peripherals).map((category) => (
        <div key={category} className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{category}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {peripherals[category].map((item) => {
              const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hi, I'm interested in buying this: ${item.name}`
              )}`;

              return (
                <div
                  key={item.id}
                  className="bg-white shadow-lg rounded-xl p-4 flex flex-col hover:shadow-2xl transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-contain rounded-md"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-center">
                    {item.name}
                  </h3>

                  <ul className="text-gray-600 text-sm mt-3 list-disc list-inside text-left">
                    {item.specs.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-center bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
                  >
                    Buy on WhatsApp
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
