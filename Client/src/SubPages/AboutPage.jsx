import React from 'react';
import Navbar from '../MainComponents/Navbar';
import Footer from '../MainComponents/Footer';
import { User, ShoppingBag, Clock, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);

  // Team members data
  const team = [
    {
      name: 'Harsha Buddhika',
      role: 'Founder & CEO',
      image: 'https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/490946775_3982422118739189_5378580226479708071_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEYozjRbENPJodUxLKz9Mq3o53iXIgh2x-jneJciCHbHzNxJqtc2vOWua5EeAnXeiIlrGPynMyEnyibRds8-e62&_nc_ohc=wA8WzlCyx6IQ7kNvwGibgJA&_nc_oc=Adm4EZlodPIMCRbFNIky2guZ0nt6W0Pa-k-ouQZqmJvNchEEIyUlPhRjg9PCRvTDsVM&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=_IP4aRTvkj-ydSmA7pdSnA&oh=00_AfSz1ZnMUCHmAsT2mOk5v6yjYGjje95CTEk19P2H3_dLcA&oe=687704B6',
      bio: 'With over 15 years in retail technology, Harsha founded ShopVibe with a vision to transform online shopping into a more personalized experience.'
    },
    {
      name: 'Dilshan Yapa',
      role: 'Founder',
      image: 'https://scontent.fcmb2-2.fna.fbcdn.net/v/t39.30808-6/480267262_1254960259320858_4900664094280162593_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF_dfKu8xVu3Z6E9tyRzExAPCilk9--8Mo8KKWT377wyhoY3LM6Gy8U-c4xwo07zIMDuxVly4q639IyX-9IHDcg&_nc_ohc=kQPzhQqSUl8Q7kNvwE4u0bt&_nc_oc=AdljKszBZMdyRXkFHiw-47rDIesFjX5K3X1AI6T7vDtoVqQl18cBekqhP820Zk9Dszw&_nc_zt=23&_nc_ht=scontent.fcmb2-2.fna&_nc_gid=kx6ct6QGjGyj_xj_ADCHJA&oh=00_AfTiQ5hIkVNyB9vlEpwHOAjSX-BwYP6teaAy6tQVkvX64A&oe=6876FDBD',
      bio: 'With over 15 years in retail technology, Dilshan founded ShopVibe with a vision to transform online shopping into a more personalized experience.'
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
        <div className="relative flex flex-col justify-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About ShopVibe</h1>
          <p className="max-w-3xl mt-6 text-xl text-gray-100">
            Transforming online shopping with curated quality products, fast delivery, and exceptional customer service.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
              <div className="mt-6 space-y-6 text-lg text-gray-600">
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
            <div className="overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              These core principles guide everything we do at ShopVibe.
            </p>
          </div>
          
          <div className="grid gap-8 mt-12 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="p-8 text-center bg-white rounded-lg shadow-md">
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              The passionate individuals who make ShopVibe possible.
            </p>
          </div>
          
          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="overflow-hidden transition-transform bg-white rounded-lg shadow-md hover:scale-105">
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Get In Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Phone className="w-10 h-10 mb-4 text-purple-600" />
              <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
              <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
              <p className="mt-1 text-gray-600">Mon-Fri, 9am-6pm EST</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Mail className="w-10 h-10 mb-4 text-purple-600" />
              <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
              <p className="mt-2 text-gray-600">support@shopvibe.com</p>
              <p className="mt-1 text-gray-600">We respond within 24 hours</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="w-10 h-10 mb-4 text-purple-600" />
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
