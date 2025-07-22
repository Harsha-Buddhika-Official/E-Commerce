import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, MapPin, Shield, Eye, EyeOff, Camera, Save, Edit2, Bell, CreditCard, Globe, Lock, Trash2, Plus, Home, Building, CheckCircle, X } from 'lucide-react';

export default function UserProfileSettings() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState({
    profile: false,
    security: false,
    notifications: false
  });
  const [showAddAddress, setShowAddAddress] = useState(false);

  // Handle URL parameters for direct navigation
  useEffect(() => {
    const section = searchParams.get('section');
    if (section && ['profile', 'addresses', 'security', 'notifications', 'privacy'].includes(section)) {
      setActiveSection(section);
    }
  }, [searchParams]);

  // Mock user data - replace with actual data from your backend
  const [userData, setUserData] = useState({
    // Personal Information
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1995-06-15',
    gender: 'prefer-not-to-say',
    profileImage: null,
    
    // Addresses
    addresses: [
      {
        id: 1,
        type: 'home',
        label: 'Home',
        firstName: 'Alex',
        lastName: 'Johnson',
        address: '123 Main Street',
        apartment: 'Apt 4B',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        country: 'United States',
        isDefault: true
      },
      {
        id: 2,
        type: 'work',
        label: 'Work',
        firstName: 'Alex',
        lastName: 'Johnson',
        address: '456 Business Ave',
        apartment: 'Suite 200',
        city: 'New York',
        state: 'NY',
        zipCode: '10002',
        country: 'United States',
        isDefault: false
      }
    ],
    
    // Security Settings
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false,
    
    // Notification Preferences
    notifications: {
      email: {
        orderUpdates: true,
        promotions: true,
        newsletter: false,
        security: true
      },
      sms: {
        orderUpdates: true,
        promotions: false,
        security: true
      },
      push: {
        orderUpdates: true,
        promotions: false,
        security: true
      }
    },
    
    // Privacy Settings
    privacy: {
      profileVisibility: 'private',
      showEmail: false,
      showPhone: false,
      dataSharing: false
    }
  });

  const [newAddress, setNewAddress] = useState({
    type: 'home',
    label: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    isDefault: false
  });

  const handleInputChange = (section, field, value) => {
    setUserData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleProfileChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (type, setting, value) => {
    setUserData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: {
          ...prev.notifications[type],
          [setting]: value
        }
      }
    }));
  };

  const handlePrivacyChange = (setting, value) => {
    setUserData(prev => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [setting]: value
      }
    }));
  };

  const toggleEdit = (section) => {
    setIsEditing(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSave = (section) => {
    // Backend integration for saving user data should be implemented here
    toggleEdit(section);
    // Show success message
  };

  const handleAddAddress = () => {
    if (newAddress.firstName && newAddress.lastName && newAddress.address && newAddress.city) {
      const addressWithId = {
        ...newAddress,
        id: Date.now(), // Simple ID generation
      };
      
      setUserData(prev => ({
        ...prev,
        addresses: [...prev.addresses, addressWithId]
      }));
      
      setNewAddress({
        type: 'home',
        label: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',
        isDefault: false
      });
      
      setShowAddAddress(false);
    }
  };

  const handleDeleteAddress = (addressId) => {
    setUserData(prev => ({
      ...prev,
      addresses: prev.addresses.filter(addr => addr.id !== addressId)
    }));
  };

  const handleSetDefaultAddress = (addressId) => {
    setUserData(prev => ({
      ...prev,
      addresses: prev.addresses.map(addr => ({
        ...addr,
        isDefault: addr.id === addressId
      }))
    }));
  };

  const sections = [
    { id: 'profile', label: 'Profile Information', icon: User },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Lock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-900">
      {/* Header */}
      <div className="border-b bg-white/10 backdrop-blur-lg border-white/20">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center">
            <button
              onClick={() => navigate('/user-dashboard')}
              className="p-2 mr-4 text-white/70 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
                <User className="w-6 h-6 text-white" />
              </div>
              <h1 className="ml-3 text-2xl font-bold text-white">Profile Settings</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="overflow-hidden border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
              <div className="p-6">
                <h3 className="text-lg font-medium text-white">Settings</h3>
                <nav className="mt-6 space-y-1">
                  {sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <section.icon className="w-4 h-4 mr-3" />
                      {section.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
              {/* Profile Information */}
              {activeSection === 'profile' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-white">Profile Information</h3>
                    <button
                      onClick={() => isEditing.profile ? handleSave('profile') : toggleEdit('profile')}
                      className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      {isEditing.profile ? (
                        <>
                          <Save className="w-4 h-4 mr-2" />
                          Save Changes
                        </>
                      ) : (
                        <>
                          <Edit2 className="w-4 h-4 mr-2" />
                          Edit Profile
                        </>
                      )}
                    </button>
                  </div>

                  {/* Profile Picture */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="flex items-center justify-center w-20 h-20 text-2xl text-white/70 bg-white/10 rounded-full">
                        {userData.profileImage ? (
                          <img src={userData.profileImage} alt="Profile" className="w-20 h-20 rounded-full" />
                        ) : (
                          <User className="w-8 h-8" />
                        )}
                      </div>
                      {isEditing.profile && (
                        <button className="absolute bottom-0 right-0 p-1 text-white bg-blue-600 rounded-full hover:bg-blue-700">
                          <Camera className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-white">Profile Picture</h4>
                      <p className="text-sm text-white/70">Update your profile picture</p>
                    </div>
                  </div>

                  {/* Profile Form */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-white/70">First Name</label>
                      <input
                        type="text"
                        value={userData.firstName}
                        onChange={(e) => handleProfileChange('firstName', e.target.value)}
                        disabled={!isEditing.profile}
                        className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500 disabled:bg-white/5 disabled:text-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70">Last Name</label>
                      <input
                        type="text"
                        value={userData.lastName}
                        onChange={(e) => handleProfileChange('lastName', e.target.value)}
                        disabled={!isEditing.profile}
                        className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500 disabled:bg-white/5 disabled:text-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70">Email</label>
                      <input
                        type="email"
                        value={userData.email}
                        onChange={(e) => handleProfileChange('email', e.target.value)}
                        disabled={!isEditing.profile}
                        className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500 disabled:bg-white/5 disabled:text-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70">Phone</label>
                      <input
                        type="tel"
                        value={userData.phone}
                        onChange={(e) => handleProfileChange('phone', e.target.value)}
                        disabled={!isEditing.profile}
                        className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500 disabled:bg-white/5 disabled:text-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70">Date of Birth</label>
                      <input
                        type="date"
                        value={userData.dateOfBirth}
                        onChange={(e) => handleProfileChange('dateOfBirth', e.target.value)}
                        disabled={!isEditing.profile}
                        className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500 disabled:bg-white/5 disabled:text-white/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/70">Gender</label>
                      <select
                        value={userData.gender}
                        onChange={(e) => handleProfileChange('gender', e.target.value)}
                        disabled={!isEditing.profile}
                        className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500 disabled:bg-white/5 disabled:text-white/50"
                      >
                        <option value="male" className="bg-gray-800">Male</option>
                        <option value="female" className="bg-gray-800">Female</option>
                        <option value="other" className="bg-gray-800">Other</option>
                        <option value="prefer-not-to-say" className="bg-gray-800">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Addresses */}
              {activeSection === 'addresses' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-white">Saved Addresses</h3>
                    <button
                      onClick={() => setShowAddAddress(true)}
                      className="flex items-center px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Address
                    </button>
                  </div>

                  {/* Address List */}
                  <div className="space-y-4">
                    {userData.addresses.map(address => (
                      <div key={address.id} className="p-4 border rounded-lg bg-white/5 border-white/20">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start">
                            <div className="p-2 mr-3 rounded bg-blue-500/20">
                              {address.type === 'home' ? <Home className="w-4 h-4 text-blue-400" /> : <Building className="w-4 h-4 text-blue-400" />}
                            </div>
                            <div>
                              <div className="flex items-center">
                                <h4 className="font-medium text-white">{address.label}</h4>
                                {address.isDefault && (
                                  <span className="px-2 py-1 ml-2 text-xs font-medium text-blue-300 rounded bg-blue-500/20">
                                    Default
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-white/70">
                                {address.firstName} {address.lastName}
                              </p>
                              <p className="text-sm text-white/70">
                                {address.address}
                                {address.apartment && `, ${address.apartment}`}
                              </p>
                              <p className="text-sm text-white/70">
                                {address.city}, {address.state} {address.zipCode}
                              </p>
                              <p className="text-sm text-white/70">{address.country}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            {!address.isDefault && (
                              <button
                                onClick={() => handleSetDefaultAddress(address.id)}
                                className="px-3 py-1 text-xs font-medium text-blue-300 border rounded border-blue-500/30 hover:bg-blue-500/20"
                              >
                                Set Default
                              </button>
                            )}
                            <button
                              onClick={() => handleDeleteAddress(address.id)}
                              className="p-1 text-red-400 hover:text-red-300"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Add Address Modal */}
                  {showAddAddress && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
                      <div className="w-full max-w-md max-h-screen p-6 m-4 overflow-y-auto border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-medium text-white">Add New Address</h3>
                          <button
                            onClick={() => setShowAddAddress(false)}
                            className="text-white/70 hover:text-white"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-white/70">Address Type</label>
                            <select
                              value={newAddress.type}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, type: e.target.value }))}
                              className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                            >
                              <option value="home" className="bg-gray-800">Home</option>
                              <option value="work" className="bg-gray-800">Work</option>
                              <option value="other" className="bg-gray-800">Other</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70">Label</label>
                            <input
                              type="text"
                              value={newAddress.label}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, label: e.target.value }))}
                              placeholder="e.g., Home, Office, etc."
                              className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500 placeholder-white/50"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-white/70">First Name</label>
                              <input
                                type="text"
                                value={newAddress.firstName}
                                onChange={(e) => setNewAddress(prev => ({ ...prev, firstName: e.target.value }))}
                                className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-white/70">Last Name</label>
                              <input
                                type="text"
                                value={newAddress.lastName}
                                onChange={(e) => setNewAddress(prev => ({ ...prev, lastName: e.target.value }))}
                                className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70">Address</label>
                            <input
                              type="text"
                              value={newAddress.address}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, address: e.target.value }))}
                              className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70">Apartment, suite, etc. (optional)</label>
                            <input
                              type="text"
                              value={newAddress.apartment}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, apartment: e.target.value }))}
                              className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-white/70">City</label>
                              <input
                                type="text"
                                value={newAddress.city}
                                onChange={(e) => setNewAddress(prev => ({ ...prev, city: e.target.value }))}
                                className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-white/70">State</label>
                              <input
                                type="text"
                                value={newAddress.state}
                                onChange={(e) => setNewAddress(prev => ({ ...prev, state: e.target.value }))}
                                className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70">ZIP Code</label>
                            <input
                              type="text"
                              value={newAddress.zipCode}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, zipCode: e.target.value }))}
                              className="block w-full mt-1 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                checked={newAddress.isDefault}
                                onChange={(e) => setNewAddress(prev => ({ ...prev, isDefault: e.target.checked }))}
                                className="text-blue-600 border-white/20 rounded focus:ring-blue-500"
                              />
                              <span className="ml-2 text-sm text-white/70">Set as default address</span>
                            </label>
                          </div>

                          <div className="flex justify-end pt-4 space-x-3">
                            <button
                              onClick={() => setShowAddAddress(false)}
                              className="px-4 py-2 text-sm font-medium text-white/70 transition-colors border rounded-md border-white/20 hover:bg-white/10"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handleAddAddress}
                              className="px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                            >
                              Add Address
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Security Settings */}
              {activeSection === 'security' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-white">Security Settings</h3>
                  </div>

                  <div className="space-y-6">
                    {/* Change Password */}
                    <div className="p-4 border rounded-lg bg-white/5 border-white/20">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-white">Change Password</h4>
                        <button
                          onClick={() => toggleEdit('security')}
                          className="text-sm text-blue-300 hover:text-blue-200"
                        >
                          {isEditing.security ? 'Cancel' : 'Change'}
                        </button>
                      </div>

                      {isEditing.security && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-white/70">Current Password</label>
                            <div className="relative mt-1">
                              <input
                                type={showCurrentPassword ? 'text' : 'password'}
                                value={userData.currentPassword}
                                onChange={(e) => handleProfileChange('currentPassword', e.target.value)}
                                className="block w-full pr-10 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                              />
                              <button
                                type="button"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/70"
                              >
                                {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70">New Password</label>
                            <div className="relative mt-1">
                              <input
                                type={showNewPassword ? 'text' : 'password'}
                                value={userData.newPassword}
                                onChange={(e) => handleProfileChange('newPassword', e.target.value)}
                                className="block w-full pr-10 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                              />
                              <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/70"
                              >
                                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-white/70">Confirm New Password</label>
                            <div className="relative mt-1">
                              <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={userData.confirmPassword}
                                onChange={(e) => handleProfileChange('confirmPassword', e.target.value)}
                                className="block w-full pr-10 text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                              />
                              <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/70"
                              >
                                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>

                          <button
                            onClick={() => handleSave('security')}
                            className="px-4 py-2 text-sm font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
                          >
                            Update Password
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Two-Factor Authentication */}
                    <div className="p-4 border rounded-lg bg-white/5 border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-white">Two-Factor Authentication</h4>
                          <p className="text-sm text-white/70">Add an extra layer of security to your account</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={userData.twoFactorEnabled}
                            onChange={(e) => handleProfileChange('twoFactorEnabled', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeSection === 'notifications' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-white">Notification Preferences</h3>
                  </div>

                  <div className="space-y-6">
                    {/* Email Notifications */}
                    <div>
                      <h4 className="font-medium text-white mb-4">Email Notifications</h4>
                      <div className="space-y-3">
                        {Object.entries(userData.notifications.email).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-white capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </p>
                              <p className="text-sm text-white/70">
                                {key === 'orderUpdates' && 'Get notified about your order status'}
                                {key === 'promotions' && 'Receive promotional offers and discounts'}
                                {key === 'newsletter' && 'Get our weekly newsletter'}
                                {key === 'security' && 'Important security alerts'}
                              </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) => handleNotificationChange('email', key, e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SMS Notifications */}
                    <div>
                      <h4 className="font-medium text-white mb-4">SMS Notifications</h4>
                      <div className="space-y-3">
                        {Object.entries(userData.notifications.sms).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-white capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) => handleNotificationChange('sms', key, e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Push Notifications */}
                    <div>
                      <h4 className="font-medium text-white mb-4">Push Notifications</h4>
                      <div className="space-y-3">
                        {Object.entries(userData.notifications.push).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-white capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) => handleNotificationChange('push', key, e.target.checked)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy Settings */}
              {activeSection === 'privacy' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium text-white">Privacy Settings</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">Profile Visibility</p>
                        <p className="text-sm text-white/70">Control who can see your profile information</p>
                      </div>
                      <select
                        value={userData.privacy.profileVisibility}
                        onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                        className="text-white border rounded-md shadow-sm bg-white/10 border-white/20 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="public" className="bg-gray-800">Public</option>
                        <option value="private" className="bg-gray-800">Private</option>
                        <option value="friends" className="bg-gray-800">Friends Only</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">Show Email Address</p>
                        <p className="text-sm text-white/70">Allow others to see your email address</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={userData.privacy.showEmail}
                          onChange={(e) => handlePrivacyChange('showEmail', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">Show Phone Number</p>
                        <p className="text-sm text-white/70">Allow others to see your phone number</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={userData.privacy.showPhone}
                          onChange={(e) => handlePrivacyChange('showPhone', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">Data Sharing</p>
                        <p className="text-sm text-white/70">Allow us to share your data with trusted partners</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={userData.privacy.dataSharing}
                          onChange={(e) => handlePrivacyChange('dataSharing', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/30 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>

                  {/* Account Deletion */}
                  <div className="pt-6 mt-6 border-t border-white/20">
                    <div className="p-4 border rounded-lg bg-red-500/10 border-red-500/30">
                      <h4 className="font-medium text-red-400">Delete Account</h4>
                      <p className="text-sm text-red-300">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <button className="px-4 py-2 mt-3 text-sm font-medium text-white transition-colors bg-red-600 rounded-md hover:bg-red-700">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
