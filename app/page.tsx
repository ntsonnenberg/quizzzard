import About from "@/components/About";
import AIAgentSupportFeature from "@/components/AIAgentSupportFeature";
import ContactUs from "@/components/ContactUs";
import CTAEmail from "@/components/CTAEmail";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Modal from "@/components/Modal";
import Pricing from "@/components/Pricing";
import QuizGenerationFeature from "@/components/QuizGenerationFeature";
import RoadmapFeature from "@/components/RoadmapFeature";
import StatsFeature from "@/components/StatsFeature";
import Link from "next/link";
import { X } from "lucide-react";
import { addEmail } from "@/actions/email";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: SearchParamProps) {
  const show = (await searchParams)?.show;

  const emailModal = (
    <Modal>
      <div className="text-center flex flex-col">
        <Link href="/" className="self-end">
          <X />
        </Link>
        <h3 className="text-3xl font-thin mt-4">Provide us your Email</h3>
        <form action={addEmail} className="mt-4 px-7 py-3">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email-email-form"
            placeholder="Email address"
            className="block w-full px-4 py-2 placeholder-muted-foreground rounded-md ring-1 ring-primary focus:ring-2 focus:outline-none"
            required
          />
          <button className="primary filled py-2 px-4 rounded-md mt-4 w-full">
            Try Quizzzard
          </button>
        </form>
      </div>
    </Modal>
  );

  return (
    <div>
      {show && emailModal}
      <Hero />
      <CTAEmail />
      <QuizGenerationFeature />
      <AIAgentSupportFeature />
      <StatsFeature />
      <RoadmapFeature />
      <About />
      <Pricing />
      <ContactUs />
      <Footer />
    </div>
  );
}
