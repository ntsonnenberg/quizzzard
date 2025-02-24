import * as motion from "motion/react-client";

export default function StatsFeature() {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Numbers tell our story
          </h2>
          <p className="mt-3 text-xl leading-relaxed md:mt-8">
            We believe studying should be effective and efficient. Quizzzard AI
            empowers you to take control of your learning and achieve your
            academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <motion.div
            animate={{ translateY: -20 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileInView={{ opacity: 1 }}
            className="opacity-0"
          >
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-variant to-primary-variant">
                5
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium">Models Trained</p>
            <p className="text-base mt-0.5">Tuning accurate decision making</p>
          </motion.div>

          <motion.div
            animate={{ translateY: -20 }}
            transition={{ duration: 1, delay: 1 }}
            whileInView={{ opacity: 1 }}
            className="opacity-0"
          >
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-variant to-primary-variant">
                500+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium">Quizzes Generated</p>
            <p className="text-base mt-0.5">In last year</p>
          </motion.div>

          <motion.div
            animate={{ translateY: -20 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileInView={{ opacity: 1 }}
            className="opacity-0"
          >
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-variant to-primary-variant">
                40+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium">Courses Analyzed</p>
            <p className="text-base mt-0.5">Working for your success</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
