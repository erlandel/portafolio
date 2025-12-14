"use client";

import Image from "next/image";
import { BorderMagicButton } from "../ui/border-magic-button";
import { GlowBorderButton } from "../ui/glow-border-button";
import {
  LineiconsGithub,
  MaterialIconThemeDocument,
  MdiGmail,
} from "@/icons/icons";
import { SplineScene } from "@/components/ui/splite";

const IntroSection = () => {
  return (
    <>
      <div className="relative z-50 flex flex-col lg:flex-row items-center justify-between gap-10 sm:px-8 py-12">
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <div>
                <Image
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full ring-default object-cover border-4 shrink-0"
                  src="/image/avatar/1.webp"
                  alt="Bordered avatar"
                  width={128}
                  height={128}
                />
              </div>

              <div className="sm:hidden">
                <GlowBorderButton>Disponible para trabajar</GlowBorderButton>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <div className="hidden sm:block text-start mb-5">
                <GlowBorderButton>Disponible para trabajar</GlowBorderButton>
              </div>

              <h1 className="text-3xl text-center sm:text-left text-white">
                Hola,{" "}
                <span className="bg-linear-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                  soy Erlan G.
                </span>
              </h1>
            </div>
          </div>

          <div className="text-white text-xl sm:text-2xl  backdrop-blur-sm sm:p-4 rounded-2xl mt-2">
            <p className="leading-relaxed">
              Ingeniero en Ciencias Informáticas con más de{" "}
              <span className="bg-linear-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                3 años de experiencia
              </span>{" "}
              en el desarrollo full stack de aplicaciones web con Next.js,
              Angular, NestJS y PostgreSQL.
           
            </p>

            <div className="flex  justify-center gap-10 pt-4">
              <div>
                <BorderMagicButton
                  icon={<LineiconsGithub className="w-5 h-5 sm:w-6 sm:h-6" />}
                  onClick={() => window.open("https://github.com/erlandel")}
                >
                  GitHub
                </BorderMagicButton>
              </div>

              <div>
                <BorderMagicButton
                  icon={<MaterialIconThemeDocument className="w-5 h-5 sm:w-6 sm:h-6" />}
                  borderColor="purple"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/cv/VC.docx";
                    link.download = "CV_Erlan_Delfino.docx";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Currículo
                </BorderMagicButton>
              </div>
            </div>
          </div>

        </div>
        <div className="flex-1 w-full flex justify-center items-center">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full max-w-lg h-[420px]"
          />
        </div>

      </div>
    </>
  );
};

export default IntroSection;
