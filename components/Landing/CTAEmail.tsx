"use client";

import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { addEmail } from "@/actions/contact";

export default function CTAEmail() {
  const [state, action, isPending] = useActionState(addEmail, {
    success: true,
    id: "",
    messages: [],
  });
  const router = useRouter();

  useEffect(() => {
    if (state.success && state.id) {
      router.push("/agent");
    }
  }, [state, router]);

  return (
    <section className="my-20 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-left sm:text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Get full access to Quizzzard
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Upload your class notes, and Quizzzard AI generates custom quizzes
            tailored to your specific learning needs. Study smarter, retain
            more, and achieve academic success.
          </p>
        </div>

        <div className="mt-8 space-y-8 sm:space-x-12 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-y-0 md:space-x-20 lg:mt-20">
          <motion.div
            transition={{ delay: 0.5, ease: "easeIn" }}
            whileInView={{ opacity: 1 }}
            className="opacity-0 flex items-start"
          >
            <svg
              className="flex-shrink-0 text-primary w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">130+ Vectors</h3>
              <p className="mt-1.5 text-base text-muted-foreground">
                Ready to retrieve
              </p>
            </div>
          </motion.div>
          <motion.div
            transition={{ delay: 1, ease: "easeIn" }}
            whileInView={{ opacity: 1 }}
            className="opacity-0 flex items-start"
          >
            <svg
              className="flex-shrink-0 text-primary w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">10 Questions</h3>
              <p className="mt-1.5 text-base text-muted-foreground">
                Tailored Quizzes
              </p>
            </div>
          </motion.div>
          <motion.div
            transition={{ delay: 1.5, ease: "easeIn" }}
            whileInView={{ opacity: 1 }}
            className="opacity-0 flex items-start"
          >
            <svg
              className="flex-shrink-0 text-primary w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Easy Access</h3>
              <p className="mt-1.5 text-base text-muted-foreground">
                Anyone can use
              </p>
            </div>
          </motion.div>
        </div>
        <form action={action} className="max-w-xl mx-auto mt-12">
          <div className="sm:p-2 sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-primary sm:ring-1 sm:ring-primary">
            <div className="flex flex-col items-start sm:flex-row sm:justify-center">
              <div className="flex-1 w-full min-w-0">
                <div className="relative text-gray-400 focus-within:text-gray-600">
                  <label htmlFor="email" className="sr-only"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email address"
                    className="block text-foreground w-full py-4 pl-5 pr-4 placeholder-muted-foreground transition-all duration-200 border-transparent rounded-full focus:ring-1 focus:ring-primary focus:outline-none"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="primary filled inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold transition-all duration-200 border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto"
              >
                Get instant access
                {isPending ? (
                  <span className="button-loader ml-2"></span>
                ) : (
                  <svg
                    className="w-5 h-5 ml-3 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {!state.success &&
            state.messages.map((message, i) => (
              <p key={i} className="text-red-500">
                {message}
              </p>
            ))}
        </form>
        <div className="flex items-center justify-start mt-8 sm:justify-center sm:px-0">
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
          <span className="ml-2 text-sm text-gray-600">
            {" "}
            Your data is complely secured with us. We don’t share with anyone.{" "}
          </span>
        </div>
      </div>
    </section>
  );
}
