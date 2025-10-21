import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Frame from './components/Frame';
import RightBar from './components/Rightbar';

function App() {
  const [activeNav, setActiveNav] = useState('dashboard');

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* ===== LEFT SIDEBAR (Animated Entrance) ===== */}
      <motion.aside
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 15 }}
        className="fixed left-0 top-0 h-full w-64 bg-white border-r z-30 shadow-sm"
      >
        <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      </motion.aside>

      {/* ===== MAIN WRAPPER ===== */}
      <div className="flex flex-col flex-1 ml-64 mr-72">
        {/* ===== NAVBAR (Animated Fade In) ===== */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-64 right-72 h-16 bg-white border-b z-20 flex items-center px-6 shadow-sm"
        >
          <Navbar userName="Your Name" userInitials="YN" />
        </motion.header>

        {/* ===== MAIN CONTENT AREA (Animated Switch based on activeNav) ===== */}
        <main className="flex-1 overflow-y-auto pt-16 bg-gray-50">
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNav} // animates when section changes
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Frame />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* ===== RIGHT SIDEBAR (Animated Entrance + Scrollable) ===== */}
      <motion.aside
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 15 }}
        className="fixed right-0 top-0 h-full w-72 bg-white border-l z-30 overflow-y-auto shadow-sm"
      >
        <div className="pt-16 px-5 pb-5">
          <RightBar />
        </div>
      </motion.aside>
    </div>
  );
}

export default App;
