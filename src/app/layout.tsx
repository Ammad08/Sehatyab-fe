import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Chatbot from "./component/Home/Chatbot";
import NavBar from "./component/Navbar";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Mind - Your Trusted Mental Wellness Partner",
  description:
    "Healthy Mind offers expert online psychiatric consultations to support your mental well-being. Connect with certified psychiatrists for personalized care and therapy from the comfort of home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main>
          {/* <Chatbot /> */}
          <script
            src="https://app.livechatai.com/embed.js"
            data-id="cm9bcck150001l10c76sbye0m"
            async
            defer
          ></script>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
