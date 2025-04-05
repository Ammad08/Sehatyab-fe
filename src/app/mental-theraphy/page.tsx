// "use client"
// import React, { useState } from 'react';

// const MentalTherapy: React.FC = () => {
//   const [activeTab, setActiveTab] = useState('sound');

//   // Expanded data for each therapy type
//   const therapyData = {
//     sound: [
//       { id: 1, title: "Calm Ocean Waves", src: "/audio/sound1.mp3", desc: "Relax with soothing waves" },
//       { id: 2, title: "Forest Serenity", src: "/audio/sound1.mp3", desc: "Birds and rustling leaves" },
//       { id: 3, title: "Rainfall Bliss", src: "/audio/sound1.mp3", desc: "Gentle rain sounds" },
//       { id: 4, title: "Mountain Breeze", src: "/audio/sound1.mp3", desc: "Cool wind whispers" },
//       { id: 5, title: "Rainfall Bliss", src: "/audio/sound1.mp3", desc: "Gentle rain sounds" },
//       { id: 6, title: "Mountain Breeze", src: "/audio/sound1.mp3", desc: "Cool wind whispers" },
//     ],
//     video: [
//       { id: 1, title: "Guided Meditation", src: "vedio/vedio1.mp4", desc: "10-min mindfulness" },
//       { id: 2, title: "Yoga Flow", src: "vedio/vedio1.mp4", desc: "Energizing stretches" },
//       { id: 3, title: "Nature Visualization", src: "vedio/vedio1.mp4", desc: "Calm scenic views" },
//       { id: 4, title: "Breathwork Session", src: "vedio/vedio1.mp4", desc: "Deep relaxation" },
      
//       { id: 5, title: "Nature Visualization", src: "vedio/vedio1.mp4", desc: "Calm scenic views" },
//       { id: 6, title: "Breathwork Session", src: "vedio/vedio1.mp4", desc: "Deep relaxation" },
//     ],
//     live: [
//       { id: 1, title: "Mindfulness Session", time: "Mon 10 AM", host: "Dr. Jane" },
//       { id: 2, title: "Group Therapy", time: "Wed 3 PM", host: "Therapist Mike" },
//       { id: 3, title: "Stress Relief Workshop", time: "Fri 6 PM", host: "Coach Sarah" },
//       { id: 4, title: "Q&A with Experts", time: "Sun 1 PM", host: "Panel" },
      
//       { id: 5, title: "Stress Relief Workshop", time: "Fri 6 PM", host: "Coach Sarah" },
//       { id: 6, title: "Q&A with Experts", time: "Sun 1 PM", host: "Panel" },
//     ],
//     other: [
//       { id: 1, title: "Art Therapy Guide", desc: "Draw your emotions", tool: "Paints or pencils" },
//       { id: 2, title: "Journaling Prompts", desc: "Daily reflection", tool: "Notebook" },
//       { id: 3, title: "Mandala Coloring", desc: "Focus and calm", tool: "Printable sheets" },
//       { id: 4, title: "Gratitude Exercise", desc: "Boost positivity", tool: "App or paper" },
      
//       { id: 5, title: "Mandala Coloring", desc: "Focus and calm", tool: "Printable sheets" },
//       { id: 6, title: "Gratitude Exercise", desc: "Boost positivity", tool: "App or paper" },
//     ],
//   };

