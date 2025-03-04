"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const posts = [
  {
    id: 1,
    title:
      "Mindfulness Matters: Harnessing the Present Moment for Mental Well-being",
    image: "/Blog/Blog1.svg",
    excerpt:
      "Discover the power of mindfulness and how staying present can enhance mental clarity and reduce stress.",
    content:
      "Mindfulness is the practice of being fully present and engaged in the moment. It helps reduce stress, improve focus, and enhance emotional well-being. By incorporating mindfulness techniques such as meditation, deep breathing, and mindful observation, individuals can develop a greater sense of clarity and inner peace. Research shows that mindfulness can lower cortisol levels, improve decision-making, and even boost overall happiness.",
  },
  {
    id: 2,
    title: "The Science of Happiness: Cultivating Joy and Fulfillment",
    image: "/Blog/Blog2.svg",
    excerpt:
      "Explore research-backed strategies to improve happiness and overall life satisfaction.",
    content:
      "Happiness is not just a feeling; it is a state of mind that can be cultivated. Studies show that engaging in positive activities such as practicing gratitude, fostering social connections, and engaging in acts of kindness can boost happiness levels. By focusing on personal growth and self-compassion, individuals can create a fulfilling life filled with joy and meaning.",
  },
  {
    id: 3,
    title: "Understanding Relationships: Tools for Healthy Connections",
    image: "/Blog/Blog3.svg",
    excerpt:
      "Learn essential communication skills and emotional intelligence to build stronger relationships.",
    content:
      "Healthy relationships require effective communication, trust, and mutual respect. Active listening, empathy, and conflict resolution are key skills that help maintain strong connections with others. Understanding emotional intelligence allows individuals to manage emotions and respond to situations with kindness and understanding, ultimately leading to healthier and happier relationships.",
  },
  {
    id: 4,
    title: "Building Resilience: Overcoming Adversity in a Stressful World",
    image: "/Blog/Blog4.svg",
    excerpt:
      "Practical techniques to develop resilience and face life’s challenges with confidence.",
    content:
      "Resilience is the ability to bounce back from adversity and stay strong in the face of challenges. Developing resilience involves fostering a positive mindset, practicing self-care, and learning from setbacks. Techniques such as cognitive reframing, stress management, and seeking social support can help individuals build resilience and navigate life’s ups and downs more effectively.",
  },
  {
    id: 5,
    title: "Unlocking Your Potential: Exploring the Power of Self-Discovery",
    image: "/Blog/Blog5.svg",
    excerpt:
      "Uncover your true potential and take steps towards self-improvement and personal growth.",
    content:
      "Self-discovery is a journey of understanding one’s values, passions, and strengths. By setting goals, embracing lifelong learning, and stepping out of comfort zones, individuals can unlock their true potential. Personal growth involves continuous self-improvement, embracing challenges, and developing skills that contribute to overall success and fulfillment.",
  },
  {
    id: 6,
    title: "Navigating Anxiety: Practical Strategies for Everyday Challenges",
    image: "/Blog/Blog6.svg",
    excerpt:
      "Simple yet effective methods to manage anxiety and maintain emotional balance.",
    content:
      "Anxiety can be overwhelming, but there are effective strategies to manage it. Techniques such as deep breathing, mindfulness, and progressive muscle relaxation can help reduce stress and improve emotional well-being. Establishing healthy routines, seeking support, and focusing on self-care can make a significant difference in managing anxiety and maintaining mental balance.",
  },
];

