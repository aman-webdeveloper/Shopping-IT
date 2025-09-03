import { SiX, SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si";
import logoPath from "@assets/1691217221499_1755162275187.jpeg";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm">
                <img
                  src={logoPath}
                  alt="Random IT Solutions Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold">Random IT Solutions</span>
                <div className="text-sm text-gray-400">Tech Excellence Delivered</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for premium technology solutions across India. Quality
              products, professional service, and reliable support.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Laptops</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Desktops</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Memory & Storage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Peripherals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CCTV Installation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Biometric Systems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bulk Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rental Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technical Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              {/* Email */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Email</h4>
                <div className="space-y-1 text-sm">
                  <div>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=Raghav@randomitsolutions.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Raghav@randomitsolutions.com
                    </a>
                  </div>
                </div>
              </div>
              {/* Address */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Office Address</h4>
                <div>
                  <a
                    href="https://maps.app.goo.gl/fShHhMxZsqMvLhRv6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm leading-relaxed hover:text-white transition-colors"
                  >
                    2nd Floor, M46, Block M, Old DLF Colony, Sector 14, Gurugram, Haryana 122001
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-bold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="https://in.linkedin.com/company/random-it-solutions-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                  title="LinkedIn"
                >
                  <SiLinkedin className="text-white" />
                </a>
                <a
                  href="https://www.instagram.com/randomitsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  <SiInstagram className="text-white" />
                </a>
                <a
                  href="https://twitter.com/randomitsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-black rounded-lg flex items-center justify-center transition-colors"
                  title="Twitter"
                >
                  <SiX className="text-white" />
                </a>
                <a
                  href="https://www.youtube.com/@randomitsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
                  title="YouTube"
                >
                  <SiYoutube className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Random IT Solutions. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
