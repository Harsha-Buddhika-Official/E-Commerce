import React from 'react';
import Navbar from './MainComponents/Navbar';
import Footer from './MainComponents/Footer';
import { User, ShoppingBag, Clock, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  // Team members data
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
      bio: 'With over 15 years in retail technology, Sarah founded ShopVibe with a vision to transform online shopping into a more personalized experience.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
      bio: 'Michael leads our technology team, bringing 10+ years of experience in e-commerce platforms and a passion for creating seamless user experiences.'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80',
      bio: "Priya ensures that every aspect of ShopVibe's visual identity and user interface is beautiful, intuitive, and reflects our brand values."
    },
    {
      name: 'David Wilson',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&q=80',
      bio: 'David oversees our global operations, making sure that every product reaches our customers efficiently and sustainably.'
    }
  ];

  // Company values
  const values = [
    {
      title: 'Customer First',
      description: "We prioritize our customers' needs in every decision we make, striving to exceed expectations at every touchpoint.",
      icon: <User className="w-6 h-6 text-purple-600" />
    },
    {
      title: 'Quality Products',
      description: 'We carefully curate our selection to offer only the best products that meet our high standards for quality and value.',
      icon: <ShoppingBag className="w-6 h-6 text-purple-600" />
    },
    {
      title: 'Fast Delivery',
      description: 'We understand the excitement of receiving a new purchase, so we work tirelessly to ensure quick and reliable delivery.',
      icon: <Clock className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <>
      <Navbar 
        isUserLoggedIn={isUserLoggedIn}
        setIsUserLoggedIn={setIsUserLoggedIn}
        cartItems={cartItems}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 h-80">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About ShopVibe</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-100">
            Transforming online shopping with curated quality products, fast delivery, and exceptional customer service.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
              <div className="mt-6 text-lg text-gray-600 space-y-6">
                <p>
                  Founded in 2020, ShopVibe was born from a simple idea: online shopping should be just as enjoyable as visiting a physical store, with the added benefits of convenience and a wider selection.
                </p>
                <p>
                  What started as a small operation with just 50 products has grown into a comprehensive marketplace featuring thousands of items across multiple categories, from cutting-edge electronics to fashionable apparel and beyond.
                </p>
                <p>
                  Our journey hasn't always been smooth, but our commitment to quality, customer satisfaction, and continuous improvement has allowed us to grow into the trusted e-commerce platform we are today.
                </p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&q=80" 
                alt="Team meeting" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              These core principles guide everything we do at ShopVibe.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-4 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Meet the Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              The passionate individuals who make ShopVibe possible.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-purple-600">{member.role}</p>
                  <p className="mt-4 text-sm text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Get In Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Phone className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
              <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
              <p className="mt-1 text-gray-600">Mon-Fri, 9am-6pm EST</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Mail className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
              <p className="mt-2 text-gray-600">support@shopvibe.com</p>
              <p className="mt-1 text-gray-600">We respond within 24 hours</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
              <p className="mt-2 text-gray-600">123 E-Commerce Street</p>
              <p className="mt-1 text-gray-600">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
