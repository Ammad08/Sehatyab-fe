"use client";
import React, { useState, useRef } from "react";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";
import { therapyData } from "../../constants/therapyData";
import Link from "next/link";
import Image from "next/image";

const MentalTherapy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"sound" | "video" | "other">(
    "sound"
  );
  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const [videoPopup, setVideoPopup] = useState<{
    src: string;
    title: string;
  } | null>(null); // State for video popup

  const toggleLike = (id: string) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (item: { title: string; desc: string; src?: string }) => {
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

  const handlePlay = (itemId: string) => {
    if (currentPlaying && currentPlaying !== itemId) {
      const prevAudio = audioRefs.current[currentPlaying];
      if (prevAudio) {
        prevAudio.pause();
        prevAudio.currentTime = 0;
      }
    }
    setCurrentPlaying(itemId);
  };

  // Open video popup
  const openVideoPopup = (src: string, title: string) => {
    setVideoPopup({ src, title });
  };

  // Close video popup
  const closeVideoPopup = () => {
    setVideoPopup(null);
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
                  <h3 className="text-lg font-bold text-[#1DA678]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <audio
                    controls
                    className="w-full mt-3 rounded"
                    ref={(el) => {
                      audioRefs.current[itemId] = el;
                    }}
                    onPlay={() => handlePlay(itemId)}
                  >
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
              // Extract YouTube thumbnail from video URL
              const videoId = item.src.match(
                /(?:v=|\/)([0-9A-Za-z_-]{11})/
              )?.[1];
              const thumbnailUrl = videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : "/images/default-video.jpg";

              return (
                <div
                  key={itemId}
                  className="bg-white p-5 font-poppins rounded-xl shadow-lg hover:rotate-3 transition-transform duration-300 animate-pulseGlow"
                >
                  <h3 className="text-lg font-bold text-[#1DA678]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <div
                    className="w-full h-48 mt-3 rounded relative cursor-pointer overflow-hidden"
                    onClick={() => openVideoPopup(item.src, item.title)}
                  >
                    <Image
                      src={thumbnailUrl}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded hover:opacity-80 transition-opacity duration-300"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-zoomIn px-4">
            {therapyData.other.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-white to-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-3 transition-all duration-300 ease-in-out animate-pulseGlow overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-teal-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <Image
                  src={item.images[0] || "/images/default-therapy.jpg"}
                  width={300}
                  height={150}
                  alt={item.title}
                  className="w-full h-36 object-cover rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-teal-800 font-poppins mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base font-poppins leading-relaxed mb-3">
                  {item.desc}
                </p>
                <p className="text-gray-500 text-sm font-poppins">
                  Tool: {item.tool}
                </p>
                <Link
                  href={`/theraphy/exerciseDetailes/${encodeURIComponent(
                    item.title
                  )}`}
                >
                  <button className="mt-4 px-6 py-2 bg-gradient-to-r from-teal-500 to-green-400 text-white rounded-full font-poppins font-medium hover:from-teal-600 hover:to-green-500 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                    Try Now
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
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

      {/* Video Popup Modal */}
      {videoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-xl p-6 w-full max-w-3xl relative">
            <button
              onClick={closeVideoPopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              ×
            </button>
            <h3 className="text-xl font-bold text-[#1DA678] mb-4 font-poppins">
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

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes zoomIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
          }
          50% {
            box-shadow: 0 0 15px rgba(34, 197, 94, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in;
        }
        .animate-zoomIn {
          animation: zoomIn 0.6s ease-in;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulseGlow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MentalTherapy;
