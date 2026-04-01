import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
         
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-5xl font-bold tracking-tighter text-white">
                DigiTools
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>

        
          </div>

          
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 text-2xl">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Models
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 text-2xl">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 text-2xl">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 text-2xl">Social Links</h3>
            <div className="flex gap-4 text-zinc-400">
              <a href="#" className="hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaInstagram size={20} />
              </a>
            </div>

          </div>
          
        </div>
      
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} © 2026 Digitools. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition">
              <p>Privacy Policy</p>
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <p>Terms of Service</p>
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <p>Cookies</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;