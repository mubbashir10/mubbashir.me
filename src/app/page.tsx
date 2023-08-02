export default function Home() {
  const defaultGradient = `bg-gradient-to-r from-orange-500 to-violet-600`;
  const hoverGradient = `hover:from-orange-600 hover:to-violet-700`;

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
              src="/solutions_architect_mubbashir_mustafa.jpg"
              alt="Solutions Architect, Full Stack Developer, Remote Available, Mubbashir"
            />
          </div>
          <button
            className={`text-white-400 text-2xl font-semibold mt-10 rounded-lg shadow p-4 max-w-2xl flex items-center ${defaultGradient} ${hoverGradient}`}
          >
            Schedule a Call{" "}
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
          </button>
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
        <section>
          <p className="flex flex-col w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <span className="font-bold text-xl mb-1">Top Skills</span>
            <code className="font-mono font-bold">
              Full Stack Development, Solution Architecture, DevOps,
              Scalaibility, Cloud Tranformation, Artifical Intelligence
            </code>
          </p>
        </section>
      </div>
    </main>
  );
}
