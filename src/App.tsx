import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Frame from './components/Frame';
import RightBar from './components/Rightbar';

function App() {
  const [activeNav, setActiveNav] = useState('dashboard');

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* ===== LEFT SIDEBAR (Fixed) ===== */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r z-30">
        <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      </aside>

      {/* ===== MAIN WRAPPER ===== */}
      <div className="flex flex-col flex-1 ml-64 mr-72"> {/* space for sidebars */}
        {/* ===== NAVBAR (Fixed) ===== */}
        <header className="fixed top-0 left-64 right-72 h-16 bg-white border-b z-20 flex items-center px-6">
          <Navbar userName="John Doe" userInitials="JD" />
        </header>

        {/* ===== MAIN CONTENT AREA (scrolls vertically) ===== */}
        <main className="flex-1 overflow-y-auto pt-16 bg-gray-50">
          <div className="p-6">
            <Frame />
          </div>
        </main>
      </div>

      {/* ===== RIGHT SIDEBAR (Fixed + scrollable) ===== */}
      <aside className="fixed right-0 top-0 h-full w-72 bg-white border-l z-30 overflow-y-auto">
        <div className="pt-16 px-5 pb-5"> {/* small top padding to avoid overlap with navbar */}
          <RightBar />
        </div>
      </aside>
    </div>
  );
}

export default App;
