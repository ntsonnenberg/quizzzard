import Image from "next/image";
import * as motion from "motion/react-client";
import Link from "next/link";
import { cookies } from "next/headers";
export default async function QuizGenerationFeature() {
  const hasAccess = (await cookies()).has("temporary_token");

  return (
    <section
      id="features"
      className="bg-[url(/low-poly-grid-haikei.svg)] py-20 mb-40 sm:py-16 lg:py-20 xl:py-24"
    >
      <div className="mt-20 text-white px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-x-20 gap-y-12">
          <div className="grid overflow-hidden bg-blue-100 lg:col-span-3 rounded-3xl place-items-end">
            <Image
              className="w-full -mb-8"
              src="/images/quiz-example.png"
              alt=""
              width={200}
              height={200}
            />
          </div>

          <div className="lg:col-span-4 xl:pr-24">
            <div className="max-w-lg lg:max-w-none">
              <motion.p
                animate={{ translateY: 20 }}
                transition={{ duration: 1, delay: 0.2 }}
                whileInView={{ opacity: 1 }}
                className="opacity-0 text-base font-semibold"
              >
                AI-Powered Quiz Generation
              </motion.p>
              <motion.h2
                animate={{ translateY: 20 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileInView={{ opacity: 1 }}
                className="opacity-0 mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:mt-8 lg:text-5xl lg:pr-8"
              >
                Personalized learning and improve retention.
              </motion.h2>
              <motion.div
                animate={{ translateY: 20 }}
                transition={{ duration: 1, delay: 0.8 }}
                whileInView={{ opacity: 1 }}
                className="opacity-0 mt-8"
              >
                <Link
                  href={hasAccess ? "/agent" : "/?show=true"}
                  title="Start using Quizzzard"
                  className="bg-primary text-primary-foreground inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all duration-200 rounded-full shadow-sm hover:shadow-lg"
                >
                  Try Quizzzard AI Now
                </Link>
              </motion.div>
            </div>

            <div className="pt-8 mt-12 border-t border-muted-foreground md:mt-16 xl:mt-24">
              <p className="font-bold text-white leading-7 xl:pr-24">
                “Quizzzard has helped me a ton with my study habits. It has
                become an integral part of my learning and test prep process.
                I&apos;ve been able to learn my course material in a
                significantly shorter time period!”
              </p>
              <p className="mt-3 text-base font-semibold">Nate Sonnenberg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
