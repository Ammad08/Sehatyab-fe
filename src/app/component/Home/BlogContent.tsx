// components/BlogContent.jsx
import Image from 'next/image';
import Link from 'next/link';

const BlogContent = () => {
  const blogs = [
    {
      id: 1,
      title: "Mindfulness Matters: Harnessing the Present Moment for Mental Well-being",
      date: "April 17, 2024",
      comments: "No Comments",
      description: "MPracticing mindfulness daily helps in reducing anxiety, enhancing self-awareness, and promoting mental clarity for a balanced and fulfilling life.",
      image: "/Home/Blog1.png",
    },
    {
      id: 2,
      title: "The Science of Happiness: Cultivating Joy and Fulfillment",
      date: "April 17, 2024",
      comments: "No Comments",
      description: "Exploring the psychology of happiness reveals ways to improve emotional resilience, cultivate gratitude, and create a fulfilling and joyful existence.",
      image: "/Home/Blog2.png",
    },
    {
      id: 3,
      title: "Understanding Relationships: Tools for Healthy Connections",
      date: "April 17, 2024",
      comments: "No Comments",
      description: "Developing strong relationships requires trust, empathy, and active listening, fostering meaningful connections for a happier and healthier life.",
      image: "/Home/Blog3.png",
    },
  ];

  return (
    <main className='flex flex-col justify-center items-center'>
      <section className="py-10 container max-w-6xl ">
        <h5 className="text-center text-sm font-semibold  tracking-widest text-[#FFBC0A]  uppercase -mb-2  font-commissioner">
          NOW READING
        </h5>
        <h2 className="text-center text-2xl md:text-2xl lg:text-4xl font-poppins font-bold text-[rgba(6,104,95,1)] mt-2 mb-6 md:mb-10">
          Our Blog Content
        </h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className=" rounded-lg  overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-56 rounded-lg object-cover"
              />
              <div className="py-6">
                <h3 className="text-lg font-bold text-[rgba(6,104,95,1)] hover:text-[rgba(6,104,95,1)]/80 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  {blog.date}  {blog.comments}
                </p>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {blog.description}
                </p>
                <Link
                  href="/blog"
                  className="inline-block mt-4 text-[rgba(255,188,10,1)] font-semibold text-sm hover:underline"
                >
                  Read More »
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogContent;