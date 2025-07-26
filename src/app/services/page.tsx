import Link from 'next/link';

const services = [
  {
    id: 1,
    title: "Custom Design Consultation",
    description: "Our expert design team works with you to create labels that perfectly match your brand and application requirements.",
    icon: "🎨",
    features: [
      "Brand-consistent design",
      "Technical specification review",
      "Material selection guidance",
      "Compliance consultation"
    ]
  },
  {
    id: 2,
    title: "Inventory Management",
    description: "Comprehensive inventory management services to ensure you always have the right labels when you need them.",
    icon: "📦",
    features: [
      "Automated reorder systems",
      "Just-in-time delivery",
      "Stock level monitoring",
      "Consignment inventory"
    ]
  },
  {
    id: 3,
    title: "Application Support",
    description: "On-site technical support and training to ensure proper label application and maximum performance.",
    icon: "🔧",
    features: [
      "On-site installation support",
      "Application training",
      "Equipment recommendations",
      "Troubleshooting assistance"
    ]
  },
  {
    id: 4,
    title: "Quality Assurance",
    description: "Rigorous quality control processes and testing to ensure your labels meet the highest standards.",
    icon: "✅",
    features: [
      "ISO 9001 certified processes",
      "Batch testing and validation",
      "Performance testing",
      "Compliance verification"
    ]
  },
  {
    id: 5,
    title: "Rapid Prototyping",
    description: "Quick turnaround on prototypes to help you test and validate label designs before full production.",
    icon: "⚡",
    features: [
      "24-48 hour turnaround",
      "Multiple material options",
      "Design iteration support",
      "Performance testing"
    ]
  },
  {
    id: 6,
    title: "Technical Documentation",
    description: "Comprehensive documentation and support materials for your labeling applications.",
    icon: "📋",
    features: [
      "Installation guides",
      "Compliance documentation",
      "Technical specifications",
      "Safety data sheets"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond just products, we provide comprehensive support services to ensure your labeling solutions 
            deliver maximum value and performance for your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map(service => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={`/services/${service.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-lg text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let our team of experts help you find the perfect combination of products and services 
            to meet your labeling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/request-a-quote" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <Link 
              href="/contact-us" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 