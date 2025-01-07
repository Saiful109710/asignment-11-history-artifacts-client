import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-600 text-white py-8 mt-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>
              We are passionate about history and the stories that artifacts
              tell. Our platform brings together historical treasures to inspire
              curiosity and knowledge.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/about" className="hover:text-sky-300">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-sky-300">Contact</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-sky-300">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-sky-300">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-sky-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-sky-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-sky-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p>Get updates on the latest artifacts and historical events.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-black focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 w-full py-2 bg-sky-700 text-white font-semibold rounded-lg hover:bg-sky-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-sky-500 mt-8">
        <p>&copy; 2025 Artifacts. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
