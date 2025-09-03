import { useParams } from "wouter";

const memoryStorageProducts = [
  {
    id: 1,
    name: "Corsair Vengeance LPX 16GB",
    description: "High-performance DDR4 RAM, 3200MHz. Ideal for gaming and multitasking.",
    image: "/memorystorage/memorystroage1.jpg",
  },
  {
    id: 2,
    name: "G.Skill Trident Z RGB 32GB",
    description: "DDR4 3600MHz RAM with RGB lighting. Perfect for enthusiasts and high-performance builds.",
    image: "/memorystorage/memorystroage2.jpg",
  },
  {
    id: 3,
    name: "Samsung 980 Pro 1TB NVMe SSD",
    description: "Ultra-fast PCIe Gen4 SSD. Boost your system performance with lightning speeds.",
    image: "/memorystorage/memorystroage3.jpg",
  },
  {
    id: 4,
    name: "Western Digital Black SN850 2TB",
    description: "High-speed NVMe SSD for gaming and content creation. Reliable and fast.",
    image: "/memorystorage/memorystroage4.jpg",
  },
  {
    id: 5,
    name: "Crucial MX500 1TB SATA SSD",
    description: "Affordable and reliable SATA SSD. Ideal for upgrading older systems.",
    image: "/memorystorage/memorystroage5.jpg",
  },
  {
    id: 6,
    name: "Seagate Barracuda 4TB HDD",
    description: "High-capacity HDD for mass storage. Reliable for backups and media storage.",
    image: "/memorystorage/memorystroage6.jpg",
  },
  {
    id: 7,
    name: "Kingston FURY Beast 16GB DDR5",
    description: "Next-gen DDR5 RAM, 5200MHz. Extreme speed for new-gen PCs.",
    image: "/memorystorage/memorystroage7.jpg",
  },
  {
    id: 8,
    name: "Samsung 870 EVO 2TB SATA SSD",
    description: "Durable SATA SSD for everyday computing and storage upgrades.",
    image: "/memorystorage/memorystroage8.jpg",
  },
];

export default function MemoryStorage() {
  const params = useParams();
  const whatsappNumber = "918448870418"; // apna number

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center">Memory & Storage</h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        RAM, SSDs, and storage solutions for optimal performance 🚀
      </p>

      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {memoryStorageProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain rounded-md"
            />
            <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi,%20I'm%20interested%20in%20buying%20${encodeURIComponent(
                product.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              Shop on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
