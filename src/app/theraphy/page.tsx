"use client";
import React, { useState, useRef } from "react";
import { FaHeart, FaRegHeart, FaShareAlt, FaSearch } from "react-icons/fa";
import { therapyData } from "../../constants/therapyData";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Icons for categories
import {
  GiMeditation,
  GiSoundWaves,
  GiVideoCamera,
  GiNotebook,
  GiLungs,
} from "react-icons/gi";

const MentalTherapy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "sound" | "video" | "mindfulness" | "breathing" | "journaling" | "other"
  >("sound");
  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});
  const [currentPlaying, setCurrentPlaying] = useState<string | null>(null);
  const [videoPopup, setVideoPopup] = useState<{
    src: string;
    title: string;
  } | null>(null);

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

  const openVideoPopup = (src: string, title: string) => {
    setVideoPopup({ src, title });
  };

  const closeVideoPopup = () => {
    setVideoPopup(null);
  };

  // Filter therapy items based on search query
  interface TherapyItem {
    id: string | number;
    title: string;
    desc: string;
    src?: string;
    banner?: string;
    tool?: string;
  }

  const filterTherapyItems = (items: TherapyItem[]) => {
    if (!searchQuery) return items;
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const tabs = [
    { id: "sound", label: "Sound Therapy", icon: <GiSoundWaves /> },
    { id: "video", label: "Video Therapy", icon: <GiVideoCamera /> },
    { id: "mindfulness", label: "Mindfulness", icon: <GiMeditation /> },
    { id: "breathing", label: "Breathing", icon: <GiLungs /> },
    { id: "journaling", label: "Journaling", icon: <GiNotebook /> },
    { id: "other", label: "Other Therapies", icon: <GiMeditation /> },
  ] as const;

  const renderContent = () => {
    const filteredSound = filterTherapyItems(therapyData.sound);
    const filteredVideo = filterTherapyItems(therapyData.video);
    const filteredMindfulness = filterTherapyItems(
      therapyData.mindfulness || []
    );
    const filteredBreathing = filterTherapyItems(therapyData.breathing || []);
    const filteredJournaling = filterTherapyItems(therapyData.journaling || []);
    const filteredOther = filterTherapyItems(therapyData.other);

    switch (activeTab) {
      case "sound":
        return filteredSound.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {filteredSound.map((item) => {
              const itemId = `sound-${item.id}`;
              return (
                <div
                  key={itemId}
                  className="bg-white p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-float border border-teal-100"
                >
                  <h3 className="text-lg font-bold text-teal-800 font-inter">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-inter">
                    {item.desc}
                  </p>
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
                      className="flex items-center gap-1 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors font-inter"
                    >
                      {likedItems[itemId] ? <FaHeart /> : <FaRegHeart />} Like
                    </button>
                    <button
                      onClick={() => handleShare(item)}
                      className="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors font-inter"
                    >
                      <FaShareAlt /> Share
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600 font-inter">
            No sound therapies found.
          </p>
        );

      case "video":
        return filteredVideo.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {filteredVideo.map((item) => {
              const itemId = `video-${item.id}`;
              const videoId = item.src?.match(
                /(?:v=|\/)([0-9A-Za-z_-]{11})/
              )?.[1];
              const thumbnailUrl = videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : "/images/default-video.jpg";

              return (
                <div
                  key={itemId}
                  className="bg-white p-5 rounded-xl shadow-lg hover:rotate-3 transition-transform duration-300 animate-pulseGlow border border-teal-100"
                >
                  <h3 className="text-lg font-bold text-teal-800 font-inter">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-inter">
                    {item.desc}
                  </p>
                  <div
                    className="w-full h-48 mt-3 rounded relative cursor-pointer overflow-hidden"
                    onClick={() =>
                      item.src && openVideoPopup(item.src, item.title)
                    }
                  >
                    <Image
                      src={thumbnailUrl}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-teal-500 p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300">
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
                      className="flex items-center gap-1 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors font-inter"
                    >
                      {likedItems[itemId] ? <FaHeart /> : <FaRegHeart />} Like
                    </button>
                    <button
                      onClick={() => handleShare(item)}
                      className="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors font-inter"
                    >
                      <FaShareAlt /> Share
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600 font-inter">
            No video therapies found.
          </p>
        );

      case "mindfulness":
        return filteredMindfulness.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {filteredMindfulness.map((item) => {
              const itemId = `mindfulness-${item.id}`;
              const videoId = item.src?.match(
                /(?:v=|\/)([0-9A-Za-z_-]{11})/
              )?.[1];
              const thumbnailUrl = videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : item.banner || "/images/default-video.jpg";

              return (
                <div
                  key={itemId}
                  className="bg-white p-5 rounded-xl shadow-lg hover:rotate-3 transition-transform duration-300 animate-pulseGlow border border-teal-100"
                >
                  <h3 className="text-lg font-bold text-teal-800 font-inter">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-inter">
                    {item.desc}
                  </p>
                  <div
                    className="w-full h-48 mt-3 rounded relative cursor-pointer overflow-hidden"
                    onClick={() =>
                      item.src && openVideoPopup(item.src, item.title)
                    }
                  >
                    <Image
                      src={thumbnailUrl}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-teal-500 p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300">
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
                      className="flex items-center gap-1 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors font-inter"
                    >
                      {likedItems[itemId] ? <FaHeart /> : <FaRegHeart />} Like
                    </button>
                    <button
                      onClick={() => handleShare(item)}
                      className="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors font-inter"
                    >
                      <FaShareAlt /> Share
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600 font-inter">
            No mindfulness exercises found.
          </p>
        );

      case "breathing":
        return filteredBreathing.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {filteredBreathing.map((item) => {
              const itemId = `breathing-${item.id}`;
              const videoId = item.src?.match(
                /(?:v=|\/)([0-9A-Za-z_-]{11})/
              )?.[1];
              const thumbnailUrl = videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : item.banner || "/images/default-video.jpg";

              return (
                <div
                  key={itemId}
                  className="bg-white p-5 rounded-xl shadow-lg hover:rotate-3 transition-transform duration-300 animate-pulseGlow border border-teal-100"
                >
                  <h3 className="text-lg font-bold text-teal-800 font-inter">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-inter">
                    {item.desc}
                  </p>
                  <div
                    className="w-full h-48 mt-3 rounded relative cursor-pointer overflow-hidden"
                    onClick={() =>
                      item.src && openVideoPopup(item.src, item.title)
                    }
                  >
                    <Image
                      src={thumbnailUrl}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-teal-500 p-3 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300">
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
                      className="flex items-center gap-1 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors font-inter"
                    >
                      {likedItems[itemId] ? <FaHeart /> : <FaRegHeart />} Like
                    </button>
                    <button
                      onClick={() => handleShare(item)}
                      className="flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors font-inter"
                    >
                      <FaShareAlt /> Share
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600 font-inter">
            No breathing exercises found.
          </p>
        );

      case "journaling":
        return filteredJournaling.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {filteredJournaling.map((item) => {
              const itemId = `journaling-${item.id}`;
              return (
                <div
                  key={itemId}
                  className="bg-white p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-float border border-teal-100"
                >
                  <h3 className="text-lg font-bold text-teal-800 font-inter">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-inter">
                    {item.desc}
                  </p>
                  <Link
                    href={`/therapy/journaling/${encodeURIComponent(
                      item.title
                    )}`}
                  >
                    <button className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-full font-inter font-medium hover:bg-teal-600 transition-all duration-300">
                      Start Now
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-center text-gray-600 font-inter">
            No journaling prompts found.
          </p>
        );

      case "other":
        return filteredOther.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-zoomIn px-4">
            {filteredOther.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-white to-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-3 transition-all duration-300 ease-in-out animate-pulseGlow overflow-hidden relative group border border-teal-100"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-teal-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <Image
                  src={item.banner || "/images/default-therapy.jpg"}
                  width={300}
                  height={150}
                  alt={item.title}
                  className="w-full h-36 object-cover rounded-xl mb-4 transform group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-teal-800 font-inter mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base font-inter leading-relaxed mb-3">
                  {item.desc}
                </p>
                <p className="text-gray-500 text-sm font-inter">
                  Tool: {item.tool}
                </p>
                <Link
                  href={`/therapy/exerciseDetails/${encodeURIComponent(
                    item.title
                  )}`}
                >
                  <button className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-full font-inter font-medium hover:bg-teal-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                    Try Now
                    <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 font-inter">
            No other therapies found.
          </p>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12 px-6 xl:px-20 bg-gradient-to-b from-teal-50 to-yellow-50 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22M36%2034a2%202%200%201%201-4%200%202%202%200%200%201%204%200zm-6-10a2%202%200%201%201-4%200%202%202%200%200%201%204%200zm20%2018a2%202%200%201%201-4%200%202%202%200%200%201%204%200zm-30-6a2%202%200%201%201-4%200%202%202%200%200%201%204%200z%22%20fill=%22%23A7F3D0%22%20opacity=%220.4%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-pacifico text-teal-800 mb-4">
          Discover Your Path to Calm
        </h1>
        <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
          Explore a variety of therapies designed to help you find peace, reduce
          stress, and nurture your mental well-being.
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
          />
        </div>
      </div>

      {/* Tabs */}
      <header className="max-w-7xl mx-auto mb-10 relative z-10">
        <nav className="flex justify-center gap-4 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 animate-pulseGlow ${
                activeTab === tab.id
                  ? "bg-teal-500 text-white shadow-xl"
                  : "bg-white text-teal-800 hover:bg-teal-50"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto relative z-10">{renderContent()}</main>

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
