


// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";

// const exerciseDetails: {
//   [key: string]: { steps: string[]; images: string[] };
// } = {
//   "Art Therapy Guide": {
//     steps: [
//       "Gather your materials: paints, pencils, or crayons.",
//       "Find a quiet space to focus.",
//       "Start by drawing how you feel—let colors represent emotions.",
//       "Reflect on your artwork for 5 minutes.",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Art supplies
//       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Quiet space
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Colorful drawing
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Reflection
//     ],
//   },
//   "Journaling Prompts": {
//     steps: [
//       "Set aside 10 minutes daily.",
//       "Pick a prompt like 'What made me smile today?'",
//       "Write freely without editing.",
//       "Review your entries weekly.",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Clock (placeholder, replaced broken)
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Smiling (placeholder, replaced broken)
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Writing (placeholder, replaced broken)
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Notebook review (placeholder, replaced broken)
//     ],
//   },
//   "Mandala Coloring": {
//     steps: [
//       "Print or draw a mandala design.",
//       "Choose calming colors.",
//       "Color slowly, focusing on each section.",
//       "Display your finished mandala.",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Mandala design
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Color palette (placeholder, replaced broken)
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Coloring process (placeholder, replaced broken)
//       "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Displayed art
//     ],
//   },
//   "Gratitude Exercise": {
//     steps: [
//       "List 3 things you're grateful for each day.",
//       "Write why they matter to you.",
//       "Read your list aloud.",
//       "Repeat for 21 days.",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // List writing
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Thoughtful moment
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Reading aloud (placeholder, replaced broken)
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Calendar
//     ],
//   },
//   "Mindful Breathing": {
//     steps: [
//       "Sit comfortably in a quiet place.",
//       "Close your eyes and focus on your breath.",
//       "Inhale deeply for 4 seconds, hold for 4, exhale for 4.",
//       "Repeat for 5 minutes.",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Sitting comfortably
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Closed eyes
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Breathing focus
//       "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Calm scene
//     ],
//   },
//   "Nature Walk": {
//     steps: [
//       "Find a nearby park or natural area.",
//       "Walk slowly, noticing sights and sounds.",
//       "Take 5 deep breaths of fresh air.",
//       "Spend at least 20 minutes in nature.",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Park
//       "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Walking path
//       "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Fresh air
//       "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Nature scene
//     ],
//   },
//   "Body Scan Meditation": {
//     steps: [
//       "Lie down or sit comfortably.",
//       "Close your eyes and focus on your toes.",
//       "Move attention slowly up your body.",
//       "Notice sensations for 5-10 minutes.",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Lying down
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Closed eyes
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Body focus
//       "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Calm scene
//     ],
//   },
//   "Positive Affirmations": {
//     steps: [
//       "Choose 3 affirmations (e.g., 'I am enough').",
//       "Stand in front of a mirror.",
//       "Repeat each affirmation 5 times aloud.",
//       "Practice daily for a week.",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Writing affirmations
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Mirror
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Speaking
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Calendar
//     ],
//   },
//   "Creative Writing": {
//     steps: [
//       "Set a timer for 15 minutes.",
//       "Pick a theme (e.g., 'A happy memory').",
//       "Write without stopping or editing.",
//       "Read your story with pride.",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Clock (placeholder, replaced broken)
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Writing (placeholder, replaced broken)
//       // Happy moment
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Writing (placeholder, replaced broken)
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Reading (placeholder, replaced broken)
//     ],
//   },
//   "Visualization Exercise": {
//     steps: [
//       "Sit quietly and close your eyes.",
//       "Imagine a peaceful place (e.g., beach).",
//       "Picture details: sights, sounds, smells.",
//       "Stay in the scene for 5 minutes.",
//     ],
//     images: [
//       "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Sitting quietly
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Beach
//       "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Calm scene
//       // Ocean details
//       "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Calm scene
//     ],
//   },
// };

// interface ExerciseDetailProps {
//   params: { title: string };
// }

// const ExerciseDetail: React.FC<ExerciseDetailProps> = ({ params }) => {
//   const decodedTitle = decodeURIComponent(params.title);
//   const [imageErrors, setImageErrors] = useState<boolean[]>([]);

//   if (!decodedTitle || !exerciseDetails[decodedTitle]) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-xl text-gray-600">Exercise not found.</p>
//       </div>
//     );
//   }

//   const { steps, images } = exerciseDetails[decodedTitle];

