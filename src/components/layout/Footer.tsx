
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blazereach-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Blaze<span className="text-blazereach-orange">Reach</span></h3>
            <p className="text-gray-300 mb-4">
              Ignite Your Brand. Dominate Your Market.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-blazereach-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-blazereach-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-blazereach-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-blazereach-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-blazereach-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blazereach-orange transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blazereach-orange transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-blazereach-orange transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-blazereach-orange transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blazereach-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-blazereach-orange transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blazereach-orange transition-colors">Search Engine Optimization</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blazereach-orange transition-colors">PPC Advertising</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blazereach-orange transition-colors">Email Marketing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blazereach-orange transition-colors">Content Creation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blazereach-orange transition-colors">Website Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blazereach-orange transition-colors">Brand Strategy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-blazereach-orange" />
                <span className="text-gray-300">123 Digital Avenue, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blazereach-orange" />
                <a href="tel:+2341234567890" className="text-gray-300 hover:text-blazereach-orange transition-colors">+234 123 456 7890</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blazereach-orange" />
                <a href="mailto:info@blazereach.com" className="text-gray-300 hover:text-blazereach-orange transition-colors">info@blazereach.com</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {currentYear} BlazeReach Digital. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-blazereach-orange transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-blazereach-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
