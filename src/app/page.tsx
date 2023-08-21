"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [blogPostsRaw, setBlogPostsRaw] = useState<any[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  const defaultGradient = `bg-gradient-to-r from-orange-500 to-violet-600`;
  const hoverGradient = `hover:from-orange-600 hover:to-violet-700`;

  const handleNext = () => {
    if (startIndex + 3 < blogPostsRaw.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visiblePosts = blogPostsRaw.slice(startIndex, startIndex + 3);

  const blogPosts = (
    <section className="my-10">
      <h1 className="flex items-center text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8 text-orange-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
          />
        </svg>
        Recent Blog Posts
      </h1>
      <div className="flex flex-col">
        {visiblePosts.map((article) => (
          <div
            key={article.id}
            className="flex flex-col w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 my-3 p-3"
          >
            <h2 className="text-lg font-semi-bold mb-5 border-green-600 border-l-2 pl-2">
              {article.title}
            </h2>
            <p>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="flex text-red-600 mt-5"
            >
              read more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        {startIndex > 0 && (
          <button
            onClick={handlePrev}
            className="bg-transparent hover:bg-green-500 text-green-700 hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded ml-3"
          >
            Prev
          </button>
        )}
        {startIndex + 4 < blogPostsRaw.length && (
          <button
            onClick={handleNext}
            className="bg-transparent hover:bg-green-500 text-green-700 hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded ml-3"
          >
            Next
          </button>
        )}
      </div>
    </section>
  );

  useEffect(() => {
    (async () => {
      const url = "https://dev.to/api/articles?username=mubbashir10";
      const res = await fetch(url);
      const body = await res.json();
      setBlogPostsRaw(body);
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-5">
      <div className="max-w-7xl">
        <section className="flex flex-col items-center">
          <h2 className="font-extrabold text-6xl">
            <span
              className={`text-transparent bg-clip-text ${defaultGradient}`}
            >
              Hello! I am Mubbashir,
            </span>
          </h2>
          <h2 className="font-extrabold text-3xl mt-2">
            Technical Strategist &amp; Solutions Architect
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-400 mt-5">
            With more than a decade of experience in full stack development, I
            have built solutions for Venture Beat, Deloitte and United Nations.
          </p>
          <div className="mt-5">
            <img
              className="rounded"
              src="/solutions_architect_mubbashir_mustafa.jpg"
              alt="Solutions Architect, Full Stack Developer, Remote Available, Mubbashir"
            />
          </div>
          <a
            href="mailto: mubbashir10@gmail.com"
            className={`text-white-400 text-2xl font-semibold mt-10 rounded-lg shadow p-4 max-w-2xl flex items-center ${defaultGradient} ${hoverGradient}`}
          >
            Contact me{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </section>
        <section className="flex flex-col mt-10">
          <div className="mt-5 bg-violet-800 bg-opacity-10 p-3 rounded">
            <h3 className="text-2xl flex items-center mb-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-purple-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
              End to End Development
            </h3>
            <p className="text-xl">
              I do end-to-end development. I feel comfortable building a product
              from just an idea or scaling an existing one. I have spent more
              than a decade working in various technologies to make myself
              Tech-stack agnostic. When working with me, you don&apos;t need to
              hire 3 more people to get the job done.
            </p>
          </div>
          <div className="mt-11 bg-violet-800 bg-opacity-10 p-3 rounded">
            <h3 className="text-2xl flex items-center mb-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 25 25"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-purple-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              High Performance Teams
            </h3>
            <p className="text-xl">
              I live by processes. I think your product is as strong as your
              processes are. Not only I build internal processes that will stay
              even when I have phased out but I also focus a lot on building a
              high performance dream team. I have successfully built 3 teams up
              to 10 people each. I know how difficult it is to build a team and
              trust me, I thrive when the tasks are daunting.
            </p>
          </div>
        </section>
        {blogPosts}
        <hr />
        <section className="flex justify-center mt-10">
          <a
            href="https://www.linkedin.com/in/mubbashir10/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
              color="red"
              fill="none"
              stroke="currentColor"
              className="m-1 text-blue-500 hover:text-blue-800"
            >
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/mubbashir100"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
              color="red"
              fill="none"
              stroke="currentColor"
              className="m-1 text-blue-500 hover:text-blue-800"
            >
              <path
                d="M39,4H11c-3.866,0-7,3.134-7,7v28c0,3.866,3.134,7,7,7h28c3.866,0,7-3.134,7-7V11C46,7.134,42.866,4,39,4z M29.978,37
		l-6.54-9.292L15.5,37H13l9.308-10.897L13.086,13h7.937l5.637,8.009L33.5,13H36l-8.211,9.613L37.914,37H29.978z"
              />
              <polygon points="16.914,15 31.022,35 34.086,35 19.978,15 	" />
            </svg>
          </a>
          <a
            href="https://github.com/mubbashir10"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="12 12 75 75"
              width="50px"
              height="50px"
              color="red"
              fill="none"
              stroke="currentColor"
              className="m-1 text-blue-500 hover:text-blue-800"
            >
              <path d="M 29 17 C 22.383 17 17 22.383 17 29 L 17 71 C 17 77.617 22.383 83 29 83 L 71 83 C 77.617 83 83 77.617 83 71 L 83 29 C 83 22.383 77.617 17 71 17 L 29 17 z M 29 19 L 71 19 C 76.514 19 81 23.486 81 29 L 81 71 C 81 76.514 76.514 81 71 81 L 29 81 C 23.486 81 19 76.514 19 71 L 19 29 C 19 23.486 23.486 19 29 19 z M 34.5 23 C 28.129 23 23 28.159 23 34.5 L 23 65.5 C 23 71.841 28.159 77 34.5 77 L 41.976562 77 L 58.976562 77 L 65.5 77 C 71.841 77 77 71.841 77 65.5 L 77 50.5 C 77 50.224 76.776 50 76.5 50 C 76.224 50 76 50.224 76 50.5 L 76 65.5 C 76 71.29 71.29 76 65.5 76 L 59.476562 76 L 59.476562 67.654297 C 59.476563 65.441297 58.439422 63.368 56.732422 62 L 57.425781 62 C 64.598781 62 70.433594 56.186062 70.433594 49.039062 C 70.433594 45.802062 69.233828 42.710641 67.048828 40.306641 C 67.378828 38.242641 67.384219 35.143797 66.449219 32.341797 C 66.380219 32.137797 66.189609 32 65.974609 32 C 61.923609 32 58.503172 34.689 57.076172 36 L 44.667969 36 C 41.167969 32.696 38.012563 32 35.976562 32 C 35.761563 32 35.570953 32.137797 35.501953 32.341797 C 34.733953 34.642797 34.396469 37.396609 34.605469 39.599609 C 32.006469 42.053609 30.521484 45.479016 30.521484 49.041016 C 30.521484 56.187016 36.355344 62 43.527344 62 L 44.195312 62 C 42.874313 63.032 41.928406 64.451094 41.566406 65.996094 C 39.569406 65.964094 37.279938 65.668453 36.210938 64.064453 C 33.785937 60.424453 32.562609 60.152344 30.974609 60.152344 C 30.311609 60.152344 29.812516 60.442266 29.603516 60.947266 C 29.309516 61.655266 29.652484 62.597797 30.521484 63.466797 C 31.693484 64.639797 31.694672 64.638391 32.888672 67.025391 C 33.610672 68.469391 35.679563 70.863141 41.476562 70.994141 L 41.476562 76 L 34.5 76 C 28.71 76 24 71.29 24 65.5 L 24 34.5 C 24 28.71 28.71 24 34.5 24 L 65.5 24 C 65.776 24 66 23.776 66 23.5 C 66 23.224 65.776 23 65.5 23 L 34.5 23 z M 36.337891 33.007812 C 38.205891 33.091813 40.957156 33.850344 44.035156 36.777344 L 44.126953 36.865234 C 44.219953 36.952234 44.34175 37 44.46875 37 L 57.273438 37 C 57.400437 37 57.533953 36.942469 57.626953 36.855469 C 58.818953 35.732469 61.931281 33.169812 65.613281 33.007812 C 66.412281 35.652813 66.354484 38.524906 66.021484 40.378906 C 65.993484 40.535906 66.041391 40.695547 66.150391 40.810547 C 68.266391 43.052547 69.433594 45.975062 69.433594 49.039062 C 69.433594 55.634062 64.046781 61 57.425781 61 L 54.976562 61 C 54.741562 61 54.538281 61.163578 54.488281 61.392578 C 54.437281 61.621578 54.553578 61.855125 54.767578 61.953125 C 57.019578 62.986125 58.476562 65.223297 58.476562 67.654297 L 58.476562 76 L 42.476562 76 L 42.476562 70.5 C 42.476562 70.224 42.252563 70 41.976562 70 C 37.795563 70 34.885203 68.784125 33.783203 66.578125 C 32.540203 64.093125 32.515516 64.046766 31.228516 62.759766 C 30.557516 62.087766 30.441344 61.536078 30.527344 61.330078 C 30.590344 61.175078 30.834609 61.152344 30.974609 61.152344 C 32.097609 61.152344 33.067906 61.152141 35.378906 64.619141 C 36.785906 66.728141 39.643563 67 41.976562 67 C 42.221562 67 42.42975 66.822078 42.46875 66.580078 C 42.78675 64.631078 44.209594 62.859078 46.183594 61.955078 C 46.397594 61.857078 46.515844 61.623531 46.464844 61.394531 C 46.414844 61.164531 46.211562 61 45.976562 61 L 43.529297 61 C 36.909297 61 31.521484 55.634062 31.521484 49.039062 C 31.521484 45.674062 32.958844 42.439062 35.464844 40.164062 C 35.583844 40.055063 35.645953 39.896328 35.626953 39.736328 C 35.397953 37.769328 35.675891 35.169812 36.337891 33.007812 z M 76.5 34 C 76.224 34 76 34.224 76 34.5 L 76 38 C 76 38.276 76.224 38.5 76.5 38.5 C 76.776 38.5 77 38.276 77 38 L 77 34.5 C 77 34.224 76.776 34 76.5 34 z M 76.5 41 C 76.224 41 76 41.224 76 41.5 L 76 48 C 76 48.276 76.224 48.5 76.5 48.5 C 76.776 48.5 77 48.276 77 48 L 77 41.5 C 77 41.224 76.776 41 76.5 41 z" />
            </svg>
          </a>
        </section>
      </div>
    </main>
  );
}
