import { AchievementsSection } from "@/components/achievements-section";
import { CircularsSection } from "@/components/circulars-section";
import { CoursesSection } from "@/components/courses-section";
import { Hero } from "@/components/hero";
import { TestimonialSection } from "@/components/testimonial-section";


export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* Hero/Intro Section */}
      {/* <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Welcome to Vaidehi Institute</h1>
          <p className="text-lg mb-4">
            Vaidehi Institute of Nursing Sciences and Research is dedicated to providing high-quality nursing education and training.
          </p>
        </div>
      </section> */}
      <Hero />
      <CoursesSection />
      {/* Circulars Section */}
      {/* <CircularsSection /> */}

      {/* YouTube Video Section - Full Width */}
      {/* <YouTubeSection /> */}

      <AchievementsSection />
      <TestimonialSection />
    </main>
  );
}
