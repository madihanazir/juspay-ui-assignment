import React, { useState } from "react";
import { Bell, Users, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Notification {
  id: string;
  icon: string;
  title: string;
  timestamp: string;
}

interface Activity {
  id: string;
  avatar: string;
  initials: string;
  title: string;
  timestamp: string;
  bgColor: string;
}

interface Contact {
  id: string;
  avatar: string;
  initials: string;
  name: string;
  bgColor: string;
}

const Rightbar = () => {
  const [activeTab, setActiveTab] = useState<"notifications" | "activities">("notifications");

  const notifications: Notification[] = [
    { id: "1", icon: "🐛", title: "You have a bug that needs...", timestamp: "Just now" },
    { id: "2", icon: "👤", title: "New user registered", timestamp: "59 minutes ago" },
    { id: "3", icon: "🐛", title: "Bug pending review", timestamp: "12 hours ago" },
    { id: "4", icon: "📡", title: "Andi Lane subscribed to you", timestamp: "Today, 11:59 AM" },
  ];

  const activities: Activity[] = [
    { id: "1", avatar: "👩", initials: "YH", title: "You have a bug that needs...", timestamp: "Just now", bgColor: "bg-pink-400" },
    { id: "2", avatar: "👨", initials: "RC", title: "Released a new version", timestamp: "59 minutes ago", bgColor: "bg-orange-400" },
    { id: "3", avatar: "👨", initials: "SM", title: "Submitted a bug", timestamp: "12 hours ago", bgColor: "bg-blue-400" },
    { id: "4", avatar: "👨", initials: "MS", title: "Modified a data in Page X", timestamp: "Today, 11:59 AM", bgColor: "bg-purple-400" },
    { id: "5", avatar: "👨", initials: "MD", title: "Deleted a page in Project X", timestamp: "Feb 2, 2023", bgColor: "bg-indigo-400" },
  ];

  const contacts: Contact[] = [
    { id: "1", avatar: "👩", initials: "NC", name: "Natali Craig", bgColor: "bg-amber-300" },
    { id: "2", avatar: "🔴", initials: "DC", name: "Drew Cano", bgColor: "bg-red-600" },
    { id: "3", avatar: "👨", initials: "OD", name: "Orlando Diggs", bgColor: "bg-orange-400" },
    { id: "4", avatar: "👩", initials: "AL", name: "Andi Lane", bgColor: "bg-pink-400" },
    { id: "5", avatar: "👩", initials: "KM", name: "Kate Morrison", bgColor: "bg-purple-400" },
    { id: "6", avatar: "👨", initials: "KO", name: "Koray Okumus", bgColor: "bg-blue-400" },
  ];

  const fadeVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const NotificationItem = ({ notification }: { notification: Notification }) => (
    <div className="flex gap-3 py-2">
      <span className="text-xl flex-shrink-0">{notification.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 font-medium truncate">{notification.title}</p>
        <p className="text-xs text-gray-500">{notification.timestamp}</p>
      </div>
    </div>
  );

  const ActivityItem = ({ activity }: { activity: Activity }) => (
    <div className="flex gap-3 py-2">
      <div
        className={`w-8 h-8 ${activity.bgColor} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
      >
        {activity.initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 font-medium truncate">{activity.title}</p>
        <p className="text-xs text-gray-500">{activity.timestamp}</p>
      </div>
    </div>
  );

  const ContactItem = ({ contact }: { contact: Contact }) => (
    <div className="flex gap-3 py-2 items-center hover:bg-gray-50 px-2 rounded-lg transition">
      <div
        className={`w-8 h-8 ${contact.bgColor} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
      >
        {contact.initials}
      </div>
      <span className="text-sm text-gray-700 font-medium truncate">{contact.name}</span>
    </div>
  );

  return (
    <div className="w-[280px] h-full bg-white border-l border-[#1C1C1C]/10 px-5 py-5 flex flex-col gap-6 overflow-y-auto">
      {/* Tab Headers */}
      <div className="flex gap-4 border-b pb-2">
        <button
          onClick={() => setActiveTab("notifications")}
          className={`flex items-center gap-2 text-sm font-semibold transition ${
            activeTab === "notifications" ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
          }`}
        >
          <Bell size={18} /> Notifications
        </button>
        <button
          onClick={() => setActiveTab("activities")}
          className={`flex items-center gap-2 text-sm font-semibold transition ${
            activeTab === "activities" ? "text-blue-600" : "text-gray-700 hover:text-blue-500"
          }`}
        >
          <Users size={18} /> Activities
        </button>
      </div>

      {/* Animated Sections */}
      <div className="relative flex-1">
        <AnimatePresence mode="wait">
          {activeTab === "notifications" && (
            <motion.div
              key="notifications"
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="space-y-1 mt-2"
            >
              {notifications.map((notif) => (
                <NotificationItem key={notif.id} notification={notif} />
              ))}
            </motion.div>
          )}

          {activeTab === "activities" && (
            <motion.div
              key="activities"
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="space-y-1 mt-2"
            >
              {activities.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200" />

      {/* Contacts Section */}
      <div className="w-[240px] border border-blue-400 rounded-lg p-3 flex flex-col gap-2">
        <h2 className="text-gray-900 font-semibold text-base flex items-center gap-2">
          <MessageCircle size={18} />
          Contacts
        </h2>
        <div className="space-y-1">
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
