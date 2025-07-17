import Link from "next/link";

function InformationDataScience() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-11 px-6 bg-slate-400">
        <div className="font-sans font-bold text-indigo-950 text-lg leading-relaxed space-y-4">
          <h1 className="text-4xl mb-4">The Power of Data Science</h1>
          <p>
            Data Science is the art of extracting valuable insights and
            knowledge from vast amounts of raw data. By combining advanced
            statistical techniques, machine learning, and programming, data
            scientists can analyze complex datasets, identify patterns, and make
            data-driven decisions.
          </p>
          <p>
            Whether it’s predicting future trends, optimizing business
            processes, or uncovering hidden opportunities, data science
            transforms data into actionable intelligence.
          </p>
          <p>
            From powering artificial intelligence to enhancing customer
            experiences, data science plays a critical role across industries,
            revolutionizing everything from healthcare to finance. Embrace the
            power of data and drive smarter decisions for your business!
          </p>
        </div>

        <div className="space-y-4 flex flex-col">
          {/* Full-width image link */}
          <Link href="/Resources">
            <div className="h-80 w-full relative group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div
                style={{ backgroundImage: `url(${slides[0].url})` }}
                className="w-full h-full bg-center bg-cover"
              ></div>
            </div>
          </Link>

          {/* Smaller images links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/Resources">
              <div className="h-48 relative group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div
                  style={{ backgroundImage: `url(${slides[1].url})` }}
                  className="w-full h-full bg-center bg-cover"
                ></div>
              </div>
            </Link>

            <Link href="/Resources">
              <div className="h-48 relative group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div
                  style={{ backgroundImage: `url(${slides[2].url})` }}
                  className="w-full h-full bg-center bg-cover"
                ></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default InformationDataScience;
