"use client";

import Image from "next/image";
import { BorderMagicButton } from "../ui/border-magic-button";
import { GlowBorderButton } from "../ui/glow-border-button";
import {
  LineiconsGithub,
  MaterialIconThemeDocument,
  MdiGmail,
} from "@/icons/icons";

const AboutMeSection = () => {
  return (
    <>
      <div className="relative z-50 flex items-center justify-around  gap-8 px-8 py-12 md:px-16 lg:px-24">
        <div>
          <div className="flex items-center  gap-4">
            <div>
              <Image
                className="w-32 h-32 rounded-full ring-default object-cover border-4"
                src="/image/avatar/1.webp"
                alt="Bordered avatar"
                width={120}
                height={120}
              />
            </div>

            <div>
              <div className="text-start mb-5">
                <GlowBorderButton>Disponible para trabajar</GlowBorderButton>
              </div>

              <h1 className="text-3xl text-center">
                Hola,{" "}
                <span className="bg-linear-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                  soy Erlan G.
                </span>
              </h1>
            </div>
          </div>

          <div className="w-2/4 text-white text-xl text-justify bg-black/30 backdrop-blur-sm p-4 rounded-2xl mt-2">
            <p className="leading-relaxed">
              Soy ingeniero de software con más de{" "}
              <span className="bg-linear-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                3 años de experiencia
              </span>{" "}
              en el desarrollo full stack de aplicaciones web con Next.js,
              Angular, NestJS y PostgreSQL. Combino interfaces atractivas con
              arquitecturas{" "}
              <span className="font-semibold">
                backend sólidas y escalables
              </span>
              .
              <span className="bg-linear-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                He liderado proyectos con mejoras de rendimiento (+25%) y
                entrega (+40%)
              </span>
              , además de integrar sistemas complejos y automatizar procesos
              mediante bots. Apasionado por crear experiencias fluidas e innovar
              en cada línea de código.
            </p>

            <div className="flex gap-4 justify-around pt-4">
              <div>
                <BorderMagicButton
                  icon={<LineiconsGithub className="w-6 h-6" />}
                  onClick={() => window.open("https://github.com/erlandel")}
                >
                  GitHub
                </BorderMagicButton>
              </div>

              <div>
                <BorderMagicButton
                  icon={<MaterialIconThemeDocument className="w-6 h-6" />}
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
        <div>
          {/* <Image
            className="w-full h-full "
            src="/image/2.gif"
            alt="Bordered avatar"
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
