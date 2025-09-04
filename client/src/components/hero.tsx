import { Button } from "@/components/ui/button";
import { IndianRupee, Shield, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Premium Tech Solutions
              {/* <span className="text-primary block">Technology That Delivers</span> */}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover a wide range of laptops including MacBook, Lenovo, HP, Acer, Asus, and Microsoft — along with high-performance desktops and essential IT accessories, trusted by professionals nationwide            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold">
                <a
                  href="https://wa.me/918448870418?text=Hello%20Random%20IT%20Solutions%2C%20I%20am%20interested%20in%20exploring%20your%20latest%20products%20and%20offers.%20Please%20share%20more%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  <FaWhatsapp className="mr-3 text-lg" />
                  Shop on WhatsApp
                </a>


              </Button>
              <Button variant="outline" asChild className="border-2 border-primary text-primary px-8 py-4 rounded-xl hover:bg-primary hover:text-white transition-all font-semibold">
                <a href="#products">
                  Browse Products
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start mt-8 space-x-8">
              <div className="flex items-center text-accent">
                <IndianRupee className="mr-2" />
                <span className="text-sm font-medium">Affordable Pricing</span>
              </div>
              <div className="flex items-center text-accent">
                <Shield className="mr-2" />
                <span className="text-sm font-medium">Quality Assured</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/mainhomepageimage.png"
              alt="Modern tech workspace with laptops and devices"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
