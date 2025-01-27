import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900">Gadget Heaven</h2>
          <p className="text-sm text-gray-600 mt-1">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Services</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Product Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Order Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