//   const handleImageError = (index: number) => {
//     setImageErrors((prev) => {
//       const newErrors = [...prev];
//       newErrors[index] = true;
//       return newErrors;
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-100 via-green-200 to-green-100 py-8 px-6">
//       <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
//         <h1 className="text-3xl text-center mt-6 font-bold text-[#1DA678] mb-8">{decodedTitle}</h1>
//         <div className="space-y-8">
//           {steps.map((step, index) => (
//             <div key={index} className="flex flex-col md:flex-row gap-4 items-center">
//               <div className="flex-1">
//                 <p className="text-lg font-semibold text-gray-700">Step {index + 1}:</p>
//                 <p className="text-gray-600">{step}</p>
//               </div>
//               {images[index] && !imageErrors[index] ? (
//                 <Image
//                   src={images[index]}
//                   alt={`Step ${index + 1}`}
//                   width={256}
//                   height={256}
//                   className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg"
//                   onError={() => handleImageError(index)}
//                 />
//               ) : (
//                 <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center bg-gray-200 rounded-lg">
//                   <p className="text-gray-500">Image not available</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//         <Link href="/theraphy">
//           <button className="mt-8 px-6 py-3 bg-[#1DA678] text-white rounded-full hover:bg-green-600 transition-colors">
//             Back to Therapy
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ExerciseDetail;

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const exerciseDetails: {
  [key: string]: { steps: string[]; images: string[] };
} = {
  "Art Therapy Guide": {
    steps: [
      "Gather your materials such as paints, pencils, or crayons, ensuring you have everything you need to start your creative journey comfortably and without interruptions.",
      "Find a quiet space where you can focus, free from distractions, allowing your mind to settle and fully engage in the artistic process ahead.",
      "Start by drawing how you feel, letting colors represent your emotions, using bold reds for anger or soft blues for calm to express yourself freely.",
      "Reflect on your artwork for 5 minutes, thinking about what it reveals about your emotions and how the process made you feel overall.",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "Journaling Prompts": {
    steps: [
      "Set aside 10 minutes daily to journal, creating a consistent habit that allows you to process your thoughts and emotions in a structured, reflective way.",
      "Pick a prompt like 'What made me smile today?' to guide your writing, sparking positivity and helping you focus on meaningful moments in your life.",
      "Write freely without editing, letting your thoughts flow naturally onto the page, capturing raw emotions and ideas without worrying about perfection or structure.",
      "Review your entries weekly to notice patterns, reflect on your growth, and gain insights into how your feelings and experiences evolve over time.",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "Mandala Coloring": {
    steps: [
      "Print or draw a mandala design, choosing a pattern that resonates with you and preparing a canvas for a calming and meditative coloring experience.",
      "Choose calming colors like soft blues, greens, or purples, selecting shades that soothe your mind and enhance the relaxation of the coloring process.",
      "Color slowly, focusing on each section, letting your attention dwell on the details as a way to unwind and practice mindfulness with every stroke.",
      "Display your finished mandala in a special place, admiring your work as a reminder of your creativity and the peace it brought you.",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "Gratitude Exercise": {
    steps: [
      "List 3 things you're grateful for each day, writing them down to cultivate positivity and shift your focus toward the blessings in your life consistently.",
      "Write why they matter to you, exploring their significance in depth to deepen your appreciation and connect emotionally with each item on your list.",
      "Read your list aloud to yourself, hearing the words to reinforce their meaning and let the gratitude sink in fully as a daily practice.",
      "Repeat for 21 days to build a habit, allowing this routine to transform your mindset and bring a lasting sense of thankfulness and joy.",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "Mindful Breathing": {
    steps: [
      "Sit comfortably in a quiet place where you won’t be disturbed, settling into a position that supports relaxation and helps you focus inward peacefully.",
      "Close your eyes and focus on your breath, tuning out distractions to center your mind and prepare for a calming and restorative breathing exercise.",
      "Inhale deeply for 4 seconds, hold for 4, exhale for 4, repeating this rhythm to regulate your breathing and promote a sense of calm.",
      "Repeat for 5 minutes, maintaining the pattern to fully relax your body and mind, letting stress melt away with each controlled breath cycle.",
    ],
    images: [
      "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "Nature Walk": {
    steps: [
      "Find a nearby park or natural area where you can immerse yourself in greenery, choosing a spot that feels inviting and peaceful for your walk.",
      "Walk slowly, noticing sights and sounds around you, taking time to appreciate the rustling leaves, birdsong, and beauty of nature as you go.",
      "Take 5 deep breaths of fresh air, inhaling deeply to fill your lungs, feeling refreshed and connected to the outdoors with each breath you take.",
      "Spend at least 20 minutes in nature, allowing the time to unwind, recharge, and enjoy the calming effects of being surrounded by the natural world.",
    ],
    images: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "Body Scan Meditation": {
    steps: [
      "Lie down or sit comfortably in a quiet spot, finding a position that feels natural and supportive for a deep, relaxing meditation session ahead.",
      "Close your eyes and focus on your toes, beginning there to anchor your attention, preparing to move slowly through your body with awareness.",
      "Move attention slowly up your body, from feet to head, noticing tension or sensations in each area as you go, staying present and mindful.",
      "Notice sensations for 5-10 minutes, observing without judgment, letting your mind explore how each part feels to enhance relaxation and awareness.",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "Positive Affirmations": {
    steps: [
      "Choose 3 affirmations like 'I am enough,' selecting phrases that resonate deeply, uplifting your spirit and reinforcing your sense of self-worth daily.",
      "Stand in front of a mirror, looking into your eyes, creating a personal connection as you prepare to speak your affirmations with confidence.",
      "Repeat each affirmation 5 times aloud, saying them clearly and with conviction, letting the words sink in and boost your mood and mindset.",
      "Practice daily for a week, building a routine that strengthens your belief in yourself and fosters positivity through consistent, intentional affirmation.",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "Creative Writing": {
    steps: [
      "Set a timer for 15 minutes to create a focused writing session, giving yourself enough time to dive into your thoughts and unleash creativity.",
      "Pick a theme like 'A happy memory' to inspire your writing, choosing something personal that stirs emotions and sparks vivid ideas effortlessly.",
      "Write without stopping or editing, letting your pen flow freely across the page, capturing every thought and feeling as it comes to you naturally.",
      "Read your story with pride, appreciating the creativity and authenticity in your words, reflecting on the joy of expressing yourself through writing.",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  "Visualization Exercise": {
    steps: [
      "Sit quietly and close your eyes, finding a calm spot to relax, setting the stage for a peaceful and immersive visualization experience ahead.",
      "Imagine a peaceful place like a beach, picturing the waves, sand, and sky vividly, letting your mind create a serene escape for relaxation.",
      "Picture details like sights, sounds, and smells, imagining the salty breeze, crashing waves, and warm sun to fully engage your senses deeply.",
      "Stay in the scene for 5 minutes, holding the image in your mind, letting it calm you and bring a sense of peace and renewal.",
    ],
    images: [
      "https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
};

interface ExerciseDetailProps {
  params: { title: string };
}

const ExerciseDetail: React.FC<ExerciseDetailProps> = ({ params }) => {
  const decodedTitle = decodeURIComponent(params.title);
  const [imageErrors, setImageErrors] = useState<boolean[]>([]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!decodedTitle || !exerciseDetails[decodedTitle]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[rgba(29,166,120,0.1)] via-[rgba(29,166,120,0.2)] to-[rgba(29,166,120,0.1)]">
        <p className="text-xl text-gray-600">Exercise not found.</p>
      </div>
    );
  }

  const { steps, images } = exerciseDetails[decodedTitle];

  const handleImageError = (index: number) => {
    setImageErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[rgba(29,166,120,0.1)] via-[rgba(29,166,120,0.2)] to-[rgba(29,166,120,0.1)] min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-teal-800 mb-12"
        >
          {decodedTitle}
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10 text-gray-900"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col  items-center">
              <div className="w-full">
                <h2 className="text-2xl font-semibold text-teal-700 mb-2">Step {index + 1}</h2>
                <p className="text-lg">{step}</p>
              </div>
              {images[index] && !imageErrors[index] ? (
                <Image
                  src={images[index]}
                  alt={`Step ${index + 1}`}
                  width={512}
                  height={512}
                  className="mt-4 w-full max-w-md h-auto object-cover rounded-lg"
                  onError={() => handleImageError(index)}
                />
              ) : (
                <div className="mt-4 w-full max-w-md h-64 flex items-center justify-center bg-gray-200 rounded-lg">
                  <p className="text-gray-500">Image not available</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link href="/theraphy">
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors text-lg font-semibold"
            >
              Back to Therapy
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExerciseDetail;