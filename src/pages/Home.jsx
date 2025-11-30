export default function Home() {
  const starterCards = [
    {
      title: "Get started",
      desc: "Read our getting started guide to get the most out of your subscription.",
      link: "#",
    },
    {
      title: "Community",
      desc: "Join the conversation on our exclusive Slack for premium subscribers.",
      link: "#",
    },
    {
      title: "Visit website",
      desc: "Keep up with our latest content on our website.",
      link: "#",
    },
  ];

  const posts = [
    {
      date: "Apr 18, 2024",
      title: "CM Fixed Income: Exiting Banking & PSU to Add a New Gilt Fund",
      desc: "We are increasing the duration of our Fixed Income portfolio to reflect current macro conditions...",
      link: "#",
    },
    {
      date: "Apr 05, 2024",
      title: "Craftsman Automation: Poised for Growth Amid Temporary Headwinds",
      desc: "Craftsman Automation excels in making precise parts for cars and machines...",
      link: "#",
    },
    {
      date: "Apr 03, 2024",
      title: "The Focused Way of Investing: Four-Quadrant Strategy & FY24 Review",
      desc: "FY24 brought us a 42% gain — a rollercoaster, but that’s part of equity investing...",
      link: "#",
    },
    {
      date: "Mar 27, 2024",
      title: "A Small CAD for India, Yet Again",
      desc: "India’s current account deficit is a mere 10bn this quarter...",
      link: "#",
    },
    {
      date: "Mar 25, 2024",
      title: "Poonawalla Fincorp: One right step at a time",
      desc: "There are some winning patterns in investing that keep repeating...",
      link: "#",
    },
    {
      date: "Mar 18, 2024",
      title: "CM Focused: Reducing allocation to smallcaps & increasing cash",
      desc: "We have seen increased volatility in the mid and small-cap segments...",
      link: "#",
    },
  ];

  return (
    <div className="px-10 py-8">
      
      <h1 className="text-3xl font-bold mb-8">Home</h1>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {starterCards.map((card, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600 text-sm mb-3">{card.desc}</p>
            <a
              href={card.link}
              className="text-green-600 font-medium hover:underline"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>

      
      <h2 className="text-xl font-semibold mb-6">Latest Posts</h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post, index) => (
          <div key={index}>
            <p className="text-sm text-gray-500 mb-1">{post.date}</p>
            <h3 className="text-lg font-semibold leading-snug mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{post.desc}</p>
            <a
              href={post.link}
              className="text-green-600 font-medium hover:underline"
            >
              Read full post
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
