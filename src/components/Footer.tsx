import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Premium Labels</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of high-performance labeling solutions for industry leaders. 
              Custom labels, printed tags, and stickers with unmatched quality and compliance.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded">
                <span className="text-xs font-semibold">ISO 9001</span>
              </div>
              <div className="bg-green-600 p-2 rounded">
                <span className="text-xs font-semibold">FDA Approved</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Sales: (555) 123-4567</p>
              <p>Support: support@premiumlabels.com</p>
              <p>123 Industrial Blvd<br />Manufacturing District<br />City, State 12345</p>
            </div>
            <div className="mt-4">
              <Link 
                href="/request-a-quote" 
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors inline-block"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Premium Labels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 