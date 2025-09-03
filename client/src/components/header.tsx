// import { Button } from "@/components/ui/button";
// import { Phone, Menu } from "lucide-react";
// import logoPath from "@assets/1691217221499_1755162275187.jpeg";

// export default function Header() {
//   return (
//     <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center space-x-3">
//             <div className="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm">
//               <img 
//                 src={logoPath} 
//                 alt="Random IT Solutions Logo" 
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <div>
//               <span className="text-xl font-bold text-secondary">Random IT Solutions</span>
//               <div className="text-xs text-gray-500">Tech Excellence Delivered</div>
//             </div>
//           </div>
          
//           <nav className="hidden md:flex items-center space-x-8">
//             <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
//             <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Products</a>
//             <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
//             <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
//           </nav>
          
//           <div className="flex items-center space-x-4">
//             <a href="tel:+918448870418" className="hidden sm:flex items-center text-gray-600 hover:text-primary transition-colors">
//               <Phone className="text-sm mr-2" />
//               <span className="text-sm">+91 8448870418</span>
//             </a>
//             <Button asChild>
//               <a href="mailto:Raghav@randomitsolutions.com">
//                 Contact Us
//               </a>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";
// const logoPath = "/logo.jpeg";
import logoPath from "@assets/1691217221499_1755162275187.jpeg";


// Navbar links
const NAV = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm">
              <img
               src={logoPath} 
                alt="Random IT Solutions Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-secondary">
              Random IT Solutions
            </span>
          </a>

          {/* Desktop Navbar */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+918448870418"
              className="flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <Phone className="mr-2" />
              <span className="text-sm">+91 8448870418</span>
            </a>
            <Button asChild>
              <a href="mailto:Raghav@randomitsolutions.com">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="inline-flex items-center justify-center p-2 rounded-lg border bg-white hover:bg-gray-50 active:scale-95 transition"
                >
                  <Menu />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <div className="mt-10 flex flex-col space-y-4">
                  {NAV.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-2 rounded-lg text-base hover:bg-gray-100 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="tel:+918448870418"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 mt-4 text-gray-700 hover:text-primary"
                  >
                    <Phone />
                    <span>+91 8448870418</span>
                  </a>
                  <Button asChild className="mt-4">
                    <a
                      href="mailto:Raghav@randomitsolutions.com"
                      onClick={() => setOpen(false)}
                    >
                      Contact Us
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
