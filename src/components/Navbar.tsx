import React, { useState } from 'react';
import { Search, Bell, Settings, ChevronDown } from 'lucide-react';

interface NavbarProps {
  userName?: string;
  userInitials?: string;
}

const Navbar: React.FC<NavbarProps> = ({ userName = 'John Doe', userInitials = 'JD' }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    { id: 1, message: 'New order received', time: '2 min ago' },
    { id: 2, message: 'System update available', time: '1 hour ago' },
  ];

  const UserAvatar = ({ initials }: { initials: string }) => (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold cursor-pointer">
      {initials}
    </div>
  );

  return (
    <div className="w-[948px] h-[68px] bg-white border-b border-[#1C1C1C] border-opacity-10 px-7 py-5 flex items-center justify-between">
      {/* Left - Search Bar */}
      <div className="flex items-center gap-3 flex-1 max-w-xs">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent outline-none text-gray-600 text-sm placeholder-gray-400 w-full"
        />
      </div>

      {/* Right - Icons and Profile */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="text-gray-600 hover:text-gray-900 transition relative"
          >
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Notifications</h3>
                <div className="space-y-3">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="text-sm border-b border-gray-100 pb-3 last:border-0">
                      <p className="text-gray-900 font-medium">{notif.message}</p>
                      <p className="text-gray-500 text-xs">{notif.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <button className="text-gray-600 hover:text-gray-900 transition">
          <Settings size={20} />
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200"></div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 hover:bg-gray-50 px-2 py-1 rounded-lg transition"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
              {userInitials}
            </div>
            <ChevronDown size={16} className="text-gray-600" />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-900 mb-4">{userName}</p>
                <div className="space-y-2">
                  <button className="w-full text-left text-sm text-gray-600 hover:text-gray-900 py-2 px-2 hover:bg-gray-50 rounded transition">
                    Profile
                  </button>
                  <button className="w-full text-left text-sm text-gray-600 hover:text-gray-900 py-2 px-2 hover:bg-gray-50 rounded transition">
                    Settings
                  </button>
                  <button className="w-full text-left text-sm text-gray-600 hover:text-gray-900 py-2 px-2 hover:bg-gray-50 rounded transition">
                    Help
                  </button>
                  <hr className="my-2" />
                  <button className="w-full text-left text-sm text-red-600 hover:text-red-700 py-2 px-2 hover:bg-red-50 rounded transition">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;