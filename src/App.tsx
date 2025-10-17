import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; // Adjusted path to match the correct location
import Frame from './components/Frame';
import RightBar from './components/Rightbar'; // Ensure this path is correct and the file exists
// If the file does not exist, create it or correct the path.
// If the file does not exist, create it or correct the path.

function App() {
  const [activeNav, setActiveNav] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Fixed 212px */}
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar - Fixed height 68px */}
        <Navbar userName="John Doe" userInitials="JD" />

        {/* Content Area - Flex for horizontal layout */}
        <div className="flex flex-1 overflow-hidden bg-gray-50">
          {/* Frame - Main Dashboard Content */}
          <div className="flex-1 overflow-auto">
            <div className="pt-[140px] pl-[240px] pr-0">
              <Frame />
            </div>
          </div>

          {/* RightBar - Fixed 280px */}
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default App;