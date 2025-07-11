import React from 'react';
import Navbar from './MainComponents/Navbar';
import Footer from './MainComponents/Footer';
import { Link } from 'react-router-dom';

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Shipping & Delivery</h1>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-white">
            Information about our shipping policies, delivery options, and timelines.
          </p>
        </div>
      </div>
      
      <div className="container px-4 py-12 mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Standard Shipping Section */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Standard Shipping</h2>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="mb-4 text-gray-700">
                Our standard shipping option typically delivers your package within 3-5 business days after processing. 
                This is our most economical shipping method and is available for all deliveries within the continental United States.
              </p>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <h3 className="mb-2 font-semibold text-gray-800">Pricing:</h3>
                <ul className="pl-5 text-gray-600 list-disc">
                  <li>Orders under $50: $5.99 shipping fee</li>
                  <li>Orders $50 and above: FREE shipping</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Express Shipping Section */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Express Shipping</h2>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="mb-4 text-gray-700">
                Need your items faster? Our express shipping delivers your package within 1-2 business days after processing.
                This option is available for most locations within the continental United States.
              </p>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <h3 className="mb-2 font-semibold text-gray-800">Pricing:</h3>
                <ul className="pl-5 text-gray-600 list-disc">
                  <li>Flat rate: $14.99 per order</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* International Shipping Section */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">International Shipping</h2>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="mb-4 text-gray-700">
                We ship to most countries worldwide. International shipping rates and delivery times are calculated at checkout based on your location, 
                package weight, and selected shipping method.
              </p>
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <h3 className="mb-2 font-semibold text-gray-800">Important Notes:</h3>
                <ul className="pl-5 text-gray-600 list-disc">
                  <li>Delivery typically takes 7-14 business days depending on the destination</li>
                  <li>Import duties and taxes are not included in the shipping cost and are the responsibility of the customer</li>
                  <li>Some products may not be available for international shipping due to regulatory restrictions</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Order Tracking Section */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Order Tracking</h2>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="mb-4 text-gray-700">
                Once your order ships, you'll receive an email with tracking information. You can also track your order by:
              </p>
              
              <ul className="pl-5 mb-4 text-gray-600 list-disc">
                <li>Logging into your account and viewing your order history</li>
                <li>Clicking the tracking link in your shipping confirmation email</li>
                <li>Contacting our customer service team</li>
              </ul>
            </div>
          </section>
          
          {/* Shipping Restrictions Section */}
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">Shipping Restrictions</h2>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="mb-4 text-gray-700">
                Certain products may be subject to shipping restrictions due to their nature, size, or regulatory requirements.
                These include but are not limited to:
              </p>
              
              <ul className="pl-5 text-gray-600 list-disc">
                <li>Hazardous materials</li>
                <li>Oversized items</li>
                <li>Certain electronic devices with batteries</li>
                <li>Products that are prohibited for import in specific countries</li>
              </ul>
            </div>
          </section>
          
          {/* Contact Section */}
          <section>
            <div className="p-6 text-center rounded-lg shadow-md bg-purple-50">
              <h2 className="mb-3 text-xl font-bold text-gray-800">Need More Information?</h2>
              <p className="mb-4 text-gray-700">
                If you have any questions about shipping options or delivery to your location, please contact our customer service team.
              </p>
              <Link to="/contact" className="inline-block px-6 py-2 font-medium text-white transition-colors bg-purple-600 rounded-md hover:bg-purple-700">
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
