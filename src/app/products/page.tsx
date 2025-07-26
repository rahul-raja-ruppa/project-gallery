'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample product data - in a real app, this would come from your CMS
const products = [
  {
    id: 1,
    name: "Industrial Safety Labels",
    category: "labels",
    industry: "manufacturing",
    material: "vinyl",
    description: "High-visibility safety labels for industrial equipment and machinery.",
    image: "🏷️",
    price: "Custom Quote"
  },
  {
    id: 2,
    name: "Asset Management Tags",
    category: "tags",
    industry: "logistics",
    material: "polyester",
    description: "Durable asset identification tags with barcode and QR code options.",
    image: "🏷️",
    price: "Custom Quote"
  },
  {
    id: 3,
    name: "Pharmaceutical Labels",
    category: "labels",
    industry: "healthcare",
    material: "paper",
    description: "FDA-compliant labels for pharmaceutical products and medical devices.",
    image: "🏷️",
    price: "Custom Quote"
  },
  {
    id: 4,
    name: "Branding Stickers",
    category: "stickers",
    industry: "retail",
    material: "vinyl",
    description: "Custom branding stickers for product packaging and marketing.",
    image: "🏷️",
    price: "Custom Quote"
  },
  {
    id: 5,
    name: "Temperature-Resistant Labels",
    category: "labels",
    industry: "automotive",
    material: "polyester",
    description: "Labels designed to withstand extreme temperatures and harsh environments.",
    image: "🏷️",
    price: "Custom Quote"
  },
  {
    id: 6,
    name: "Inventory Tags",
    category: "tags",
    industry: "warehouse",
    material: "paper",
    description: "Cost-effective inventory management tags with sequential numbering.",
    image: "🏷️",
    price: "Custom Quote"
  }
];

const categories = ["labels", "tags", "stickers"];
const industries = ["manufacturing", "healthcare", "automotive", "logistics", "retail", "warehouse"];
const materials = ["vinyl", "polyester", "paper"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");

  const filteredProducts = products.filter(product => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (selectedIndustry && product.industry !== selectedIndustry) return false;
    if (selectedMaterial && product.material !== selectedMaterial) return false;
    return true;
  });

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedIndustry("");
    setSelectedMaterial("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Product Solutions</h1>
          <p className="text-gray-600">Find the perfect labeling solution for your business needs</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtering Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Filter Products</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600 capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Industry Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Industry</h3>
                <div className="space-y-2">
                  {industries.map(industry => (
                    <label key={industry} className="flex items-center">
                      <input
                        type="radio"
                        name="industry"
                        value={industry}
                        checked={selectedIndustry === industry}
                        onChange={(e) => setSelectedIndustry(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600 capitalize">{industry}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Material Type</h3>
                <div className="space-y-2">
                  {materials.map(material => (
                    <label key={material} className="flex items-center">
                      <input
                        type="radio"
                        name="material"
                        value={material}
                        checked={selectedMaterial === material}
                        onChange={(e) => setSelectedMaterial(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600 capitalize">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory || selectedIndustry || selectedMaterial) && (
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded text-sm font-medium hover:bg-gray-300 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products match your current filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-2">{product.image}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                        <span className="text-sm text-gray-500 capitalize">{product.industry}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-blue-600">{product.price}</span>
                        <Link 
                          href={`/products/${product.id}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 