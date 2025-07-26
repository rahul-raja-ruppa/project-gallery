'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample product data - in a real app, this would come from your CMS
const productData = {
  id: 1,
  name: "Industrial Safety Labels",
  category: "labels",
  industry: "manufacturing",
  material: "vinyl",
  description: "High-visibility safety labels for industrial equipment and machinery. These labels are designed to withstand harsh industrial environments and provide clear, long-lasting safety warnings and instructions.",
  image: "🏷️",
  price: "Custom Quote",
  technicalSpecs: {
    material: "High-performance vinyl",
    adhesive: "Permanent acrylic adhesive",
    temperature: "-40°F to +200°F",
    uvResistance: "Excellent",
    chemicalResistance: "Resistant to most industrial chemicals",
    thickness: "3.5 mil",
    compliance: "ANSI Z535.4, OSHA compliant"
  },
  customization: {
    sizes: ["2\" x 3\"", "3\" x 4\"", "4\" x 6\"", "Custom sizes available"],
    colors: ["Red/White", "Yellow/Black", "Orange/Black", "Custom colors"],
    printing: ["Screen printing", "Digital printing", "Thermal transfer"],
    finishes: ["Matte", "Gloss", "Laminated", "UV resistant coating"]
  },
  downloads: [
    { name: "Product Specification Sheet", type: "PDF", size: "245 KB" },
    { name: "Safety Compliance Guide", type: "PDF", size: "1.2 MB" },
    { name: "Installation Instructions", type: "PDF", size: "890 KB" }
  ]
};

const tabs = [
  { id: 'description', name: 'Description' },
  { id: 'specifications', name: 'Technical Specifications' },
  { id: 'customization', name: 'Customization' },
  { id: 'downloads', name: 'Downloads' }
];

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/products" className="hover:text-blue-600">Products</Link></li>
            <li>/</li>
            <li className="text-gray-900">{productData.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="h-96 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <div className="text-white text-center">
                  <div className="text-8xl mb-4">{productData.image}</div>
                  <p className="text-lg">Product Image</p>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-20 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition-colors flex items-center justify-center">
                    <span className="text-2xl">🏷️</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{productData.name}</h1>
              <p className="text-gray-600 mb-6">{productData.description}</p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {productData.category}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {productData.industry}
                  </span>
                </div>
                <span className="text-2xl font-bold text-blue-600">{productData.price}</span>
              </div>

              {/* Primary CTA */}
              <Link 
                href="/request-a-quote"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center block mb-8"
              >
                Request Quote for this Product
              </Link>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  {tabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === 'description' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Product Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {productData.description}
                    </p>
                    <div className="mt-6 space-y-3">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>High-visibility design for maximum safety awareness</li>
                        <li>Durable construction for long-term performance</li>
                        <li>Compliant with industry safety standards</li>
                        <li>Easy application and removal when needed</li>
                        <li>Customizable for specific requirements</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(productData.technicalSpecs).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="font-medium text-gray-700 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <span className="text-gray-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'customization' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Customization Options</h3>
                    <div className="space-y-6">
                      {Object.entries(productData.customization).map(([key, options]) => (
                        <div key={key}>
                          <h4 className="font-semibold text-gray-900 mb-2 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {Array.isArray(options) ? options.map((option, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {option}
                              </span>
                            )) : (
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {options}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'downloads' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Downloads</h3>
                    <div className="space-y-3">
                      {productData.downloads.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                              <span className="text-red-600 text-sm font-bold">PDF</span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{file.name}</p>
                              <p className="text-sm text-gray-500">{file.size}</p>
                            </div>
                          </div>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 