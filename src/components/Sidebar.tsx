import React, { useState } from 'react';
import { ChevronDown, Home, BarChart3, Briefcase, ShoppingCart, User, LogOut } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  subItems?: { id: string; label: string }[];
}

interface SidebarProps {
  activeNav: string;
  setActiveNav: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeNav, setActiveNav }) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    frame: false,
    dashboard: false,
    pages: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const navItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home size={20} />,
    },
    {
      id: 'ecommerce',
      label: 'eCommerce',
      icon: <ShoppingCart size={20} />,
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <Briefcase size={20} />,
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: <BarChart3 size={20} />,
    },
  ];

  const frameItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
  ];

  const dashboardItems = [
    { id: 'analytics', label: 'Analytics' },
    { id: 'reports', label: 'Reports' },
    { id: 'insights', label: 'Insights' },
  ];

  const pageItems = [
    { id: 'user-profile', label: 'User Profile' },
    { id: 'settings', label: 'Settings' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const NavButton = ({ item }: { item: NavItem }) => (
    <button
      onClick={() => setActiveNav(item.id)}
      className={`w-[180px] h-[40px] rounded-lg flex items-center gap-3 px-3 py-2 transition-all duration-200 ${
        activeNav === item.id
          ? 'bg-blue-50 text-blue-600 font-semibold'
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <span className="flex-shrink-0">{item.icon}</span>
      <span className="text-sm font-medium">{item.label}</span>
    </button>
  );

  const NavSection = ({
    title,
    items,
    sectionKey,
  }: {
    title: string;
    items: { id: string; label: string }[];
    sectionKey: string;
  }) => (
    <div className="w-full">
      <button
        onClick={() => toggleSection(sectionKey)}
        className={`w-[180px] h-[40px] rounded-lg flex items-center justify-between px-3 py-2 text-sm font-semibold transition-all duration-200 ${
          expandedSections[sectionKey] ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <span>{title}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${expandedSections[sectionKey] ? 'rotate-180' : ''}`}
        />
      </button>

      {expandedSections[sectionKey] && (
        <div className="pl-4 mt-1 space-y-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-[164px] h-[36px] rounded-lg px-3 py-2 text-sm transition-all duration-200 text-left ${
                activeNav === item.id
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-[212px] h-[1206px] bg-white border-r border-[#1C1C1C] border-opacity-10 pt-5 pr-4 pb-5 pl-4 flex flex-col gap-4 overflow-y-auto">
      {/* Logo */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">JUSPAY</h1>
      </div>

      {/* Main Navigation */}
      <div className="space-y-1">
        {navItems.map((item) => (
          <NavButton key={item.id} item={item} />
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-2" />

      {/* Frame Section */}
      <NavSection title="Frame" items={frameItems} sectionKey="frame" />

      {/* Dashboard Section */}
      <NavSection title="Dashboard" items={dashboardItems} sectionKey="dashboard" />

      {/* Pages Section */}
      <NavSection title="Pages" items={pageItems} sectionKey="pages" />

      {/* Footer - Spacer */}
      <div className="flex-1" />

      {/* Logout Button */}
      <button className="w-[180px] h-[40px] rounded-lg flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 mt-4">
        <LogOut size={20} />
        <span className="text-sm font-medium">Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;