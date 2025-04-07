"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaShareAlt } from "react-icons/fa";

const MentalTherapy: React.FC = () => {
  const [activeTab, setActiveTab] = useState("sound");
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

  const therapyData = {
    sound: [
      {
        id: 1,
        title: "Calm Ocean Waves",
        src: "/audio/calm-ocean-waves.mp3",
        desc: "Gentle waves for relaxation",
      },
      {
        id: 2,
        title: "Forest Serenity",
        src: "/audio/forest-serenity.mp3",
        desc: "Birds and rustling leaves",
      },
      {
        id: 3,
        title: "Rainfall Bliss",
        src: "/audio/rainfall-bliss.mp3",
        desc: "Soft rain for sleep",
      },
      {
        id: 4,
        title: "Mountain Breeze",
        src: "/audio/mountain-breeze.mp3",
        desc: "Whistling winds",
      },
      {
        id: 5,
        title: "Tibetan Singing Bowls",
        src: "/audio/tibetan-singing-bowls.mp3",
        desc: "Harmonic meditation tones",
      },
      {
        id: 6,
        title: "Gentle Piano Melody",
        src: "/audio/gentle-piano-melody.mp3",
        desc: "Soothing piano notes",
      },
      {
        id: 7,
        title: "White Noise Sleep",
        src: "/audio/white-noise-sleep.mp3",
        desc: "Steady noise for focus",
      },
      {
        id: 8,
        title: "Crackling Fireplace",
        src: "/audio/crackling-fireplace.mp3",
        desc: "Warm fire sounds",
      },
      {
        id: 9,
        title: "Birdsong Dawn",
        src: "/audio/birdsong-dawn.mp3",
        desc: "Morning bird chorus",
      },
      {
        id: 10,
        title: "Thunderstorm Calm",
        src: "/audio/thunderstorm-calm.mp3",
        desc: "Distant thunder and rain",
      },
      {
        id: 11,
        title: "Wind Chimes",
        src: "/audio/wind-chimes.mp3",
        desc: "Gentle chime melodies",
      },
      {
        id: 12,
        title: "River Flow",
        src: "/audio/river-flow.mp3",
        desc: "Steady flowing water",
      },
      {
        id: 13,
        title: "Night Crickets",
        src: "/audio/night-crickets.mp3",
        desc: "Evening cricket symphony",
      },
      {
        id: 14,
        title: "Soft Harp",
        src: "/audio/soft-harp.mp3",
        desc: "Delicate harp strings",
      },
      {
        id: 15,
        title: "Cave Ambience",
        src: "/audio/cave-ambience.mp3",
        desc: "Echoing drips",
      },
      {
        id: 16,
        title: "Autumn Leaves",
        src: "/audio/autumn-leaves.mp3",
        desc: "Rustling fall foliage",
      },
      {
        id: 17,
        title: "Flute Serenity",
        src: "/audio/flute-serenity.mp3",
        desc: "Calm flute notes",
      },
      {
        id: 18,
        title: "Distant Waterfall",
        src: "/audio/distant-waterfall.mp3",
        desc: "Faint cascading water",
      },
      {
        id: 19,
        title: "Zen Bell Sounds",
        src: "/audio/zen-bell-sounds.mp3",
        desc: "Peaceful garden ambience",
      },
      {
        id: 20,
        title: "Crystal Bowls",
        src: "/audio/crystal-bowls.mp3",
        desc: "Resonant healing tones",
      },
      {
        id: 21,
        title: "Lakeside Waves",
        src: "/audio/lakeside-waves.mp3",
        desc: "Gentle lake ripples",
      },
      {
        id: 22,
        title: "Soft Rainfall",
        src: "/audio/soft-rainfall.mp3",
        desc: "Light rain patter",
      },
    ],
    // video: [
    //   {
    //     id: 1,
    //     title: "Guided Meditation",
    //     src: "/video/guided-meditation.mp4",
    //     desc: "10-min mindfulness",
    //   },
    //   {
    //     id: 2,
    //     title: "Yoga Flow",
    //     src: "/video/yoga-flow.mp4",
    //     desc: "Energizing stretches",
    //   },
    //   {
    //     id: 3,
    //     title: "Nature Visualization",
    //     src: "/video/nature-visualization.mp4",
    //     desc: "Calm forest stream",
    //   },
    //   {
    //     id: 4,
    //     title: "Breathwork Session",
    //     src: "/video/breathwork-session.mp4",
    //     desc: "Deep relaxation",
    //   },
    //   {
    //     id: 5,
    //     title: "Sunset Over Lake",
    //     src: "/video/sunset-lake.mp4",
    //     desc: "Peaceful sunset",
    //   },
    //   {
    //     id: 6,
    //     title: "Starry Night Sky",
    //     src: "/video/starry-night-sky.mp4",
    //     desc: "Timelapse of stars",
    //   },
    //   {
    //     id: 7,
    //     title: "Waterfall Serenity",
    //     src: "/video/waterfall-serenity.mp4",
    //     desc: "Cascading waterfall",
    //   },
    //   {
    //     id: 8,
    //     title: "Zen Garden Tour",
    //     src: "/video/zen-garden-tour.mp4",
    //     desc: "Japanese garden walk",
    //   },
    //   {
    //     id: 9,
    //     title: "Ocean Horizon",
    //     src: "/video/ocean-horizon.mp4",
    //     desc: "Endless sea view",
    //   },
    //   {
    //     id: 10,
    //     title: "Mountain Sunrise",
    //     src: "/video/mountain-sunrise.mp4",
    //     desc: "Dawn over peaks",
    //   },
    //   {
    //     id: 11,
    //     title: "Forest Canopy",
    //     src: "/video/forest-canopy.mp4",
    //     desc: "Birds in treetops",
    //   },
    //   {
    //     id: 12,
    //     title: "Gentle Rain",
    //     src: "/video/gentle-rain.mp4",
    //     desc: "Rain on leaves",
    //   },
    //   {
    //     id: 13,
    //     title: "Snowfall Silence",
    //     src: "/video/snowfall-silence.mp4",
    //     desc: "Quiet snow falling",
    //   },
    //   {
    //     id: 14,
    //     title: "Desert Dunes",
    //     src: "/video/desert-dunes.mp4",
    //     desc: "Wind over sand",
    //   },
    //   {
    //     id: 15,
    //     title: "Aurora Borealis",
    //     src: "/video/aurora-borealis.mp4",
    //     desc: "Northern lights dance",
    //   },
    //   {
    //     id: 16,
    //     title: "Beach Sunset",
    //     src: "/video/beach-sunset.mp4",
    //     desc: "Waves at dusk",
    //   },
    //   {
    //     id: 17,
    //     title: "River Journey",
    //     src: "/video/river-journey.mp4",
    //     desc: "Flowing river view",
    //   },
    //   {
    //     id: 18,
    //     title: "Cloud Timelapse",
    //     src: "/video/cloud-timelapse.mp4",
    //     desc: "Moving clouds",
    //   },
    //   {
    //     id: 19,
    //     title: "Meadow Breeze",
    //     src: "/video/meadow-breeze.mp4",
    //     desc: "Wildflowers swaying",
    //   },
    //   {
    //     id: 20,
    //     title: "Candle Meditation",
    //     src: "/video/candle-meditation.mp4",
    //     desc: "Flickering flame",
    //   },
    //   {
    //     id: 21,
    //     title: "Lakeside Dawn",
    //     src: "/video/lakeside-dawn.mp4",
    //     desc: "Mist over water",
    //   },
    //   {
    //     id: 22,
    //     title: "Jungle Canopy",
    //     src: "/video/jungle-canopy.mp4",
    //     desc: "Tropical forest view",
    //   },
    //   {
    //     id: 23,
    //     title: "Twilight Hills",
    //     src: "/video/twilight-hills.mp4",
    //     desc: "Evening landscape",
    //   },
    //   {
    //     id: 24,
    //     title: "Pond Reflections",
    //     src: "/video/pond-reflections.mp4",
    //     desc: "Calm water mirror",
    //   },
    //   {
    //     id: 25,
    //     title: "Windmill Calm",
    //     src: "/video/windmill-calm.mp4",
    //     desc: "Spinning windmill",
    //   },
    //   {
    //     id: 26,
    //     title: "Autumn Forest",
    //     src: "/video/autumn-forest.mp4",
    //     desc: "Falling leaves",
    //   },
    //   {
    //     id: 27,
    //     title: "Moonlit Ocean",
    //     src: "/video/moonlit-ocean.mp4",
    //     desc: "Night waves",
    //   },
    //   {
    //     id: 28,
    //     title: "Bamboo Grove",
    //     src: "/video/bamboo-grove.mp4",
    //     desc: "Swaying bamboo",
    //   },
    //   {
    //     id: 29,
    //     title: "Icy Stream",
    //     src: "/video/icy-stream.mp4",
    //     desc: "Winter water flow",
    //   },
    //   {
    //     id: 30,
    //     title: "Flower Bloom",
    //     src: "/video/flower-bloom.mp4",
    //     desc: "Timelapse bloom",
    //   },
    // ],
    video: [
      {
        id: 1,
        title: "Guided Meditation",
        src: "vedio/vedio1.mp4",
        desc: "10-min mindfulness",
      },
      {
        id: 2,
        title: "Yoga Flow",
        src: "vedio/vedio1.mp4",
        desc: "Energizing stretches",
      },
      {
        id: 3,
        title: "Nature Visualization",
        src: "vedio/vedio1.mp4",
        desc: "Calm scenic views",
      },
      {
        id: 4,
        title: "Breathwork Session",
        src: "vedio/vedio1.mp4",
        desc: "Deep relaxation",
      },

      {
        id: 5,
        title: "Nature Visualization",
        src: "vedio/vedio1.mp4",
        desc: "Calm scenic views",
      },
      {
        id: 6,
        title: "Breathwork Session",
        src: "vedio/vedio1.mp4",
        desc: "Deep relaxation",
      },
    ],
    other: [
      {
        id: 1,
        title: "Art Therapy Guide",
        desc: "Draw your emotions",
        tool: "Paints or pencils",
      },
      {
        id: 2,
        title: "Journaling Prompts",
        desc: "Daily reflection",
        tool: "Notebook",
      },
      {
        id: 3,
        title: "Mandala Coloring",
        desc: "Focus and calm",
        tool: "Printable sheets",
      },
      {
        id: 4,
        title: "Gratitude Exercise",
        desc: "Boost positivity",
        tool: "App or paper",
      },
      {
        id: 5,
        title: "Mandala Coloring",
        desc: "Focus and calm",
        tool: "Printable sheets",
      },
      {
        id: 6,
        title: "Gratitude Exercise",
        desc: "Boost positivity",
        tool: "App or paper",
      },
    ],
  };

  const tabs = [
    { id: "sound", label: "Sound Therapy" },
    { id: "video", label: "Video Therapy" },
    { id: "other", label: "Other Therapies" },
  ];

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
                  key={item.id}
                  className="bg-white p-5 font-poppins rounded-xl shadow-lg hover:rotate-3 transition-transform duration-300 animate-pulseGlow"
                >
                  <h3 className="text-lg font-bold text-[#1DA678]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <video controls className="w-full mt-3 rounded">
                    <source src={item.src} type="video/mp4" />
                  </video>
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
                <h3 className="text-lg font-bold text-[#1DA678]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
                <p className="text-gray-500 text-sm">Tool: {item.tool}</p>
                <button className="mt-4 px-5 py-2 bg-[#1DA678] text-white rounded-full hover:bg-green-600 transition-colors">
                  Try Now
                </button>
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
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes bounceIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          60% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
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
        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
        .animate-bounceIn {
          animation: bounceIn 0.7s ease;
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
