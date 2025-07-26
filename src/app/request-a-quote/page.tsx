'use client';

import { useState } from 'react';

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    
    // Project Details
    projectType: '',
    quantity: '',
    timeline: '',
    budget: '',
    
    // Product Requirements
    productCategory: '',
    material: '',
    size: '',
    colors: '',
    specialRequirements: '',
    
    // Additional Information
    industry: '',
    application: '',
    compliance: '',
    additionalNotes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, this would send to your backend/CMS
    console.log('RFQ submitted:', formData);
    alert('Thank you for your quote request! Our team will review your requirements and get back to you within 24 hours.');
    
    setIsSubmitting(false);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Company Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
            Contact Name *
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            required
            value={formData.contactName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your.email@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
          Company Website
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="https://www.yourcompany.com"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select project type</option>
            <option value="new-product">New Product Launch</option>
            <option value="replacement">Replacement/Upgrade</option>
            <option value="custom-design">Custom Design</option>
            <option value="bulk-order">Bulk Order</option>
            <option value="prototype">Prototype/Sample</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
            Estimated Quantity *
          </label>
          <select
            id="quantity"
            name="quantity"
            required
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select quantity range</option>
            <option value="1-100">1 - 100</option>
            <option value="101-500">101 - 500</option>
            <option value="501-1000">501 - 1,000</option>
            <option value="1001-5000">1,001 - 5,000</option>
            <option value="5001-10000">5,001 - 10,000</option>
            <option value="10000+">10,000+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
            Timeline *
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select timeline</option>
            <option value="rush">Rush (1-2 weeks)</option>
            <option value="standard">Standard (3-4 weeks)</option>
            <option value="flexible">Flexible (1-2 months)</option>
            <option value="long-term">Long-term project</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select budget range</option>
            <option value="under-1000">Under $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000-25000">$10,000 - $25,000</option>
            <option value="25000+">$25,000+</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Requirements</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-2">
            Product Category *
          </label>
          <select
            id="productCategory"
            name="productCategory"
            required
            value={formData.productCategory}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select category</option>
            <option value="labels">Labels</option>
            <option value="tags">Printed Tags</option>
            <option value="stickers">Stickers</option>
            <option value="multiple">Multiple Categories</option>
          </select>
        </div>
        <div>
          <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Material
          </label>
          <select
            id="material"
            name="material"
            value={formData.material}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select material</option>
            <option value="vinyl">Vinyl</option>
            <option value="polyester">Polyester</option>
            <option value="paper">Paper</option>
            <option value="not-sure">Not sure - need guidance</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-2">
            Size Requirements
          </label>
          <input
            type="text"
            id="size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., 2\" x 3\", 4\" x 6\", custom"
          />
        </div>
        <div>
          <label htmlFor="colors" className="block text-sm font-medium text-gray-700 mb-2">
            Color Requirements
          </label>
          <input
            type="text"
            id="colors"
            name="colors"
            value={formData.colors}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Red/White, CMYK, Pantone colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-2">
          Special Requirements
        </label>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          rows={4}
          value={formData.specialRequirements}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Any special requirements, certifications, or specifications..."
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
            Industry *
          </label>
          <select
            id="industry"
            name="industry"
            required
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select industry</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="healthcare">Healthcare/Pharmaceutical</option>
            <option value="automotive">Automotive</option>
            <option value="logistics">Logistics/Transportation</option>
            <option value="retail">Retail</option>
            <option value="warehouse">Warehouse/Distribution</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="application" className="block text-sm font-medium text-gray-700 mb-2">
            Application
          </label>
          <input
            type="text"
            id="application"
            name="application"
            value={formData.application}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., Equipment labeling, product packaging"
          />
        </div>
      </div>

      <div>
        <label htmlFor="compliance" className="block text-sm font-medium text-gray-700 mb-2">
          Compliance Requirements
        </label>
        <textarea
          id="compliance"
          name="compliance"
          rows={3}
          value={formData.compliance}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Any specific compliance requirements (FDA, UL, ISO, etc.)..."
        />
      </div>

      <div>
        <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Notes
        </label>
        <textarea
          id="additionalNotes"
          name="additionalNotes"
          rows={4}
          value={formData.additionalNotes}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Any additional information that would help us provide a better quote..."
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Request a Quote</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a detailed quote for your labeling needs. Our team will review your requirements 
            and provide competitive pricing within 24 hours.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {currentStep} of 4</span>
            <span className="text-sm text-gray-500">{Math.round((currentStep / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
              >
                Previous
              </button>
            )}
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            )}
          </div>
        </form>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">24-Hour Response</h3>
            <p className="text-sm text-gray-600">Get your quote within 24 hours</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert Consultation</h3>
            <p className="text-sm text-gray-600">Free technical consultation included</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">No Obligation</h3>
            <p className="text-sm text-gray-600">Free quotes with no commitment</p>
          </div>
        </div>
      </div>
    </div>
  );
} 