import * as motion from "motion/react-client";

export default function RoadmapFeature() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold">Full Roadmap</h2>
          <p className="mt-4 text-base font-medium">
            We have a strategic plan for how to improve and grow Quizzzard AI,
            and we want to make sure you are involved in the process.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-10 sm:mt-16 lg:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Phase 1
            </p>

            <div className="relative mt-2">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-muted-foreground border-dashed"></div>
              </div>
              <div className="relative flex justify-start">
                <span className="pr-5 text-xl font-bold">Launching</span>
              </div>
            </div>

            <motion.div
              animate={{ translateY: 20 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileInView={{ opacity: 1 }}
              className="opacity-0 mt-2 overflow-hidden bg-primary rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Intial MVP Deployment
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Finalize Business Model Canvas
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Iterate on MVP
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Go Live with Quizzzard AI v1
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Social Launch
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Giveways & Promos
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Phase 2
            </p>
            <div className="relative mt-2">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-muted-foreground border-dashed"></div>
              </div>
              <div className="relative flex justify-start">
                <span className="pr-5 text-xl font-bold">Validation</span>
              </div>
            </div>

            <motion.div
              animate={{ translateY: 20 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileInView={{ opacity: 1 }}
              className="opacity-0 mt-2 overflow-hidden bg-primary rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      100 Students Validation
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      25 Professors Validation
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Push Validation and Feedback Nationally
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      First 100 paying users
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      First 5 Scholastic Licenses
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      First 10k followers
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Phase 3
            </p>

            <div className="relative mt-2">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-muted-foreground border-dashed"></div>
              </div>
              <div className="relative flex justify-start">
                <span className="pr-5 text-xl font-bold">Investment</span>
              </div>
            </div>

            <motion.div
              animate={{ translateY: 20 }}
              transition={{ duration: 1, delay: 0.8 }}
              whileInView={{ opacity: 1 }}
              className="opacity-0 mt-2 overflow-hidden bg-primary rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Crowd Funding: Donations
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Early Seed Funding
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Series A Funding: Market Fit
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Series B Funding: Scaling
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Series C Funding: Expanding Operations
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      TBD
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
              Phase 4
            </p>

            <div className="relative mt-2">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-muted-foreground border-dashed"></div>
              </div>
              <div className="relative flex justify-start">
                <span className="pr-5 text-xl font-bold">Growth</span>
              </div>
            </div>

            <motion.div
              animate={{ translateY: 20 }}
              transition={{ duration: 1, delay: 1.1 }}
              whileInView={{ opacity: 1 }}
              className="opacity-0 mt-2 overflow-hidden bg-primary rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Hire a core team
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Configure Infrastructure
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Establish Governance Structure
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Initiate Universtiy Precense
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Market to K-12 Schools
                    </span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-primary-foreground shrink-0"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.5" cy="11.5" r="8.75" strokeWidth="1.5" />
                    </svg>
                    <span className="ml-2 text-base font-medium text-primary-foreground">
                      Hire Executive Team
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
