import { useParams } from "wouter";

interface Software {
  id: number;
  name: string;
  specs: string[];
  image: string;
}

const softwareLicenses: Software[] = [
  {
    id: 1,
    name: "Microsoft Office 365",
    specs: ["License: 1 Year", "Apps: Word, Excel, PowerPoint", "Cloud: 1TB OneDrive"],
    image: "/software&license/software&license1.jpg",
  },
  {
    id: 2,
    name: "Windows 11 Pro",
    specs: ["OS License", "Lifetime Activation", "For Business Use"],
    image: "/software&license/software&license2.jpg",
  },
  {
    id: 3,
    name: "Adobe Photoshop",
    specs: ["License: 1 Year", "Creative Cloud Access", "Professional Tools"],
    image: "/software&license/software&license3.jpg",
  },
  {
    id: 4,
    name: "Adobe Premiere Pro",
    specs: ["License: 1 Year", "Video Editing Suite", "Creative Cloud"],
    image: "/software&license/software&license4.jpg",
  },
  {
    id: 5,
    name: "Google Workspace",
    specs: ["Gmail, Docs, Sheets", "Business Tools", "Cloud Storage"],
    image: "/software&license/software&license5.jpg",
  },
  {
    id: 6,
    name: "MacOS License",
    specs: ["Latest macOS", "System Upgrade", "Secure & Optimized"],
    image: "/software&license/software&license6.jpg",
  },
  {
    id: 7,
    name: "Antivirus Software",
    specs: ["1 Year Security", "Malware Protection", "Safe Browsing"],
    image: "/software&license/software&license7.jpg",
  },
  {
    id: 8,
    name: "CorelDRAW Graphics Suite",
    specs: ["Lifetime License", "Design Tools", "Vector Illustration"],
    image: "/software&license/software&license8.jpg",
  },
  {
    id: 9,
    name: "AutoCAD",
    specs: ["License: 1 Year", "2D/3D Design", "Professional Software"],
    image: "/software&license/software&license9.jpg",
  },
  {
    id: 10,
    name: "Tally ERP 9",
    specs: ["Lifetime License", "GST Ready", "Business Accounting"],
    image: "/software&license/software&license10.jpg",
  },
  {
    id: 11,
    name: "QuickBooks",
    specs: ["Online License", "Accounting Software", "Easy Invoicing"],
    image: "/software&license/software&license11.jpg",
  },
  {
    id: 12,
    name: "Windows Server 2022",
    specs: ["Data Center Edition", "Enterprise License", "Secure Cloud"],
    image: "/software&license/software&license12.jpg",
  },
];

export default function SoftwareLicenses() {
  const params = useParams();
  const whatsappNumber = "918448870418";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Software & Licenses
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Explore our latest licensed software and OS installations 🚀
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {softwareLicenses.map((software) => {
          const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi,%20I'm%20interested%20in%20buying%20${encodeURIComponent(
            software.name
          )}`;

          return (
            <div
              key={software.id}
              className="bg-white shadow-lg rounded-xl p-4 flex flex-col hover:shadow-2xl transition"
            >
              <img
                src={software.image}
                alt={software.name}
                className="w-full h-40 object-contain rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold text-center">
                {software.name}
              </h3>

              <ul className="text-gray-600 text-sm mt-3 list-disc list-inside text-left">
                {software.specs.map((spec, index) => (
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
  );
}