const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl font-commissioner">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Blog Posts Grid */}
        <div className="flex-1">
          {selectedPost === null ? (
            // Show all posts when no post is selected
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-48 sm:h-56 object-cover"
                    />
                    <div className="py-4 sm:py-5 p-2">
                      <h3 className="text-base sm:text-lg font-bold font-commissioner text-[#06685F] line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm mt-2">
                        📅 April 19, 2024   |   📝 No Comments
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm mt-2 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <button
                        onClick={() => setSelectedPost(post.id)}
                        className="text-[#06685F] font-semibold mt-3 inline-block hover:underline transition-colors duration-200 text-xs sm:text-base"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-center col-span-full">
                  No posts found matching your search.
                </p>
              )}
            </div>
          ) : (
            // Show only the selected post details
            <div className="bg-white rounded-md lg:w-[90%]">
              {/* Blog Image */}
              <Image
                src={
                  posts.find((post) => post.id === selectedPost)?.image || ""
                }
                alt={
                  posts.find((post) => post.id === selectedPost)?.title || ""
                }
                width={600}
                height={300}
                className="w-full h-[400px] object-cover rounded-t-md"
              />

              <div className="p-6 relative flex gap-3 -ml-8 xl:-ml-16">
                {/* Social Media Icons (Left Sidebar) */}
                <div className="flex flex-col space-y-3">
                  <button className="p-2 bg-[#1DA678] text-white rounded-md hover:bg-[#14795F] transition">
                    <FaFacebookF />
                  </button>
                  <button className="p-2 bg-[#1DA678] text-white rounded-md hover:bg-[#14795F] transition">
                    <FaTwitter />
                  </button>
                  <button className="p-2 bg-[#1DA678] text-white rounded-md hover:bg-[#14795F] transition">
                    <FaLinkedinIn />
                  </button>
                  <button className="p-2 bg-[#1DA678] text-white rounded-md hover:bg-[#14795F] transition">
                    <FaWhatsapp />
                  </button>
                </div>

                <div>
                  {/* Blog Title */}
                  <h1 className="text-xl md:text-2xl xl:text-3xl font-commissioner font-bold text-green-700 leading-tight">
                    {posts.find((post) => post.id === selectedPost)?.title}
                  </h1>

                  {/* Post Metadata */}
                  <p className="text-gray-500 text-sm mt-2 font-commissioner">
                    📅 April 19, 2024   |   📝 No Comments
                  </p>

                  {/* Blog Content */}
                  <p className="text-[#6E6E6E] text-base mt-4 leading-relaxed text-justify font-commissioner">
                    {posts
                      .find((post) => post.id === selectedPost)
                      ?.content.repeat(6)}
                  </p>

                  {/* Back Button */}
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="mt-6 font-semibold text-lg underline font-poppins text-red-600 hover:text-red-800 transition duration-300"
                  >
                    Back to Posts
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 space-y-6 sm:space-y-8">
          {/* Searchbar */}
          <div className="flex items-center rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#1DA678] bg-gradient-to-r from-[rgba(29,166,120,0.1)] via-[rgba(29,166,120,0.3)] to-[rgba(29,166,120,0.1)]">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 sm:py-3 px-4 text-gray-700 text-sm sm:text-base bg-transparent focus:outline-none"
            />
            <button className="p-5 px-7 bg-[#1DA678] hover:bg-green-700 transition text-white flex items-center">
              <FaSearch className="text-sm" />
            </button>
          </div>

          {/* Featured Posts */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-commissioner mb-4 text-[#06685F]">
              Featured Posts
            </h2>
            <div className="space-y-5">
              {posts.slice(0, 4).map((post) => (
                <div
                  key={post.id}
                  className="flex items-center space-x-3 sm:space-x-4 bg-white rounded-md transition-transform transform hover:-translate-y-1 hover:shadow-lg duration-300"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={110}
                    height={110}
                    className="w-20 h-20 sm:w-32 sm:h-24 md:w-48 md:h-32 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold font-commissioner text-[#06685F] text-xs sm:text-sm md:text-base line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-500 text-xs mt-2 sm:mt-3">
                      📅 April 19, 2024   |   📝 No Comments
                    </p>
                    <button
                      onClick={() => setSelectedPost(post.id)}
                      className="text-[#06685F] text-sm font-semibold hover:underline transition-colors duration-200 mt-2 sm:mt-3"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
