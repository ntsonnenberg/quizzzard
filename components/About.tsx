import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

export default function About() {
  return (
    <section id="about" className="py-10 sm:py-16 lg:py-24">
      <div className="mt-20 max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
            I'm building an AI agent that can{" "}
            <span className="relative inline-block">
              <span className="absolute inline-block w-full h-2 bg-primary bottom-1.5"></span>
              <span className="relative"> help you get that 4.0</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
          <motion.div
            animate={{ translateY: 20 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileInView={{ opacity: 1 }}
            className="opacity-0"
          >
            <Image
              className="w-full mx-auto sm:max-w-xs rounded-lg"
              src="/images/profile.jpeg"
              alt="Profile"
              width={500}
              height={500}
            />
          </motion.div>

          <div>
            <h3 className="text-lg font-semibold">
              Hey! I am Nate, founder of Quizzzard AI.
            </h3>
            <p className="mt-4 text-lg">
              I'm a passionate web developer with an entrepreneurial spirit for
              building cool things! My biggest wish to leverage the latest
              technology to substantially improves peoples lives.
            </p>
            <p className="mt-4 text-lg">
              I am addicted to programming and working with people to understand
              them at a deep level. I recieved my Bachlor's and Master's from
              Brigham Young University. I started building Quizzzard AI because
              I recalled the rigors of studying for exams in college and want to
              help others in their educational journey.
            </p>

            <h3 className="mt-8 text-lg font-semibold">
              How do I do this without any investment?
            </h3>
            <p className="mt-4 text-lg">
              At this time, Quizzzard AI is fully self-funded. I'm extremely
              picky on how I spend money in my business so I am able to keep
              costs relatively low for the time being. As Quizzzard AI's
              features expand and grow in complexity, I plan to receive funding
              and start charging for the product eventually.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
