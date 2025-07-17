import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Store, 
  User, 
  Shield,
  Eye, 
  EyeOff,
  Camera,
  Save,
  Edit2
} from 'lucide-react';

export default function SellerProfileSettings() {
  const navigate = useNavigate();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState({
    profile: false,
    business: false,
    security: false
  });

  // Mock seller data - replace with actual data from your backend
  const [sellerData, setSellerData] = useState({
    // Personal Information
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-01-15',
    profileImage: null,
    
    // Business Information
    businessName: 'Tech Store Pro',
    businessType: 'Electronics',
    businessAddress: '123 Business Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    taxId: 'TX123456789',
    businessLicense: 'BL987654321',
    
    // Security Settings
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false,
    emailNotifications: true,
    smsNotifications: false,
    marketingEmails: true
  });

  const handleInputChange = (section, field, value) => {
    setSellerData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = (section) => {
    // Here you would typically send the data to your backend
    console.log('Saving section:', section, sellerData);
    setIsEditing(prev => ({ ...prev, [section]: false }));
    // You might want to show a success message here
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSellerData(prev => ({ ...prev, profileImage: imageUrl }));
    }
  };

  const renderProfileSection = () => (
    <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Personal Information</h3>
        <button
          onClick={() => setIsEditing(prev => ({ ...prev, profile: !prev.profile }))}
          className="flex items-center px-4 py-2 text-sm text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          {isEditing.profile ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <div className="space-y-6">
        {/* Profile Image */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-20 h-20 overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400">
              {sellerData.profileImage ? (
                <img src={sellerData.profileImage} alt="Profile" className="object-cover w-full h-full" />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-white">
                  {sellerData.firstName[0]}{sellerData.lastName[0]}
                </div>
              )}
            </div>
            {isEditing.profile && (
              <label className="absolute bottom-0 right-0 p-1 rounded-full cursor-pointer bg-emerald-600 hover:bg-emerald-700">
                <Camera className="w-4 h-4 text-white" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
          <div>
            <h4 className="text-lg font-medium text-white">{sellerData.firstName} {sellerData.lastName}</h4>
            <p className="text-white/70">{sellerData.email}</p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">First Name</label>
            <input
              type="text"
              value={sellerData.firstName}
              onChange={(e) => handleInputChange('profile', 'firstName', e.target.value)}
              disabled={!isEditing.profile}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Last Name</label>
            <input
              type="text"
              value={sellerData.lastName}
              onChange={(e) => handleInputChange('profile', 'lastName', e.target.value)}
              disabled={!isEditing.profile}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Email</label>
            <input
              type="email"
              value={sellerData.email}
              onChange={(e) => handleInputChange('profile', 'email', e.target.value)}
              disabled={!isEditing.profile}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Phone Number</label>
            <input
              type="tel"
              value={sellerData.phone}
              onChange={(e) => handleInputChange('profile', 'phone', e.target.value)}
              disabled={!isEditing.profile}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-white/70">Date of Birth</label>
            <input
              type="date"
              value={sellerData.dateOfBirth}
              onChange={(e) => handleInputChange('profile', 'dateOfBirth', e.target.value)}
              disabled={!isEditing.profile}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
        </div>

        {isEditing.profile && (
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setIsEditing(prev => ({ ...prev, profile: false }))}
              className="px-4 py-2 border rounded-lg text-white/70 border-white/20 hover:bg-white/10"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSave('profile')}
              className="flex items-center px-4 py-2 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderBusinessSection = () => (
    <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Business Information</h3>
        <button
          onClick={() => setIsEditing(prev => ({ ...prev, business: !prev.business }))}
          className="flex items-center px-4 py-2 text-sm text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
        >
          <Edit2 className="w-4 h-4 mr-2" />
          {isEditing.business ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Business Name</label>
            <input
              type="text"
              value={sellerData.businessName}
              onChange={(e) => handleInputChange('business', 'businessName', e.target.value)}
              disabled={!isEditing.business}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Business Type</label>
            <select
              value={sellerData.businessType}
              onChange={(e) => handleInputChange('business', 'businessType', e.target.value)}
              disabled={!isEditing.business}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            >
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home & Garden">Home & Garden</option>
              <option value="Sports">Sports</option>
              <option value="Beauty">Beauty</option>
              <option value="Books">Books</option>
              <option value="Automotive">Automotive</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-white/70">Business Address</label>
            <input
              type="text"
              value={sellerData.businessAddress}
              onChange={(e) => handleInputChange('business', 'businessAddress', e.target.value)}
              disabled={!isEditing.business}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">City</label>
            <input
              type="text"
              value={sellerData.city}
              onChange={(e) => handleInputChange('business', 'city', e.target.value)}
              disabled={!isEditing.business}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">State</label>
            <input
              type="text"
              value={sellerData.state}
              onChange={(e) => handleInputChange('business', 'state', e.target.value)}
              disabled={!isEditing.business}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">ZIP Code</label>
            <input
              type="text"
              value={sellerData.zipCode}
              onChange={(e) => handleInputChange('business', 'zipCode', e.target.value)}
              disabled={!isEditing.business}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Country</label>
            <input
              type="text"
              value={sellerData.country}
              onChange={(e) => handleInputChange('business', 'country', e.target.value)}
              disabled={!isEditing.business}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Tax ID</label>
            <input
              type="text"
              value={sellerData.taxId}
              onChange={(e) => handleInputChange('business', 'taxId', e.target.value)}
              disabled={!isEditing.business}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/70">Business License</label>
            <input
              type="text"
              value={sellerData.businessLicense}
              onChange={(e) => handleInputChange('business', 'businessLicense', e.target.value)}
              disabled={!isEditing.business}
              className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 disabled:opacity-50"
            />
          </div>
        </div>

        {isEditing.business && (
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setIsEditing(prev => ({ ...prev, business: false }))}
              className="px-4 py-2 border rounded-lg text-white/70 border-white/20 hover:bg-white/10"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSave('business')}
              className="flex items-center px-4 py-2 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderSecuritySection = () => (
    <div className="space-y-6">
      {/* Password Change */}
      <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Change Password</h3>
          <button
            onClick={() => setIsEditing(prev => ({ ...prev, security: !prev.security }))}
            className="flex items-center px-4 py-2 text-sm text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
          >
            <Edit2 className="w-4 h-4 mr-2" />
            {isEditing.security ? 'Cancel' : 'Change Password'}
          </button>
        </div>

        {isEditing.security && (
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-white/70">Current Password</label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  value={sellerData.currentPassword}
                  onChange={(e) => handleInputChange('security', 'currentPassword', e.target.value)}
                  className="w-full px-4 py-2 pr-10 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  placeholder="Enter current password"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/70 hover:text-white"
                >
                  {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white/70">New Password</label>
              <div className="relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  value={sellerData.newPassword}
                  onChange={(e) => handleInputChange('security', 'newPassword', e.target.value)}
                  className="w-full px-4 py-2 pr-10 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-white/70 hover:text-white"
                >
                  {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white/70">Confirm New Password</label>
              <input
                type="password"
                value={sellerData.confirmPassword}
                onChange={(e) => handleInputChange('security', 'confirmPassword', e.target.value)}
                className="w-full px-4 py-2 text-white border rounded-lg bg-white/10 border-white/20 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                placeholder="Confirm new password"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setIsEditing(prev => ({ ...prev, security: false }))}
                className="px-4 py-2 border rounded-lg text-white/70 border-white/20 hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSave('security')}
                className="flex items-center px-4 py-2 text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
              >
                <Save className="w-4 h-4 mr-2" />
                Update Password
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Notification Settings */}
      <div className="p-6 border bg-white/10 backdrop-blur-lg rounded-xl border-white/20">
        <h3 className="mb-6 text-xl font-semibold text-white">Notification Preferences</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">Email Notifications</h4>
              <p className="text-sm text-white/70">Receive order updates and important messages via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={sellerData.emailNotifications}
                onChange={(e) => handleInputChange('security', 'emailNotifications', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">SMS Notifications</h4>
              <p className="text-sm text-white/70">Receive urgent alerts via text message</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={sellerData.smsNotifications}
                onChange={(e) => handleInputChange('security', 'smsNotifications', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">Marketing Emails</h4>
              <p className="text-sm text-white/70">Receive tips, promotions, and product updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={sellerData.marketingEmails}
                onChange={(e) => handleInputChange('security', 'marketingEmails', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-white">Two-Factor Authentication</h4>
              <p className="text-sm text-white/70">Add an extra layer of security to your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={sellerData.twoFactorEnabled}
                onChange={(e) => handleInputChange('security', 'twoFactorEnabled', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      {/* Header */}
      <header className="border-b bg-white/10 backdrop-blur-lg border-white/20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => navigate('/seller-dashboard')}
                className="mr-4 text-white/70 hover:text-white"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <Store className="w-8 h-8 mr-3 text-emerald-400" />
              <h1 className="text-xl font-bold text-white">Profile Settings</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen border-r bg-white/5 backdrop-blur-lg border-white/20">
          <nav className="p-4">
            <button
              onClick={() => setActiveSection('profile')}
              className={`w-full flex items-center px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeSection === 'profile' 
                  ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <User className="w-5 h-5 mr-3" />
              <span>Personal Info</span>
            </button>
            
            <button
              onClick={() => setActiveSection('business')}
              className={`w-full flex items-center px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeSection === 'business' 
                  ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Store className="w-5 h-5 mr-3" />
              <span>Business Info</span>
            </button>
            
            <button
              onClick={() => setActiveSection('security')}
              className={`w-full flex items-center px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeSection === 'security' 
                  ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Shield className="w-5 h-5 mr-3" />
              <span>Security & Privacy</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeSection === 'profile' && renderProfileSection()}
          {activeSection === 'business' && renderBusinessSection()}
          {activeSection === 'security' && renderSecuritySection()}
        </main>
      </div>
    </div>
  );
}
