import ExperienceSection from "@/components/section/ExperienceSection";
import ProjectsSection from "@/components/section/ProjectsSection";
import TypingEffect from "@/components/typingEffect/TypingEffect";
import IntroSection from "@/components/section/IntroSection";
import AboutMeSection from "@/components/section/AboutMeSection";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed px-4 md:px-16 lg:px-24 xl:px-40"
      style={{
        backgroundImage: "url('/image/1.jpg')"
      }}
    >
      <div className="">
        <div className="inset-0 z-50 flex pt-8 justify-center px-4 text-center text-3xl font-bold text-white pointer-events-none md:text-4xl lg:text-5xl ">
          <h1 className="bg-clip-text text-transparent bg-linear-to-b from-white/80 to-white/20">
            <TypingEffect text="Keep creating, every line of code is a step towards the future!" />
          </h1>
        </div>

        <section>
          <IntroSection />
        </section>

        <section className=" mt-10">
          <ExperienceSection />
        </section>

        <section className="mt-5">
          <ProjectsSection />
        </section>

        <section className="mt-5">
          <AboutMeSection />
        </section>

      </div>
    </div>
  );
}
