import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              High-Performance Labeling Solutions for Industry Leaders
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Custom labels, printed tags, and stickers engineered for durability, compliance, and performance in demanding industrial environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Products
              </Link>
              <Link 
                href="/request-a-quote" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Product Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Labels */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏷️</div>
                  <h3 className="text-xl font-semibold">Labels</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Industrial Labels</h3>
                <p className="text-gray-600 mb-4">
                  High-performance labels designed for harsh environments, extreme temperatures, and long-term durability.
                </p>
                <Link href="/products?category=labels" className="text-blue-600 hover:text-blue-800 font-medium">
                  View Labels →
                </Link>
              </div>
            </div>

            {/* Printed Tags */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏷️</div>
                  <h3 className="text-xl font-semibold">Printed Tags</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Printed Tags</h3>
                <p className="text-gray-600 mb-4">
                  Custom printed tags with precise information, barcodes, and branding for asset management and identification.
                </p>
                <Link href="/products?category=tags" className="text-green-600 hover:text-green-800 font-medium">
                  View Tags →
                </Link>
              </div>
            </div>

            {/* Stickers */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🏷️</div>
                  <h3 className="text-xl font-semibold">Stickers</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Custom Stickers</h3>
                <p className="text-gray-600 mb-4">
                  Versatile stickers for branding, safety warnings, and product identification with superior adhesion.
                </p>
                <Link href="/products?category=stickers" className="text-purple-600 hover:text-purple-800 font-medium">
                  View Stickers →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Premium Labels?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Unmatched Quality</h3>
              <p className="text-gray-600">
                ISO 9001 certified manufacturing with rigorous quality control processes ensuring consistent excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Compliance</h3>
              <p className="text-gray-600">
                FDA, UL, and industry-specific certifications ensuring your labels meet all regulatory requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored designs, materials, and specifications to meet your exact requirements and application needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated technical support team with decades of experience in industrial labeling applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-gray-400">Fortune 500</div>
                <div className="text-sm text-gray-500">Manufacturing</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-gray-400">Global Pharma</div>
                <div className="text-sm text-gray-500">Healthcare</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-gray-400">AutoCorp</div>
                <div className="text-sm text-gray-500">Automotive</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-2xl font-bold text-gray-400">TechFlow</div>
                <div className="text-sm text-gray-500">Technology</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold">
                ISO 9001:2015 Certified
              </div>
              <div className="bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold">
                FDA Approved
              </div>
              <div className="bg-purple-600 text-white px-4 py-2 rounded text-sm font-semibold">
                UL Listed
              </div>
              <div className="bg-orange-600 text-white px-4 py-2 rounded text-sm font-semibold">
                RoHS Compliant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let our experts help you find the perfect labeling solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/request-a-quote" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <Link 
              href="/contact-us" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Our Sales Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