//   const tabs = [
//     { id: 'sound', label: 'Sound Therapy' },
//     { id: 'video', label: 'Video Therapy' },
//     { id: 'live', label: 'Live Therapy' },
//     { id: 'other', label: 'Other Therapies' },
//   ];

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'sound':
//         return (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
//             {therapyData.sound.map(item => (
//               <div key={item.id} className="bg-white p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-float">
//                 <h3 className="text-lg font-bold text-[#1DA678]">{item.title}</h3>
//                 <p className="text-gray-600 text-sm">{item.desc}</p>
//                 <audio controls className="w-full mt-3 rounded">
//                   <source src={item.src} type="audio/mp3" />
//                 </audio>
//                 <div className="mt-4 flex gap-3">
//                   <button className="px-4 py-2 bg-[#1DA678] text-white rounded-full hover:bg-green-600 transition-colors">Like</button>
//                   <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">Share</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       case 'video':
//         return (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-slideUp">
//             {therapyData.video.map(item => (
//               <div key={item.id} className="bg-white p-5 rounded-xl shadow-lg hover:rotate-3 transition-transform duration-300 animate-pulseGlow">
//                 <h3 className="text-lg font-bold text-[#1DA678]">{item.title}</h3>
//                 <p className="text-gray-600 text-sm">{item.desc}</p>
//                 <video controls className="w-full mt-3 rounded">
//                   <source src={item.src} type="video/mp4" />
//                 </video>
//                 <div className="mt-4 flex gap-3">
//                   <button className="px-4 py-2 bg-[#1DA678] text-white rounded-full hover:bg-green-600 transition-colors">Like</button>
//                   <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">Share</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       case 'live':
//         return (
//           <div className="space-y-6 animate-bounceIn">
//             {therapyData.live.map(item => (
//               <div key={item.id} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-float">
//                 <h3 className="text-lg font-bold text-green-700">{item.title}</h3>
//                 <p className="text-gray-600">Time: {item.time}</p>
//                 <p className="text-gray-500 text-sm">Host: {item.host}</p>
//                 <button className="mt-4 px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">Join Live</button>
//               </div>
//             ))}
//           </div>
//         );
//       case 'other':
//         return (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-zoomIn">
//             {therapyData.other.map(item => (
//               <div key={item.id} className="bg-white p-5 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 animate-pulseGlow">
//                 <h3 className="text-lg font-bold text-green-700">{item.title}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//                 <p className="text-gray-500 text-sm">Tool: {item.tool}</p>
//                 <button className="mt-4 px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">Try Now</button>
//               </div>
//             ))}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="h-fit bg-gradient-to-r from-[rgba(29,166,120,0.2)] via-[rgba(29,166,120,0.4)] to-[rgba(29,166,120,0.2)] p-8">
//       <header className="max-w-7xl mx-auto mb-10">
//         <nav className="flex justify-center gap-8 flex-wrap">
//           {tabs.map(tab => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-110 animate-pulseGlow ${
//                 activeTab === tab.id
//                   ? 'bg-[#1DA678] text-white shadow-xl'
//                   : 'bg-white text-[#1DA678] hover:bg-green-50'
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </nav>
//       </header>
//       <main className="max-w-5xl mx-auto">
//         {renderContent()}
//       </main>
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slideUp {
//           from { transform: translateY(30px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes bounceIn {
//           0% { transform: scale(0.8); opacity: 0; }
//           60% { transform: scale(1.1); opacity: 1; }
//           100% { transform: scale(1); }
//         }
//         @keyframes zoomIn {
//           from { transform: scale(0.9); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         @keyframes float {
//           0% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0); }
//         }
//         @keyframes pulseGlow {
//           0% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
//           50% { box-shadow: 0 0 15px rgba(34, 197, 94, 0.8); }
//           100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
//         }
//         .animate-fadeIn { animation: fadeIn 0.6s ease-in; }
//         .animate-slideUp { animation: slideUp 0.6s ease-out; }
//         .animate-bounceIn { animation: bounceIn 0.7s ease; }
//         .animate-zoomIn { animation: zoomIn 0.6s ease-in; }
//         .animate-float { animation: float 3s ease-in-out infinite; }
//         .animate-pulseGlow { animation: pulseGlow 2s ease-in-out infinite; }
//       `}</style>
//     </div>
//   );
// };

// export default MentalTherapy;


"use client"
import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';

const MentalTherapy: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sound');
  const [likedItems, setLikedItems] = useState<{ [key: string]: boolean }>({});
  const toggleLike = (id: string) => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  const handleShare = (item: { title: string; desc: string; src: string }) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.desc,
        url: item.src,
      });
    } else {
      alert('Share not supported on this device.');
    }
  };

  // Expanded data for each therapy type
  const therapyData = {
    sound: [
      { id: 1, title: "Calm Ocean Waves", src: "/audio/sound1.mp3", desc: "Relax with soothing waves" },
      { id: 2, title: "Forest Serenity", src: "/audio/sound1.mp3", desc: "Birds and rustling leaves" },
      { id: 3, title: "Rainfall Bliss", src: "/audio/sound1.mp3", desc: "Gentle rain sounds" },
      { id: 4, title: "Mountain Breeze", src: "/audio/sound1.mp3", desc: "Cool wind whispers" },
      { id: 5, title: "Rainfall Bliss", src: "/audio/sound1.mp3", desc: "Gentle rain sounds" },
      { id: 6, title: "Mountain Breeze", src: "/audio/sound1.mp3", desc: "Cool wind whispers" },
    ],
    video: [
      { id: 1, title: "Guided Meditation", src: "vedio/vedio1.mp4", desc: "10-min mindfulness" },
      { id: 2, title: "Yoga Flow", src: "vedio/vedio1.mp4", desc: "Energizing stretches" },
      { id: 3, title: "Nature Visualization", src: "vedio/vedio1.mp4", desc: "Calm scenic views" },
      { id: 4, title: "Breathwork Session", src: "vedio/vedio1.mp4", desc: "Deep relaxation" },
      
      { id: 5, title: "Nature Visualization", src: "vedio/vedio1.mp4", desc: "Calm scenic views" },
      { id: 6, title: "Breathwork Session", src: "vedio/vedio1.mp4", desc: "Deep relaxation" },
    ],
    live: [
      { id: 1, title: "Mindfulness Session", time: "Mon 10 AM", host: "Dr. Jane" },
      { id: 2, title: "Group Therapy", time: "Wed 3 PM", host: "Therapist Mike" },
      { id: 3, title: "Stress Relief Workshop", time: "Fri 6 PM", host: "Coach Sarah" },
      { id: 4, title: "Q&A with Experts", time: "Sun 1 PM", host: "Panel" },
      
      { id: 5, title: "Stress Relief Workshop", time: "Fri 6 PM", host: "Coach Sarah" },
      { id: 6, title: "Q&A with Experts", time: "Sun 1 PM", host: "Panel" },
    ],
    other: [
      { id: 1, title: "Art Therapy Guide", desc: "Draw your emotions", tool: "Paints or pencils" },
      { id: 2, title: "Journaling Prompts", desc: "Daily reflection", tool: "Notebook" },
      { id: 3, title: "Mandala Coloring", desc: "Focus and calm", tool: "Printable sheets" },
      { id: 4, title: "Gratitude Exercise", desc: "Boost positivity", tool: "App or paper" },
      
      { id: 5, title: "Mandala Coloring", desc: "Focus and calm", tool: "Printable sheets" },
      { id: 6, title: "Gratitude Exercise", desc: "Boost positivity", tool: "App or paper" },
    ],
  };

  const tabs = [
    { id: 'sound', label: 'Sound Therapy' },
    { id: 'video', label: 'Video Therapy' },
    { id: 'live', label: 'Live Therapy' },
    { id: 'other', label: 'Other Therapies' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'sound':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
           {therapyData.sound.map(item => {
  const itemId = `sound-${item.id}`;
  return (
    <div key={itemId} className="bg-white p-5 font-poppins rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 animate-float">
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
      case 'video':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
           {therapyData.video.map(item => {
  const itemId = `video-${item.id}`;
  return (
              <div key={item.id} className="bg-white p-5 font-poppins rounded-xl shadow-lg hover:rotate-3 transition-transform duration-300 animate-pulseGlow">
                <h3 className="text-lg font-bold text-[#1DA678]">{item.title}</h3>
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
      case 'live':
        return (
          <div className="space-y-6 animate-bounceIn">
            {therapyData.live.map(item => (
              <div key={item.id} className="bg-white p-5 font-poppins rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-float">
                <h3 className="text-lg font-bold text-[#1DA678]">{item.title}</h3>
                <p className="text-gray-600">Time: {item.time}</p>
                <p className="text-gray-500 text-sm">Host: {item.host}</p>
                <button className="mt-4 px-5 py-2 bg-[#1DA678] text-white rounded-full hover:bg-green-600 transition-colors">Join Live</button>
              </div>
            ))}
          </div>
        );
      case 'other':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-zoomIn">
            {therapyData.other.map(item => (
              <div key={item.id} className="bg-white p-5 font-poppins rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300 animate-pulseGlow">
                <h3 className="text-lg font-bold text-[#1DA678]">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <p className="text-gray-500 text-sm">Tool: {item.tool}</p>
                <button className="mt-4 px-5 py-2 bg-[#1DA678] text-white rounded-full hover:bg-green-600 transition-colors">Try Now</button>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-fit bg-gradient-to-r from-[rgba(29,166,120,0.2)] via-[rgba(29,166,120,0.4)] to-[rgba(29,166,120,0.2)] p-8">
      <header className="max-w-7xl mx-auto mb-10">
        <nav className="flex justify-center gap-8 flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 animate-pulseGlow ${
                activeTab === tab.id
                  ? 'bg-[#1DA678] text-white shadow-xl'
                  : 'bg-white text-[#1DA678] hover:bg-green-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>
      <main className="max-w-5xl mx-auto">
        {renderContent()}
      </main>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
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
        .animate-slideUp { animation: slideUp 0.6s ease-out; }
        .animate-bounceIn { animation: bounceIn 0.7s ease; }
        .animate-zoomIn { animation: zoomIn 0.6s ease-in; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulseGlow { animation: pulseGlow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default MentalTherapy;