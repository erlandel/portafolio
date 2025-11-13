import AboutMeSection from "@/components/section/AboutMeSection";
import TypingEffect from "@/components/typingEffect/TypingEffect";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <div>
        <div className="inset-0 z-50 flex mt-3 justify-center px-4 text-center text-3xl font-bold text-white pointer-events-none md:text-4xl lg:text-5xl ">
          <h1 className="bg-clip-text text-transparent bg-linear-to-b from-white/80 to-white/20">
             <TypingEffect text="Keep creating, every line of code is a step towards the future!" />
          </h1>
        </div>

        <div>
          <AboutMeSection />
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
