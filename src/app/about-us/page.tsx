export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Premium Labels</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the industry in high-performance labeling solutions for over 25 years, 
            we've built our reputation on quality, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 1998, Premium Labels began as a small family-owned business with a simple mission: 
                to provide the highest quality labeling solutions for industrial applications. What started in 
                a modest 5,000 square foot facility has grown into a state-of-the-art manufacturing operation 
                serving Fortune 500 companies across multiple industries.
              </p>
              <p>
                Over the past 25+ years, we've invested heavily in technology, quality control, and customer 
                service. Our commitment to continuous improvement has earned us ISO 9001:2015 certification 
                and recognition as a trusted partner for companies requiring reliable, compliant labeling solutions.
              </p>
              <p>
                Today, we operate from a 50,000 square foot facility equipped with the latest printing and 
                finishing technology, serving clients in manufacturing, healthcare, automotive, logistics, 
                and many other industries.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🏭</div>
                <p className="text-lg">Our Manufacturing Facility</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">50K</div>
                <div className="text-sm text-gray-600">Sq Ft Facility</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">1M+</div>
                <div className="text-sm text-gray-600">Labels Produced</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide innovative, high-quality labeling solutions that help our clients 
              maintain compliance, improve efficiency, and enhance their brand presence 
              in the marketplace.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of intelligent labeling solutions, driving industry 
              innovation and setting new standards for quality, sustainability, and customer service.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, ensuring every product meets or exceeds industry standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously invest in new technologies and processes to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnership</h3>
              <p className="text-gray-600">
                We build long-term relationships with our clients, working as an extension of their team.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and respect for all stakeholders.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-semibold text-gray-900">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">Quality Management</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-2">🏥</div>
              <h3 className="font-semibold text-gray-900">FDA Approved</h3>
              <p className="text-sm text-gray-600">Medical Device Labels</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold text-gray-900">UL Listed</h3>
              <p className="text-sm text-gray-600">Safety Standards</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-semibold text-gray-900">RoHS Compliant</h3>
              <p className="text-sm text-gray-600">Environmental Standards</p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-blue-600 mb-2">CEO & Founder</p>
              <p className="text-sm text-gray-600">
                25+ years of experience in industrial labeling and manufacturing operations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 mb-2">VP of Operations</p>
              <p className="text-sm text-gray-600">
                Expert in quality management and process optimization with ISO certification experience.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mike Chen</h3>
              <p className="text-blue-600 mb-2">Technical Director</p>
              <p className="text-sm text-gray-600">
                Materials science expert specializing in adhesive technologies and compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 