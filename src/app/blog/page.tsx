import React from "react";
import BlogHero from "../component/Blog/BlogHero";
import BlogSection from "../component/Blog/BlogSection";
import DiscoverPages from "../component/About/DiscoverPages";

const page = () => {
  return (
    <div>
      <BlogHero />
      <BlogSection />
      <DiscoverPages />
    </div>
  );
};

export default page;
