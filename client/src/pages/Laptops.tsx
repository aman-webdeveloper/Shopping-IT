import { useParams } from "wouter";

interface Laptop {
  id: number;
  name: string;
  specs: string[];
  image: string;
}

const laptops: Record<string, Laptop[]> = {
  Dell: [
    {
      id: 1,
      name: "Dell G15-5520",
      specs: [
        "Category: Gaming Series – G15 i5 variant",
        "Processor: Intel Core i5-12500H",
        "RAM: 16GB",
        "Storage: 512GB SSD",
        "GPU: RTX 3050 4GB GDDR6",
        'Display: 15.6" FHD, 250 Nits',
        "OS: Windows 11 + MS Office 2021",
        "Accessories: Dell Bag, 1 Year Warranty",
      ],
      image: "/laptops/laptop1.png",
    },
    {
      id: 2,
      name: "Dell Alienware 16",
      specs: [
        "Category: Premium Gaming Series",
        "Processor: Intel Core 7-240H",
        "RAM: 16GB",
        "Storage: 1TB SSD",
        "GPU: RTX 5050 8GB",
        'Display: 16" QHD',
        "OS: Windows 11 + MS Office 2024",
        "Accessories: No Dell Bag, 1 Year Warranty",
      ],
      image: "/laptops/laptop2.png",
    },
    {
      id: 3,
      name: "Dell XPS 13 9315 ",
      specs: [
        "Category: UltraBook – Thin & Light",
        "Processor: Intel Core i7-1250U",
        "RAM: 16GB LPDDR5",
        "Storage: 512GB SSD",
        "GPU: Intel Iris Xe Graphics",
        'Display: 13.4" FHD, 500 nits, InfinityEdge',
        "OS: Windows 11 + MS Office 2021",
        "Accessories: Dell Pro Slim Bag Pack",
      ],
      image: "/laptops/laptop3.png",
    },
    {
      id: 4,
      name: "Dell XPS 16 9640 ",
      specs: [
        "Category: Premium Creator Laptop",
        "Processor: Intel Core Ultra 7 155H",
        "RAM: 32GB LPDDR5X",
        "Storage: 1TB PCIe NVMe SSD",
        "GPU: NVIDIA RTX 4060 8GB GDDR6",
        'Display: 16.3" OLED UHD, Touch',
        "OS: Windows 11 Home + MS Office 2021",
        "Accessories: Backlit Keyboard+Fingerprint",
      ],
      image: "/laptops/laptop4.png",
    },
    {
      id: 5,
      name: "Dell Latitude 3450",
      specs: [
        "Category: Business Entry Model",
        "Processor: Intel Core i3-1215U",
        "RAM: 8GB",
        "Storage: 512GB SSD",
        'Display: 14" HD',
        "OS: Ubuntu OS",
        "Accessories: 1 Year ADP",
      ],
      image: "/laptops/laptop5.png",
    },
    {
      id: 6,
      name: "Dell Latitude 3540",
      specs: [
        "Category: Mid Business Model",
        "Processor: Intel Core i5-1235U",
        "RAM: 8GB",
        "Storage: 512GB SSD",
        'Display: 15.6" FHD',
        "OS: Windows 11 Pro",
        "Accessories: 3 Years ADP, Dell Bag",
      ],
      image: "/laptops/laptop6.png",
    },
    {
      id: 7,
      name: "Dell Latitude 7450",
      specs: [
        "Category: Premium Business Model",
        "Processor: Intel Core Ultra 5 125U",
        "RAM: 16GB LPDDR5",
        "Storage: 1TB SSD",
        'Display: 14" FHD',
        "OS: Windows 11 Pro",
        "Accessories: Backlit Keyboard, Dell Bag",
      ],
      image: "/laptops/laptop7.png",
    },
    {
      id: 8,
      name: "Dell Latitude 7440 2-in-1",
      specs: [
        "Category: Touch Business Model",
        "Processor: Intel Core i7-1365U vPro",
        "RAM: 16GB LPDDR5",
        "Storage: 512GB SSD",
        'Display: 14.1" FHD Touch (1920×1200)',
        "OS: Windows 11 Pro",
        "Accessories: 3 Years ADP, Dell Bag",
      ],
      image: "/laptops/laptop8.png",
    },
  ], 

  Apple: [
    {
      id: 9,
      name: "MacBook Air M4",
      specs: [
        "Category: MacBook Air",
        "Processor: Apple M4 Chip",
        "RAM: 16GB",
        "Storage: 512GB SSD",
        "Color: Sky Blue",
      ],
      image: "/laptops/laptop9.png",
    },
    {
      id: 10,
      name: "MacBook Air 13-inch",
      specs: [
        "Category: MacBook Air",
        "Processor: Apple M4 Chip",
        "RAM: 16GB",
        "Storage: 256GB SSD",
        "Color: Midnight Blue",
      ],
      image: "/laptops/laptop10.png",
    },
    {
      id: 11,
      name: "MacBook Air",
      specs: [
        "Category: MacBook Air",
        "Processor: Apple M1 Chip",
        "RAM: 8GB",
        "Storage: 256GB SSD",
        "Color: Silver",
      ],
      image: "/laptops/laptop11.png",
    },
    {
      id: 12,
      name: "MacBook Pro 14-inch",
      specs: [
        "Category: MacBook Pro",
        "Processor: Apple M3 Pro Chip",
        "RAM: 18GB",
        "Storage: 512GB SSD",
        "Color: Space Black",
      ],
      image: "/laptops/laptop12.png",
    },
  ],

  Lenovo: [
    {
      id: 13,
      name: "ThinkBook 14 G6 IRL",
      specs: [
        "Category: ThinkBook",
        "Processor: Intel Core i3-1315U",
        "RAM: 8GB",
        "Storage: 512GB SSD",
        'Display: 14" WUXGA',
       "Graphic: Integrated Graphics",
        "OS: No OS",
      
      ],
      image: "/laptops/laptop13.png",
    },
    {
      id: 14,
      name: "ThinkPad X1 Carbon Gen 11",
      specs: [
        "Category: ThinkPad",
        "Processor: Intel Core i7-1355U",
        "RAM: 16GB",
        "Storage: 512GB SSD",
        'Display: 14" 2.8K OLED',
        "Graphic: Integrated Intel® Graphics",
        "OS: Windows 11 Pro",
      ],
      image: "/laptops/laptop14.png",
    },
    {
      id: 15,
      name: "IdeaPad Slim 5i",
      specs: [
        "Category: IdeaPad",
        "Processor: Intel Core i5-1240P",
        "RAM: 16GB",
        "Storage: 512GB SSD",
        'Display: 15.6" FHD',
        "Graphic:Integrated Intel® UHD Graphics",
        "OS: Windows 11 Home",
      ],
      image: "/laptops/laptop15.png",
    },
    {
      id: 16,
      name: "Legion 5 Pro (AMD Ryzen 7)",
      specs: [
        "Category: Legion Gaming",
        "Processor: AMD Ryzen 7 6800H",
        "RAM: 16GB",
        "Storage: 1TB SSD",
        'Display: 16" WQXGA 165Hz',
        "Graphics: NVIDIA RTX 3060 6GB",
        "OS: Windows 11 Home",
      ],
      image: "/laptops/laptop16.png",
    },
  ],

  HP: [
    {
      id: 17,
      name: "HP Pavilion 14",
      specs: [
        "Category: Pavilion",
        "Processor: Intel Core i5-1240P",
        "RAM: 16GB",
        "Storage: 512GB SSD",
        'Display: 14" FHD',
        "OS: Windows 11 Home",
      ],
      image: "/laptops/laptop17.png",
    },
    {
      id: 18,
      name: "HP Envy x360",
      specs: [
        "Category: Convertible",
        "Processor: Intel Core i7-1355U",
        "RAM: 16GB",
        "Storage: 1TB SSD",
        'Display: 15.6" OLED Touch',
        "OS: Windows 11 Home",
      ],
      image: "/laptops/laptop18.png",
    },
    {
      id: 19,
      name: "HP ProBook 440 G10",
      specs: [
        "Category: Business ProBook",
        "Processor: Intel Core i5-1335U",
        "RAM: 16GB",
        "Storage: 512GB SSD",
        'Display: 14" FHD',
        "OS: Windows 11 Pro",
      ],
      image: "/laptops/laptop19.png",
    },
    {
      id: 20,
      name: "HP Victus 16 Gaming",
      specs: [
        "Category: Gaming",
        "Processor: AMD Ryzen 7 7840HS",
        "RAM: 16GB",
        "Storage: 1TB SSD",
        "Graphics: NVIDIA RTX 4060 8GB",
        'Display: 16.1" FHD 165Hz',
      ],
      image: "/laptops/laptop20.png",
    },
  ],

  Microsoft: [
    {
      id: 21,
      name: "Surface Laptop Go 3",
      specs: [
        "Category: Surface Laptop",
        "Processor: Intel Core i5-1235U",
        "RAM: 8GB",
        "Storage: 256GB SSD",
        'Display: 12.4" PixelSense',
        "OS: Windows 11 Home",
      ],
      image: "/laptops/laptop21.png",
    },
    {
      id: 22,
      name: "Surface Laptop Studio 2",
      specs: [
        "Category: Surface Studio Convertible",
        "Processor: Intel Core i7-13700H",
        "RAM: 32GB",
        "Storage: 1TB SSD",
        'Display: 14.4" PixelSense Flow 120Hz',
        "OS: Windows 11 Pro",
      ],
      image: "/laptops/laptop22.png",
    },
    {
      id: 23,
      name: "Surface Pro 9 (Laptop Mode)",
      specs: [
        "Category: Surface 2-in-1",
        "Processor: Intel Core i5-1235U",
        "RAM: 16GB",
        "Storage: 512GB SSD",
        'Display: 13" PixelSense Touch',
        "OS: Windows 11 Pro",
      ],
      image: "/laptops/laptop23.png",
    },
    {
      id: 24,
      name: "Surface Laptop 5",
      specs: [
        "Category: Surface Laptop",
        "Processor: Intel Core i7-1265U",
        "RAM: 16GB",
        "Storage: 512GB SSD",
        'Display: 15" PixelSense',
        "OS: Windows 11 Pro",
      ],
      image: "/laptops/laptop24.png",
    },
  ],
};

export default function Laptops() {
  const whatsappNumber = "918448870418";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Laptops Collection
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Browse our latest laptops and explore the range 🚀
      </p>

      {Object.keys(laptops).map((brand) => (
        <div key={brand} className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{brand}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {laptops[brand].map((laptop) => {
              const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hi, I'm interested in buying ${laptop.name}`
              )}`;

              return (
                <div
                  key={laptop.id}
                  className="bg-white shadow-lg rounded-xl p-4 flex flex-col hover:shadow-2xl transition"
                >
                  <img
                    src={laptop.image}
                    alt={laptop.name}
                    className="w-full h-40 object-contain rounded-md"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-center">
                    {laptop.name}
                  </h3>

                  <ul className="text-gray-600 text-sm mt-3 list-disc list-inside text-left">
                    {laptop.specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-center bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
                  >
                    Shop on WhatsApp
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
