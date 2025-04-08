


"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
import { therapyData } from "../../constants/therapyData";
import Link from "next/link";

const MentalTherapy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"sound" | "video" | "other">("sound");
  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});

  const toggleLike = (id: string) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (item: { title: string; desc: string; src: string }) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.desc,
        url: item.src,
      });
    } else {
      alert("Share not supported on this device.");
    }
  };

  const tabs = [
    { id: "sound", label: "Sound Therapy" },
    { id: "video", label: "Video Therapy" },
    { id: "other", label: "Other Therapies" },
  ] as const;

  const renderContent = () => {
    switch (activeTab) {
      case "sound":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {therapyData.sound.map((item) => {
              const itemId = `sound-${item.id}`;
              return (
                <div
                  key={itemId}
                  className="bg-white p-5 font-poppins rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-float"
                >
                  <h3 className="text-lg font-bold text-[#1DA678]">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <audio controls className="w-full mt-3 rounded">
                    <source src={item.src} type="audio/mp3" />
                  </audio>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => toggleLike(itemId)}
                      className="flex items-center gap-1 px-4 py-2 bg-[#1DA678] text-white rounded-full hover:bg-green-600 transition-colors"
                    >
                      {likedItems[itemId] ? <FaHeart /> : <FaRegHeart />} Like
                    </button>
                    <button
                      onClick={() => handleShare(item)}
                      className="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      <FaShareAlt /> Share
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      case "video":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {therapyData.video.map((item) => {
              const itemId = `video-${item.id}`;
              return (
                <div
                  key={itemId}
                  className="bg-white p-5 font-poppins rounded-xl shadow-lg hover:rotate-3 transition-transform duration-300 animate-pulseGlow"
                >
                  <h3 className="text-lg font-bold text-[#1DA678]">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <iframe
                    className="w-full h-48 mt-3 rounded"
                    src={item.src}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => toggleLike(itemId)}
                      className="flex items-center gap-1 px-4 py-2 bg-[#1DA678] text-white rounded-full hover:bg-green-600 transition-colors"
                    >
                      {likedItems[itemId] ? <FaHeart /> : <FaRegHeart />} Like
                    </button>
                    <button
                      onClick={() => handleShare(item)}
                      className="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      <FaShareAlt /> Share
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        );
      case "other":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-zoomIn">
            {therapyData.other.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 font-poppins rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 animate-pulseGlow"
              >
                <h3 className="text-lg font-bold text-[#1DA678]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <p className="text-gray-500 text-sm">Tool: {item.tool}</p>
                <Link href={`/ExerciseDetails/${encodeURIComponent(item.title)}`}>
                  <button className="mt-4 px-5 py-2 bg-[#1DA678] text-white rounded-full hover:bg-green-600 transition-colors">
                    Try Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-fit py-8 px-6 xl:px-20 bg-gradient-to-r from-[rgba(29,166,120,0.2)] via-[rgba(29,166,120,0.4)] to-[rgba(29,166,120,0.2)]">
      <header className="max-w-7xl md:px-16 mx-auto mb-10">
        <nav className="flex justify-center gap-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 animate-pulseGlow ${
                activeTab === tab.id
                  ? "bg-[#1DA678] text-white shadow-xl"
                  : "bg-white text-[#1DA678] hover:bg-green-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>
      <main className="max-w-6xl mx-auto">{renderContent()}</main>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
          50% { box-shadow: 0 0 15px rgba(34, 197, 94, 0.8); }
          100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-in; }
        .animate-zoomIn { animation: zoomIn 0.6s ease-in; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulseGlow { animation: pulseGlow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default MentalTherapy;