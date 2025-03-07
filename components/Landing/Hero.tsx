// import Image from "next/image";
import React from "react";
import Link from "next/link";
import * as motion from "motion/react-client";
import { hasAccess } from "@/lib/cookies";

export default async function Hero() {
  return (
    <div>
      <section className="pb-40 sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <motion.h1
                animate={{ translateY: 20 }}
                transition={{ duration: 1, delay: 0.2 }}
                whileInView={{ opacity: 1 }}
                className="opacity-0 mt-6 text-4xl text-primary font-normal sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-variant to-secondary-variant">
                  Conquer Your
                </span>{" "}
                Coursework
              </motion.h1>
              <motion.p
                animate={{ translateY: 20 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileInView={{ opacity: 1 }}
                className="opacity-0 max-w-lg mt-4 text-xl font-normal text-muted-foreground sm:mt-8"
              >
                Personalized AI quizzes based from notes. From notes to
                A&apos;s, let Quizzzard AI transform your study sessions.
              </motion.p>
              <motion.div
                animate={{ translateY: 20 }}
                transition={{ duration: 1, delay: 0.8 }}
                whileInView={{ opacity: 1 }}
                className="opacity-0 relative inline-flex items-center justify-center mt-8 sm:mt-12 group"
              >
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-secondary-variant to-primary-variant group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <Link
                  href={(await hasAccess()) ? "/agent" : "/?show=true"}
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-muted border border-transparent rounded-full"
                  role="button"
                >
                  Try for Free
                </Link>
              </motion.div>

              <div>
                <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17"
                      stroke="url(#a)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="3"
                        y1="7.00003"
                        x2="22.2956"
                        y2="12.0274"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "var(--color-primary-variant)" }}
                        />
                        <stop
                          offset="100%"
                          style={{
                            stopColor: "var(--color-secondary-variant)",
                          }}
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="ml-2 text-base font-normal">
                    Unlock your academic potential. Quizzzard AI makes studying
                    smarter, not harder!
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:-top-24 md:right-20">
              {/* <Image
                src="/images/liquid-blob-square.gif"
                alt="AI Blob"
                width={300}
                height={300}
              /> */}
              <video width="250" height="250" loop autoPlay muted>
                <source
                  src="https://4iled4maq7lo2rwu.public.blob.vercel-storage.com/blue-liquid-blob-cDwyEXQeDA06fNGfGtdufHIlm1C3iD.webm"
                  type="video/webm"
                />
                your browser doesnt support video tag
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
