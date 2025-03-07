import ContactUsForm from "../ContactUsForm";

export default function ContactUs() {
  return (
    <section className="py-12 mb-40 overflow-hidden sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-6xl grid-cols-1 mx-auto gap-y-12 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          <div className="relative flex flex-col justify-between max-w-lg lg:py-12 lg:max-w-none">
            <div className="flex-1">
              <p className="text-sm font-normal tracking-widest uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Like to get in touch?
                </span>
              </p>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-normal sm:text-4xl lg:text-5xl xl:text-6xl">
                Help us make Quizzzard AI better with your feedback
              </h2>
              <p className="mt-4 text-base font-normal lg:max-w-xs sm:text-lg sm:mt-6">
                Please reach out to us directly to discuss Quizzzard AI and how
                we can improve!
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute right-0 transform translate-x-4 -translate-y-1/2 top-1/2">
              <svg
                className="filter blur-3xl"
                style={{ filter: "blur(64px)" }}
                width="619"
                height="371"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M355.661 40.206C507.908 40.206 619-61.411 619 58.454 619 178.319 219.912 371 67.665 371s0-192.681 0-312.546c0-119.865 135.749-18.248 287.996-18.248Z"
                  fill="url(#e)"
                />
                <defs>
                  <linearGradient
                    id="e"
                    x1="0"
                    y1="371"
                    x2="36.57"
                    y2="-50.529"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "var(--color-primary-variant" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "var(--color-secondary-variant)" }}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative bg-muted overflow-hidden rounded-xl">
              <div className="p-6 sm:py-8 sm:px-9">
                <p className="text-xl font-normal text-muted-foreground">
                  Reach out to us and give us feedback on how we can improve
                  Quizzzard.
                </p>
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
