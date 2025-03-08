import About from "@/components/Landing/About";
import AIAgentSupportFeature from "@/components/Landing/AIAgentSupportFeature";
import ContactUs from "@/components/Landing/ContactUs";
import CTAEmail from "@/components/Landing/CTAEmail";
import Hero from "@/components/Landing/Hero";
import Pricing from "@/components/Landing/Pricing";
import QuizGenerationFeature from "@/components/Landing/QuizGenerationFeature";
import RoadmapFeature from "@/components/Landing/RoadmapFeature";
import StatsFeature from "@/components/Landing/StatsFeature";
import EmailIntakeModal from "@/components/EmailIntakeModal";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Home({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const params = await searchParams;

  return (
    <main>
      {params?.show && <EmailIntakeModal />}
      <Hero />
      <CTAEmail />
      <QuizGenerationFeature />
      <AIAgentSupportFeature />
      <StatsFeature />
      <RoadmapFeature />
      <About />
      <Pricing />
      <ContactUs />
    </main>
  );
}
