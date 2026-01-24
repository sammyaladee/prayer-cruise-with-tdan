import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/PC-Logo (1).png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={image} alt="PC Fellowship Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-orange-300 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/news" 
              className="text-white hover:text-orange-300 font-medium transition-colors duration-200"
            >
              News
            </Link>
            <Link 
              to="/exhortation" 
              className="text-white hover:text-orange-300 font-medium transition-colors duration-200"
            >
              Exhortation
            </Link>
            <Link 
              to="/livestream" 
              className="text-white hover:text-orange-300 font-medium transition-colors duration-200"
            >
              Live
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-orange-300 font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-orange-300 font-medium transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              to="/prayer-support" 
              className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              Prayer Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/news"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors"
            >
              News
            </Link>
            <Link
              to="/exhortation"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors"
            >
              Exhortation
            </Link>
            <Link
              to="/livestream"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors"
            >
              Live
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/prayer-support"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-2 rounded-md bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold text-center hover:shadow-md transition-all"
            >
              Prayer Support
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}