import * as motion from "motion/react-client";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[url(/blurry-gradient-haikei.svg)] bg-cover my-10 sm:py-16 lg:py-20 xl:py-24"
    >
      <div className="h-screen flex flex-col justify-center px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Simple, easy pricing
          </h2>
          <p className="mt-6 text-lg text-muted">
            We wish to deliver a working prototype to validate and improve
            Quizzzard AI. For this reason our current AI services during the
            prototyping phase is...
          </p>
        </div>
        <motion.h3
          animate={{ translateY: -20 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileInView={{ opacity: 1 }}
          className="opacity-0 flex text-white justify-center items-baseline text-6xl mt-20"
        >
          Free <span className="text-2xl">/month</span>
        </motion.h3>
        {/* <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-12 lg:grid-cols-3 xl:gap-8 sm:mt-16 lg:max-w-6xl">
          <div className="flex flex-col p-8 transition-all duration-200 transform bg-primary rounded-md hover:-translate-y-2">
            <div className="flex-1">
              <h3 className="text-lg font-normal text-white">Personal</h3>
              <div className="flex items-end mt-3">
                <p className="text-6xl font-normal text-white">$19</p>
                <p className="ml-1 text-base font-normal text-white">/ month</p>
              </div>
              <p className="mt-4 text-base font-normal text-white">
                All the basic features to boost your freelance career
              </p>
              <hr className="mt-8 border-muted-foreground" />
              <ul className="mt-8 space-y-5">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    Full Access to Landingfolio
                  </span>
                  <button className="flex items-center ml-2 text-muted-foreground transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    100 GB Free Storage
                  </span>
                  <button className="flex items-center ml-2 text-muted-foreground transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    Unlimited Visitors
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    10 Agents
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    Live Chat Support
                  </span>
                  <button className="flex items-center ml-2 text-muted-foreground transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative flex items-center justify-center mt-8 group">
              <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-secondary-variant to-primary-variant group-hover:shadow-lg group-hover:shadow-secondary-variant/50"></div>
              <button
                className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-md"
                role="button"
              >
                Get 14 Days Free Trial
              </button>
            </div>
          </div>
          <div className="relative flex flex-col p-8 transition-all duration-200 transform bg-primary rounded-md hover:-translate-y-2">
            <div className="absolute rounded-md -inset-px bg-gradient-to-r from-secondary-variant to-primary-variant"></div>
            <div className="absolute inset-0 bg-primary rounded-md"></div>
            <div className="relative flex-1">
              <h3 className="text-lg font-normal text-white">Professional</h3>
              <div className="flex items-end mt-3">
                <p className="text-6xl font-normal text-white">Free</p>
                <p className="ml-1 text-base font-normal text-white">/ month</p>
              </div>
              <p className="mt-4 text-base font-normal text-white">
                All the basic features to boost your freelance career
              </p>
              <hr className="mt-8 border-muted-foreground" />
              <ul className="mt-8 space-y-5">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    Full Access to Landingfolio
                  </span>
                  <button className="flex items-center ml-2 text-muted-foreground transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    100 GB Free Storage
                  </span>
                  <button className="flex items-center ml-2 text-muted-foreground transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    Unlimited Visitors
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    10 Agents
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    Live Chat Support
                  </span>
                  <button className="flex items-center ml-2 text-muted-foreground transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative mt-8">
              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-md bg-gradient-to-r from-secondary-variant to-primary-variant hover:contrast-150"
              >
                Get 14 Days Free Trial
              </button>
            </div>
          </div>
          <div className="flex flex-col p-8 transition-all duration-200 transform bg-primary rounded-md hover:-translate-y-2">
            <div className="flex-1">
              <h3 className="text-lg font-normal text-white">Business</h3>
              <div className="flex items-end mt-3">
                <p className="text-6xl font-normal text-white">$99</p>
                <p className="ml-1 text-base font-normal text-white">/ month</p>
              </div>
              <p className="mt-4 text-base font-normal text-white">
                All the basic features to boost your freelance career
              </p>
              <hr className="mt-8 border-muted-foreground" />
              <ul className="mt-8 space-y-5">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    Full Access to Landingfolio
                  </span>
                  <button className="flex items-center ml-2 text-muted-foregroundtransition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5 text-muted-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    100 GB Free Storage
                  </span>
                  <button className="flex items-center ml-2 text-muted-foreground transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    Unlimited Visitors
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    10 Agents
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-muted-foreground"
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
                  <span className="ml-2 text-base font-normal text-white">
                    Live Chat Support
                  </span>
                  <button className="flex items-center ml-2 text-muted-foreground transition-all duration-200 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative flex items-center justify-center mt-8 group">
              <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-secondary-variant to-primary-variant group-hover:shadow-lg group-hover:shadow-secondary-variant/50"></div>
              <button
                className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-gray-900 border border-transparent rounded-md"
                role="button"
              >
                Get 14 Days Free Trial
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
