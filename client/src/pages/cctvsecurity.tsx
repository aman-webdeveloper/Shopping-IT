interface SecurityItem {
  id: number;
  name: string;
  specs: string[];
  image: string;
}

const security: Record<string, SecurityItem[]> = {
  "CCTV Cameras": [
    {
      id: 1,
      name: "Hikvision 2MP Dome Camera",
      specs: [
        "Resolution: 1080p Full HD",
        "Night Vision: 30m IR",
        "Lens: 3.6mm Fixed",
        "Weatherproof: IP67",
      ],
      image: "/cctvbiometric/cctv1.jpg",
    },
    {
      id: 2,
      name: "CP Plus Bullet Camera",
      specs: [
        "Resolution: 4MP",
        "IR Range: 40m",
        "Weatherproof: IP67",
        "Support: H.265+ Compression",
      ],
      image: "/cctvbiometric/cctv2.jpg",
    },
    {
      id: 3,
      name: "Dahua WiFi Smart Camera",
      specs: [
        "Resolution: 2MP HD",
        "Connectivity: WiFi",
        "Features: Motion Detection, Two-Way Audio",
        "Storage: Cloud + MicroSD",
      ],
      image: "/cctvbiometric/cctv3.jpg",
    },
    {
      id: 4,
      name: "Honeywell PTZ Camera",
      specs: [
        "Resolution: 5MP Ultra HD",
        "Zoom: 20x Optical",
        "Pan & Tilt: 360° Coverage",
        "Night Vision: 100m IR",
      ],
      image: "/cctvbiometric/cctv4.jpg",
    },
  ],

  "Biometric Devices": [
    {
      id: 5,
      name: "ESSL X990 Fingerprint Machine",
      specs: [
        "Fingerprint + RFID Card",
        "Display: 3-inch TFT",
        "Users: 10,000",
        "Connectivity: LAN/USB",
      ],
      image: "/cctvbiometric/biometric5.jpg",
    },
    {
      id: 6,
      name: "Realtime T52 Face Recognition",
      specs: [
        "Face + Fingerprint + RFID",
        "Display: 5-inch Touch",
        "Capacity: 20,000 Users",
        "Connectivity: WiFi + LAN",
      ],
      image: "/cctvbiometric/biometric6.jpg",
    },
    {
      id: 7,
      name: "Mantra MFS100 Fingerprint Scanner",
      specs: [
        "STQC Certified",
        "USB Connectivity",
        "High Accuracy Sensor",
        "Ideal for Aadhaar/eKYC",
      ],
      image: "/cctvbiometric/biometric7.jpg",
    },
    {
      id: 8,
      name: "ZKTeco MB360 Access Control",
      specs: [
        "Face + Fingerprint + RFID",
        "Attendance & Access Control",
        "Multi-Verification Modes",
        "Connectivity: TCP/IP, USB",
      ],
      image: "/cctvbiometric/biometric8.jpg",
    },
  ],
};

export default function Security() {
  const whatsappNumber = "918448870418";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        CCTV & Security
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Professional CCTV cameras & biometric solutions 🔒
      </p>

      {Object.keys(security).map((category) => (
        <div key={category} className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{category}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {security[category].map((item) => {
              const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hi, I'm interested in ${item.name}`
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
