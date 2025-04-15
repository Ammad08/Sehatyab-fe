"use client";
import React, { useState } from "react";
import { FaShareAlt, FaSearch } from "react-icons/fa";
import { therapyData, TherapyItem } from "../../constants/therapyData";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  GiVideoCamera,
  GiMeditation,
  GiLungs,
  GiBrain,
  GiPaintBrush,
  GiBodyBalance,
  GiTreeBranch,
} from "react-icons/gi";

const MentalTherapy: React.FC = () => {
  // const [activeTab, setActiveTab] =
  //   useState<keyof typeof therapyData>("visualization");
  const [searchQuery, setSearchQuery] = useState("");
  const [videoPopup, setVideoPopup] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const handleShare = (item: TherapyItem) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.desc,
        url: item.src || window.location.href,
      });
    } else {
      alert("Share not supported on this device.");
    }
  };

  const openVideoPopup = (src: string, title: string) => {
    setVideoPopup({ src, title });
  };

  const closeVideoPopup = () => {
    setVideoPopup(null);
  };

  const filterTherapyItems = (items: TherapyItem[]) => {
    if (!searchQuery) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.steps &&
          item.steps.some((step) =>
            step.toLowerCase().includes(searchQuery.toLowerCase())
          ))
    );
  };

  const tabs = [
    { id: "visualization", label: "Visualization", icon: <GiVideoCamera /> },
    { id: "mindfulness", label: "Mindfulness", icon: <GiMeditation /> },
    { id: "breathing", label: "Breathing", icon: <GiLungs /> },
    { id: "cognitive", label: "Cognitive", icon: <GiBrain /> },
    { id: "creative", label: "Creative", icon: <GiPaintBrush /> },
    { id: "physical", label: "Physical", icon: <GiBodyBalance /> },
    { id: "nature", label: "Nature", icon: <GiTreeBranch /> },
  ] as const;

  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>(
    tabs[0].id
  ); // Default to first tab
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown toggle

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle tab selection (closes dropdown on mobile)
  const handleTabSelect = (tabId: (typeof tabs)[number]["id"]) => {
    setActiveTab(tabId);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const renderContent = () => {
    const category = therapyData[activeTab];
    const filteredItems = filterTherapyItems(category.items);

    if (!filteredItems.length) {
      return (
        <p className="text-center text-gray-600 font-inter">
          No therapies found.
        </p>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
        {filteredItems.map((item, index) => {
          const itemId = `${activeTab}-${index}`;
          const videoId = item.src?.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)?.[1];
          const thumbnailUrl = videoId
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : item.banner || "/images/default-therapy.jpg";
          const slug = item.title.toLowerCase().replace(/\s+/g, "-");

          return (
            <div
              key={itemId}
              className="bg-white p-5 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-teal-100"
            >
              {/* Image Banner */}
              {item.banner && (
                <div
                  className="w-full h-48 my-3 rounded relative cursor-pointer overflow-hidden"
                  onClick={() => openVideoPopup(item.src!, item.title)}
                >
                  <Image
                    src={item.banner}
                    alt={item.title}
                    fill
                    className="rounded hover:opacity-80 transition-opacity duration-300 object-cover"
                  />
                </div>
              )}

              {/* Video */}
              {item.src && (
                <div
                  className="w-full h-48 my-3 rounded relative cursor-pointer overflow-hidden"
                  onClick={() => openVideoPopup(item.src!, item.title)}
                >
                  <Image
                    src={thumbnailUrl}
                    alt={item.title}
                    fill
                    className="rounded hover:opacity-80 transition-opacity duration-300 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#1DA678] p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.5 5v10l8-5-8-5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Title , Description */}

              <h3 className="text-lg font-bold text-teal-800 font-inter">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm font-inter mb-2">
                {item.desc}
              </p>

              {/* Buttons : Like, Share abnd Try */}
              <div className="mt-4 flex gap-3">
                {item.banner && (
                  <Link href={`/theraphy/exerciseDetailes/${slug}`}>
                    <button className="flex items-center gap-1 px-4 py-2 bg-[#1DA678] text-white hover:scale-105 border border-[#1DA678] rounded-full transition-transform duration-300 font-inter">
                      Try It
                    </button>
                  </Link>
                )}

                <button
                  onClick={() => handleShare(item)}
                  className="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors font-inter"
                  aria-label="Share"
                >
                  <FaShareAlt /> Share
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-12 px-6 xl:px-20 bg-gradient-to-b from-teal-50 to-yellow-50 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22M36%2034a2%202%200%201%201-4%200%202%202%200%200%201%204%200zm-6-10a2%202%200%201%201-4%200%202%202%200%200%201%204%200zm20%2018a2%202%200%201%201-4%200%202%202%200%200%201%204%200zm-30-6a2%202%200%201%201-4%200%202%202%200%200%201%204%200z%22%20fill=%22%23A7F3D0%22%20opacity=%220.4%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-pacifico text-teal-800 mb-4">
          Find Your Inner Peace
        </h1>
        <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
          Discover therapies to reduce stress, improve mental health, and
          connect with professionals.
        </p>
      </motion.div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8 relative z-10">
        <div className="flex items-center bg-white rounded-full shadow-md p-2">
          <FaSearch className="text-gray-500 ml-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search therapies..."
            className="flex-1 p-2 rounded-full focus:outline-none font-inter text-gray-700"
            aria-label="Search therapies"
          />
        </div>
      </div>

      {/* Categories Tab */}

      <header className="max-w-7xl mx-auto mb-10 relative z-40">
        {/* Desktop: Horizontal Tabs */}
        <nav className="hidden sm:flex justify-center gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabSelect(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.id
                  ? "bg-[#1DA678] text-white shadow-xl"
                  : "bg-white text-teal-800 hover:bg-teal-100"
              }`}
              aria-label={`Switch to ${tab.label}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Mobile: Dropdown Menu */}
        <div className="sm:hidden relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between gap-2 px-4 py-2 w-full bg-[#1DA678] text-white rounded-lg font-bold text-lg transition-all duration-300"
            aria-label="Toggle categories menu"
            aria-expanded={isDropdownOpen}
          >
            {/* Display active tab's icon and label */}
            <div className="flex items-center gap-2">
              {tabs.find((tab) => tab.id === activeTab)?.icon}
              {tabs.find((tab) => tab.id === activeTab)?.label}
            </div>
            {/* Chevron icon for dropdown */}
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id)}
                  className={`flex items-center gap-2 w-full px-4 py-3 text-left text-teal-800 font-medium text-base hover:bg-teal-100 ${
                    activeTab === tab.id ? "bg-teal-100" : ""
                  }`}
                  aria-label={`Select ${tab.label}`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-2xl font-bold text-teal-800 mb-4 font-inter">
          {therapyData[activeTab].label}
        </h2>
        {renderContent()}
      </main>

      {videoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-xl p-6 w-full max-w-3xl relative">
            <button
              onClick={closeVideoPopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
              aria-label="Close video"
            >
              ×
            </button>
            <h3 className="text-xl font-bold text-teal-800 mb-4 font-inter">
              {videoPopup.title}
            </h3>
            <iframe
              className="w-full h-64 md:h-96 rounded"
              src={videoPopup.src}
              title={videoPopup.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentalTherapy;
