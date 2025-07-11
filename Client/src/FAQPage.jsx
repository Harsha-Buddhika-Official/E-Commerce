import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from './MainComponents/Navbar';
import Footer from './MainComponents/Footer';

// FAQ Item component with toggle functionality
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-purple-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQPage() {
  // State for filtering questions
  const [filterCategory, setFilterCategory] = useState('all');
  
  // FAQ categories
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'shipping', name: 'Shipping & Delivery' },
    { id: 'returns', name: 'Returns & Refunds' },
    { id: 'payment', name: 'Payment & Pricing' },
    { id: 'account', name: 'Account & Orders' },
    { id: 'product', name: 'Product Information' },
  ];
  
  // FAQ data
  const faqs = [
    {
      id: 1,
      category: 'shipping',
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available at checkout for 1-2 day delivery. International shipping times vary by destination, generally taking 7-14 business days.'
    },
    {
      id: 2,
      category: 'shipping',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times are calculated at checkout based on your location, package weight, and selected shipping method.'
    },
    {
      id: 3,
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items in new, unused condition with original packaging. Simply initiate a return through your account or contact customer service. Some products may have specific return restrictions, which will be noted on the product page.'
    },
    {
      id: 4,
      category: 'returns',
      question: 'How do I return an item?',
      answer: 'To return an item, log into your account, find the order, and select "Return Item". Follow the instructions to generate a return label. Package the item securely with all original packaging and accessories, attach the return label, and drop it off at the designated shipping carrier.'
    },
    {
      id: 5,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. Some regions may also have options for bank transfers or buy-now-pay-later services like Klarna or Afterpay.'
    },
    {
      id: 6,
      category: 'payment',
      question: 'Are there any hidden fees or taxes?',
      answer: 'We do not charge hidden fees. All applicable taxes are calculated at checkout based on your shipping address and local tax regulations. For international orders, import duties and taxes may be collected upon delivery, which are the responsibility of the customer.'
    },
    {
      id: 7,
      category: 'account',
      question: 'How do I track my order?',
      answer: 'Once your order ships, you\'ll receive an email with tracking information. You can also view order status and tracking by logging into your account and navigating to the "Order History" section.'
    },
    {
      id: 8,
      category: 'account',
      question: 'Can I change or cancel my order?',
      answer: 'Orders can be changed or canceled within 1 hour of placing them. After this window, please contact customer service as soon as possible, though we cannot guarantee changes once order processing has begun.'
    },
    {
      id: 9,
      category: 'product',
      question: 'Are your products authentic?',
      answer: 'Yes, all products sold on our platform are 100% authentic. We source directly from manufacturers or authorized distributors and have strict quality control measures in place. We do not sell counterfeit or knockoff products.'
    },
    {
      id: 10,
      category: 'product',
      question: 'What if a product is defective?',
      answer: 'If you receive a defective product, please contact us within 7 days of delivery. We may request photos of the defect. Depending on the situation, we\'ll offer a replacement, repair, or refund. For manufacturer warranty issues beyond 30 days, we\'ll help connect you with the appropriate warranty service.'
    },
    {
      id: 11,
      category: 'shipping',
      question: 'Do you offer free shipping?',
      answer: 'We offer free standard shipping on orders over $50 within the continental US. Promotional free shipping events may occur throughout the year. International orders and expedited shipping options have additional fees based on destination and package details.'
    },
    {
      id: 12,
      category: 'returns',
      question: 'Will I get a full refund for my return?',
      answer: 'For returns in new, unused condition with original packaging, you\'ll receive a full refund of the product price. Original shipping costs are not refunded unless the return is due to our error. Refunds are processed within 5-7 business days after we receive the returned item.'
    },
    {
      id: 13,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click the "Sign Up" button in the top navigation bar. Enter your email address, create a password, and provide your name and basic information. Verify your email address through the confirmation link we\'ll send, and your account will be ready to use.'
    },
    {
      id: 14,
      category: 'payment',
      question: 'Is it safe to use my credit card on your website?',
      answer: 'Yes, our website uses industry-standard SSL encryption to protect your personal and payment information. We do not store full credit card details on our servers. All payment processing is handled by trusted third-party payment processors that comply with PCI DSS standards.'
    },
    {
      id: 15,
      category: 'product',
      question: 'How can I find my product size or dimensions?',
      answer: 'Product dimensions, sizes, and specifications are listed in the "Product Details" section on each product page. For clothing or shoes, you can reference our size guides. If you need additional measurements, please contact customer service before placing your order.'
    },
  ];
  
  // Filter FAQs by category
  const filteredFAQs = filterCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === filterCategory);

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h1>
          <p className="text-xl text-white mt-4 max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, returns, and more.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full ${
                filterCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilterCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {filteredFAQs.map(faq => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
          
          {/* If no FAQs match the filter */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500">No FAQs found in this category.</p>
            </div>
          )}
        </div>
        
        {/* Still have questions section */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900">Still have questions?</h2>
          <p className="mt-4 text-gray-600">
            If you couldn't find the answer to your question, please reach out to our customer support team.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
