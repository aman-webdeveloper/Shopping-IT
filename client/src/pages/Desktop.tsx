import { useParams } from "wouter";

const desktops = [
  // --- HP (2 models) ---
  {
    id: 1,
    name: "HP 280 gG MT (B6BP4AT)",
    specs: [
      "Processor: Intel Core i3-12100",
      "RAM: 8GB DDR4",
      "Storage: 512GB SSD",
      "OS: DOS",
      "Warranty: 3 Years",
    ],
    image: "/desktop/desktopone.png",
  },
  {
    id: 2,
    name: "HP 280 gG MT (A72RFPT)",
    specs: [
      "Processor: Intel Core i5-12500",
      "RAM: 8GB DDR4",
      "Storage: 512GB SSD",
      "DVD Drive: Yes",
      "OS: Windows 11 Pro",
      "Warranty: 3 Years",
    ],
    image: "/desktop/desktop2.png",
  },

  // --- Lenovo (2 models) ---
  {
    id: 3,
    name: "Lenovo M70t Gen 5 – 12U6S01100",
    specs: [
      "Processor: Intel® Core™ i7-13700",
      "RAM: 16 GB",
      "Storage: 512 GB SSD M.2 2280 PCIe Gen4 TLC Opal",
      "OS: No OS (NOS)",
      'Monitor: 22" Included',
      "Accessories: Keyboard & Mouse Included",
      "Warranty: 3 Years Premier Support",
    ],
    image: "/desktop/desktop3.png",
  },
  {
    id: 4,
    name: "Lenovo M70t Gen 5 – 12U6S01200",
    specs: [
      "Processor: Intel® Core™ i7-13700",
      "RAM: 16 GB",
      "Storage: 512 GB SSD M.2 2280 PCIe Gen4 TLC Opal",
      "OS: Windows 11 Pro",
      'Monitor: 22" Included',
      "Accessories: Keyboard & Mouse Included",
      "Warranty: 3 Years Premier Support",
    ],
    image: "/desktop/desktop4.png",
  },

  // --- Microsoft Surface (2 models) ---
  {
    id: 5,
    name: "Microsoft Surface Pro 11 Ultra 2 – Platinum – EP2-20022-SP11",
    specs: [
      "Processor: Intel CU7",
      "RAM: 32 GB",
      "Storage: 256 GB SSD",
      "Color: Platinum",
      "Display: 13-inch",
    ],
    image: "/desktop/tablet5.png",
  },
  {
    id: 6,
    name: "Microsoft Surface Pro 11 Ultra 2 – Black – EP2-20118-SP11",
    specs: [
      "Processor: Intel CU5",
      "RAM: 16 GB",
      "Storage: 512 GB SSD",
      "Color: Black",
      "Display: 13-inch",
    ],
    image: "/desktop/tablet6.png",
  },

  // --- Apple iPads (2 models) ---
  {
    id: 7,
    name: "Apple iPad 9th Gen (Wi-Fi, 64GB)",
    specs: [
      "Generation: 9th Gen",
      "Connectivity: Wi-Fi",
      "Storage: 64 GB",
      "Quantity: 4 Units",
    ],
    image: "/desktop/tablet7.png",
  },
  {
    id: 8,
    name: "Apple iPad 10th Gen (Wi-Fi, 64GB, Blue)",
    specs: [
      "Generation: 10th Gen",
      "Connectivity: Wi-Fi",
      "Storage: 64 GB",
      "Color: Blue",
      "Quantity: 12 Units",
    ],
    image: "/desktop/tablet8.png",
  },
];

export default function Desktops() {
  const params = useParams();
  const whatsappNumber = "918448870418"; // +91 without '+'

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Desktops & iPad Collection
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Browse our latest desktops and explore the range 🚀
      </p>

      {/* ✅ Updated Grid 4-4 layout */}
      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {desktops.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col justify-between"
          >
            <div>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain"
              />
              <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
              <ul className="mt-2 text-gray-600 text-sm space-y-1">
                {item.specs.map((spec, idx) => (
                  <li key={idx}>• {spec}</li>
                ))}
              </ul>
            </div>

            {/* ✅ WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in ${item.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              📲 Shop on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
