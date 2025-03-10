import Image from "next/image";
import * as motion from "motion/react-client";

export default function AIAgentSupportFeature() {
  return (
    <section className="mt-10 overflow-hidden sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            How Quizzzared AI works for you
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Simply upload your notes (text, images, PDFs), and our advanced AI
            generates personalized quizzes tailored to your specific course
            content.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center max-w-lg px-10 mx-auto mt-8 space-y-8 lg:max-w-xl sm:px-0 sm:space-y-0 sm:flex-row sm:mt-16 sm:space-x-6 lg:space-x-12 sm:items-center">
          <motion.div
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            className="opacity-0 flex items-center lg:flex-1"
          >
            <svg
              className="flex-shrink-0 w-14 h-14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <p className="ml-4 text-lg font-semibold leading-snug">
              24/7 Availability, Anytime, Anywhere
            </p>
          </motion.div>

          <motion.div
            transition={{ duration: 1, delay: 1 }}
            whileInView={{ opacity: 1 }}
            className="opacity-0 flex items-center lg:flex-1"
          >
            <svg
              className="flex-shrink-0 w-14 h-14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <p className="ml-4 text-lg font-semibold leading-snug">
              Boost Your Grades Immediately
            </p>
          </motion.div>
        </div>
        <div className="my-20 sm:mt-16 flex justify-center rounded-lg lg:rounded-3xl transition-transform ease-in-out ring-1 ring-secondary-variant/50 shadow-xl hover:ring-2 hover:shadow-2xl shadow-secondary-variant bg-white hover:-translate-y-2">
          <Image
            alt="Quizzzard agent page"
            src="/images/quizzzard-agent.png"
            width={600}
            height={600}
            className="bg-cover"
          />
        </div>
      </div>
    </section>
  );
}
