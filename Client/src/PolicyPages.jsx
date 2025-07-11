import React from 'react';
import Navbar from './MainComponents/Navbar';
import Footer from './MainComponents/Footer';
import { Link } from 'react-router-dom';

export default function PolicyPages({ policyType }) {
  // Define content based on policy type
  const policyContent = {
    customer: {
      title: "Customer Service",
      description: "We're committed to providing exceptional customer service and support.",
      content: (
        <>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Customer Service Commitment</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                At ShopVibe, we believe that excellent customer service is the foundation of our business. We strive to exceed your expectations 
                with every interaction, providing prompt, helpful, and personalized assistance whenever you need it.
              </p>
              <p className="text-gray-700">
                Our dedicated team of customer service representatives is available to help you with product inquiries, order assistance, 
                returns and exchanges, technical support, and any other questions or concerns you may have.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Methods</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Email Support</h3>
                <p className="text-gray-700">
                  For general inquiries: <span className="text-purple-600">support@shopvibe.com</span><br />
                  Response time: Within 24 hours
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Phone Support</h3>
                <p className="text-gray-700">
                  Customer Service: <span className="text-purple-600">1-800-123-4567</span><br />
                  Hours: Monday-Friday, 9:00 AM - 6:00 PM EST
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Live Chat</h3>
                <p className="text-gray-700">
                  Available on our website during business hours<br />
                  Hours: Monday-Friday, 9:00 AM - 6:00 PM EST
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Standards</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="list-disc pl-5 text-gray-700 space-y-3">
                <li><span className="font-medium">Response Time:</span> We aim to respond to all inquiries within 24 hours during business days.</li>
                <li><span className="font-medium">Resolution Time:</span> We strive to resolve most issues within 48-72 hours.</li>
                <li><span className="font-medium">Satisfaction Guarantee:</span> If you're not satisfied with our service, we want to know so we can make it right.</li>
                <li><span className="font-medium">Continuous Improvement:</span> We regularly review customer feedback to improve our service quality.</li>
              </ul>
            </div>
          </section>
        </>
      )
    },
    returns: {
      title: "Return Policy",
      description: "Information about our return and refund procedures.",
      content: (
        <>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Return Policy Overview</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, 
                we offer a hassle-free return policy to ensure your shopping experience is as pleasant as possible.
              </p>
              <p className="text-gray-700">
                Most items can be returned within 30 days of delivery for a full refund or exchange, provided they meet our return conditions.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Return Conditions</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">To be eligible for a return, your item must be:</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                <li>In the same condition that you received it</li>
                <li>Unused and in the original packaging</li>
                <li>With all tags and labels attached</li>
                <li>Accompanied by the original receipt or proof of purchase</li>
              </ul>
              <p className="text-gray-700">
                Certain products have specific return restrictions which will be clearly noted on the product page.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Refund Process</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">Once we receive your returned item, we will inspect it and notify you that we have received it. We will immediately notify you on the status of your refund after inspecting the item.</p>
              <p className="text-gray-700 mb-4">If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within 5-7 business days, depending on your card issuer's policies.</p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="font-semibold text-gray-800 mb-2">Please Note:</h3>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Original shipping costs are non-refundable</li>
                  <li>Return shipping costs are the responsibility of the customer unless the return is due to our error</li>
                  <li>Items on sale or marked as clearance may have different return policies</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Initiate a Return</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ol className="list-decimal pl-5 text-gray-700 space-y-3">
                <li>Log into your account and go to your order history</li>
                <li>Select the order and the item(s) you wish to return</li>
                <li>Fill out the return form, specifying the reason for the return</li>
                <li>Print the return label (if applicable) and prepare your package</li>
                <li>Ship the item back to the address provided</li>
              </ol>
            </div>
          </section>
        </>
      )
    },
    privacy: {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information.",
      content: (
        <>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy Policy</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                ShopVibe is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.
              </p>
              <p className="text-gray-700">
                By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your personal information except as described in this Privacy Policy.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Personal Information</h3>
              <p className="text-gray-700 mb-4">When you make a purchase or create an account, we collect:</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Shipping and billing address</li>
                <li>Phone number</li>
                <li>Payment information (we do not store complete credit card details)</li>
              </ul>
              
              <h3 className="font-semibold text-lg text-gray-800 mb-2 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">When you visit our website, we automatically collect:</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages viewed and time spent</li>
                <li>Referring website</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Provide customer service and support</li>
                <li>Send order confirmations and updates</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Protect against fraud and unauthorized transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                These measures include:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>SSL encryption for all data transmission</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication procedures</li>
                <li>Secure data storage practices</li>
              </ul>
            </div>
          </section>
        </>
      )
    },
    terms: {
      title: "Terms of Service",
      description: "The rules and guidelines that govern the use of our platform.",
      content: (
        <>
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Terms of Service</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                These Terms of Service ("Terms") govern your use of the ShopVibe website and services. By accessing or using our website, 
                you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our services.
              </p>
              <p className="text-gray-700">
                We reserve the right to update these Terms at any time without notice. Your continued use of our website after any changes 
                indicates your acceptance of the revised Terms.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User Accounts</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">When creating an account on our website:</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>You must provide accurate, current, and complete information</li>
                <li>You are responsible for maintaining the confidentiality of your account and password</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You agree to notify us immediately of any unauthorized use of your account</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Intellectual Property</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                All content on the ShopVibe website, including text, graphics, logos, images, and software, is the property of ShopVibe 
                or our content suppliers and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, republish, 
                download, store, or transmit any of the material on our website without our prior written consent.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Information and Pricing</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                We strive to provide accurate product information and pricing. However, errors may occasionally occur. We reserve the right to:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Correct any errors or inaccuracies in our content</li>
                <li>Change or update information at any time without prior notice</li>
                <li>Refuse or cancel any orders placed for products listed at an incorrect price</li>
                <li>Refuse or cancel any orders that we believe may result in fraud or violations of our Terms</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Limitation of Liability</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 mb-4">
                ShopVibe and our affiliates, officers, employees, agents, partners, and licensors shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages resulting from:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Your use of or inability to use our website or services</li>
                <li>Any unauthorized access to or use of our servers or personal information</li>
                <li>Any interruption or cessation of transmission to or from our website</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted through our website</li>
              </ul>
            </div>
          </section>
        </>
      )
    }
  };

  // Determine which policy to show
  const policy = policyContent[policyType] || policyContent.customer;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{policy.title}</h1>
          <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
            {policy.description}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {policy.content}
          
          {/* Contact Section */}
          <section>
            <div className="bg-purple-50 rounded-lg shadow-md p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Have Questions?</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our policies or need further assistance, our customer service team is here to help.
              </p>
              <Link to="/contact" className="inline-block px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors">
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
