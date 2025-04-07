"use client";
import React, { useState, FormEvent } from "react";
import type { NextPage } from "next";
import { TbMessageChatbot } from "react-icons/tb";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: string;
}

const Home: NextPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! Welcome to Happy Mind Medical Center. How can I assist you today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const doctorSchedules = {
    "Dr. Smith": ["Mon-Fri: 9AM-5PM", "Sat: 10AM-2PM"],
    "Dr. Johnson": ["Tue-Thu: 11AM-7PM", "Fri: 9AM-3PM"],
    "Dr. Williams": ["Mon-Wed: 8AM-4PM", "Sat: 9AM-1PM"],
  };

  const emergencyResponses = {
    "chest pain":
      "For chest pain: Please call 911 immediately. While waiting, sit down, stay calm, and take slow deep breaths if possible.",
    bleeding:
      "For severe bleeding: Apply firm pressure to the wound with a clean cloth and call 911. Keep pressure until help arrives.",
    "difficulty breathing":
      "For breathing problems: Sit upright, try to stay calm, and call 911 immediately.",
  };

  const processMessage = (message: string): string => {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("doctor") || lowerMsg.includes("available")) {
      const doctorName = Object.keys(doctorSchedules).find((name) =>
        lowerMsg.includes(name.toLowerCase())
      );
      if (doctorName) {
        return `${doctorName}'s availability: ${doctorSchedules[
          doctorName as keyof typeof doctorSchedules
        ].join(", ")}`;
      }
      return "Please specify which doctor (Dr. Smith, Dr. Johnson, or Dr. Williams). I can provide their schedules!";
    }

    for (const [emergency, response] of Object.entries(emergencyResponses)) {
      if (lowerMsg.includes(emergency)) {
        return response;
      }
    }

    return "I can help with doctor schedules or basic emergency advice. What would you like to know?";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const botResponse: Message = {
      text: processMessage(input),
      isUser: false,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, botResponse]);
    setIsLoading(false);
  };

  return (
    <div className="z-40">
      {/* Chat Icon */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="animate-bounce fixed bottom-6 right-6 bg-gradient-to-r from-[#FFCE44] to-[#FFA801] text-white p-4 rounded-full shadow-lg hover:bg-[#FFD966] transition-all duration-300 z-50"
        aria-label="Toggle chat"
      >
        <TbMessageChatbot size={30} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 z-50 ${
          isChatOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FFCE44] to-[#FFA801] p-4 text-white flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Happy Mind Chatbot</h1>
            <p className="text-sm">Your 24/7 Health Assistant</p>
          </div>
          <button
            onClick={() => setIsChatOpen(false)}
            className="text-white hover:text-gray-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Chat Area */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.isUser
                    ? "bg-[#FFCE44] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p>{message.text}</p>
                <span className="text-xs opacity-75 block mt-1">
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 p-3 rounded-lg">
                <p className="animate-pulse">Typing...</p>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about doctors or emergencies..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCE44]"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-[#FFCE44] to-[#FFA801] text-white px-4 py-2 rounded-lg hover:bg-[#FFD966] disabled:bg-[#FFE8A3]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
